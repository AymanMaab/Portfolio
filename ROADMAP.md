# Portfolio Roadmap

## Stack

| Layer | Choice |
|---|---|
| Frontend | React 19 + Vite + Tailwind v4 + shadcn/ui + Framer Motion |
| Backend | NestJS (contact form only) |
| Email | Resend |
| State | React context (theme only) — no Redux needed for the shell |
| Deploy | Vercel (web) + Railway (api) |

---

## Skills (Portfolio Content)

**Frontend**
React 19, TypeScript, Redux Toolkit, Tailwind CSS, Vite, HTML/CSS

**Backend**
NestJS, Node.js, REST APIs, WebSockets, JWT / Auth guards, Pipes & Interceptors

**Database & Cache**
PostgreSQL, TypeORM, Redis

**Architecture & Tooling**
Monorepo (Turborepo), Docker, Nginx, Git, CI/CD

**Testing**
Jest, Supertest

---

## Phases

### Phase 1 — Design System & Shell
- [ ] Install Tailwind v4 + shadcn/ui + Framer Motion in `apps/web`
- [ ] Define CSS tokens: dark background, accent color, font (Geist or Inter)
- [ ] Build `Navbar` — sticky, blur backdrop, smooth anchor links
- [ ] Build `Layout` wrapper + scroll-based section reveal utility
- [ ] Gut the Vite boilerplate

**Deliverable:** Blank dark page, nav works, animation primitives in place

---

### Phase 2 — Hero
- [ ] Name, role title, one-liner tagline
- [ ] Two CTAs: Download CV + Contact me
- [ ] Subtle animated background (gradient blob or dot grid)

**Deliverable:** Strong first impression, above the fold

---

### Phase 3 — About
- [ ] 3–4 sentence bio: who you are, what you build, what you care about
- [ ] Stat row (years exp, projects shipped, etc.)

**Deliverable:** Reader knows who they're dealing with in 10 seconds

---

### Phase 4 — Skills
- [ ] Grouped by category (Frontend / Backend / DB & Cache / Tooling)
- [ ] Icon grid per category using devicons SVGs
- [ ] No progress bars

**Deliverable:** Clean, scannable skills section

---

### Phase 5 — Experience
- [ ] Vertical timeline, content on the right
- [ ] Each entry: company, role, period, 2–3 impact bullets (metrics where possible)

**Deliverable:** Career story told visually

---

### Phase 6 — Projects
- [ ] 2–3 featured projects in card layout
- [ ] Each card: name, description, tech stack badges, GitHub + live demo links
- [ ] Emphasize business impact, not just tech used

**Deliverable:** Proof of work

---

### Phase 7 — Contact + NestJS API
- [ ] Scaffold `apps/api` (NestJS)
- [ ] Contact form: name, email, message
- [ ] API endpoint sends email via Resend
- [ ] Rate limiting on the endpoint
- [ ] Social links: GitHub, LinkedIn

**Deliverable:** People can actually reach you

---

### Phase 8 — Polish & SEO
- [ ] Framer Motion scroll-triggered entrance animations (staggered)
- [ ] `react-helmet-async` for meta tags (OG image, title, description)
- [ ] Lighthouse audit — target 95+ performance
- [ ] Responsive QA: mobile, tablet, desktop

**Deliverable:** Production-ready

---

### Phase 9 — Deploy
- [ ] `apps/web` → Vercel or Cloudflare Pages
- [ ] `apps/api` → Railway or Render
- [ ] Environment variables, CORS config
- [ ] Custom domain (optional)

**Deliverable:** Live URL for the CV

---

## Progress

| Phase | Status |
|---|---|
| 1 — Design System & Shell | Not started |
| 2 — Hero | Not started |
| 3 — About | Not started |
| 4 — Skills | Not started |
| 5 — Experience | Not started |
| 6 — Projects | Not started |
| 7 — Contact + API | Not started |
| 8 — Polish & SEO | Not started |
| 9 — Deploy | Not started |
