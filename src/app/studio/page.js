import StudioClient from './StudioClient';
import { LocalBusinessSchema } from '@/components/seo/SchemaOrg';

export const metadata = {
    title: 'Artisan Plaster Studio | Master Venetian Plaster Applicator Miami',
    description: 'Exotic Wall Finishes studio led by Gian Carlo Sagasti, Novacolor Global Ambassador. Master craftsmanship in Venetian plaster, Grassello di Calce & Marmorino tools.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/studio',
    },
};

export default function StudioPage() {
    return (
        <>
            <LocalBusinessSchema />
            <StudioClient />
        </>
    );
}
