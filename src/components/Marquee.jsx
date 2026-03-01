import './Marquee.css'

const words = [
    'Personal AI',
    'Task Manager',
    'Smart Assistant',
    'Research Buddy',
    'Content Writer',
    'Daily Companion',
    'Your Smart Mate',
    'Always Ready',
]

export default function Marquee() {
    return (
        <div className="marquee">
            <div className="marquee__track">
                {[...words, ...words].map((word, i) => (
                    <span className="marquee__item" key={i}>
                        {word}
                        <span className="marquee__dot">·</span>
                    </span>
                ))}
            </div>
        </div>
    )
}
