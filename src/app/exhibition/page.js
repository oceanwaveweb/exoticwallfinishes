import Navbar from '@/components/Navbar'
import Exhibition from '@/components/Exhibition'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function ExhibitionPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />
            <Exhibition />
            <Footer />
        </main>
    )
}
