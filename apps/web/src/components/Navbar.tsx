import { useState, useEffect } from 'react'
import { useTheme } from '../lib/theme'
import { Button, buttonVariants } from './ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip'
import { cn } from '../lib/utils'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(`#${e.target.id}`)),
      { rootMargin: '-40% 0px -55%' }
    )
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  function scrollTo(href: string) {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <TooltipProvider>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border border-border transition-all duration-300',
          scrolled && 'bg-background/70 backdrop-blur-md',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
              AM
            </span>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-semibold leading-none text-foreground">Ayman Maab</span>
              <span className="mt-0.5 text-xs text-muted-foreground">Software Engineer</span>
            </div>
          </div>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => scrollTo(href)}
                  className={cn(
                    'cursor-pointer text-muted-foreground hover:text-foreground hover:no-underline',
                    activeSection === href && 'bg-secondary font-medium text-foreground'
                  )}
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle theme">
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</TooltipContent>
            </Tooltip>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'default', size: 'sm' })}
            >
              Resume
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>

        {open && (
          <div className="border-b border-border bg-background/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => scrollTo(href)}
                    className={cn(
                      'w-full cursor-pointer justify-start text-muted-foreground hover:text-foreground hover:no-underline',
                      activeSection === href && 'bg-secondary font-medium text-foreground'
                    )}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <Button variant="ghost" size="sm" onClick={toggle}>
                {theme === 'dark'
                  ? <><Sun size={14} className="mr-2" />Light mode</>
                  : <><Moon size={14} className="mr-2" />Dark mode</>}
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'default', size: 'sm' })}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </TooltipProvider>
  )
}
