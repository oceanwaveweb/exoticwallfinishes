'use client';
import { useState } from 'react';

const FAQ_DATA = [
    {
        question: "What substrate preparation is required before applying Grassello di Calce or Marmorino?",
        answer: "Substrates must be smooth, structurally sound, and finished to a Level 5 drywall specification. Apply one to two coats of an acrylic mineral quartz primer (such as Quartz Primer) to ensure uniform absorption and mechanical keying before troweling authentic slaked lime plaster."
    },
    {
        question: "Can Venetian plaster or Microcement be installed in shower wetrooms and bathrooms?",
        answer: "Yes! For shower interiors and direct water exposure, we install a seamless 2-component waterproof Microcement system sealed with polyurethane. For bathroom accent walls outside direct shower spray, authentic lime-based Venetian plaster and Marmorino sealed with hydrophobic olive oil soap (Marseille soap) or cera wax provide excellent moisture resistance."
    },
    {
        question: "What are the curing and drying times for Italian lime plaster?",
        answer: "Lime plaster sets via water evaporation and carbonization (absorbing atmospheric CO₂ to revert back into solid limestone). Allow 12 to 24 hours of drying time between coats. Full carbonization and hardness are achieved over 28 days."
    },
    {
        question: "Can Exotic Wall Finishes match custom colors for Marmorino and lime washes?",
        answer: "Absolutely. We tint our authentic Italian lime plasters using UV-stable inorganic mineral pigments, allowing us to formulate custom color matches for interior designers, architects, and luxury homeowners."
    },
    {
        question: "How do you maintain and clean polished Venetian plaster walls?",
        answer: "Clean polished lime plaster surfaces with a soft microfiber cloth dampened with warm water and natural Marseille soap. Avoid abrasive sponges, acidic cleaners, or solvent-based chemicals. Reapply protective wax every 3 to 5 years in high-traffic commercial environments."
    },
    {
        question: "What trowels and tools are recommended for burnishing Venetian plaster?",
        answer: "We recommend imported Italian stainless steel trowels (such as Pavan trapezoid trowels) featuring pre-ground beveled edges, mirror-polished flexible steel blades, and ergonomic rubber or wooden handles to eliminate black metal marks during burnishing."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': FAQ_DATA.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer
            }
        }))
    };

    return (
        <section className="faq-section" style={{ padding: '8rem 0', background: 'rgba(5, 5, 5, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ FAQ ]</span>
                    <h2 className="display-title" style={{ marginTop: '1rem' }}>Architectural & Technical Q&A</h2>
                    <p className="body-text" style={{ maxWidth: '650px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
                        Expert insights into substrate prep, curing carbonization, hydrophobic waxing, and seamless microcement applications.
                    </p>
                </div>

                <div className="faq-accordion-container" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {FAQ_DATA.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="faq-item"
                                style={{
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '8px',
                                    background: isOpen ? 'rgba(212, 175, 55, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                                    transition: 'all 0.3s ease',
                                    overflow: 'hidden'
                                }}
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    style={{
                                        width: '100%',
                                        padding: '1.8rem 2rem',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text-light)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontSize: '1.15rem',
                                        fontWeight: '600',
                                        fontFamily: 'var(--font-heading, inherit)'
                                    }}
                                >
                                    <span>{faq.question}</span>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--accent-gold)',
                                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        marginLeft: '1rem'
                                    }}>+</span>
                                </button>

                                {isOpen && (
                                    <div style={{ padding: '0 2rem 2rem 2rem', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem' }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
