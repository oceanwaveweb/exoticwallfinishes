'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import RelatedLinks from '@/components/seo/RelatedLinks';

export default function ArticleClient({ article }) {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    if (!article) return null;

    const toggleFaq = (idx) => {
        setOpenFaqIndex(openFaqIndex === idx ? null : idx);
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': article.faqs.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer
            }
        }))
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://www.exoticwallfinishes.com/journal/${article.slug}/#article`,
        'headline': article.title,
        'description': article.excerpt,
        'image': `https://www.exoticwallfinishes.com${article.image}`,
        'datePublished': '2026-01-15T08:00:00+00:00',
        'dateModified': '2026-02-14T08:00:00+00:00',
        'author': {
            '@type': 'Person',
            'name': article.author,
            'jobTitle': 'Master Artisan & Visionary'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'Exotic Wall Finishes & Design',
            'logo': 'https://www.exoticwallfinishes.com/images/Footer_WFD.png'
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://www.exoticwallfinishes.com/journal/${article.slug}`
        }
    };

    // Helper to format body text with markdown headers & paragraphs
    const renderFormattedContent = (contentStr) => {
        const lines = contentStr.trim().split('\n');
        return lines.map((line, idx) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('# ')) {
                return null; // Skip main H1 in body as it's in hero
            }
            if (trimmed.startsWith('## ')) {
                return <h2 key={idx} style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginTop: '3rem', marginBottom: '1.2rem', lineHeight: '1.3' }}>{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
                return <h3 key={idx} style={{ fontSize: '1.4rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- ')) {
                return <li key={idx} style={{ marginLeft: '1.5rem', marginBottom: '0.6rem', color: 'var(--text-light)', lineHeight: '1.7' }}>{trimmed.replace('- ', '')}</li>;
            }
            if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
                return <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-gold)' }}>{trimmed}</p>;
            }
            if (trimmed === '') return null;
            return <p key={idx} style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.85', marginBottom: '1.5rem', opacity: 0.9 }}>{trimmed}</p>;
        });
    };

    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO ARTICLE HEADER */}
            <header style={{ paddingTop: '14rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Link href="/journal" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>
                        ← Back to Architectural Journal
                    </Link>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                    </div>

                    <h1 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: '1.25', marginBottom: '2rem' }}>
                        {article.title}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#000', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                            GC
                        </div>
                        <div>
                            <strong style={{ display: 'block', color: '#fff' }}>{article.author}</strong>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Novacolor Ambassador & Master Plasterer</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* FEATURED COVER IMAGE */}
            <div className="container" style={{ maxWidth: '1000px', marginTop: '3rem', marginBottom: '4rem' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16 / 9', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', pointerEvents: 'none' }} />
                </div>
            </div>

            {/* ARTICLE CONTENT */}
            <section className="container" style={{ maxWidth: '850px', marginBottom: '6rem' }}>
                <div className="article-body">
                    {renderFormattedContent(article.content)}
                </div>
            </section>

            {/* EXPANDABLE FAQ SECTION FOR THIS ARTICLE */}
            <section style={{ padding: '6rem 0', background: 'rgba(5, 5, 5, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ ARTICLE FAQ ]</span>
                        <h2 style={{ fontSize: '2rem', marginTop: '0.8rem', color: '#fff' }}>Frequently Asked Questions</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {article.faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '8px',
                                        background: isOpen ? 'rgba(212, 175, 55, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            padding: '1.5rem',
                                            background: 'none',
                                            border: 'none',
                                            color: '#fff',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            fontSize: '1.1rem',
                                            fontWeight: '600'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <span style={{ color: 'var(--accent-gold)', marginLeft: '1rem', fontSize: '1.4rem' }}>{isOpen ? '-' : '+'}</span>
                                    </button>

                                    {isOpen && (
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <RelatedLinks />
            <Footer />
        </main>
    );
}
