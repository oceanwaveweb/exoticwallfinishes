'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import FaqSection from '@/components/seo/FaqSection';
import RelatedLinks from '@/components/seo/RelatedLinks';

const MATERIAL_SPECS = [
    {
        name: "Venetian Plaster",
        tag: "AUTENTICO LIME",
        specs: [
            { label: "Composition & Slake Type", value: "Aged slaked lime paste (Grassello di Calce) blended with fine marble dust aggregates. Cures via natural CO₂ carbonization back into solid limestone." },
            { label: "Waterproof & Shower Grade", value: "Water-resistant when sealed with Marseille soap or beeswax. Ideal for bathroom accent walls outside direct shower spray zones." },
            { label: "Texture Profile", value: "Mirror-gloss glass reflection (Grassello) or velvety satin stone with tactile depth (Marmorino)." },
            { label: "Application & Coats", value: "Hand-troweled in 2–3 ultra-thin layers using Pavan stainless steel trowels, then burnished under high-pressure friction." },
            { label: "Installed Cost Range", value: "$18 – $35+ per sq ft, installed by certified artisan." },
            { label: "When to Specify", value: "Luxury living rooms, dining rooms, master bedrooms, foyer ceilings, and fireplace surrounds where mirror gloss or rich marble depth is desired." }
        ]
    },
    {
        name: "Seamless Microcement",
        tag: "HIGH-TRAFFIC WETROOM",
        specs: [
            { label: "Composition & Slake Type", value: "Polymer-modified cementitious resin system with quartz aggregates, silica additives, and flexible 2-component resin bond." },
            { label: "Waterproof & Shower Grade", value: "100% waterproof. Continuous seamless surface ideal for shower floors, walls, bathtubs, and vanity countertops." },
            { label: "Texture Profile", value: "Seamless monolithic matte slate or micro-textured architectural concrete with subtle industrial movement." },
            { label: "Application & Coats", value: "5-layer system: quartz primer, fiberglass mesh, basecoat microcement, 2 finish coats, and polyurethane sealers." },
            { label: "Installed Cost Range", value: "$25 – $45+ per sq ft, installed with waterproof membrane." },
            { label: "When to Specify", value: "High-traffic commercial floors, residential wetrooms, walk-in shower stalls, vanity tops, and outdoor pool decks requiring 100% waterproofing." }
        ]
    },
    {
        name: "Italian Lime Wash",
        tag: "SOFT MINERAL PAINT",
        specs: [
            { label: "Composition & Slake Type", value: "Hydrated lime paste diluted with natural mineral earth pigments and water. Light chalky mineral bond with matte breathable finish." },
            { label: "Waterproof & Shower Grade", value: "Not recommended for direct water contact. Suitable for dry interior walls and sheltered exterior masonry only." },
            { label: "Texture Profile", value: "Soft, chalky, multi-tonal brushed texture with organic movement and gentle color variation." },
            { label: "Application & Coats", value: "Applied using a 4-inch cross-hatching masonry brush in 2 overlapping coats over porous mineral substrates." },
            { label: "Installed Cost Range", value: "$8 – $15 per sq ft, installed or premium material kit." },
            { label: "When to Specify", value: "Interior accent walls where a soft, matte, mineral paint finish with delicate brushstroke movement is desired, with zero heavy plaster weight." }
        ]
    }
];

export default function ComparisonClient() {
    return (
        <main style={{ background: '#020202', color: 'var(--text-light)', minHeight: '100vh' }}>
            <ClientEffects />
            <Navbar />

            <style>{`
                .comparison-hero-overline {
                    font-family: var(--font-sans), sans-serif;
                    font-size: 0.65rem;
                    font-weight: 400;
                    color: var(--accent-gold);
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.7;
                }
                .comparison-hero-title {
                    font-family: var(--font-serif), serif;
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 300;
                    letter-spacing: 0.5px;
                    color: #fff;
                    margin-top: 1rem;
                    line-height: 1.25;
                }
                .comparison-hero-desc {
                    max-width: 720px;
                    margin: 1.5rem auto 0;
                    font-size: 1.05rem;
                    color: #a8a8a8;
                    line-height: 1.75;
                    letter-spacing: 0.2px;
                }

                /* 3-column spec matrix */
                .spec-matrix {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    margin-bottom: 5rem;
                }
                @media (min-width: 1024px) {
                    .spec-matrix {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2.5rem;
                    }
                }
                .spec-column {
                    border-top: 1px solid rgba(255, 255, 255, 0.15);
                    padding-top: 2rem;
                }
                .spec-col-tag {
                    font-family: var(--font-sans), sans-serif;
                    font-size: 0.6rem;
                    font-weight: 500;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--accent-gold);
                    opacity: 0.7;
                    margin-bottom: 0.5rem;
                }
                .spec-col-name {
                    font-family: var(--font-serif), serif;
                    font-size: 1.5rem;
                    font-weight: 300;
                    color: #fff;
                    letter-spacing: 0.5px;
                    margin-bottom: 2.5rem;
                    line-height: 1.3;
                }

                /* Key-value spec pairs */
                .spec-pair {
                    margin-bottom: 1.8rem;
                }
                .spec-pair-label {
                    font-family: var(--font-sans), sans-serif;
                    font-size: 0.65rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(212, 175, 55, 0.65);
                    margin-bottom: 0.5rem;
                }
                .spec-pair-value {
                    font-size: 0.9rem;
                    color: #b8b8b8;
                    line-height: 1.7;
                    letter-spacing: 0.15px;
                }

            `}</style>

            <section style={{ paddingTop: '14rem', paddingBottom: '6rem' }}>
                <div className="container">
                    {/* HERO */}
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="comparison-hero-overline">Material Comparison</span>
                        <h1 className="comparison-hero-title">
                            Venetian Plaster vs. Microcement vs. Lime Wash
                        </h1>
                        <p className="comparison-hero-desc">
                            Comprehensive architectural comparison detailing composition, durability, wet area shower suitability, texture profiles, and square-footage cost.
                        </p>
                    </div>

                    {/* 3-COLUMN SPEC MATRIX */}
                    <div className="spec-matrix">
                        {MATERIAL_SPECS.map((material, idx) => (
                            <div key={idx} className="spec-column">
                                <div className="spec-col-tag">{material.tag}</div>
                                <h2 className="spec-col-name">{material.name}</h2>
                                {material.specs.map((spec, sIdx) => (
                                    <div key={sIdx} className="spec-pair">
                                        <div className="spec-pair-label">{spec.label}</div>
                                        <div className="spec-pair-value">{spec.value}</div>
                                    </div>
                                ))}
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
