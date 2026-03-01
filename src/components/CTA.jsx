import useInView from '../hooks/useInView'
import './CTA.css'

export default function CTA() {
    const sectionRef = useInView()

    return (
        <section className="cta" id="cta" ref={sectionRef}>
            <div className="cta__inner container animate-on-scroll">
                <div className="cta__card">
                    <div className="cta__glow"></div>
                    <h2 className="cta__title">Ready to meet your<br />smart mate?</h2>
                    <p className="cta__subtitle">
                        Start using TSM-BOT today — free, private, and always learning.
                        Your personal AI is just one conversation away.
                    </p>
                    <div className="cta__actions">
                        <a href="#" className="cta__btn cta__btn--primary">
                            Try TSM-BOT Free
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#team" className="cta__btn cta__btn--ghost">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
