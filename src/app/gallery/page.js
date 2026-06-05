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
    const iframeRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isMuted, setIsMuted] = useState(true);

    // Auto-play when visible, pause when scrolled out
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        let observer;
        let timer;

        const sendCmd = (func) =>
            iframe.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func, args: [] }),
                '*'
            );

        const setupObserver = () => {
            observer = new IntersectionObserver(
                ([entry]) => sendCmd(entry.isIntersecting ? 'playVideo' : 'pauseVideo'),
                { threshold: 0.2 }
            );
            observer.observe(iframe);
        };

        const handleLoad = () => { timer = setTimeout(setupObserver, 1000); };
        iframe.addEventListener('load', handleLoad);

        return () => {
            clearTimeout(timer);
            iframe.removeEventListener('load', handleLoad);
            observer?.disconnect();
        };
    }, []);

    // Toggle mute/unmute
    const toggleMute = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;
        const func = isMuted ? 'unMute' : 'mute';
        iframe.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func, args: [] }),
            '*'
        );
        setIsMuted(prev => !prev);
    };

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

                // Note: Sticky pinning removed as per request

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
                                <span className="exhibition-overline exhibit-word">Gallery</span>
                                <h1 className="exhibition-main-title">
                                    <span className="exhibit-word" style={{ display: 'inline-block' }}>EXOTIC</span>{' '}
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
                                        <span className="modal-overline">Gallery Detail</span>
                                        <h2 className="modal-title">{selectedItem.title}</h2>
                                        <p className="modal-subtitle">{selectedItem.subtitle}</p>
                                        <div className="modal-divider"></div>
                                        <p className="modal-description">{selectedItem.description}</p>
                                        {selectedItem.link && (
                                            <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '2rem', color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.2rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', transition: 'opacity 0.3s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                                                View on Instagram
                                            </a>
                                        )}
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
                                <h3>Modern Mastery</h3>
                                <p>Today, Exotic elevates this historic craft. Exotic hand-trowels authentic lime-based plasters with masterful precision, transforming standard walls into seamless, luxurious textures—ranging from earthy matte to brilliant, mirror-like gloss.</p>
                            </div>

                            <div className="overlap-image-third reveals fade-in-up delay-2">
                                <img src="/images/Exhibition 3rd card.jpg" alt="Exhibition Venetian Plaster Finish" className="static-color" />
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

                {/* --- Featured Video Section --- */}
                <section className="featured-video-section">
                    <div className="fv-top-rule"></div>

                    {/* Header */}
                    <div className="fv-header">
                        <div className="fv-overline-row">
                            <div className="fv-overline-line"></div>
                            <span className="fv-overline">Featured Work</span>
                            <div className="fv-overline-line"></div>
                        </div>
                        <h2 className="fv-heading">
                            <span>THE</span>
                            <em>ART</em>
                            <span>OF FINISH</span>
                        </h2>
                        <p className="fv-subtext">
                            Born from limestone and light.<br />
                            The craft of Venetian Plaster, in motion.
                        </p>
                    </div>

                    {/* Video */}
                    <div className="fv-stage">
                        <div className="fv-player fv-player--active">
                            {/* Gold corner brackets */}
                            <div className="fv-corner fv-corner-tl"></div>
                            <div className="fv-corner fv-corner-tr"></div>
                            <div className="fv-corner fv-corner-bl"></div>
                            <div className="fv-corner fv-corner-br"></div>

                            {/* Ambient glow */}
                            <div className="fv-frame-glow"></div>

                            {/* Always-mounted iframe — muted autoplay, scroll-controlled */}
                            <iframe
                                ref={iframeRef}
                                src="https://www.youtube.com/embed/lUXSZm4felY?rel=0&modestbranding=1&autoplay=1&mute=1&controls=1&color=white&enablejsapi=1"
                                title="Exotic Wall Finishes – The Art of Finish"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            {/* Unmute toggle */}
                            <button
                                onClick={toggleMute}
                                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                style={{
                                    position: 'absolute', bottom: '1rem', right: '1rem',
                                    zIndex: 10, background: 'rgba(0,0,0,0.6)',
                                    border: '1px solid rgba(212,175,55,0.5)', borderRadius: '50%',
                                    width: '2.5rem', height: '2.5rem', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-gold)', transition: 'background 0.3s'
                                }}
                            >
                                {isMuted ? (
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                        <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19l2 2L21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="fv-bottom-rule"></div>
                </section>

                {/* --- YouTube Promo Section --- */}
                <section className="youtube-promo-section reveals fade-in-up">
                    {/* Background Marquee */}
                    <div className="yt-marquee-bg">
                        <div className="yt-marquee-track">
                            {/* Set 1 */}
                            <div className="yt-marquee-item"><img src="/images/artisan_trowel_cinematic.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/high_exotichall.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/master_bedroomlvexotic.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/Exhibition 3rd card.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/venetian_plaster_wall.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/white_bedroom_venetian2.jpg" alt="Exotic Masterclass Snippet" /></div>
                            
                            {/* Duplicate for infinite scroll */}
                            <div className="yt-marquee-item"><img src="/images/artisan_trowel_cinematic.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/high_exotichall.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/master_bedroomlvexotic.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/Exhibition 3rd card.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/venetian_plaster_wall.jpg" alt="Exotic Masterclass Snippet" /></div>
                            <div className="yt-marquee-item"><img src="/images/white_bedroom_venetian2.jpg" alt="Exotic Masterclass Snippet" /></div>
                        </div>
                    </div>
                    
                    {/* Contrast Overlay & Glow */}
                    <div className="yt-contrast-overlay"></div>
                    <div className="yt-glow-bg" style={{ zIndex: 1 }}></div>

                    <div className="yt-promo-container">
                        <a href="https://www.youtube.com/@venetianplasterexoticwallf5313/videos" target="_blank" rel="noopener noreferrer" className="yt-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </a>
                        <span className="yt-overline">The Masterclass</span>
                        <h2 className="yt-title">PROCESS & <span>TECHNIQUE</span></h2>
                        <p className="yt-desc">
                            Step inside the Exotic studio. Witness the meticulous process of hand-troweled Venetian Plaster and discover the secrets behind our most captivating finishes.
                        </p>
                        <a href="https://www.youtube.com/@venetianplasterexoticwallf5313/videos" target="_blank" rel="noopener noreferrer" className="btn-youtube">
                            Watch on YouTube
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginLeft: '4px' }}>
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                        </a>
                    </div>
                </section>

                {/* --- Instagram Section --- */}
                <section className="instagram-section">
                    {/* Live Instagram Feed */}
                    <InstagramFeed username="exoticwallfinishes" limit={6} />
                </section>

                <Footer />
            </main>
        </>
    );
}

