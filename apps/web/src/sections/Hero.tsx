import { motion } from 'framer-motion'
import { MailIcon, LinkedinIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

const TECH = ['ReactJS', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'FastApi'] as const

type Social = {
  label: string
  icon: React.ElementType
  href: string
  tooltip: string
  ariaLabel: string
}

const SOCIALS: Social[] = [
  {
    label: 'Email',
    icon: MailIcon,
    href: 'mailto:aymanmaab07@gmail.com',
    tooltip: 'aymanmaab07@gmail.com',
    ariaLabel: 'Send me an email',
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/ayman-maab-0864b4255/',
    tooltip: 'ayman-maab',
    ariaLabel: 'View LinkedIn profile',
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/AymanMaab',
    tooltip: 'AymanMaab',
    ariaLabel: 'View GitHub profile',
  },
]

function SocialLink({ label, icon: Icon, href, tooltip, ariaLabel }: Social) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.15, ease: 'easeOut' }}>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-transparent hover:bg-foreground/5"
          >
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={ariaLabel}
            >
              <Icon size={14} strokeWidth={1.2} />
              {label}
            </a>
          </Button>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-24 pb-16 sm:px-8 flex items-center justify-center min-h-screen"
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
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 0%, var(--color-background) 100%)',
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-[1200px] scale-90 min-h-[735px] overflow-hidden rounded-3xl border border-border bg-background/60 backdrop-blur-sm p-6 md:p-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl bg-primary/20" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl bg-primary/15" />

        <div className="relative grid gap-10 md:grid-cols-[1fr_280px] md:items-center">

          {/* Left: content */}
          <div className="space-y-6">
            <motion.div variants={item}>
              <Badge variant="outline" className="h-auto gap-1.5 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
                Computer Systems Engineer · 2021-2025
                <ExternalLinkIcon size={11} strokeWidth={1.8} />
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
            >
              I build <span className="text-primary">multi-tenant SaaS</span>, and high-performance web platforms.
            </motion.h1>

            <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted-foreground">
              1+ year shipping real products end-to-end with React, NestJS, and TypeScript. Strong on clean APIs, composable UIs, and systems that hold under load.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button variant="outline" size="sm" asChild className="rounded-xl bg-transparent hover:bg-foreground/5">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="secondary" size="sm" asChild className="rounded-xl bg-transparent hover:bg-foreground/5 border border-border">
                <a href="#projects">View my work</a>
              </Button>
              <Badge variant="outline" className="hidden h-auto py-1 rounded-full sm:inline-flex">
                Available for full-time &amp; freelance
              </Badge>
            </motion.div>

            <motion.div variants={item} className="flex gap-3">
              <TooltipProvider delayDuration={0}>
                {SOCIALS.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </TooltipProvider>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
