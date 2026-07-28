import CommissionClient from './CommissionClient';
import { ServiceSchema } from '@/components/seo/SchemaOrg';

export const metadata = {
    title: 'Commission Venetian Plaster | Commercial & Residential Contractor Miami',
    description: 'Request a quote for commercial Venetian plastering, high-end residential accent walls, or custom microcement installation with Exotic Wall Finishes in Miami, FL.',
    alternates: {
        canonical: 'https://www.exoticwallfinishes.com/commission',
    },
};

export default function CommissionPage() {
    return (
        <>
            <ServiceSchema />
            <CommissionClient />
        </>
    );
}
