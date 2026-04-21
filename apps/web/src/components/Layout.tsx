import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="mx-auto max-w-6xl px-6 pt-24">
            {children}
        </main>
    )
}