'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function SmoothScroller({ children }) {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const pathname = usePathname();
    const smootherRef = useRef(null);

    // ONE-TIME INITIALIZATION
    useIsomorphicLayoutEffect(() => {
        let ro;

        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
            import('gsap/ScrollSmoother')
        ]).then(([gsapModule, stModule, ssModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            const ScrollSmoother = ssModule.ScrollSmoother;
            
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            ScrollTrigger.clearScrollMemory("manual");
            window.history.scrollRestoration = "manual";

            if (wrapperRef.current && contentRef.current && !smootherRef.current) {
                // Initialize the core ScrollSmoother instance ONCE
                smootherRef.current = ScrollSmoother.create({
                    wrapper: wrapperRef.current,
                    content: contentRef.current,
                    smooth: 1.2, // Reduced from 1.5 for a snappier, more responsive feel
                    effects: true,
                    smoothTouch: 0.1
                });

                ro = new ResizeObserver(() => {
                    ScrollTrigger.refresh();
                });
                ro.observe(contentRef.current);
                wrapperRef.current._ro = ro;
            }
        });

        return () => {
            if (wrapperRef.current && wrapperRef.current._ro) {
                wrapperRef.current._ro.disconnect();
            }
            if (smootherRef.current) {
                smootherRef.current.kill();
                smootherRef.current = null;
            }
        };
    }, []); 

    // RUNS SYNCHRONOUSLY ON EVERY ROUTE CHANGE BEFORE NEXT PAINT
    useIsomorphicLayoutEffect(() => {
        // 1. Force native and GSAP scroll to 0 immediately
        const forceReset = () => {
            if (typeof window === 'undefined') return;

            // Reset native scroll
            window.history.scrollRestoration = "manual";
            window.scrollTo(0, 0);

            // Reset GSAP Smoother
            if (smootherRef.current) {
                smootherRef.current.scrollTop(0, true);
                smootherRef.current.paused(true); // Temporarily pause to prevent "catching" old scroll
                setTimeout(() => {
                    if (smootherRef.current) smootherRef.current.paused(false);
                }, 100);
            }

            // Reset ScrollTrigger memory
            if (typeof window !== 'undefined' && window.ScrollTrigger) {
                window.ScrollTrigger.clearScrollMemory("manual");
            }
        };

        // Initial immediate reset
        forceReset();

        // 2. Perform a multi-stage reset sequence to fight Next.js and browser restoration
        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;

            // Execute reset sequence at critical stages
            forceReset();
            ScrollTrigger.refresh();

            // Next.js often restores scroll after a micro-task or the next few frames
            const retryReset = () => {
                forceReset();
                ScrollTrigger.refresh();
            };

            // Sequence of resets to cover various completion states
            const intervals = [50, 150, 400, 800];
            intervals.forEach(ms => setTimeout(retryReset, ms));
        });

        return () => {
            if (smootherRef.current) smootherRef.current.paused(false);
        };
    }, [pathname]);

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
                <div key={pathname}>
                    {children}
                </div>
            </div>
        </div>
    );
}
