'use client';
import { useEffect, useRef } from "react";

export default function TextureStudy() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx;

        // Ensure GSAP client-side init
        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                // Creates a flawless pure 'background-attachment: fixed' reveal simulation
                // By counter-translating the absolute image background perfectly inverse to the scroll velocity
                if (bgRef.current && sectionRef.current) {
                    gsap.fromTo(bgRef.current,
                        { y: "-8%" },
                        {
                            y: "8%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );
                }

                // Add an inverse layer of parallax for the text, forcing it to "hover" closer to the camera
                if (textRef.current && sectionRef.current) {
                    gsap.fromTo(textRef.current,
                        { y: "15vh" },
                        {
                            y: "-15vh",
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );
                }
            });
        });

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="texture-study" id="texture" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                className="huge-texture-bg-image"
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: '-10%', left: 0,
                    width: '100%', height: '120%',
                    backgroundImage: "url('/images/2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                    backgroundColor: '#050505',
                    zIndex: 0
                }}
            />
            <div className="huge-texture-bg" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none' }}>
                <h2 className="giant-bg-text" ref={textRef} style={{ willChange: 'transform' }}>
                    <span>EXOTIC<br></br>VENETIAN</span>
                </h2>
            </div>
        </section>
    );
}

