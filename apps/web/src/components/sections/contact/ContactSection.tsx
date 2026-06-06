import { SectionHeader } from '../../shared/SectionHeader'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'
import { LuMail, LuMapPin } from 'react-icons/lu'

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
        <div className="glass rounded-3xl p-6 md:p-7">
          <form className="space-y-3" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="45947674-9420-4481-9c86-e4aebe5baa36" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" required className={inputClass} />
              <input name="email" type="email" placeholder="Email" required className={inputClass} />
            </div>
            <input
              name="subject"
              placeholder="Subject (e.g. freelance project, collaboration…)"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
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

        <div className="glass rounded-3xl p-6 md:p-7 space-y-4">
          <div className="text-lg font-semibold tracking-tight">Quick response, clear next steps</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I can help with full-stack web &amp; mobile apps, AI integrations, system design, and
            shipping production-ready features. I typically reply within 24 hours.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <LuMail className="h-4 w-4 text-muted-foreground shrink-0" />
              <a
                href="mailto:aymanmaab07@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                aymanmaab07@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">Pakistan (Remote)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
