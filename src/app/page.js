import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Atelier from '@/components/Atelier'
import Exhibition from '@/components/Exhibition'
import TextureStudy from '@/components/TextureStudy'
import Commission from '@/components/Commission'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
    return (
        <main>
            <ClientEffects />
            <Navbar />
            <Hero />
            <Atelier />
            <Exhibition />
            <TextureStudy />
            <Commission />
            <Footer />
        </main>
    )
}
