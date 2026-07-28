'use client';
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

export default function CommissionClient() {
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
                    <div className="contact-bottom-glow"></div>

                    <div className="container">
                        <div className="contact-hero-header" style={{ marginBottom: '6rem', textAlign: 'center', width: '100%' }}>
                            <span className="contact-overline stagger-text" style={{ display: 'inline-block', margin: '0 auto 1rem' }}>Commission</span>
                            <h1 className="large-lead stagger-text" style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)', textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2)' }}>
                                COMMISSION VENETIAN PLASTER
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
                                    <h2>COMMISSION INQUIRY</h2>
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
                <FaqSection />
                <RelatedLinks />
                <Footer />
            </main>
        </>
    );
}
