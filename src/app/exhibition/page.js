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

            {/* --- 2. About Venetian Plaster --- */}
            <section className="material-focus dark-section">
                <div className="container layout-offset">
                    <div className="text-block reveals fade-in-up delay-1">
                        <span className="overline">The History</span>
                        <h2 className="display-title" style={{ fontSize: '3.5rem' }}>VENETIAN<br />PLASTER</h2>
                        <p className="body-text">
                            Tracing its origins back to ancient Rome and perfected during the Italian Renaissance, true Venetian Plaster is not merely a paint—it is a living, breathing architectural dimension.
                        </p>
                        <p className="body-text">
                            Crafted from fired limestone, marble dust, and natural pigments, the material undergoes a chemical process as it dries, reverting back into solid stone on your walls. The result is a monolithic surface that is cool to the touch, relentlessly durable, and inherently mold-resistant.
                        </p>
                    </div>
                    <div className="image-block aspect-portrait reveals fade-in-up">
                        <img src="/images/venetian_plaster_detail.jpg" alt="Close up texture of Venetian Plaster" style={{ filter: 'grayscale(60%) contrast(1.2)' }} />
                    </div>
                </div>
            </section>

            {/* --- 3. About Marmorino --- */}
            <section className="material-focus" style={{ padding: '10rem 0' }}>
                <div className="container layout-offset" style={{ flexDirection: 'row-reverse' }}>
                    <div className="text-block reveals fade-in-up delay-1">
                        <span className="overline">The Texture</span>
                        <h2 className="display-title outline-text" style={{ fontSize: '4rem' }}>MARMORINO</h2>
                        <p className="body-text">
                            Where traditional Venetian Plaster is polished to a highly reflective, glass-like sheen, Marmorino offers a deeply tactile, textural contrast. By incorporating coarser marble aggregates, it mimics the raw, unpolished face of natural stone.
                        </p>
                        <p className="body-text">
                            Highly sought after in modern brutalist and minimalist interior design, Marmorino absorbs light rather than reflecting it. This creates soft, atmospheric shadows and a matte finish that anchors large spaces with profound gravitas.
                        </p>
                    </div>
                    <div className="image-block aspect-landscape reveals fade-in-up" style={{ width: '50%' }}>
                        <img src="/images/marmorino_texture_bg.jpg" alt="Rich Marmorino wall texture" style={{ mixBlendMode: 'luminosity' }} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
