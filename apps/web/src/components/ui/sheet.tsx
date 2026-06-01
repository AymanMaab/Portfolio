import * as React from 'react'
import { cn } from '../../lib/utils'

interface SheetContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue>({ open: false, setOpen: () => {} })

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const { setOpen } = React.useContext(SheetContext)
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      onClick: () => setOpen(true),
    })
  }
  return <button onClick={() => setOpen(true)}>{children}</button>
}

export function SheetClose({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const { setOpen } = React.useContext(SheetContext)
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      onClick: () => setOpen(false),
    })
  }
  return <button onClick={() => setOpen(false)}>{children}</button>
}

export function SheetContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open, setOpen } = React.useContext(SheetContext)
  if (!open) return null
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)} />
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-72 bg-background border-l border-border p-6 shadow-xl',
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
