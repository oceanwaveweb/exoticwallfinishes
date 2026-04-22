import './globals.css'
import './legacy.css'

export const metadata = {
    title: 'G.C. | Exotic Architectural Surfaces',
    description: 'Avant-garde bespoke Venetian plaster wall finishes by master artisan Gian Carlo Sagasti.',
}

import Navbar from '@/components/Navbar';
import SmoothScroller from '@/components/SmoothScroller';

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
