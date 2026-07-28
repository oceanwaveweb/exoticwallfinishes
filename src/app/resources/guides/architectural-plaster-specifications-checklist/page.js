import ChecklistClient from './ChecklistClient';

export const metadata = {
    title: 'Architectural Venetian Plaster Specification Checklist | Field Guide',
    description: 'Field specification protocol for architects, interior designers & general contractors. Level 5 drywall prep, mineral primers, Pavan trowels & waxing.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/resources/guides/architectural-plaster-specifications-checklist',
    },
};

export default function SpecsChecklistPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['Article', 'HowTo'],
        '@id': 'https://www.exoticwallfinishes.com/resources/guides/architectural-plaster-specifications-checklist/#article',
        'name': 'Architectural Venetian Plaster Specification Checklist',
        'description': 'Comprehensive 5-phase field specification guide covering substrate preparation, keying primers, alkali mesh, burnishing, and wax sealers.',
        'url': 'https://www.exoticwallfinishes.com/resources/guides/architectural-plaster-specifications-checklist',
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
            <ChecklistClient />
        </>
    );
}
