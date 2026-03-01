import { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
    const heroRef = useRef(null)
    const glowRef = useRef(null)

    useEffect(() => {
        const hero = heroRef.current
        const glow = glowRef.current
        if (!hero || !glow) return

        const handleMove = (e) => {
            const rect = hero.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            glow.style.left = `${x}px`
            glow.style.top = `${y}px`
            glow.style.opacity = '1'
        }

        const handleLeave = () => { glow.style.opacity = '0' }

        hero.addEventListener('mousemove', handleMove)
        hero.addEventListener('mouseleave', handleLeave)
        return () => {
            hero.removeEventListener('mousemove', handleMove)
            hero.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    return (
        <section className="hero" id="hero" ref={heroRef}>
            {/* Cursor glow */}
            <div className="hero__glow" ref={glowRef}></div>

            {/* Background text */}
            <div className="hero__bg-text" aria-hidden="true">TSM BOT</div>

            {/* Spline bot */}
            <div className="hero__spline">
                <spline-viewer url="https://prod.spline.design/9kCEByUPsvmYMpuO/scene.splinecode"></spline-viewer>
            </div>

            {/* CTA left */}
            <a href="#cta" className="hero__cta hero__cta--left">
                Get Started
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>

            {/* CTA right */}
            <a href="#about" className="hero__cta hero__cta--right">
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.33v9.34M4 8.67l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>

            {/* Hide Spline watermark */}
            <div className="hero__watermark-cover"></div>

            {/* Scroll indicator */}
            <div className="hero__scroll-indicator">
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    )
}
