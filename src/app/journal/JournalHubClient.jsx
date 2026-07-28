'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { JOURNAL_ARTICLES } from '@/data/journal';

export default function JournalHubClient() {
    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            {/* HERO SECTION */}
            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ ARCHITECTURAL JOURNAL ]</span>
                        <h1 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginTop: '1rem' }}>
                            The Exotic Journal
                        </h1>
                        <p className="body-text" style={{ maxWidth: '750px', margin: '1.5rem auto 0', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                            Field notes, technical specifications, tool metallurgy, and architectural guides on authentic Italian lime plaster, Marmorino, and microcement.
                        </p>
                    </div>

                    {/* EDITORIAL GRID */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                        <style>{`
                            .journal-card {
                                background: rgba(255, 255, 255, 0.02);
                                border-radius: 12px;
                                border: 1px solid rgba(255, 255, 255, 0.1);
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.4s ease, box-shadow 0.4s ease;
                            }
                            .journal-card:hover {
                                transform: translateY(-4px);
                                border-color: rgba(212, 175, 55, 0.4);
                                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
                            }
                            .journal-card-img-wrap {
                                position: relative;
                                aspect-ratio: 16 / 9;
                                width: 100%;
                                overflow: hidden;
                            }
                            .journal-card-img-wrap img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                            }
                            .journal-card:hover .journal-card-img-wrap img {
                                transform: scale(1.05);
                            }
                            .journal-card-img-overlay {
                                position: absolute;
                                inset: 0;
                                background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%);
                                pointer-events: none;
                                z-index: 1;
                            }
                            .journal-card-badge {
                                position: absolute;
                                top: 1rem;
                                left: 1rem;
                                background: rgba(0, 0, 0, 0.8);
                                backdrop-filter: blur(8px);
                                -webkit-backdrop-filter: blur(8px);
                                border: 1px solid rgba(212, 175, 55, 0.5);
                                padding: 0.4rem 0.8rem;
                                border-radius: 4px;
                                font-size: 0.7rem;
                                font-weight: 500;
                                color: var(--accent-gold);
                                letter-spacing: 1.5px;
                                text-transform: uppercase;
                                z-index: 2;
                            }
                        `}</style>
                        {JOURNAL_ARTICLES.map((article, idx) => (
                            <article
                                key={idx}
                                className="journal-card"
                            >
                                <div className="journal-card-img-wrap">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        loading={idx < 3 ? 'eager' : 'lazy'}
                                    />
                                    <div className="journal-card-img-overlay" />
                                    <div className="journal-card-badge">
                                        {article.category}
                                    </div>
                                </div>

                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                            <span>{article.date}</span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>

                                        <h2 style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '1rem', color: '#fff' }}>
                                            <Link href={`/journal/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {article.title}
                                            </Link>
                                        </h2>

                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/journal/${article.slug}`}
                                        style={{
                                            color: 'var(--accent-gold)',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            fontSize: '0.9rem',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection />
            <RelatedLinks />
            <Footer />
        </main>
    );
}
