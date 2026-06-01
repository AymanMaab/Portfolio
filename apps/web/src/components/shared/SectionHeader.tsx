import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  right?: ReactNode
}

export function SectionHeader({ eyebrow, title, subtitle, right }: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        {eyebrow && (
          <div className="text-xs font-medium text-muted">{eyebrow}</div>
        )}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-muted max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  )
}
