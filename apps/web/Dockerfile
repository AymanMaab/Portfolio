# syntax=docker/dockerfile:1

# ── Stage 1: install deps ────────────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /repo

# Copy only manifests first — this layer is cached unless deps change
COPY package.json package-lock.json ./
COPY apps/web/package.json                 ./apps/web/package.json
COPY packages/tsconfig/package.json        ./packages/tsconfig/package.json
COPY packages/types/package.json           ./packages/types/package.json
COPY packages/eslint-config/package.json   ./packages/eslint-config/package.json

RUN npm ci --prefer-offline

# ── Stage 2: build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /repo

COPY --from=deps /repo/node_modules ./node_modules
COPY . .

RUN npm --workspace @my-portfolio/web run build

# ── Stage 3: serve ───────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS serve

# Drop root — run nginx as unprivileged user
RUN chown -R nginx:nginx /usr/share/nginx/html \
 && chown -R nginx:nginx /var/cache/nginx \
 && chown -R nginx:nginx /var/log/nginx \
 && touch /var/run/nginx.pid \
 && chown nginx:nginx /var/run/nginx.pid

COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build --chown=nginx:nginx \
     /repo/apps/web/dist /usr/share/nginx/html

USER nginx
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
