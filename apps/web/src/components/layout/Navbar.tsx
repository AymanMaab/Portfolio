import { Moon, Sun } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import { NAV_LINKS } from '../../constants/navlinks'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollTo } from '../../hooks/useScrollTo'
import { useTheme } from '../../hooks/useTheme'
import { MobileNav } from '../shared/MobileNav'

const GITHUB_URL = 'https://github.com/AymanMaab'

export function Navbar() {
  const active = useActiveSection()
  const scrollTo = useScrollTo()
  const { mode, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollTo(NAV_LINKS[0].id)}
            className="flex items-center gap-3"
            aria-label="Go to top"
          >
            <div className="h-9 w-9 rounded-xl grid place-items-center text-sm font-semibold bg-primary/15 border border-primary/20">
              AM
            </div>
            <div className="leading-tight text-left">
              <div className="font-semibold tracking-tight">Ayman Maab</div>
              <div className="text-xs text-muted-foreground">Software Engineer</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                className={[
                  'transition-colors',
                  active === link.id ? 'text-foreground' : 'hover:text-foreground',
                ].join(' ')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-transparent transition-colors hover:bg-accent"
            >
              {mode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-border bg-transparent transition-colors hover:bg-accent md:inline-flex"
            >
              <LuGithub className="h-4 w-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
            >
              Resume
            </a>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
