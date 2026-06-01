'use client';
import { useEffect, useLayoutEffect, useRef } from 'react'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function AtelierPage() {
    const visionRef = useRef(null);
    const bgTextRef = useRef(null);
    const mainImgRef = useRef(null);
    const floatImgRef = useRef(null);

    // Fail-safe scroll reset specifically for this page
    useIsomorphicLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                // Background Text Parallax
                gsap.to(bgTextRef.current, {
                    xPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: visionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Main Image Parallax
                gsap.to(mainImgRef.current, {
                    yPercent: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: visionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Floating Image Parallax (Faster)
                gsap.to(floatImgRef.current, {
                    yPercent: -40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: visionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        });

        return () => {
            isUnmounted = true;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <main>
            <ClientEffects />


            {/* HERO SECTION (REDESIGNED) */}
            <section className="atelier-hero reveals fade-in-up">
                <div className="container">
                    <span className="overline">The Exotic</span>
                    <h1 className="display-title">STUDIO</h1>
                </div>
            </section>

            {/* SECTION 1: THE ARTISAN (GIAN CARLO) */}
            <section className="atelier" style={{ paddingTop: '5vh' }}>
                <div className="container layout-offset">
                    <div className="text-block reveals slide-in-left">
                        <span className="overline">01 / The Artisan</span>
                        <h2 className="display-title">Gian Carlo<br />Sagasti</h2>
                        <p className="bio-lead">
                            Gian Carlo Sagasti, founder and visionary of Exotic Wall Finishes & Design, established in Miami, Florida since 2015.
                        </p>

                        <div className="bio-stats">
                            <div className="stat-row">
                                <span className="stat-year">2003</span>
                                <span className="stat-desc">Mastering Venetian Plaster</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-year">2017</span>
                                <span className="stat-desc">Novacolor Global Ambassador</span>
                            </div>
                        </div>

                        <p className="bio-details">
                            Gian’s love for the application of Venetian Plaster continues to inspire him to create beautiful art pieces on your walls. His training, experience, and passion shows through the beauty of his work, leading him to become the Model for Marmorino Tools Worldwide.
                        </p>
                    </div>
                    <div className="image-block reveals zoom-in delay-1">
                        <div className="aspect-portrait">
                            <img src="/images/artisan_trowel_1772909203882.jpg" alt="Gian Carlo Sagasti Trowel" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE VISION (EXOTIC WALL FINISHES REDESIGN) */}
            <section className="vision-parallax-section" ref={visionRef}>
                <div className="vision-bg-text" ref={bgTextRef}>EXOTIC</div>

                <div className="vision-container">
                    <div className="vision-text-card reveals slide-in-left">
                        <span className="overline" style={{ color: 'var(--accent-gold)' }}>02 / The Vision</span>
                        <h2 className="display-title" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>Exotic Wall<br />Finishes</h2>

                        <blockquote className="motto-quote" style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1.5rem', marginLeft: '0' }}>
                            “Bringing Walls to Life”
                        </blockquote>

                        <p className="bio-details" style={{ fontSize: '1.15rem', lineHeight: '1.8', opacity: 0.9 }}>
                            Our goal is to leave your walls looking sexy. We are top experts in a number of decorative wall finishes
                            including Marmorino, Venetian Plaster, Faux finishes, Lime Paint and Lime Washes.
                        </p>
                        <p className="bio-details" style={{ opacity: 0.7 }}>
                            Working collaboratively with homeowners, interior designers, and architects to create the perfect
                            monolithic experience in any space.
                        </p>
                    </div>

                    <div className="vision-image-wrap">
                        <img
                            src="/images/Instagram/6.jpg"
                            alt="Exotic Wall Finishes Vision"
                            className="vision-main-img"
                            ref={mainImgRef}
                        />
                        <img
                            src="/images/Exhibition 3rd card.jpg"
                            alt="The Touch of an Artisan"
                            className="vision-floating-img"
                            ref={floatImgRef}
                        />
                        <div className="vision-parallax-line"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE HERITAGE (MARMORINO TOOLS) */}
            <section className="atelier heritage-section reveals fade-in-up">
                <div className="container layout-offset">
                    <div className="text-block">
                        <span className="overline">03 / The Heritage</span>
                        <h2 className="display-title">Marmorino<br />Tools</h2>
                        <p className="bio-lead" style={{ marginTop: '1rem' }}>
                            A partnership forged in the mastery of authentic Italian decorative arts.
                        </p>
                        <p className="bio-details">
                            Recognized globally for unparalleled artistry, Gian Carlo Sagasti was nominated and named the 2017 Ambassador for Novacolor Marmorino Products strictly out of Italy.
                        </p>
                    </div>
                    <div className="image-block">
                        <div className="aspect-square">
                            {/* Placeholder for future tools/brand image */}
                            <img src="/images/marmorino_tools.png" alt="Marmorino Tools Heritage" className="static-color" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
