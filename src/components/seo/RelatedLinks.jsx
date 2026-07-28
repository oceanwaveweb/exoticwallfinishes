import Link from 'next/link';

export default function RelatedLinks() {
    const linkCategories = [
        {
            title: "Architectural Finishes & Atelier",
            links: [
                { label: "Exhibition Portfolio Gallery", href: "/gallery" }
            ]
        },
        {
            title: "Contracting Services & Portfolio",
            links: [
                { label: "Bespoke Residential Feature Wall Commission", href: "/commission" },
                { label: "Artisan Studio & Founder Credentials", href: "/studio" }
            ]
        },
        {
            title: "Architectural Specifications & Guides",
            links: [
                { label: "Microcement vs Venetian Plaster Guide", href: "/guides/microcement-vs-venetian-plaster" },
                { label: "Architectural Specification Checklist", href: "/resources/guides/architectural-plaster-specifications-checklist" },
                { label: "Material Comparison: Plaster vs Microcement", href: "/resources/venetian-plaster-vs-microcement-vs-lime-wash" }
            ]
        },
        {
            title: "Architectural Journal & Field Notes",
            links: [
                { label: "Ultimate Guide to Venetian Plastering", href: "/journal/ultimate-guide-to-venetian-plaster-tools-and-trowels" },
                { label: "Bathroom & Shower Plastering Guide", href: "/journal/how-to-apply-venetian-plaster-in-bathrooms-and-shower-zones" },
                { label: "Architect's Guide to Specifying Finishes", href: "/journal/architects-guide-to-specifying-artisan-wall-finishes" },
                { label: "Preventing Cracking & Adhesion Failures", href: "/journal/preventing-cracking-and-adhesion-failures-in-lime-plaster" }
            ]
        }
    ];

    return (
        <>
            <style>{`
                .directory-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem 2.5rem;
                    align-items: start;
                }
                @media (min-width: 640px) {
                    .directory-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .directory-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem 3rem;
                    }
                }
                .directory-col-title {
                    font-family: var(--font-sans), sans-serif;
                    font-size: 0.7rem;
                    font-weight: 500;
                    color: var(--accent-gold);
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    position: relative;
                    line-height: 1.6;
                }
                .directory-col-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 24px;
                    height: 1px;
                    background: var(--accent-gold);
                    opacity: 0.5;
                    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .directory-col:hover .directory-col-title::after {
                    width: 48px;
                    opacity: 0.8;
                }
                .directory-link {
                    display: flex;
                    align-items: flex-start;
                    gap: 0;
                    color: var(--text-light);
                    text-decoration: none;
                    font-size: 0.875rem;
                    line-height: 1.55;
                    opacity: 0.6;
                    transition: opacity 0.3s ease, color 0.3s ease, transform 0.3s ease;
                    padding: 0.35rem 0;
                    letter-spacing: 0.2px;
                }
                .directory-link:hover {
                    opacity: 1;
                    color: var(--accent-gold);
                }
                .directory-link .link-arrow {
                    display: inline-block;
                    margin-right: 0.5rem;
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    flex-shrink: 0;
                    font-size: 0.75rem;
                    margin-top: 0.15rem;
                }
                .directory-link:hover .link-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }
                .directory-section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .directory-section-header .overline-tag {
                    display: inline-block;
                    font-family: var(--font-sans), sans-serif;
                    font-size: 0.65rem;
                    font-weight: 400;
                    color: var(--accent-gold);
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.7;
                }
                .directory-section-header h2 {
                    font-family: var(--font-serif), serif;
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 300;
                    color: var(--text-light);
                    margin-top: 0.75rem;
                    letter-spacing: 0.5px;
                    line-height: 1.3;
                }
                .directory-divider {
                    width: 40px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
                    margin: 1rem auto 0;
                    opacity: 0.4;
                }
            `}</style>
            <section
                className="related-links-section"
                style={{
                    padding: 'clamp(4rem, 8vw, 7rem) 0',
                    background: '#020202',
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)'
                }}
            >
                <div className="container">
                    <div className="directory-section-header">
                        <span className="overline-tag">Explore Directory</span>
                        <h2>Architectural Finish &amp; Specification Directory</h2>
                        <div className="directory-divider" />
                    </div>

                    <div className="directory-grid">
                        {linkCategories.map((cat, idx) => (
                            <div key={idx} className="directory-col">
                                <h3 className="directory-col-title">
                                    {cat.title}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                                    {cat.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link
                                                href={link.href}
                                                className="directory-link"
                                            >
                                                <span className="link-arrow">→</span>
                                                <span>{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
