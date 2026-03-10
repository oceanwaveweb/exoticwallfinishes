export default function Footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="f-col">
                    <div className="logo-pair">
                        <img src="/images/brand_logo.png" alt="G.C. Logo" className="brand-img-footer" />
                        <img src="/images/marmorino_tools.png" alt="Marmorino Tools Logo" className="parent-logo-footer" />
                    </div>
                </div>
                <div className="f-col right">
                    <p>Miami Florida</p>
                    <p>venetianman@live.com</p>
                    <p>(305) 801-2581</p>
                </div>
                <div className="f-col center-full">
                    <div className="marquee">
                        <div className="marquee-content">
                            <span>UNCONVENTIONAL LUXURY</span> • <span>ARCHITECTURAL SURFACES</span> • <span>BESPOKE PLASTER</span> • <span>UNCONVENTIONAL LUXURY</span> •
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
