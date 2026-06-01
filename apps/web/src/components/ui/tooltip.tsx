import * as React from 'react'
import { cn } from '../../lib/utils'

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

/** @deprecated use TooltipProvider */
export function TooltioProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-flex group">{children}</div>
}

export function TooltipTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) return children
  return <>{children}</>
}

export function TooltipContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block',
        'rounded-md bg-foreground px-2 py-1 text-xs text-background whitespace-nowrap',
        className
      )}
    >
      {children}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
    </div>
  )
}
