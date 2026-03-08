'use client';
import { useEffect } from 'react';

export default function ClientEffects() {
    useEffect(() => {
        // --- Custom Cursor ---
        const cursor = document.querySelector('.custom-cursor');
        const hoverables = document.querySelectorAll('a, button, .menu-trigger, .menu-close, input, textarea');

        const moveCursor = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };
        document.addEventListener('mousemove', moveCursor);

        const addHover = () => cursor?.classList.add('hovering');
        const removeHover = () => cursor?.classList.remove('hovering');

        hoverables.forEach(elem => {
            elem.addEventListener('mouseenter', addHover);
            elem.addEventListener('mouseleave', removeHover);
        });



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
        const heroImg = document.querySelector('.parallax-img');
        const centerLine = document.querySelector('.center-line');

        const handleScroll = () => {
            const scrolled = window.scrollY;

            // Hero image parallax
            if (heroImg && scrolled < window.innerHeight) {
                heroImg.style.transform = `translateY(${(-10) + (scrolled * 0.05)}%)`;
            }

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
            document.removeEventListener('mousemove', moveCursor);
            hoverables.forEach(elem => {
                elem.removeEventListener('mouseenter', addHover);
                elem.removeEventListener('mouseleave', removeHover);
            });

            revealObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return null;
}
