import useInView from '../hooks/useInView'
import './About.css'

export default function About() {
    const sectionRef = useInView()

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about__inner container animate-on-scroll">
                <div className="about__content">
                    <span className="section-tag">About TSM</span>
                    <h2 className="section-title">Your personal AI<br />companion.</h2>
                    <p className="about__text">
                        TSM — <strong>The Smart Mate</strong> — is built around one simple idea:
                        everyone deserves a personal AI that truly understands them. TSM-BOT learns
                        your habits, adapts to your workflow, and helps you get more done with less effort.
                    </p>
                    <p className="about__text">
                        Whether you need help drafting an email, managing your schedule, researching a topic,
                        or just brainstorming ideas — TSM-BOT is always there, always ready, always learning.
                    </p>
                    <div className="about__metrics">
                        <div className="about__metric">
                            <span className="about__metric-value">24/7</span>
                            <span className="about__metric-label">Available</span>
                        </div>
                        <div className="about__metric">
                            <span className="about__metric-value">&lt;1s</span>
                            <span className="about__metric-label">Response</span>
                        </div>
                        <div className="about__metric">
                            <span className="about__metric-value">100%</span>
                            <span className="about__metric-label">Private</span>
                        </div>
                    </div>
                </div>

                <div className="about__visual">
                    <div className="about__card about__card--1">
                        <div className="about__card-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                            </svg>
                        </div>
                        <span>"Schedule my day"</span>
                    </div>
                    <div className="about__card about__card--2">
                        <div className="about__card-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <span>"Summarize this article"</span>
                    </div>
                    <div className="about__card about__card--3">
                        <div className="about__card-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <span>"Draft a reply"</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
