import './globals.css'
import './legacy.css'

export const metadata = {
    title: 'G.C. | Exotic Architectural Surfaces',
    description: 'Avant-garde bespoke Venetian plaster wall finishes by master artisan Gian Carlo.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <div className="noise-overlay"></div>
                <div className="custom-cursor"></div>
                <div className="center-line"></div>
                {children}
            </body>
        </html>
    )
}
