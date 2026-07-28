import React from 'react';

/**
 * Root Organization JSON-LD Schema
 */
export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.exoticwallfinishes.com/#organization',
        'name': 'Exotic Wall Finishes & Design, LLC',
        'alternateName': 'Exotic Wall Finishes',
        'url': 'https://www.exoticwallfinishes.com',
        'logo': 'https://www.exoticwallfinishes.com/images/Footer_WFD.png',
        'image': 'https://www.exoticwallfinishes.com/images/ideal_hero_livingroom_1772916024175.png',
        'description': 'Bespoke Venetian plaster contractors & custom Italian lime plaster applicators in Miami, Florida. Handcrafted Marmorino, metallic wall finishes & microcement systems by master artisan Gian Carlo Sagasti.',
        'founder': {
            '@type': 'Person',
            'name': 'Gian Carlo Sagasti',
            'jobTitle': 'Master Artisan & Visionary',
            'award': 'Novacolor Global Ambassador (2017)',
            'sameAs': [
                'https://www.instagram.com/exoticwallfinishes/'
            ]
        },
        'sameAs': [
            'https://www.facebook.com/ArtLDesign/',
            'https://www.instagram.com/exoticwallfinishes/',
            'https://www.youtube.com/@venetianplasterexoticwallf5313/videos',
            'https://www.tiktok.com/@exoticwallfinishes',
            'https://www.yelp.com/biz/venetian-plaster-exotic-wall-finishes-and-design-miami',
            'https://www.mapquest.com/us/florida/venetian-plaster-exotic-wall-finishes-design-379443250'
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-305-801-2581',
            'contactType': 'customer service',
            'email': 'venetianman@live.com',
            'areaServed': 'US',
            'availableLanguage': ['English', 'Spanish', 'Italian']
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * LocalBusiness & HomeAndConstructionBusiness JSON-LD Schema
 */
export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['HomeAndConstructionBusiness', 'LocalBusiness', 'Store'],
        '@id': 'https://www.exoticwallfinishes.com/#localbusiness',
        'name': 'Exotic Wall Finishes & Design',
        'image': 'https://www.exoticwallfinishes.com/images/artisan_trowel_1772909203882.jpg',
        'telephone': '+1-305-801-2581',
        'email': 'venetianman@live.com',
        'url': 'https://www.exoticwallfinishes.com',
        'priceRange': '$$$',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Miami',
            'addressRegion': 'FL',
            'addressCountry': 'US'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 25.7617,
            'longitude': -80.1918
        },
        'areaServed': [
            { '@type': 'City', 'name': 'Miami' },
            { '@type': 'City', 'name': 'Miami Beach' },
            { '@type': 'City', 'name': 'Palm Beach' },
            { '@type': 'City', 'name': 'Fort Lauderdale' },
            { '@type': 'City', 'name': 'Boca Raton' },
            { '@type': 'City', 'name': 'Scottsdale' },
            { '@type': 'City', 'name': 'Los Angeles' },
            { '@type': 'City', 'name': 'New York City' }
        ],
        'openingHoursSpecification': [
            {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'opens': '08:00',
                'closes': '18:00'
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Service Offerings JSON-LD Schema
 */
export function ServiceSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://www.exoticwallfinishes.com/#service',
        'name': 'Custom Venetian Plaster & Architectural Wall Finishes',
        'serviceType': 'Decorative Plastering Contractor',
        'provider': {
            '@type': 'HomeAndConstructionBusiness',
            'name': 'Exotic Wall Finishes & Design',
            'url': 'https://www.exoticwallfinishes.com'
        },
        'areaServed': {
            '@type': 'Country',
            'name': 'United States'
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Bespoke Architectural Surface Services',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Hand-Troweled Venetian Plaster & Marmorino Application',
                        'description': 'High-gloss Grassello di Calce, satin Marmorino Naturale, and pitted stone textures hand-applied by master artisans.'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Seamless Microcement Flooring & Shower Systems',
                        'description': 'Waterproof two-component microcement systems for seamless luxury bathroom floors, wetrooms, and outdoor patios.'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Metallic & Patina Decorative Wall Finishes',
                        'description': 'Metaline liquid bronze, velvet rust patina, and gold leaf stucco accent feature wall commissions.'
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Product & Tools JSON-LD Schema
 */
export function ProductSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': 'https://www.exoticwallfinishes.com/#product-grassello',
        'name': 'Authentic Grassello di Calce Italian Lime Plaster',
        'image': 'https://www.exoticwallfinishes.com/images/generated_marmorino_gold.png',
        'description': 'Pit-aged slaked lime paste for ultra-high gloss mirror finish Venetian plaster walls. Zero VOC, zero mold, natural mineral composition.',
        'brand': {
            '@type': 'Brand',
            'name': 'Exotic Wall Finishes'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5.0',
            'reviewCount': '48'
        },
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'USD',
            'lowPrice': '180.00',
            'highPrice': '450.00',
            'offerCount': '12',
            'priceValidUntil': '2027-12-31',
            'availability': 'https://schema.org/InStock'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * FAQPage JSON-LD Schema
 */
export function FAQPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://www.exoticwallfinishes.com/#faq',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the cost per square foot for Venetian plaster installation?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Professional Venetian plaster installation typically ranges from $15 to $35+ per square foot depending on surface prep, finish complexity (Grassello, Marmorino, Metallic), ceiling height, and number of burnished coats.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the difference between Venetian plaster and microcement?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Venetian plaster is a breathable, lime-and-marble dust plaster ideal for walls and ceilings. Microcement is a polymer-modified cementitious coating designed for high-durability, waterproof floors, showers, and countertops.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can Italian lime plaster be applied in bathrooms and wet areas?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes! Lime plaster (like Grassello di Calce and Marmorino) is naturally anti-bacterial and mold-resistant. When sealed with natural olive oil soap or beeswax, it resists humidity beautifully.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you clean and maintain polished Marmorino walls?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Clean polished lime plaster with a soft microfiber cloth dipped in warm water and mild natural soap. Avoid harsh chemical cleaners or abrasive pads.'
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
