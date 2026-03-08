document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor ---
    const cursor = document.querySelector('.custom-cursor');
    const hoverables = document.querySelectorAll('a, button, .menu-trigger, .menu-close, input, textarea');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverables.forEach(elem => {
        elem.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        elem.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });

    // --- Fullscreen Menu ---
    const menuTrigger = document.querySelector('.menu-trigger');
    const menuClose = document.querySelector('.menu-close');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    menuTrigger.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
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

    window.addEventListener('scroll', () => {
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
    });
});
