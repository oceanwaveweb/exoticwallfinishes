import { GUIDES_DATA } from '@/data/guides';
import GuideClient from './GuideClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return GUIDES_DATA.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const guide = GUIDES_DATA.find((g) => g.slug === resolvedParams.slug);

    if (!guide) {
        return {
            title: 'Guide Not Found | Exotic Wall Finishes',
        };
    }

    return {
        title: `${guide.title} | Exotic Wall Finishes`,
        description: guide.description,
        alternates: {
            canonical: `https://www.exoticwallfinishes.com/guides/${guide.slug}`,
        },
    };
}

export default async function GuidePage({ params }) {
    const resolvedParams = await params;
    const guide = GUIDES_DATA.find((g) => g.slug === resolvedParams.slug);

    if (!guide) {
        notFound();
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://www.exoticwallfinishes.com/guides/${guide.slug}/#article`,
        'headline': guide.title,
        'description': guide.description,
        'image': `https://www.exoticwallfinishes.com${guide.image}`,
        'author': {
            '@type': 'Person',
            'name': 'Gian Carlo Sagasti'
        },
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
            <GuideClient guide={guide} />
        </>
    );
}
