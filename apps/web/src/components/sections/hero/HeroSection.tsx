import { ExternalLink } from 'lucide-react'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { SocialChips } from '../../shared/SocialChips'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ayman-maab-0864b4255'
const GITHUB_URL = 'https://github.com/AymanMaab'

export function HeroSection() {
  return (
    <section className="pt-16 pb-10 md:pt-20 md:pb-6">
      <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-primary/20" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl bg-primary/15" />

        <div className="relative grid gap-6 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_280px] md:items-stretch">
          {/* top badge row — spans both columns */}
          <div className="flex items-center justify-between md:col-span-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-sm text-muted-foreground transition-all hover:bg-muted/60 hover:text-foreground hover:-translate-y-[1px] w-fit"
            >
              <span>Open to work • Full-time & freelance</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </div>

          {/* left column — main content */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
              I build <span className="text-primary">full-stack products</span>,
              scalable APIs, and clean user interfaces.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Software engineer with a focus on React, Node.js, and TypeScript.
              Strong on architecture, clean UX, and shipping things that actually work end-to-end.
            </p>

            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'].map((t) => (
                <Badge key={t} variant="outline" className="rounded-full border-border/60 bg-black/10">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild variant="outline" className="rounded-xl">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="secondary" className="rounded-xl">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>

              <Button asChild className="rounded-xl">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            </div>

            <SocialChips className="pt-2" />
          </div>

          {/* right column — TODO: build this panel */}
          <div className="hidden md:block md:justify-self-end w-full max-w-[260px] lg:max-w-[280px] md:min-h-[562px]" />
        </div>
      </div>
    </section>
  )
}
