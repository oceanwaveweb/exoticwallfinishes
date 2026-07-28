import './globals.css'
import './legacy.css'

export const metadata = {
    metadataBase: new URL('https://www.exoticwallfinishes.com'),
    title: {
        default: 'Exotic Wall Finishes | Venetian Plaster & Italian Lime Plaster Miami',
        template: '%s | Exotic Wall Finishes'
    },
    description: 'Bespoke Venetian plaster contractors & custom Italian lime plaster applicators in Miami, Florida. Handcrafted Marmorino, metallic wall finishes & microcement systems by master artisan Gian Carlo Sagasti.',
    openGraph: {
        title: 'Exotic Wall Finishes | Venetian Plaster & Italian Lime Plaster Miami',
        description: 'Bespoke Venetian plaster, Marmorino, Italian Lime Paint & microcement decorative wall finishes by master artisan Gian Carlo Sagasti.',
        url: 'https://www.exoticwallfinishes.com',
        siteName: 'Exotic Wall Finishes & Design',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Exotic Wall Finishes — Luxury Venetian Plaster & Italian Lime Plaster',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exotic Wall Finishes | Venetian Plaster & Italian Lime Plaster Miami',
        description: 'Bespoke Venetian plaster, Marmorino, Lime Paint & decorative wall finishes by master artisan Gian Carlo Sagasti.',
        images: ['/og-image.png'],
    },
}

import Navbar from '@/components/Navbar';
import SmoothScroller from '@/components/SmoothScroller';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/SchemaOrg';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Inter:wght@300;400&family=Pinyon+Script&family=Luxurious+Script&display=swap"
                    rel="stylesheet"
                />
                <OrganizationSchema />
                <LocalBusinessSchema />
                <script async src="https://profiles.oceanwaveweb.com/ow-analytics.js" data-ow-site="owpk_3ab2f0ed9269ce99bd7f16b0aa724cd50c97" data-ow-endpoint="https://profiles.oceanwaveweb.com/_a"></script>
            </head>
            <body suppressHydrationWarning>

                <div className="noise-overlay"></div>
                <div className="center-line"></div>
                <Navbar />
                <SmoothScroller>
                    {children}
                </SmoothScroller>
            </body>
        </html>
    )
}
