import useInView from '../hooks/useInView'
import './Team.css'

const team = [
    {
        name: 'Himesh Jadav',
        role: 'Founder & Lead Developer',
        image: '/images/himesh.png',
    },
    {
        name: 'Trishna Chhabria',
        role: 'Product & Strategy',
        image: '/images/trishna.png',
    },
    {
        name: 'Anusha Daryani',
        role: 'Design & Experience',
        image: '/images/anusha.png',
    },
]

export default function Team() {
    const sectionRef = useInView()

    return (
        <section className="team" id="team" ref={sectionRef}>
            <div className="team__inner container animate-on-scroll">
                <div className="team__header">
                    <span className="section-tag">Our Team</span>
                    <h2 className="section-title">The people behind<br />your smart mate.</h2>
                    <p className="section-subtitle">
                        A small team with a big vision — making AI personal for everyone.
                    </p>
                </div>

                <div className="team__grid stagger-children">
                    {team.map((member, i) => (
                        <div className="team__card animate-on-scroll" key={i}>
                            <div className="team__image-wrap">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team__image"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="team__name">{member.name}</h3>
                            <p className="team__role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
