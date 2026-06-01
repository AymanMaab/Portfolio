import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

function getPreferred(): Mode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [mode, setMode] = useState<Mode>(() => {
    const stored = localStorage.getItem('theme') as Mode | null
    return stored ?? getPreferred()
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('theme', mode)
  }, [mode])

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'))

  return { mode, toggle }
}
