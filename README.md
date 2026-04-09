# Portfolio Monorepo

This repo is an npm workspaces + Turbo monorepo.

## Apps
- `apps/web`: React + Vite frontend
- `apps/api`: NestJS backend

## Packages
- `packages/types`: shared TypeScript types
- `packages/tsconfig`: shared TS configs
- `packages/eslint-config`: shared ESLint flat config (used by `apps/web`)

## Commands
- `npm run dev` (all)
- `npm run dev:web`
- `npm run dev:api`
- `npm run build`

## Docker
- `docker compose up --build`
