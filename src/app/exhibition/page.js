import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function ExhibitionPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />

            {/* --- 1. The Gallery --- */}
            <section className="exhibition-page-gallery">
                <div className="container" style={{ paddingTop: '15rem', paddingBottom: '10rem' }}>
                    <span className="overline">Exhibition</span>
                    <h1 className="display-title outline-text" style={{ marginBottom: '5rem' }}>PORTFOLIO</h1>

                    <div className="masonry-grid reveals fade-in-up">
                        <div className="masonry-item item-large">
                            <img src="/images/hero_plaster_wall_1772909184023.png" alt="Anthracite Gold Vein Project" />
                            <div className="picture-meta">
                                <h3>Void & Metal</h3>
                                <span>Anthracite / Gold Vein</span>
                            </div>
                        </div>
                        <div className="masonry-item item-portrait">
                            <video src="/images/portfolio_office_1772916057766.mp4" autoPlay loop muted playsInline></video>
                            <div className="picture-meta">
                                <h3>Corporate Brutalism</h3>
                                <span>Oxidized Metallic Bronze</span>
                            </div>
                        </div>
                        <div className="masonry-item item-square">
                            <video src="/images/portfolio_bathroom_1772916040233.mp4" autoPlay loop muted playsInline></video>
                            <div className="picture-meta">
                                <h3>Terracotta Monolith</h3>
                                <span>Seamless Waterproof Tadelakt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. Avant-Garde Venetian Plaster Experience --- */}
            <section className="venetian-immersive" id="venetian-plaster">
                <div className="venetian-parallax-bg"></div>

                <div className="giant-bleed-text">AURA OF VENICE</div>

                <div className="container immersive-container">
                    <div className="immersive-header reveals fade-in-up">
                        <span className="overline">Master Material</span>
                        <h2 className="display-title outline-text" style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', marginBottom: '2rem' }}>VENETIAN<br />PLASTER</h2>
                        <p className="body-text" style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            A living architectural dimension. Not merely a paint, but a monolithic surface that chemically reverts back into solid limestone on your walls.
                        </p>
                    </div>

                    <div className="immersive-overlap-grid">
                        <div className="overlap-image reveals fade-in-up delay-1">
                            <img src="/images/venetian_plaster_wall.png" alt="Raw Venetian Plaster Wall" className="static-color" />
                        </div>

                        <div className="overlap-card card-1 reveals slide-in-left">
                            <span className="card-num">01</span>
                            <h3>Ancient Rome</h3>
                            <p>Discovered as a means to replicate the sheer opulence of solid marble without the crushing architectural weight.</p>
                        </div>

                        <div className="overlap-image-trowel reveals fade-in-up delay-1">
                            <img src="/images/artisan_trowel_cinematic.png" alt="Artisan Plaster Trowel" className="static-color" />
                        </div>

                        <div className="overlap-card card-2 reveals slide-in-left delay-1">
                            <span className="card-num">02</span>
                            <h3>The Renaissance</h3>
                            <p>Perfected in Venice during the 15th century. Artisans mixed lime putty with fine marble dust to craft breathtaking, water-resistant palazzo interiors.</p>
                        </div>

                        <div className="overlap-card card-3 reveals slide-in-left delay-2">
                            <span className="card-num">03</span>
                            <h3>Chemical Rebirth</h3>
                            <p>As the wet plaster cures, it absorbs carbon dioxide from the atmosphere—literally crystallizing back into a solid stone facade.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. Broken Grid Marmorino Architecture --- */}
            <section className="marmorino-broken-grid dark-section" id="marmorino">
                <div className="broken-grid-container">

                    <div className="broken-grid-image reveals fade-in-up delay-1">
                        <div className="gold-glow-monolith portrait-monolith">
                            <img src="/images/generated_marmorino_gold.png" alt="AI Generated Brutalist Marmorino Gold Vein Texture" className="static-color" />
                        </div>
                    </div>

                    <div className="broken-grid-content reveals slide-in-left">
                        <span className="overline glow-text" style={{ marginLeft: '2rem' }}>Material Study</span>
                        <h2 className="display-title escaped-title">MARMORINO&nbsp;&nbsp;</h2>

                        <div className="glass-text-card">
                            <p className="body-text" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
                                Where traditional Venetian Plaster is polished to a glass-like sheen, Marmorino demands a brutalist gravitas. Characterized by its unpolished, rugged face, it forces light to scatter across deeply tactile white aggregate.
                            </p>
                            
                            <div className="material-specs-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Base</span>
                                    <span className="spec-value">Slaked Lime & Marble</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Texture</span>
                                    <span className="spec-value">Brutalist / Tactile</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Finish</span>
                                    <span className="spec-value">Matte with Gold Veins</span>
                                </div>
                            </div>

                            <p className="body-text" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-muted)', marginTop: '2.5rem', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem', fontStyle: 'italic' }}>
                                The matter absorbs ambient room light, while the metallic veins ignite with a radiant glow against dark aesthetics, transcending architecture to become a monolithic piece of fine art.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    )
}
