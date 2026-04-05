'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import InstagramFeed from '@/components/InstagramFeed';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ExhibitionPage() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
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
                // Micro-animation stagger for the words
                gsap.fromTo('.exhibit-word', 
                    { y: 60, opacity: 0, rotateX: -15 },
                    { 
                        y: 0, opacity: 1, rotateX: 0, 
                        duration: 1.4, 
                        stagger: 0.25, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 85%",
                        }
                    }
                );

                // Sticky pin for the heading area
                ScrollTrigger.create({
                    trigger: headingRef.current,
                    start: "top top",
                    endTrigger: containerRef.current,
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    toggleClass: "is-pinned",
                    invalidateOnRefresh: true,
                });
            });
            ScrollTrigger.refresh();
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

            {/* --- 1. The Gallery --- */}
            <section className="exhibition-page-gallery" ref={containerRef} style={{ background: '#020202' }}>
                <div className="sticky-container">
                    <div ref={headingRef} className="exhibition-title-area" style={{ position: 'relative', top: 'auto', width: '100%', paddingTop: '8rem', paddingBottom: '10rem' }}>
                        <div className="exhibition-heading">
                            <span className="exhibition-overline exhibit-word">Exhibition</span>
                            <h1 className="exhibition-main-title">
                                <span className="exhibit-word" style={{ display: 'inline-block' }}>MASTER</span>{' '}
                                <span className="exhibit-word" style={{ display: 'inline-block' }}>WORKS</span>
                            </h1>
                            <div className="exhibition-heading-line exhibit-word"></div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="masonry-grid reveals fade-in-up" style={{ marginTop: '5rem' }}>
                            {/* Original Items */}
                            <div className="masonry-item item-large">
                                <img src="/images/master_bedroomlvexotic2.jpg" alt="Anthracite Gold Vein Project" />
                                <div className="picture-meta">
                                    <h3>Void & Metal</h3>
                                    <span>Anthracite / Gold Vein</span>
                                </div>
                            </div>
                            <div className="masonry-item item-portrait">
                                <img src="/images/staircase_venetian_round.jpg" alt="Ivory Limestone Project" />
                                <div className="picture-meta">
                                    <h3>Corporate Brutalism</h3>
                                    <span>Oxidized Metallic Bronze</span>
                                </div>
                            </div>
                            <div className="masonry-item item-square">
                                <video src="/images/portfolio_bathroom_1772916040233.mp4" autoPlay loop muted playsInline></video>
                                <div className="picture-meta">
                                    <h3>Terracotta Monolith</h3>
                                    <span>Seamless Waterproof Tadelakt</span>
                                </div>
                            </div>
                            <div className="masonry-item item-large">
                                <img src="/images/high_exotichall.jpg" alt="Portfolio" />
                                <div className="picture-meta">
                                    <h3>Architectural Flow</h3>
                                    <span>Seamless Surface Motion</span>
                                </div>
                            </div>
                            <div className="masonry-item item-square">
                                <img src="/images/bathroom_light.jpg" alt="Portfolio" />
                                <div className="picture-meta">
                                    <h3>Architectural Flow</h3>
                                    <span>Seamless Surface Motion</span>
                                </div>
                            </div>

                            {/* New Expansion Items */}
                            <div className="masonry-item item-portrait">
                                <img src="/images/master_bedroomlvexotic.jpg" alt="Charcoal Tadelakt Project" />
                                <div className="picture-meta">
                                    <h3>Satin Monolith</h3>
                                    <span>Deep Charcoal Tadelakt</span>
                                </div>
                            </div>
                            <div className="masonry-item item-square">
                                <img src="/images/highrise_corpo.jpg" alt="Ivory Limestone Project" />
                                <div className="picture-meta">
                                    <h3>Ivory Curve</h3>
                                    <span>Smooth Limestone Plaster</span>
                                </div>
                            </div>
                            <div className="masonry-item item-large">
                                <img src="/images/obsidian_wall.jpg" alt="Portfolio" />
                                <div className="picture-meta">
                                    <h3>Architectural Flow</h3>
                                    <span>Seamless Surface Motion</span>
                                </div>
                            </div>
                            <div className="masonry-item item-square">
                                <img src="/images/white_bedroom_venetian2.jpg" alt="Portfolio" />
                                <div className="picture-meta">
                                    <h3>Architectural Flow</h3>
                                    <span>Seamless Surface Motion</span>
                                </div>
                            </div>
                            <div className="masonry-item item-square">
                                <img src="/images/bathroom_black.jpg" alt="Ivory Limestone Project" />
                                <div className="picture-meta">
                                    <h3>Ivory Curve</h3>
                                    <span>Smooth Limestone Plaster</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. Avant-Garde Venetian Plaster Experience --- */}
            <section className="venetian-immersive" id="venetian-plaster">
                <div className="venetian-parallax-bg"></div>

                <div className="giant-bleed-text">AURA OF VENICE</div>

                <div className="container immersive-container">
                    <div className="immersive-header reveals fade-in-up">
                        <span className="overline">Master Material</span>
                        <h2 className="display-title textured-plaster-title">VENETIAN<br />PLASTER</h2>
                        <p className="body-text" style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            A living architectural dimension. Not merely a paint, but a monolithic surface that chemically reverts back into solid limestone on your walls.
                        </p>
                    </div>

                    <div className="immersive-overlap-grid">
                        <div className="overlap-image reveals fade-in-up delay-1">
                            <img src="/images/venetian_plaster_wall.png" alt="Raw Venetian Plaster Wall" className="static-color" />
                        </div>

                        <div className="overlap-card card-1 reveals slide-in-left">
                            <span className="card-num">01</span>
                            <h3>Ancient Rome</h3>
                            <p>Discovered as a means to replicate the sheer opulence of solid marble without the crushing architectural weight.</p>
                        </div>

                        <div className="overlap-image-trowel reveals fade-in-up delay-1">
                            <img src="/images/artisan_trowel_cinematic.png" alt="Artisan Plaster Trowel" className="static-color" />
                        </div>

                        <div className="overlap-card card-2 reveals slide-in-left delay-1">
                            <span className="card-num">02</span>
                            <h3>The Renaissance</h3>
                            <p>Perfected in Venice during the 15th century. Artisans mixed lime putty with fine marble dust to craft breathtaking, water-resistant palazzo interiors.</p>
                        </div>

                        <div className="overlap-card card-3 reveals slide-in-left delay-2">
                            <span className="card-num">03</span>
                            <h3>Chemical Rebirth</h3>
                            <p>As the wet plaster cures, it absorbs carbon dioxide from the atmosphere—literally crystallizing back into a solid stone facade.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. Broken Grid Marmorino Architecture --- */}
            <section className="marmorino-broken-grid dark-section" id="marmorino">
                <div className="broken-grid-container">

                    <div className="broken-grid-image reveals fade-in-up delay-1">
                        <div className="gold-glow-monolith portrait-monolith">
                            <img src="/images/generated_marmorino_gold.png" alt="AI Generated Brutalist Marmorino Gold Vein Texture" className="static-color" />
                        </div>
                    </div>

                    <div className="broken-grid-content reveals slide-in-left">
                        <span className="overline glow-text" style={{ marginLeft: '2rem' }}>Material Study</span>
                        <h2 className="display-title escaped-title">MARMORINO&nbsp;&nbsp;</h2>

                        <div className="glass-text-card">
                            <p className="body-text" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
                                Where traditional Venetian Plaster is polished to a glass-like sheen, Marmorino demands a brutalist gravitas. Characterized by its unpolished, rugged face, it forces light to scatter across deeply tactile white aggregate.
                            </p>

                            <div className="material-specs-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Base</span>
                                    <span className="spec-value">Slaked Lime & Marble</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Texture</span>
                                    <span className="spec-value">Brutalist / Tactile</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Finish</span>
                                    <span className="spec-value">Matte with Gold Veins</span>
                                </div>
                            </div>

                            <p className="body-text" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-muted)', marginTop: '2.5rem', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem', fontStyle: 'italic' }}>
                                The matter absorbs ambient room light, while the metallic veins ignite with a radiant glow against dark aesthetics, transcending architecture to become a monolithic piece of fine art.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- Instagram Section --- */}
            <section className="instagram-section reveals fade-in-up">
                    {/* Live Instagram Feed */}
                    <InstagramFeed username="exoticwallfinishes" limit={6} />
            </section>

            <Footer />
            </main>
        </>
    );
}

