import ComparisonClient from './ComparisonClient';

export const metadata = {
    title: 'Venetian Plaster vs Microcement vs Lime Wash | Material Comparison',
    description: 'Detailed technical comparison: Venetian Plaster vs Microcement vs Lime Wash. Composition, wet area shower suitability, durability, and cost per sq ft.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/resources/venetian-plaster-vs-microcement-vs-lime-wash',
    },
};

export default function ComparisonPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['Article', 'WebPage'],
        '@id': 'https://www.exoticwallfinishes.com/resources/venetian-plaster-vs-microcement-vs-lime-wash/#article',
        'name': 'Venetian Plaster vs Microcement vs Lime Wash Comparison',
        'description': 'Technical material guide comparing authentic lime plaster, waterproof microcement flooring, and brushed mineral lime wash.',
        'url': 'https://www.exoticwallfinishes.com/resources/venetian-plaster-vs-microcement-vs-lime-wash',
        'publisher': {
            '@type': 'Organization',
            'name': 'Exotic Wall Finishes & Design',
            'logo': 'https://www.exoticwallfinishes.com/images/Footer_WFD.png'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ComparisonClient />
        </>
    );
}
