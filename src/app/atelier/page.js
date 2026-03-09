import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function AtelierPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />

            {/* SECTION 1: THE ARTISAN (GIAN CARLO) */}
            <section className="atelier" style={{ paddingTop: '20vh' }}>
                <div className="container layout-offset">
                    <div className="text-block reveals slide-in-left">
                        <span className="overline">01 / The Artisan</span>
                        <h2 className="display-title">Gian Carlo<br />Sagasti</h2>
                        <p className="bio-lead">
                            Gian Carlo Sagasti, founder and visionary of Exotic Wall Finishes & Design, established in Miami, Florida since 2015.
                        </p>

                        <div className="bio-stats">
                            <div className="stat-row">
                                <span className="stat-year">2003</span>
                                <span className="stat-desc">Mastering Venetian Plaster</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-year">2017</span>
                                <span className="stat-desc">Novacolor Global Ambassador</span>
                            </div>
                        </div>

                        <p className="bio-details">
                            Gian’s love for the application of Venetian Plaster continues to inspire him to create beautiful art pieces on your walls. His training, experience, and passion shows through the beauty of his work, leading him to become the Model for Marmorino Tools Worldwide.
                        </p>
                    </div>
                    <div className="image-block reveals zoom-in delay-1">
                        <div className="aspect-portrait">
                            <img src="/images/artisan_trowel_1772909203882.png" alt="Gian Carlo Sagasti Trowel" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE VISION (EXOTIC WALL FINISHES) */}
            <section className="atelier dark-section reveals fade-in-up">
                <div className="container layout-offset" style={{ flexDirection: 'row-reverse' }}>
                    <div className="text-block" style={{ paddingLeft: 0, paddingRight: '5vw' }}>
                        <span className="overline">02 / The Company</span>
                        <h2 className="display-title">Exotic Wall<br />Finishes</h2>

                        <blockquote className="motto-quote">
                            “Bringing Walls to Life”
                        </blockquote>

                        <p className="bio-details">
                            Our goal is to leave your walls looking sexy. We are top experts in a number of decorative wall finishes including Marmorino, Venetian Plaster, Faux finishes, Lime Paint and Lime Washes from Matte to texture finishes all the way to shiny finishes and more.
                        </p>
                        <p className="bio-details">
                            Exotic works with homeowners, business owners, interior designers, contractors, and architects to ensure that collaboratively the perfect experience and wall finish is created in your home or business.
                        </p>
                    </div>
                    <div className="image-block">
                        <div className="aspect-landscape">
                            {/* Placeholder for future company video/image */}
                            <img src="/images/ideal_hero_livingroom_1772916024175.png" alt="Exotic Wall Finishes Living Room" style={{ objectPosition: 'left center' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE HERITAGE (MARMORINO TOOLS) */}
            <section className="atelier reveals fade-in-up" style={{ paddingBottom: '10vh' }}>
                <div className="container layout-offset">
                    <div className="text-block">
                        <span className="overline">03 / The Heritage</span>
                        <h2 className="display-title">Marmorino<br />Tools</h2>
                        <p className="bio-lead" style={{ marginTop: '2rem' }}>
                            A partnership forged in the mastery of authentic Italian decorative arts.
                        </p>
                        <p className="bio-details">
                            Recognized globally for unparalleled artistry, Gian Carlo Sagasti was nominated and named the 2017 Ambassador for Novacolor Marmorino Products strictly out of Italy.
                        </p>
                        <p className="bio-details">
                            This pinnacle achievement established Gian as the official Model and face for Marmorino Tools Worldwide, representing the highest echelon of plaster application tools and techniques.
                        </p>
                    </div>
                    <div className="image-block">
                        <div className="aspect-square">
                            {/* Placeholder for future tools/brand image */}
                            <img src="/images/marmorino_tools.png" alt="Marmorino Tools Heritage" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
