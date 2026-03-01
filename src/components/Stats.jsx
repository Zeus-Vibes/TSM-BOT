import { useState, useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'
import './Stats.css'

function AnimatedNumber({ target, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const duration = 2000
                    const startTime = performance.now()

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * target))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [target])

    return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
    { value: 50, suffix: 'K+', label: 'Users Helped' },
    { value: 2, suffix: 'M+', label: 'Tasks Completed' },
    { value: 99, suffix: '%', label: 'Satisfaction' },
    { value: 24, suffix: '/7', label: 'Availability' },
]

export default function Stats() {
    const sectionRef = useInView()

    return (
        <section className="stats" ref={sectionRef}>
            <div className="stats__inner container animate-on-scroll">
                <div className="stats__grid">
                    {stats.map((stat, i) => (
                        <div className="stats__item" key={i}>
                            <div className="stats__value">
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="stats__label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
