import { useRef, useState, useEffect } from "react";

export function useSelectionReveal(amount = 0.15) {
    const ref = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect() } },
            { threshold: amount }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [amount])

    return {
        ref,
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.6, ease: 'easeOut' as const },
    }
}
