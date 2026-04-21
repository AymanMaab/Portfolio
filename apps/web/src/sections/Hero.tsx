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
    tooltip: 'linkedin.com/in/ayman-maab',
    ariaLabel: 'View LinkedIn profile',
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/AymanMaab',
    tooltip: 'github.com/AymanMaab',
    ariaLabel: 'View GitHub profile',
  },
]

function SocialLink({ label, icon: Icon, href, tooltip, ariaLabel }: Social) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          variant="outline"
          size="sm"
          render={
            <motion.a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={ariaLabel}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            />
          }
        >
          <Icon size={14} strokeWidth={1.8} />
          {label}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-24 pb-12 sm:px-8 flex items-center justify-center min-h-screen"
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
        className="relative mx-auto w-full max-w-[1200px] scale-90 min-h-[735px] overflow-hidden rounded-2xl border border-border bg-background p-6 md:p-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at top right, var(--glow) 0%, transparent 75%)',
            filter: 'blur(16px)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at bottom left, var(--glow) 0%, transparent 75%)',
            filter: 'blur(16px)',
          }}
        />

        <motion.div variants={item} className="mb-6">
          <Badge variant="outline" className="h-auto gap-1.5 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            Computer Systems Engineer · 2021-2025
            <ExternalLinkIcon size={11} strokeWidth={1.8} />
          </Badge>
        </motion.div>

        <motion.h2
          variants={item}
          className="mb-8 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
        >
          I build multi-tenant SaaS, and high-perfomance web platforms.
        </motion.h2>

        <motion.p variants={item} className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Shipping end-to-end with React, NestJS, and TypeScript. Strong on clean
          APIs, composable UIs, and systems that hold under load.
        </motion.p>

        <motion.div variants={item} className="mb-8 flex flex-wrap gap-2">
          {TECH.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="sm" render={<a href="#projects" />}>
            View my work
          </Button>
          <Button variant="outline" size="sm" render={<a href="#contact" />}>
            Get in touch
          </Button>
          <Badge variant="outline" className="hidden h-auto py-1 sm:inline-flex">
            Available for full-time &amp; contract work
          </Badge>
        </motion.div>

        <motion.div variants={item} className="flex gap-3">
          <TooltipProvider delay={0}>
            {SOCIALS.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </TooltipProvider>
        </motion.div>
      </motion.div>
    </section>
  )
}
