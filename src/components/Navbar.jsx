export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src="/images/brand_logo.png" alt="G.C. Logo" className="brand-img" /></div>
                <div className="menu-trigger">Menu +</div>
            </nav>

            <div className="menu-overlay">
                <ul className="huge-nav">
                    <li><a href="#atelier" className="nav-link">Atelier</a></li>
                    <li><a href="#exhibition" className="nav-link">Exhibition</a></li>
                    <li><a href="#commission" className="nav-link">Commission</a></li>
                </ul>
                <div className="menu-close">Close ×</div>
            </div>
        </>
    );
}
