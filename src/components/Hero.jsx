'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const manifestoRef = useRef(null);

    useEffect(() => {
        let ctx;
        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                const lines = gsap.utils.toArray('.manifesto .reveal-wrapper');

                lines.forEach((line, i) => {
                    const text = line.querySelector('.reveal-text');
                    const bar = line.querySelector('.highlight-bar');

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: line,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    });

                    tl.to(bar, {
                        scaleX: 1,
                        duration: 0.5,
                        ease: "power2.inOut",
                        delay: i * 0.15
                    })
                        .set(text, { opacity: 1 })
                        .to(bar, {
                            scaleX: 0,
                            transformOrigin: "right",
                            duration: 0.5,
                            ease: "power2.inOut"
                        });
                });
            });
        });
        return () => ctx && ctx.revert();
    }, []);

    return (
        <header className="hero" id="home">
            <div className="hero-image-wrapper reveals fade-in-up">
                <img src="/images/ideal_hero_livingroom_1772916024175.png" alt="Luxury Living Room Plaster" className="parallax-img" />
            </div>
            <div className="hero-typography">
                <h1 className="split-text">EXOTIC<br />FINISHES</h1>
                <p className="manifesto" ref={manifestoRef}>
                    <span className="reveal-wrapper">
                        <span className="reveal-text">We do not paint walls.</span>
                        <span className="highlight-bar"></span>
                    </span>
                    <span className="reveal-wrapper">
                        <span className="reveal-text">We sculpt architectural atmosphere.</span>
                        <span className="highlight-bar"></span>
                    </span>
                    <span className="reveal-wrapper">
                        <span className="reveal-text">Raw. Unapologetic. Exotic.</span>
                        <span className="highlight-bar"></span>
                    </span>
                </p>
            </div>
            <div className="scroll-down">
                <div className="vertical-text">DESCEND</div>
            </div>
        </header>
    );
}
