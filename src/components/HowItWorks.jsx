import useInView from '../hooks/useInView'
import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Say Hello',
        description: 'Open TSM-BOT and start a conversation. No setup, no configuration — just type or speak naturally.',
    },
    {
        number: '02',
        title: 'Tell It What You Need',
        description: 'Ask questions, assign tasks, or request help with anything. TSM-BOT understands context and intent.',
    },
    {
        number: '03',
        title: 'Let It Handle the Rest',
        description: 'TSM-BOT executes your requests, learns your preferences, and gets smarter with every interaction.',
    },
]

export default function HowItWorks() {
    const sectionRef = useInView()

    return (
        <section className="how-it-works" id="how-it-works" ref={sectionRef}>
            <div className="how-it-works__inner container animate-on-scroll">
                <div className="how-it-works__header">
                    <span className="section-tag">How It Works</span>
                    <h2 className="section-title">Simple as a<br />conversation.</h2>
                    <p className="section-subtitle">
                        No learning curve. No manual. Just talk to it.
                    </p>
                </div>

                <div className="how-it-works__steps stagger-children">
                    {steps.map((step, i) => (
                        <div className="how-it-works__step animate-on-scroll" key={i}>
                            <div className="how-it-works__number">{step.number}</div>
                            <div className="how-it-works__step-content">
                                <h3 className="how-it-works__step-title">{step.title}</h3>
                                <p className="how-it-works__step-desc">{step.description}</p>
                            </div>
                            {i < steps.length - 1 && <div className="how-it-works__connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
