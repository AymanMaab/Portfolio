import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

const TECH = ['ReactJS', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'FastApi'] as const

const SOCIALS = [
  { label: 'Email', icon: Mail, href: 'mailto:aymanmaab07@gmail.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ayman-maab-0864b4255/' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/AymanMaab' },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-24 pb-12 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 0%, var(--color-background) 100%)',
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-background p-6 md:p-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 80%)',
            filter: 'blur(24px)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(255,255,255,0.07) 0%, transparent 80%)',
            filter: 'blur(24px)',
          }}
        />

        <motion.div variants={item} className="mb-6 flex items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
            <span className="text-xs text-muted">Computer Systems Engineer · NUST · 2025</span>
            <ExternalLink size={11} className="text-muted" strokeWidth={1.8} />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
        >
          I build full-stack web products, from UI to infrastructure.
        </motion.h1>

        <motion.p variants={item} className="mb-6 max-w-xl text-base leading-relaxed text-muted">
          Shipping end-to-end with React, NestJS, and TypeScript. Strong on clean
          APIs, composable UIs, and systems that hold under load.
        </motion.p>

        <motion.div variants={item} className="mb-6 flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-2xl border border-border px-3 py-1 text-xs text-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-2xl bg-surface px-4 py-1.5 text-sm font-medium text-foreground border border-border transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            Get in touch
          </a>
          <span className="hidden rounded-2xl border border-border px-2 py-1 text-xs text-foreground sm:inline">
            Available for full-time &amp; contract work
          </span>
        </motion.div>

        <motion.div variants={item} className="flex gap-3">
          {SOCIALS.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-2xl border border-border px-3 py-0.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Icon size={14} strokeWidth={1.8} />
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
