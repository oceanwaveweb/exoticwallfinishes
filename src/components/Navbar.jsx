import { Ghost, Music, Twitter, Disc, Youtube, Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo"><Link href="/"><img src="/images/brand_logo.png" alt="G.C. Logo" className="brand-img" /></Link></div>
                <div className="top-socials">
                    <a href="#" className="social-icon"><Ghost size={16} /></a>
                    <a href="#" className="social-icon"><Music size={16} /></a>
                    <a href="#" className="social-icon"><Twitter size={16} /></a>
                    <a href="#" className="social-icon"><Disc size={16} /></a>
                    <a href="#" className="social-icon"><Youtube size={16} /></a>
                    <a href="#" className="social-icon"><Facebook size={16} /></a>
                    <a href="#" className="social-icon"><Instagram size={16} /></a>
                    <a href="#" className="social-icon"><Mail size={16} /></a>
                </div>
            </nav>

            <div className="side-nav">
                <Link href="/" className="side-nav-link">HOME</Link>
                <Link href="/atelier" className="side-nav-link">ATELIER</Link>
                <Link href="/exhibition" className="side-nav-link">EXHIBITION</Link>
                <Link href="/commission" className="side-nav-link">COMMISSION</Link>
            </div>
        </>
    );
}
