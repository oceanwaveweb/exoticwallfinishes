'use client';
import Link from 'next/link';

export default function CtaBanner({
    title = "Request Project Specifications & Sample Boards",
    subtitle = "Experience handcrafted physical sample boards delivered to your practice, or schedule a project consultation with master artisan Gian Carlo Sagasti.",
    primaryCtaText = "Order Sample Box",
    primaryCtaLink = "/atelier",
    secondaryCtaText = "Schedule Consultation",
    secondaryCtaLink = "/commission"
}) {
    return (
        <div
            style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(25, 22, 15, 0.95) 0%, rgba(8, 8, 8, 0.98) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '4rem 2.5rem',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
                overflow: 'hidden',
                margin: '4rem auto 0',
                maxWidth: '950px'
            }}
        >
            {/* Ambient Background Glow Accent */}
            <div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '350px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                    pointerEvents: 'none',
                    filter: 'blur(30px)'
                }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="overline" style={{ color: 'var(--accent-gold)', letterSpacing: '2px', fontSize: '0.8rem', display: 'inline-block', marginBottom: '0.8rem' }}>
                    [ ARCHITECTURAL SUBMITTALS & SAMPLES ]
                </span>

                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#ffffff', fontFamily: 'var(--font-heading, inherit)', fontWeight: '700', lineHeight: '1.3', marginBottom: '1.2rem' }}>
                    {title}
                </h2>

                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.82)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
                    {subtitle}
                </p>

                <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link
                        href={primaryCtaLink}
                        style={{
                            padding: '1.1rem 2.2rem',
                            background: 'var(--accent-gold)',
                            color: '#000000',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                            minWidth: '200px'
                        }}
                        className="gold-btn-hover"
                    >
                        {primaryCtaText} →
                    </Link>

                    <Link
                        href={secondaryCtaLink}
                        style={{
                            padding: '1.1rem 2.2rem',
                            background: 'rgba(255, 255, 255, 0.04)',
                            color: '#ffffff',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            minWidth: '200px'
                        }}
                        className="outline-btn-hover"
                    >
                        {secondaryCtaText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
