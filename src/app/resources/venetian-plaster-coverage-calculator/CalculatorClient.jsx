'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

export default function CalculatorClient() {
    const [sqft, setSqft] = useState(500);
    const [plasterType, setPlasterType] = useState('grassello');
    const [coats, setCoats] = useState(2);
    const [porosity, setPorosity] = useState('standard');

    // Rates in kg per sq ft per 2 coats
    const rates = {
        grassello: { name: 'Grassello di Calce (High Gloss)', baseKgPerSqFt: 0.11, pricePerKg: 8.5 },
        marmorino_fine: { name: 'Marmorino Fine (Satin Marble)', baseKgPerSqFt: 0.16, pricePerKg: 9.0 },
        marmorino_coarse: { name: 'Marmorino Coarse (Pitted Stone)', baseKgPerSqFt: 0.23, pricePerKg: 9.5 },
        lime_paint: { name: 'Italian Lime Wash Paint', baseKgPerSqFt: 0.04, pricePerKg: 6.5 }
    };

    const porosityMultipliers = {
        standard: 1.0,
        porous: 1.15,
        masonry: 1.25
    };

    const selectedPlaster = rates[plasterType];
    const porosityMult = porosityMultipliers[porosity];
    const coatMultiplier = coats / 2;

    const totalWeightKg = Math.round(sqft * selectedPlaster.baseKgPerSqFt * coatMultiplier * porosityMult);
    const totalWeightLbs = Math.round(totalWeightKg * 2.20462);

    // Standard bucket size = 24 kg
    const buckets24kg = Math.ceil(totalWeightKg / 24);

    // Primer coverage: ~300 sq ft per gallon
    const primerGallons = Math.ceil(sqft / 300);

    // Wax coverage: ~500 sq ft per liter
    const waxLiters = Math.max(1, Math.ceil(sqft / 500));

    // Estimated material cost
    const estimatedMinCost = Math.round(totalWeightKg * selectedPlaster.pricePerKg);
    const estimatedMaxCost = Math.round(estimatedMinCost * 1.3);

    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="overline" style={{ color: 'var(--accent-gold)' }}>[ TRADE TOOL ]</span>
                        <h1 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginTop: '1rem' }}>
                            Venetian Plaster Coverage Calculator
                        </h1>
                        <p className="body-text" style={{ maxWidth: '750px', margin: '1.5rem auto 0', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                            Calculate total material weight (kg/lbs), 24kg bucket counts, quartz primer volume, and estimated material costs for Grassello, Marmorino, and Lime Washes.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
                        
                        {/* INPUT PANEL */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>1. Project Parameters</h2>

                            {/* Square Footage Slider */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>
                                    Total Surface Area: <strong style={{ color: '#fff', fontSize: '1.2rem' }}>{sqft} sq ft</strong>
                                </label>
                                <input
                                    type="range"
                                    min="50"
                                    max="5000"
                                    step="50"
                                    value={sqft}
                                    onChange={(e) => setSqft(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
                                />
                                <input
                                    type="number"
                                    value={sqft}
                                    onChange={(e) => setSqft(Number(e.target.value))}
                                    style={{ width: '100%', marginTop: '0.8rem', padding: '0.8rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px' }}
                                />
                            </div>

                            {/* Plaster Finish Type */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>
                                    Select Lime Plaster Finish:
                                </label>
                                <select
                                    value={plasterType}
                                    onChange={(e) => setPlasterType(e.target.value)}
                                    style={{ width: '100%', padding: '0.9rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', fontSize: '1rem' }}
                                >
                                    <option value="grassello">Grassello di Calce (High Gloss Mirror)</option>
                                    <option value="marmorino_fine">Marmorino Fine (Satin Marble)</option>
                                    <option value="marmorino_coarse">Marmorino Coarse (Pitted Stone)</option>
                                    <option value="lime_paint">Italian Lime Wash Paint</option>
                                </select>
                            </div>

                            {/* Coat Count */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>
                                    Number of Applied Coats:
                                </label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {[2, 3, 4].map((c) => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setCoats(c)}
                                            style={{
                                                flex: 1,
                                                padding: '0.8rem',
                                                background: coats === c ? 'var(--accent-gold)' : '#0a0a0a',
                                                color: coats === c ? '#000' : '#fff',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '6px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {c} Coats
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Substrate Porosity */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>
                                    Substrate Condition / Porosity:
                                </label>
                                <select
                                    value={porosity}
                                    onChange={(e) => setPorosity(e.target.value)}
                                    style={{ width: '100%', padding: '0.9rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', fontSize: '1rem' }}
                                >
                                    <option value="standard">Standard Level 5 Drywall (Primed)</option>
                                    <option value="porous">Porous Cement Board (+15% Material)</option>
                                    <option value="masonry">Unprimed Masonry / Stucco (+25% Material)</option>
                                </select>
                            </div>
                        </div>

                        {/* OUTPUT RESULTS PANEL */}
                        <div style={{ background: 'rgba(212, 175, 55, 0.03)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>2. Material Estimate Output</h2>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Total Plaster Weight</span>
                                        <strong style={{ fontSize: '1.6rem', color: '#fff' }}>{totalWeightKg} kg</strong>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', display: 'block' }}>({totalWeightLbs} lbs)</span>
                                    </div>

                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Standard 24kg Buckets</span>
                                        <strong style={{ fontSize: '1.6rem', color: '#fff' }}>{buckets24kg} Buckets</strong>
                                    </div>

                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Quartz Primer</span>
                                        <strong style={{ fontSize: '1.4rem', color: '#fff' }}>{primerGallons} Gallon(s)</strong>
                                    </div>

                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Protective Wax</span>
                                        <strong style={{ fontSize: '1.4rem', color: '#fff' }}>{waxLiters} Liter(s)</strong>
                                    </div>
                                </div>

                                <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--accent-gold)' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block' }}>Estimated Material Cost Range</span>
                                    <strong style={{ fontSize: '2rem', color: 'var(--accent-gold)' }}>${estimatedMinCost} – ${estimatedMaxCost} USD</strong>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', margin: 0 }}>*Excludes labor and custom tinting fees. Subject to job site waste allowance.</p>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                                <Link href="/atelier" className="brutal-btn" style={{ flex: 1, textAlign: 'center', padding: '1rem', fontSize: '0.9rem' }}>
                                    Order Sample Box
                                </Link>
                                <Link href="/commission" className="brutal-btn" style={{ flex: 1, textAlign: 'center', padding: '1rem', fontSize: '0.9rem', background: '#fff', color: '#000' }}>
                                    Request Contractor Quote
                                </Link>
                            </div>
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
