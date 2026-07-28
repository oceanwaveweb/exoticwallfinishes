import { SERVICES_DATA } from '@/data/services';
import ServiceClient from './ServiceClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return SERVICES_DATA.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return {
            title: 'Service Not Found | Exotic Wall Finishes',
        };
    }

    return {
        title: `${service.title} | Exotic Wall Finishes`,
        description: service.description,
        alternates: {
            canonical: `https://www.exoticwallfinishes.com/services/${service.slug}`,
        },
    };
}

export default async function ServicePage({ params }) {
    const resolvedParams = await params;
    const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `https://www.exoticwallfinishes.com/services/${service.slug}/#service`,
        'name': service.title,
        'image': `https://www.exoticwallfinishes.com${service.image}`,
        'description': service.description,
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'Exotic Wall Finishes & Design, LLC',
            'telephone': '+1-304-702-0504',
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Miami',
                'addressRegion': 'FL',
                'postalCode': '33131',
                'addressCountry': 'US'
            }
        },
        'areaServed': ['Miami', 'Fort Lauderdale', 'Palm Beach', 'Scottsdale', 'Los Angeles', 'New York']
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ServiceClient service={service} />
        </>
    );
}
