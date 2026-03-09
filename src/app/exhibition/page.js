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
                        <h2 className="display-title outline-text" style={{ fontSize: '5rem', marginBottom: '2rem' }}>VENETIAN<br />PLASTER</h2>
                        <p className="body-text" style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            A living architectural dimension. Not merely a paint, but a monolithic surface that chemically reverts back into solid limestone on your walls.
                        </p>
                    </div>

                    <div className="immersive-overlap-grid">
                        <div className="overlap-image reveals fade-in-up delay-1">
                            <img src="/images/hero_plaster_wall_1772909184023.png" alt="Raw Venetian Plaster Wall" className="static-color" />
                        </div>

                        <div className="overlap-card card-1 reveals slide-in-left">
                            <span className="card-num">01</span>
                            <h3>Ancient Rome</h3>
                            <p>Discovered as a means to replicate the sheer opulence of solid marble without the crushing architectural weight.</p>
                        </div>

                        <div className="overlap-image-trowel reveals fade-in-up delay-1">
                            <img src="/images/artisan_trowel_1772909203882.png" alt="Artisan Plaster Trowel" className="static-color" />
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
