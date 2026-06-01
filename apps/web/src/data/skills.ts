import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Server,
  Database,
  Network,
  GitBranch,
  Sparkles,
  Braces,
  Smartphone,
  ShieldCheck,
} from 'lucide-react'

export interface SkillCategory {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Tamagui', 'Vite'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['React Native (Android & iOS)'],
  },
  {
    title: 'APIs & Architecture',
    icon: Network,
    items: ['REST APIs', 'GraphQL', 'Monorepos', 'Microservices'],
  },
  {
    title: 'Testing',
    icon: ShieldCheck,
    items: ['Vitest', 'Jest', 'React Testing Library', 'Cypress'],
  },
  {
    title: 'AI / Integrations',
    icon: Sparkles,
    items: ['OpenAI API', 'Claude API', 'LangChain', 'Webhooks'],
  },
  {
    title: 'Dev & Tooling',
    icon: GitBranch,
    items: ['Git', 'Docker', 'CI/CD', 'Turborepo', 'pnpm'],
  },
  {
    title: 'Languages',
    icon: Braces,
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
]
