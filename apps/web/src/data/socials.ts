import type { ComponentType } from 'react'
import { LuMail, LuLinkedin, LuGithub, LuMessageCircle } from 'react-icons/lu'

export type SocialLink = {
  id: number
  title: string
  value: string
  href: string
  icon: ComponentType<{ className?: string }>
}

export const primarySocials: SocialLink[] = [
  {
    id: 1,
    title: 'Email',
    value: 'aymanmaab07@gmail.com',
    href: 'mailto:aymanmaab07@gmail.com',
    icon: LuMail,
  },
  {
    id: 2,
    title: 'LinkedIn',
    value: 'ayman-maab',
    href: 'https://www.linkedin.com/in/ayman-maab-0864b4255',
    icon: LuLinkedin,
  },
  {
    id: 3,
    title: 'GitHub',
    value: 'AymanMaab',
    href: 'https://github.com/AymanMaab',
    icon: LuGithub,
  },
  {
    id: 4,
    title: 'WhatsApp',
    value: '+92 315 9817025',
    href: 'https://wa.me/923159817025',
    icon: LuMessageCircle,
  }
]

export const allSocials: SocialLink[] = [...primarySocials]
