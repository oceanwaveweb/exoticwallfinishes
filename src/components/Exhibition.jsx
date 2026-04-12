'use client';
import Link from "next/link";
import { ArrowRight, Video, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

import { EXHIBITION_DATA } from "@/data/exhibition";

export default function Exhibition() {
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
                            start: "top 85%", // Triggers as the section enters
                        }
                    }
                );

                // Note: Sticky pinning removed as per request
            });
            ScrollTrigger.refresh();
        });

        return () => {
            isUnmounted = true;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="exhibition" id="exhibition" ref={containerRef}>
            <div className="sticky-container">
                <div ref={headingRef} className="exhibition-title-area" style={{ position: 'relative', top: 'auto', width: '100%' }}>
                    <div className="exhibition-heading">
                        <span className="exhibition-overline exhibit-word">02 / Exhibition</span>
                        <h2 className="exhibition-main-title">
                            <span className="exhibit-word" style={{ display: 'inline-block' }}>EXOTIC</span>{' '}
                            <br className="mobile-br" />
                            <span className="exhibit-word" style={{ display: 'inline-block' }}>WORKS</span>
                        </h2>
                        <div className="exhibition-heading-line exhibit-word"></div>
                    </div>
                </div>

                <div className="gallery-items-wrapper">
                    {EXHIBITION_DATA.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className={`gallery-item reveals fade-in-up ${item.id === 1 ? 'featured-item' : ''}`}
                            onClick={() => setSelectedItem(item)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={`aspect-${item.type}`}>
                                {item.isVideo ? (
                                    <video src={item.img} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
                                ) : (
                                    <img src={item.img} alt={item.title} />
                                )}
                            </div>
                            <div className="item-meta">
                                <h3>{item.title}</h3>
                                <span>{item.subtitle}</span>
                            </div>
                        </div>
                    ))}

                    {/* Aesthetic CTA Card */}
                    <div className="gallery-item exhibit-cta-card reveals fade-in-up">
                        <div className="cta-content">
                            <span className="cta-overline">03 / The Collection</span>
                            <h3 className="cta-title">EXPLORE ALL <br />EXOTIC WORKS</h3>
                            <Link href="/exhibition" className="cta-button-link">
                                <div className="cta-action">
                                    <span>Discover More</span>
                                    <ArrowRight className="cta-icon" size={20} />
                                </div>
                            </Link>
                        </div>
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
    );
}
