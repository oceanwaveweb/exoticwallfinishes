import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function CommissionPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />
            <section className="commission-hero reveals fade-in-up">
                <div className="container">
                    <span className="overline">Bespoke Projects</span>
                    <h1 className="display-title outline-text">CONTACT</h1>
                    
                    <div className="commission-grid">
                        <div className="comm-left">
                            <p className="body-text large-lead">
                                We transform atmospheres. Our surfaces are not merely finishes, but permanent architectural statements tailored for high-end residential and commercial environments.
                            </p>
                            
                            <div className="contact-details">
                                <div className="c-item">
                                    <span className="c-label">Call</span>
                                    <span className="c-value">(305) 801-2581</span>
                                </div>
                                <div className="c-item">
                                    <span className="c-label">Mail</span>
                                    <span className="c-value">venetianman@live.com</span>
                                </div>
                                <div className="c-item">
                                    <span className="c-label">Location</span>
                                    <span className="c-value">Miami Florida</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="comm-right">
                            <div className="appointment-card glass-card">
                                <h3>SCHEDULE YOUR APPOINTMENT</h3>
                                <p>Phase 1: Concept & Texture Selection. Phase 2: Architectural Survey. Phase 3: Master Execution.</p>
                                <a href="mailto:venetianman@live.com" className="cta-button gold">INITIATE INQUIRY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="commission-texture-break">
                <div className="full-width-image reveals fade-in-up">
                    <img src="/images/commission_hero_texture.png" alt="Architectural Studio" />
                </div>
            </section>
            <Footer />
        </main>
    )
}
