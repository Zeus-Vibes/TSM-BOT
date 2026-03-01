import { useEffect, useRef } from 'react'

export default function useInView(options = {}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    // Also animate children with animate-on-scroll class
                    el.querySelectorAll('.animate-on-scroll').forEach(child => {
                        child.classList.add('visible')
                    })
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15, ...options }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}
