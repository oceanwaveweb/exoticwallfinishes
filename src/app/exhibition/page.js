'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import InstagramFeed from '@/components/InstagramFeed';
import { EXHIBITION_DATA } from '@/data/exhibition';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ExhibitionPage() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

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
                    invalidateOnRefresh: true,
                });

                // Marmorino Monolith Scroll Reveal - Persistent Glow
                gsap.fromTo('.gold-glow-monolith',
                    { 
                        y: 40,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                    },
                    {
                        y: 0,
                        boxShadow: "0 60px 150px rgba(212, 175, 55, 0.5), 0 100px 250px rgba(212, 175, 55, 0.3), 0 150px 450px rgba(212, 175, 55, 0.2)",
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: '.marmorino-broken-grid',
                            start: "top 75%",
                            toggleActions: "play none none none" // Trigger once and stay
                        }
                    }
                );
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
                                    <br className="mobile-br" />
                                    <span className="exhibit-word" style={{ display: 'inline-block' }}>WORKS</span>
                                </h1>
                                <div className="exhibition-heading-line exhibit-word"></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="masonry-grid" style={{ marginTop: '5rem' }}>
                                {EXHIBITION_DATA.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`masonry-item item-${item.type}`}
                                        onClick={() => setSelectedItem(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.isVideo ? (
                                            <video src={item.img} autoPlay loop muted playsInline></video>
                                        ) : (
                                            <img src={item.img} alt={item.title} />
                                        )}
                                        <div className="picture-meta">
                                            <h3>{item.title}</h3>
                                            <span>{item.subtitle}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Exhibition Detail Modal */}
                    {selectedItem && typeof window !== 'undefined' && createPortal(
                        <div className="exhibition-modal-overlay" onClick={() => setSelectedItem(null)}>
                            <div className="modal-close-hint">CLICK ANYWHERE TO CLOSE</div>
                            <div className="exhibition-modal-content">
                                <div className="modal-grid">
                                    <div className="modal-image-area">
                                        {selectedItem.isVideo ? (
                                            <video src={selectedItem.img} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
                                        ) : (
                                            <img src={selectedItem.img} alt={selectedItem.title} />
                                        )}
                                    </div>
                                    <div className="modal-text-area">
                                        <span className="modal-overline">Exhibition Detail</span>
                                        <h2 className="modal-title">{selectedItem.title}</h2>
                                        <p className="modal-subtitle">{selectedItem.subtitle}</p>
                                        <div className="modal-divider"></div>
                                        <p className="modal-description">{selectedItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
                </section>

                {/* --- 2. Avant-Garde Venetian Plaster Experience --- */}
                <section className="venetian-immersive" id="venetian-plaster">
                    <div className="venetian-parallax-bg"></div>

                    <div className="giant-bleed-text">AURA OF VENICE</div>

                    <div className="container immersive-container">
                        <div className="immersive-header reveals fade-in-up" style={{ textAlign: 'center' }}>
                            <span className="overline" style={{ margin: '0 auto 2rem' }}>Master Material</span>
                            <h2 className="display-title textured-plaster-title">VENETIAN<br />PLASTER</h2>
                            <p className="body-text" style={{ margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center' }}>
                                A living architectural dimension. Not merely a paint, but a monolithic surface that chemically reverts back into solid limestone on your walls.
                            </p>
                        </div>

                        <div className="immersive-overlap-grid">
                            <div className="overlap-image reveals fade-in-up delay-1">
                                <img src="/images/venetian_plaster_wall.jpg" alt="Raw Venetian Plaster Wall" className="static-color" />
                            </div>

                            <div className="overlap-card card-1 reveals slide-in-left">
                                <span className="card-num">01</span>
                                <h3>Ancient Rome</h3>
                                <p>Discovered as a means to replicate the sheer opulence of solid marble without the crushing architectural weight.</p>
                            </div>

                            <div className="overlap-image-trowel reveals fade-in-up delay-1">
                                <img src="/images/artisan_trowel_cinematic.jpg" alt="Artisan Plaster Trowel" className="static-color" />
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

