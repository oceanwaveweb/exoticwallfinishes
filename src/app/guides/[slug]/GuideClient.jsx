'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

export default function GuideClient({ guide }) {
    if (!guide) return null;

    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            {/* HERO SECTION */}
            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    {/* BREADCRUMB */}
                    <nav style={{ marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 0.5rem' }}>/</span>
                        <Link href="/journal" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Guides</Link>
                        <span style={{ margin: '0 0.5rem' }}>/</span>
                        <span style={{ color: 'var(--accent-gold)' }}>{guide.title}</span>
                    </nav>

                    <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ {guide.category} ]</span>
                    <h1 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginTop: '0.8rem', lineHeight: '1.25' }}>
                        {guide.title}
                    </h1>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
                        <span>Published: {guide.date}</span>
                        <span>•</span>
                        <span>{guide.readTime}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--accent-gold)' }}>By Gian Carlo Sagasti</span>
                    </div>

                    {/* FEATURED IMAGE */}
                    <div style={{ borderRadius: '12px', overflow: 'hidden', height: '420px', marginBottom: '3.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src={guide.image} alt={guide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* GUIDE SECTIONS */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {guide.sections.map((sec, idx) => (
                            <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                <h2 style={{ fontSize: '1.6rem', color: 'var(--accent-gold)', marginBottom: '1.2rem' }}>{sec.heading}</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.85', margin: 0, opacity: 0.9 }}>{sec.body}</p>
                            </div>
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
