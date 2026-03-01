import { useState } from 'react'
import useInView from '../hooks/useInView'
import './Testimonials.css'

const testimonials = [
    {
        quote: "TSM-BOT literally feels like having a personal assistant in my pocket. I use it to organize my entire week — it just gets me.",
        name: 'Riya Patel',
        role: 'Freelance Designer',
        initials: 'RP',
    },
    {
        quote: "I was drowning in emails and deadlines. TSM-BOT now drafts my replies, sets my reminders, and even helps me brainstorm ideas. Life-changing.",
        name: 'Arjun Mehta',
        role: 'Startup Founder',
        initials: 'AM',
    },
    {
        quote: "What I love most is how private it feels. My data stays mine, and the AI just keeps getting smarter the more I use it. Highly recommend.",
        name: 'Sneha Kapoor',
        role: 'Content Creator',
        initials: 'SK',
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)
    const sectionRef = useInView()

    return (
        <section className="testimonials" id="testimonials" ref={sectionRef}>
            <div className="testimonials__inner container animate-on-scroll">
                <div className="testimonials__header">
                    <span className="section-tag">Testimonials</span>
                    <h2 className="section-title">People love their<br />smart mate.</h2>
                </div>

                <div className="testimonials__carousel">
                    <div className="testimonials__card">
                        <svg className="testimonials__quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                        <p className="testimonials__text">{testimonials[active].quote}</p>
                        <div className="testimonials__author">
                            <div className="testimonials__avatar">
                                {testimonials[active].initials}
                            </div>
                            <div>
                                <div className="testimonials__name">{testimonials[active].name}</div>
                                <div className="testimonials__role">{testimonials[active].role}</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials__dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
