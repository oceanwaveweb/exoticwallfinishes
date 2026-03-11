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
                            <div className="appointment-card glass-card reveals fade-in-up delay-1">
                                <h3>SCHEDULE YOUR APPOINTMENT</h3>
                                <form className="minimal-form" style={{ marginTop: '2rem' }}>
                                    <input type="text" placeholder="Name" required />
                                    <input type="email" placeholder="Email" required />
                                    <textarea placeholder="Project Details" rows="3" required style={{ minHeight: '120px' }}></textarea>
                                    <button type="submit" className="brutal-btn" style={{ width: '100%', marginTop: '1rem' }}>Initiatize Protocol</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <Footer />
        </main>
    )
}
