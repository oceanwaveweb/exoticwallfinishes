import SmoothScroller from '@/components/SmoothScroller'
import Hero from '@/components/Hero'
import ScrollSequence from '@/components/ScrollSequence'
import Atelier from '@/components/Atelier'
import Exhibition from '@/components/Exhibition'
import TextureStudy from '@/components/TextureStudy'
import Commission from '@/components/Commission'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
    return (
        <>
            <main>
                <ClientEffects />
                <Hero />
                <ScrollSequence />
                <Atelier />
                <Exhibition />
                <TextureStudy />
                <Commission />
                <Footer />
            </main>
        </>
    )
}
