'use client';
import { useEffect, useRef } from 'react';

export default function Commission() {
    const headingRef = useRef(null);

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
                const words = gsap.utils.toArray('.premium-editorial-title .reveal-wrapper');
                
                words.forEach((word, i) => {
                    const text = word.querySelector('.reveal-text');
                    const bar = word.querySelector('.highlight-bar');
                    
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: word,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    });

                    tl.to(bar, {
                        scaleX: 1,
                        duration: 0.6,
                        ease: "power2.inOut",
                        delay: i * 0.2
                    })
                    .set(text, { opacity: 1 })
                    .to(bar, {
                        scaleX: 0,
                        transformOrigin: "right",
                        duration: 0.6,
                        ease: "power2.inOut"
                    });
                });
            });
        });
        return () => ctx && ctx.revert();
    }, []);

    return (
        <section className="commission" id="commission">
            <div className="container text-center reveals fade-in-up">
                <span className="overline">03 / Contact</span>
                <h2 className="premium-editorial-title" ref={headingRef} style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', marginBottom: '4rem', whiteSpace: 'nowrap' }}>
                    <span className="reveal-wrapper">
                        <span className="reveal-text">GET IN TOUCH</span>
                        <span className="highlight-bar"></span>
                    </span>
                </h2>

                <form className="minimal-form">
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Name" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <textarea id="details" placeholder="Project Details" rows="1" required></textarea>
                        <label htmlFor="details">Project Details</label>
                    </div>
                    <button type="submit" className="brutal-btn">Submit</button>
                </form>
            </div>
        </section>
    );
}
