import { primarySocials } from '../../data/socials'
import { cn } from '../../lib/utils'
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip'

type Props = {
  className?: string
}

export function SocialChips({ className }: Props) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {primarySocials.map((s) => {
        const Icon = s.icon
        return (
          <Tooltip key={s.id}>
            <TooltipTrigger asChild>
              <a
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.title}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-all hover:bg-muted/60 hover:text-foreground hover:border-border hover:-translate-y-[1px] active:translate-y-0"
              >
                <Icon className="h-3.5 w-3.5 opacity-80" />
                <span>{s.title}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>{s.value}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
