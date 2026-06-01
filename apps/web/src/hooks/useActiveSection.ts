import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../constants/navlinks'

export function useActiveSection() {
  const [active, setActive] = useState<string>(NAV_LINKS[0].id)

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
