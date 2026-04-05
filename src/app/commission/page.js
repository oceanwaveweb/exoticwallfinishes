'use client';
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';

export default function CommissionPage() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx;
        let isUnmounted = false;

        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            if (isUnmounted) return;

            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                // Background Parallax
                gsap.to('.contact-bg-img', {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Architectural Shapes Parallax
                gsap.to('.shape-1', {
                    y: -150,
                    x: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                gsap.to('.shape-2', {
                    y: -80,
                    x: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Staggered entrance for contact text
                gsap.fromTo('.stagger-text',
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%"
                        }
                    }
                );
            });
        });
        return () => {
            isUnmounted = true;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <>
            <main>
                <ClientEffects />
                <section className="contact-parallax-section" ref={sectionRef}>
                    <img
                        src="file:///C:/Users/cjeod/.gemini/antigravity/brain/b7fc5732-013e-44d1-9157-c35f07f62c19/premium_obsidian_texture_1775376816744.png"
                        alt="Premium Obsidian Abstract Texture"
                        className="contact-bg-img"
                    />

                    {/* Architectural Floating Atmosphere */}
                    <div className="arc-shape shape-1"></div>
                    <div className="arc-shape shape-2"></div>

                    <div className="container">
                        <div className="contact-hero-header" style={{ marginBottom: '6rem' }}>
                            <span className="contact-overline stagger-text">Contact</span>
                            <h1 className="large-lead stagger-text">
                                Let's Build<br />Your Vision
                            </h1>
                        </div>

                        <div className="contact-details-container">
                            <div className="contact-details">
                                <div className="c-item stagger-text">
                                    <span className="c-label">Call</span>
                                    <span className="c-value">(305) 801-2581</span>
                                </div>
                                <div className="c-item stagger-text">
                                    <span className="c-label">Mail</span>
                                    <span className="c-value">venetianman@live.com</span>
                                </div>
                                <div className="c-item stagger-text">
                                    <span className="c-label">Location</span>
                                    <span className="c-value">Miami, Florida</span>
                                </div>
                            </div>

                            <div className="appointment-card-wrapper stagger-text">
                                <div className="appointment-card">
                                    <h3>CONTACT</h3>
                                    <form className="minimal-form" style={{ marginTop: '2rem' }}>
                                        <div className="form-group">
                                            <input type="text" id="name" placeholder=" " required />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" id="email" placeholder=" " required />
                                            <label htmlFor="email">Email Address</label>
                                        </div>
                                        <div className="form-group">
                                            <textarea id="message" placeholder=" " rows="3" required style={{ minHeight: '120px' }}></textarea>
                                            <label htmlFor="message">Project Details</label>
                                        </div>
                                        <button type="submit" className="brutal-btn" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}

