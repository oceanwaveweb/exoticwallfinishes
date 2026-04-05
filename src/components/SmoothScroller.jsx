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
                    smooth: 1.5,
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
            window.history.scrollRestoration = "manual";
            window.scrollTo(0, 0);
            if (smootherRef.current) {
                smootherRef.current.scrollTop(0);
            }
        };

        forceReset();

        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
        ]).then(([gsapModule, stModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;

            // 2. Clear GSAP's internal scroll memory
            ScrollTrigger.clearScrollMemory("manual");
            
            // 3. Perform a second reset after a micro-delay to catch any Next.js interference
            setTimeout(() => {
                forceReset();
                ScrollTrigger.refresh();
            }, 50); // 50ms is usually enough for Next.js to commit the swap
        });

        return () => {
            // Cleanup logic for page-level effects if any
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
