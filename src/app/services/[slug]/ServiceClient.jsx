'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

export default function ServiceClient({ service }) {
    if (!service) return null;

    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            {/* HERO SECTION */}
            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container">
                    {/* BREADCRUMB */}
                    <nav style={{ marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 0.5rem' }}>/</span>
                        <Link href="/commission" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
                        <span style={{ margin: '0 0.5rem' }}>/</span>
                        <span style={{ color: 'var(--accent-gold)' }}>{service.title}</span>
                    </nav>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* SERVICE DETAILS */}
                        <div>
                            <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ {service.category} ]</span>
                            <h1 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginTop: '0.8rem', lineHeight: '1.2' }}>
                                {service.title}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: '1.5rem 0 2rem' }}>
                                {service.description}
                            </p>

                            {/* FEATURES LIST */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Service Standards & Guarantee</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {service.features.map((feat, idx) => (
                                        <li key={idx} style={{ color: 'var(--text-light)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                            <span style={{ color: 'var(--accent-gold)' }}>✓</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link href="/commission" className="brutal-btn" style={{ flex: 1, textAlign: 'center' }}>
                                    Request Project Quote
                                </Link>
                                <Link href="/atelier" className="brutal-btn" style={{ flex: 1, textAlign: 'center', background: '#fff', color: '#000' }}>
                                    Order Sample Box
                                </Link>
                            </div>
                        </div>

                        {/* SERVICE IMAGE */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '480px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* PROCESS DETAILS GRID */}
                    <div style={{ marginTop: '5rem', background: 'rgba(255,255,255,0.02)', padding: '3.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '2.5rem' }}>Contracting Protocol & Execution</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
                            {service.details.map((det, idx) => (
                                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>STEP 0{idx + 1}</span>
                                    <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.8rem' }}>{det.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{det.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection />
            <RelatedLinks />
            <Footer />
        </main>
    );
}
