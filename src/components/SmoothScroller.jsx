'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function SmoothScroller({ children }) {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const pathname = usePathname();
    const smootherRef = useRef(null);
    const gsapRef = useRef(null);
    const STRef = useRef(null);

    // ONE-TIME: Load GSAP plugins
    useIsomorphicLayoutEffect(() => {
        window.history.scrollRestoration = 'manual';

        Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
            import('gsap/ScrollSmoother'),
        ]).then(([gsapModule, stModule, ssModule]) => {
            const gsap = gsapModule.default;
            const ScrollTrigger = stModule.ScrollTrigger;
            const ScrollSmoother = ssModule.ScrollSmoother;

            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            gsapRef.current = gsap;
            STRef.current = ScrollTrigger;

            // Create smoother on initial load
            createSmoother(ScrollSmoother, ScrollTrigger);
        });

        return () => {
            destroySmoother();
        };
    }, []);

    function createSmoother(ScrollSmoother, ScrollTrigger) {
        if (!wrapperRef.current || !contentRef.current) return;
        if (smootherRef.current) return; // Already exists

        smootherRef.current = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        });
    }

    function destroySmoother() {
        if (smootherRef.current) {
            smootherRef.current.kill();
            smootherRef.current = null;
        }
    }

    // ON EVERY ROUTE CHANGE: kill everything, reset, recreate
    useIsomorphicLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        // Immediately prevent any browser scroll restoration
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if (!gsapRef.current || !STRef.current) return;

        const ScrollTrigger = STRef.current;

        // Kill ALL ScrollTrigger instances — this is essential because pinned
        // sections (like ScrollSequence) leave stale pins that cause the
        // "crazy scroll" as GSAP tries to reconcile old positions with new content
        ScrollTrigger.getAll().forEach(t => t.kill());
        ScrollTrigger.clearScrollMemory('manual');

        // Kill and immediately recreate the smoother at position 0
        destroySmoother();
        window.scrollTo(0, 0);

        // Small delay to let Next.js render the new page content into the DOM
        // before we create a fresh smoother against the new page height
        const timer = setTimeout(async () => {
            window.scrollTo(0, 0);

            const { ScrollSmoother } = await import('gsap/ScrollSmoother');
            createSmoother(ScrollSmoother, ScrollTrigger);

            // One clean refresh after smoother is ready
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, 80);

        return () => clearTimeout(timer);
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
