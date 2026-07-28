import JournalHubClient from './JournalHubClient';

export const metadata = {
    title: 'Architectural Journal | Venetian Plaster Guides & Specifications',
    description: 'Field notes, technical specifications, tool metallurgy, and field application guides on authentic Italian lime plaster, Marmorino, and microcement.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/journal',
    },
};

export default function JournalPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://www.exoticwallfinishes.com/journal/#collection',
        'name': 'Exotic Architectural Journal',
        'description': 'Search-engineered architectural articles and technical guides on Italian lime plastering and microcement.',
        'url': 'https://www.exoticwallfinishes.com/journal',
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
            <JournalHubClient />
        </>
    );
}
