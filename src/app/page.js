import SmoothScroller from '@/components/SmoothScroller'
import Hero from '@/components/Hero'
import ScrollSequence from '@/components/ScrollSequence'
import Atelier from '@/components/Atelier'
import Exhibition from '@/components/Exhibition'
import TextureStudy from '@/components/TextureStudy'
import Commission from '@/components/Commission'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import { ServiceSchema, FAQPageSchema } from '@/components/seo/SchemaOrg'
import FaqSection from '@/components/seo/FaqSection'
import RelatedLinks from '@/components/seo/RelatedLinks'

export const metadata = {
    title: 'Exotic Wall Finishes | Venetian Plaster & Italian Lime Plaster Miami',
    description: 'Bespoke Venetian plaster contractors & custom Italian lime plaster applicators in Miami, FL. Handcrafted Marmorino, metallic wall finishes & microcement systems by master artisan Gian Carlo Sagasti.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com',
    },
}

export default function Home() {
    return (
        <>
            <ServiceSchema />
            <FAQPageSchema />
            <main>
                <ClientEffects />
                <Hero />
                <ScrollSequence />
                <Atelier />
                <Exhibition />
                <TextureStudy />
                <Commission />
                <FaqSection />
                <RelatedLinks />
                <Footer />
            </main>
        </>
    )
}
