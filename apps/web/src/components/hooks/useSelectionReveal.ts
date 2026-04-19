import { useRef } from "react";
import { useInView } from "framer-motion";

export function useSelectionReveal(amount = 0.15) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, amount })

    return {
        ref, 
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.6, ease: 'easeOut' as const },
    }
}