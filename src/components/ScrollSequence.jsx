'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// ============================================================================
// DYNAMIC LOGO OVERLAY CONFIGURATION
// Use these settings to customize how the logo animates over the video frames
// ============================================================================
export const LOGO_CONFIG = {
    // Select the animation style: 'fade' | 'pop-out' | 'fade-pop'
    animationStyle: 'fade-pop',

    // Choose what frame the logo starts appearing on (e.g. video starts at 0, ends at 36 or 40)
    enterFrame: 10,
    fullyVisibleFrame: 25,

    // Choose what frame the logo starts disappearing on
    startExitFrame: 45, // Stays visible much longer
    fullyGoneFrame: 58,
};
// ============================================================================

export default function ScrollSequence() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const logoRef = useRef(null);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setIsMobileDevice(window.innerWidth <= 768);
    }, []);

    useIsomorphicLayoutEffect(() => {
        let ctx;
        let isUnmounted = false;

        // Dynamically import gsap to avoid SSR issues
        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            if (isUnmounted) return; // Prevent memory leak / broken pins on fast route change

            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                const canvas = canvasRef.current;
                if (!canvas) return;

                const context = canvas.getContext('2d');
                const container = containerRef.current;

                const isMobile = window.innerWidth <= 768;
                canvas.width = isMobile ? 720 : 1920;
                canvas.height = isMobile ? 1280 : 1080;

                const frameCount = isMobile ? 64 : 58;
                const folder = isMobile ? 'mobile' : 'desktop';
                const currentFrame = index => (
                    `/sl_exotic_frames/${folder}/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`
                );

                const images = [];
                const animationParams = { frame: 0 };

                for (let i = 0; i < frameCount; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
                    images.push(img);
                }

                const render = () => {
                    const frameValue = animationParams.frame;
                    const index1 = Math.floor(frameValue);
                    const index2 = Math.min(Math.ceil(frameValue), frameCount - 1);
                    let alpha = frameValue - index1;

                    // Optimization: If alpha is near 0 or 1, snap it to prevent microscopic ghosting
                    if (alpha < 0.01) alpha = 0;
                    if (alpha > 0.99) alpha = 1;

                    const img1 = images[index1];
                    const img2 = images[index2];

                    if (img1 && img1.complete) {
                        const hRatio = canvas.width / img1.width;
                        const vRatio = canvas.height / img1.height;
                        let ratio = Math.max(hRatio, vRatio);

                        const centerShift_x = (canvas.width - img1.width * ratio) / 2;
                        const centerShift_y = (canvas.height - img1.height * ratio) / 2;

                        context.globalAlpha = 1;
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.drawImage(img1, 0, 0, img1.width, img1.height,
                            centerShift_x, centerShift_y, img1.width * ratio, img1.height * ratio);

                        if (index2 !== index1 && img2 && img2.complete && alpha > 0) {
                            context.globalAlpha = alpha;
                            context.drawImage(img2, 0, 0, img2.width, img2.height,
                                centerShift_x, centerShift_y, img2.width * ratio, img2.height * ratio);
                        }

                        context.globalAlpha = 1;
                        canvas.style.objectPosition = `center center`;
                    }
                };

                images[0].onload = render;
                render();

                // Trigger 1: Pin the wrapper ONLY for the duration of the section
                ScrollTrigger.create({
                    trigger: container,
                    start: "top top",
                    end: "bottom bottom",
                    pin: wrapperRef.current,
                    pinSpacing: false,
                });

                // Trigger 2: Play the animation strictly during the defined scrolling space
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "+=2000",
                        scrub: 1.5,
                        snap: {
                            snapTo: 1 / (frameCount - 1),
                            duration: { min: 0.2, max: 0.5 },
                            delay: 0.1,
                            ease: "power2.inOut"
                        }
                    }
                });

                tl.to(animationParams, {
                    frame: frameCount - 1,
                    ease: "none",
                    onUpdate: render,
                    duration: frameCount - 1
                }, 0);

                // --- Dynamic Logo Animation tied perfectly to the frames ---
                if (logoRef.current) {
                    let startScale = 1;
                    let enterEase = "power1.out";
                    let exitScale = 1;
                    let exitEase = "power1.in";

                    if (LOGO_CONFIG.animationStyle === 'pop-out' || LOGO_CONFIG.animationStyle === 'fade-pop') {
                        startScale = 1.3;
                        exitScale = 0.7;
                    }

                    // Entry Tween
                    tl.fromTo(logoRef.current,
                        { opacity: 0, scale: startScale },
                        {
                            opacity: 1,
                            scale: 1,
                            ease: enterEase,
                            duration: LOGO_CONFIG.fullyVisibleFrame - LOGO_CONFIG.enterFrame
                        },
                        LOGO_CONFIG.enterFrame
                    );

                    // Exit Tween 
                    tl.fromTo(logoRef.current,
                        { opacity: 1, scale: 1 },
                        {
                            opacity: 0,
                            scale: exitScale,
                            ease: exitEase,
                            duration: LOGO_CONFIG.fullyGoneFrame - LOGO_CONFIG.startExitFrame
                        },
                        LOGO_CONFIG.startExitFrame
                    );
                }
            });
            ScrollTrigger.refresh();
        });

        return () => {
            isUnmounted = true;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="scroll-sequence" style={{ height: 'calc(100vh + 2000px)', width: '100%', position: 'relative', backgroundColor: '#000', zIndex: 1 }}>
            <div ref={wrapperRef} style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <canvas ref={canvasRef} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

                {/* Top Gradient Overlay to ensure Navbar readability against gray video frames */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '15rem', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />

                {/* Scroll Synchronized Configurable Logo */}
                <div
                    ref={logoRef}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: isMobileDevice ? 'clamp(280px, 75vw, 600px)' : 'clamp(250px, 35vw, 600px)',
                        zIndex: 2,
                        opacity: 0,
                        pointerEvents: 'none', // Don't block clicking
                        mixBlendMode: 'difference', // Makes the logo dynamically invert against the background
                        color: '#ffffff'
                    }}
                >
                    <img src="/images/brand_logo.png" alt="Exotic Logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
            </div>
        </section>
    );
}
