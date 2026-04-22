'use client';
import { useEffect } from 'react';

export default function ClientEffects() {
    useEffect(() => {
        // --- Scroll Animations (Intersection Observer) ---
        const reveals = document.querySelectorAll('.reveals');

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px"
        });

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });

        // --- Parallax Effects ---
        const centerLine = document.querySelector('.center-line');

        const handleScroll = () => {
            const scrolled = window.scrollY;

            // Center line subtle fade
            if (centerLine) {
                if (scrolled > window.innerHeight * 2) {
                    centerLine.style.opacity = '0';
                } else {
                    centerLine.style.opacity = '1';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {

            revealObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return null;
}
