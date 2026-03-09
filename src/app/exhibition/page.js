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

            {/* --- 2. Venetian Plaster History Graphic --- */}
            <section className="material-history dark-section" id="venetian-plaster">
                <div className="container" style={{ padding: '10rem 0' }}>
                    <div className="history-header reveals fade-in-up">
                        <span className="overline">The Legacy</span>
                        <h2 className="display-title outline-text" style={{ fontSize: '4rem', marginBottom: '4rem' }}>VENETIAN<br />PLASTER</h2>
                    </div>

                    <div className="history-graphic">
                        <div className="history-node reveals slide-in-left delay-1">
                            <div className="node-number">01</div>
                            <h3 className="node-title">Ancient Rome</h3>
                            <p className="node-text">The technique was originally discovered as a method to replicate the sheer opulence of solid marble architecture without the overwhelming weight.</p>
                        </div>

                        <div className="history-node reveals slide-in-left">
                            <div className="node-number">02</div>
                            <h3 className="node-title">The Renaissance</h3>
                            <p className="node-text">Perfected in Venice during the 15th century, artisans mixed lime putty with marble dust from nearby quarries to craft stunning, water-resistant palazzo walls.</p>
                        </div>

                        <div className="history-node reveals slide-in-left delay-1">
                            <div className="node-number">03</div>
                            <h3 className="node-title">Chemical Rebirth</h3>
                            <p className="node-text">As the plaster cures on the wall, it absorbs carbon dioxide from the air—literally turning back into monolithic limestone over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. Marmorino Texture Study --- */}
            <section className="material-texture" style={{ padding: '10rem 0' }} id="marmorino">
                <div className="container layout-offset" style={{ alignItems: 'center' }}>
                    <div className="text-block reveals fade-in-up" style={{ width: '40%' }}>
                        <span className="overline">Material Study</span>
                        <h2 className="display-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>MARMORINO</h2>
                        <p className="body-text" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                            Characterized by its raw, unpolished face and coarser marble aggregate, Marmorino absorbs light rather than reflecting it. This creates soft, atmospheric shadows and a deeply tactile matte finish that anchors large spaces with profound, brutalist gravitas.
                        </p>
                    </div>
                    <div className="image-block reveals fade-in-up delay-1" style={{ width: '55%' }}>
                        <div className="aspect-landscape" style={{ border: '1px solid var(--accent-gold)' }}>
                            <img src="/images/marmorino_texture_bg.jpg" alt="Rich Marmorino wall texture" className="static-color" style={{ filter: 'contrast(1.2)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
