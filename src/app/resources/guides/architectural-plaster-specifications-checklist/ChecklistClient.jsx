'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

const CHECKLIST_PHASES = [
    {
        title: "Phase 1: Substrate Preparation & Level 5 Spec",
        items: [
            { id: "p1_1", text: "Verify drywall installation complies with ASTM C840 Level 5 specification (skim coated smooth)." },
            { id: "p1_2", text: "Ensure joint compound is fully cured and sanded with zero gouges, ridge marks, or dust." },
            { id: "p1_3", text: "Test substrate moisture content using a pinless moisture meter (must be below 12%)." },
            { id: "p1_4", text: "Confirm surface flatness tolerance does not exceed 1/8 inch deviation over 10 linear feet." }
        ]
    },
    {
        title: "Phase 2: Mineral Primer & Keying Coat",
        items: [
            { id: "p2_1", text: "Apply one coat of acrylic mineral quartz keying primer using a 3/8-inch nap roller." },
            { id: "p2_2", text: "Ensure complete 100% surface opacity with aggregate evenly distributed for mechanical bond." },
            { id: "p2_3", text: "Allow primer to cure for a minimum of 12 hours prior to plaster basecoat application." }
        ]
    },
    {
        title: "Phase 3: Base Coat & Fiberglass Mesh Reinforcement",
        items: [
            { id: "p3_1", text: "Embed 4.5 oz alkali-resistant fiberglass mesh across drywall joint seams and corners." },
            { id: "p3_2", text: "Trowel uniform 1.0mm to 1.5mm scratch coat of Marmorino Coarse or Intonachino base." },
            { id: "p3_3", text: "Allow base coat to dry for 24 hours until carbonization initiates." }
        ]
    },
    {
        title: "Phase 4: Finish Troweling & Mechanical Burnishing",
        items: [
            { id: "p4_1", text: "Apply second coat of Grassello di Calce or Marmorino Fine using Pavan stainless beveled trowel." },
            { id: "p4_2", text: "Apply tight third coat in sweeping random arc motions to generate multi-dimensional depth." },
            { id: "p4_3", text: "Burnish surface using high-pressure stainless blade passes while wet edge cures." }
        ]
    },
    {
        title: "Phase 5: Hydrophobic Sealing & Protection",
        items: [
            { id: "p5_1", text: "Allow plaster to dry 48 hours before wax or soap sealer application." },
            { id: "p5_2", text: "Trowel or sponge natural Marseille olive oil soap or hydrophobic paste wax sealer." },
            { id: "p5_3", text: "Buff sealer with clean microfiber cloth to lock in hydrophobic protection." }
        ]
    }
];

export default function ChecklistClient() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleItem = (id) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const totalItems = CHECKLIST_PHASES.reduce((acc, p) => acc + p.items.length, 0);
    const completedCount = Object.values(checkedItems).filter(Boolean).length;
    const progressPercent = Math.round((completedCount / totalItems) * 100);

    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ SPECIFICATION CHECKLIST ]</span>
                        <h1 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', marginTop: '1rem' }}>
                            Architectural Venetian Plaster Specification Checklist
                        </h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '1.5rem auto 0', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                            Field specification protocol for architects, interior designers, and general contractors. Verify Level 5 drywall prep, quartz primers, Pavan trowel burnishing, and hydrophobic waxing.
                        </p>

                        {/* Progress Bar & Actions */}
                        <div style={{ maxWidth: '600px', margin: '2.5rem auto 0', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                                <span>Verification Progress: <strong style={{ color: 'var(--accent-gold)' }}>{completedCount} of {totalItems} Passed</strong></span>
                                <span>{progressPercent}% Complete</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#111', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--accent-gold)', transition: 'width 0.3s ease' }}></div>
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <button
                                    onClick={() => typeof window !== 'undefined' && window.print()}
                                    style={{ padding: '0.6rem 1.2rem', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
                                >
                                    🖨️ Print / Save PDF
                                </button>
                                <button
                                    onClick={() => setCheckedItems({})}
                                    style={{ padding: '0.6rem 1.2rem', background: 'none', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                                >
                                    Reset Checklist
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CHECKLIST PHASES */}
                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {CHECKLIST_PHASES.map((phase, pIdx) => (
                            <div key={pIdx} style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                <h2 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{phase.title}</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {phase.items.map((item) => {
                                        const isChecked = Boolean(checkedItems[item.id]);
                                        return (
                                            <label
                                                key={item.id}
                                                onClick={() => toggleItem(item.id)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '1rem',
                                                    padding: '1rem',
                                                    background: isChecked ? 'rgba(212, 175, 55, 0.05)' : 'rgba(0,0,0,0.3)',
                                                    borderRadius: '8px',
                                                    border: isChecked ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => {}}
                                                    style={{ width: '18px', height: '18px', marginTop: '3px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
                                                />
                                                <span style={{ fontSize: '1.05rem', color: isChecked ? '#fff' : 'var(--text-muted)', textDecoration: isChecked ? 'line-through' : 'none', lineHeight: '1.6' }}>
                                                    {item.text}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
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
