'use client';
import { Video } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Exhibition() {
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
                            start: "top 85%", // Triggers as the section enters
                        }
                    }
                );

                // Create the sticky pin for the entire heading area (including blur)
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
        <section className="exhibition" id="exhibition" ref={containerRef}>
            <div className="sticky-container">
                <div ref={headingRef} className="exhibition-title-area" style={{ position: 'relative', top: 'auto', width: '100%' }}>
                    <div className="exhibition-heading">
                        <span className="exhibition-overline exhibit-word">02 / Exhibition</span>
                        <h2 className="exhibition-main-title">
                            <span className="exhibit-word" style={{ display: 'inline-block' }}>MASTER</span>{' '}
                            <span className="exhibit-word" style={{ display: 'inline-block' }}>WORKS</span>
                        </h2>
                        <div className="exhibition-heading-line exhibit-word"></div>
                    </div>
                </div>

                <div className="exhibition-gallery">
                    <div className="gallery-item reveals fade-in-up">
                        <div className="aspect-landscape">
                            <img src="/images/green_marmorino.jpg" alt="The Anthracite Estate" />
                        </div>
                        <div className="item-meta">
                            <h3>Turquoise Sea Condo</h3>
                            <span>Venetian Plaster Marmorino</span>
                        </div>
                    </div>

                    <div className="gallery-item reveals fade-in-up">
                        <div className="aspect-square">
                            <img src="/images/clean_white_venetian.jpg" alt="Clean White Venetian" />
                        </div>
                        <div className="item-meta">
                            <h3>Clean White Venetian</h3>
                            <span>Shiny Venetian Plaster</span>
                        </div>
                    </div>

                    <div className="gallery-item reveals fade-in-up">
                        <div className="aspect-portrait">
                            <img src="/images/portfolio_bathroom_1772916040233.jpg" alt="Portfolio Black" />
                        </div>
                        <div className="item-meta">
                            <h3>Shiny Black Venetian</h3>
                            <span>Accented Exotic Elegance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
