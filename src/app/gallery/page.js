import GalleryClient from './GalleryClient';

export const metadata = {
    title: 'Venetian Plaster Gallery | Luxury Wall Finishes & Microcement Portfolio',
    description: 'Browse our portfolio of authentic Venetian plaster, Grassello di Calce, metallic wall finishes, and seamless microcement shower & floor installations.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/gallery',
    },
};

export default function ExhibitionPage() {
    return <GalleryClient />;
}
