import { SectionHeader } from '../../shared/SectionHeader'
import { Button } from '../../ui/button'
import { primarySocials } from '../../../data/socials'
import { cn } from '../../../lib/utils'

const inputClass = cn(
  'w-full rounded-xl border border-border/50 bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground',
  'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors'
)

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 space-y-8">
      <SectionHeader
        eyebrow="Let's connect"
        title="Contact"
        subtitle="Have a project in mind or just want to say hi? Send me a message and I'll get back to you promptly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-4 items-start">
        {/* Contact form — mailto, no backend required */}
        <div className="glass rounded-3xl p-6 md:p-7">
          <form
            className="space-y-3"
            action="mailto:aymanmaab07@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" className={inputClass} />
              <input name="email" type="email" placeholder="Email" className={inputClass} />
            </div>
            <input
              name="subject"
              placeholder="Subject (e.g. freelance project, collaboration…)"
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className={cn(inputClass, 'resize-none')}
            />

            <div className="flex flex-wrap gap-2 pt-2">
              <Button type="submit">Send message</Button>
              <Button asChild variant="outline">
                <a href="mailto:aymanmaab07@gmail.com">Email directly</a>
              </Button>
            </div>
          </form>
        </div>

        {/* Info card */}
        <div className="glass rounded-3xl p-6 md:p-7 space-y-4">
          <div className="text-lg font-semibold tracking-tight">Quick response, clear next steps</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I can help with full-stack web &amp; mobile apps, AI integrations, system design, and shipping
            production-ready features.
          </p>

          <div className="space-y-2 text-sm">
            {primarySocials.map((social) => (
              <div key={social.id} className="flex items-center gap-2">
                <social.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">{social.title}:</span>
                <a
                  href={social.href}
                  target={social.title === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors truncate"
                >
                  {social.value}
                </a>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 shrink-0" />
              <span className="text-muted-foreground">Location:</span>
              <span>Pakistan (Remote)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
