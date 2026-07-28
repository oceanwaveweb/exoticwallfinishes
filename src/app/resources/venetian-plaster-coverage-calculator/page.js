import CalculatorClient from './CalculatorClient';

export const metadata = {
    title: 'Venetian Plaster Coverage Calculator | Material & Tint Estimator',
    description: 'Calculate total square footage, 24kg bucket counts, quartz primer gallons, and estimated material costs for Grassello, Marmorino, and Italian Lime Wash.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/resources/venetian-plaster-coverage-calculator',
    },
};

export default function CoverageCalculatorPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['WebApplication', 'WebPage'],
        '@id': 'https://www.exoticwallfinishes.com/resources/venetian-plaster-coverage-calculator/#webpage',
        'name': 'Venetian Plaster Coverage Calculator',
        'description': 'Interactive square footage and bucket count estimator for Italian lime plaster applicators and architects.',
        'url': 'https://www.exoticwallfinishes.com/resources/venetian-plaster-coverage-calculator',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'All'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <CalculatorClient />
        </>
    );
}
