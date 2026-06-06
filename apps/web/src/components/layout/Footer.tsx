import { SocialChips } from '../shared/SocialChips'
import { NAV_LINKS } from '../../constants/navlinks'

export function Footer() {
  return (
    <footer className="mt-16 pb-10">
      <hr className="border-border/60" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 pt-8 space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayman Maab — Built with React + Tailwind + shadcn/ui
          </p>

          <nav className="flex items-center gap-4 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>

        <div className="flex md:justify-end">
          <SocialChips className="opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </footer>
  )
}
