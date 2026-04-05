export default function Footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="f-col">
                    <div className="logo-pair">
                        <img src="/images/brand_logo.png" alt="G.C. Logo" className="brand-img-footer" />
                    </div>
                </div>
                <div className="f-col right">
                    <p>Miami Florida</p>
                    <p>venetianman@live.com</p>
                    <p>(305) 801-2581</p>
                    
                    <div className="f-socials" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <a href="https://www.facebook.com/ArtLDesign/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/exoticwallfinishes/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                        <a href="https://www.yelp.com/biz/venetian-plaster-exotic-wall-finishes-and-design-miami" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12.27 15.34c-.16-.06-.28-.1-.41-.12-1.07-.15-2.09-.27-2.09-.27L8.6 14.8c-.37-.05-.72.22-.76.59l-.36 3.01c-.04.38.22.72.59.76l2.16.22c.38.04.72-.22.76-.59l.36-3.01c.03-.23-.05-.44-.21-.57l-.3-.1.47.23zM15.3 11.23c.1-.14.15-.31.13-.5l-.36-3.01c-.04-.38-.38-.63-.76-.59l-2.16.25c-.38.04-.63.38-.59.76l.36 3.01c.05.37.4.63.76.59l2.16-.25c.16-.02.31-.08.41-.18l.05-.08zM14.6 15.6l2.5 1.7c.3.2.7.1 1.0-.2l1.3-2.1c.2-.3.1-.7-.2-1.0l-2.5-1.7c-.3-.2-.7-.1-1.0.2l-1.3 2.1c-.2.3-.1.7.2 1.0zM10.8 12.8c-.3.04-.54.26-.6.54l-.4 1.9c-.06.33.1.66.4.8l1.7.9c.3.16.7.1 1.0-.2l1.3-1.6c.2-.3.2-.7-.05-1.0l-1.3-1.6c-.2-.3-.5-.4-.8-.4s-.7 0-.9.2a1 1 0 00-.35-.04zM2.8 11.1c.3.1.5.02.7-.2l2.2-3.8c.2-.3.1-.7-.2-1.0l-1.9-1.1c-.3-.2-.7-.1-1.0.2L.4 9.1c-.2.3-.1.7.2 1.0l2.2 1.0zM7.3 12.6l-3.3.6a.7.7 0 00-.5.8l.6 2.5a.7.7 0 00.9.5l3.2-.6a.7.7 0 00.5-.9l-.6-2.5a.7.7 0 00-.8-.4z" /></svg>
                        </a>
                        <a href="https://www.mapquest.com/us/florida/venetian-plaster-exotic-wall-finishes-design-379443250" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@exoticwallfinishes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12.525.02c1.31 0 2.57.51 3.51 1.44a4.96 4.96 0 00.06 7.03c.69.13 1.34.42 1.9.84.3.23.57.5.8.8l-.01 3.51c-.69-.42-1.48-.65-2.29-.66v-2.29a2.29 2.29 0 01-.01-4.58c0-.61-.24-1.18-.67-1.61a2.29 2.29 0 01-3.23-.05c-.01 0-.01.01-.01.01v14.78c0 1.26-1.02 2.29-2.29 2.29s-2.29-1.02-2.29-2.29 1.02-2.29 2.29-2.29c.31 0 .61.06.89.18V13.8a4.96 4.96 0 00-6.19 2.49c-.42.92-.64 1.93-.64 2.94a4.96 4.96 0 004.96 4.96c2.72 0 4.96-2.24 4.96-4.96V.02h2.29z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@venetianplasterexoticwallf5313/videos" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
                        </a>
                    </div>

                    <a href="/accessibility" style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textDecoration: 'none', marginTop: '1.5rem', display: 'block' }}>ACCESSIBILITY</a>
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
