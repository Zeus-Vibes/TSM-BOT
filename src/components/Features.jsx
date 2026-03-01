import { useRef } from 'react'
import useInView from '../hooks/useInView'
import './Features.css'

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
        title: 'Natural Conversations',
        description: 'Talk to TSM-BOT like a friend. It understands context, remembers your preferences, and responds naturally.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: 'Task Management',
        description: 'Organize your day effortlessly. Create to-dos, set reminders, and let TSM-BOT keep you on track.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        title: 'Smart Research',
        description: 'Ask anything and get concise, helpful answers. TSM-BOT searches, summarizes, and delivers insights instantly.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'Content Creation',
        description: 'Draft emails, write notes, brainstorm ideas. Your personal AI writing companion for every occasion.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
        ),
        title: 'Private & Secure',
        description: 'Your conversations stay yours. End-to-end encryption ensures complete privacy for all your data.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Works Everywhere',
        description: 'Access TSM-BOT on any device, anytime. Seamless sync across your phone, tablet, and desktop.',
    },
]

function TiltCard({ children, className }) {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / centerY * -4
        const rotateY = (x - centerX) / centerX * 4
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
        }
    }

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}

export default function Features() {
    const sectionRef = useInView()

    return (
        <section className="features" id="features" ref={sectionRef}>
            <div className="features__inner container animate-on-scroll">
                <div className="features__header">
                    <span className="section-tag">Features</span>
                    <h2 className="section-title">Your personal AI,<br />your way.</h2>
                    <p className="section-subtitle">
                        TSM-BOT adapts to how you work — handling tasks, answering questions, and keeping you organized.
                    </p>
                </div>

                <div className="features__grid stagger-children">
                    {features.map((feature, i) => (
                        <TiltCard className="features__card animate-on-scroll" key={i}>
                            <div className="features__icon">{feature.icon}</div>
                            <h3 className="features__card-title">{feature.title}</h3>
                            <p className="features__card-desc">{feature.description}</p>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
