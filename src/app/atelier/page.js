import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function AtelierPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />
            <section className="atelier" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container">
                    <h2 className="display-title reveals fade-in-up" style={{ textAlign: 'center' }}>Atelier</h2>
                    <p className="body-text reveals fade-in-up delay-1" style={{ margin: '0 auto', textAlign: 'center' }}>
                        More professional details coming soon.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    )
}
