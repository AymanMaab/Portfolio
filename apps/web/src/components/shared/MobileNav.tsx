import { useState } from 'react'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navlinks'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  function handleNavClick(id: string) {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-transparent transition-colors hover:bg-accent md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent>
        <div className="mb-6">
          <div className="font-semibold tracking-tight">Ayman Maab</div>
          <div className="mt-1 text-xs text-muted-foreground">Software Engineer</div>
        </div>

        <nav className="space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 space-y-2 border-t border-border pt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
