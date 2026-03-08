import { Ghost, Music, Twitter, Disc, Youtube, Facebook, Instagram, Mail } from 'lucide-react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src="/images/brand_logo.png" alt="G.C. Logo" className="brand-img" /></div>
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
                <a href="#home" className="side-nav-link">HOME</a>
                <a href="#atelier" className="side-nav-link">ATELIER</a>
                <a href="#exhibition" className="side-nav-link">EXHIBITION</a>
                <a href="#commission" className="side-nav-link">COMMISSION</a>
            </div>
        </>
    );
}
