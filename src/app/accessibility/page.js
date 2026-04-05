import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function AccessibilityPage() {
    return (
        <main>
            <ClientEffects />
            <Navbar />

            <section className="accessibility-hero reveals fade-in-up" style={{ paddingTop: '15rem', paddingBottom: '10rem' }}>
                <div className="container">
                    <span className="overline">Compliance</span>
                    <h1 className="display-title outline-text" style={{ marginBottom: '5rem' }}>ACCESSIBILITY</h1>

                    <div className="glass-text-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="body-text" style={{ maxWidth: 'none', fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem' }}>
                            <br /><br />
                            Last updated: January 23, 2026
                            <br /><br />
                            Our Commitment
                            EXOTIC WALL FINISHES AND DESIGN, LLC. is committed to ensuring that our website is accessible to all visitors, including individuals with disabilities. We strive to provide a positive and inclusive digital experience for everyone by following recognized accessibility standards and best practices.
                            <br /><br />
                            Standards and Compliance
                            We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, as well as applicable laws and regulations under the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act. As guidelines, laws, and regulations evolve, our policies and procedures will continue to evolve as well.
                            Because accessibility standards and technologies are constantly changing, we regularly review and update our website to improve usability and accessibility wherever possible. For the best experience, we recommend using the most current version of your browser and assistive technology.
                            <br /><br />
                            ‍Ongoing Efforts
                            Our team makes ongoing efforts to identify and address accessibility barriers. This includes periodic reviews and improvements to ensure the site remains user-friendly and aligned with current standards. We also continue to stay informed on accessibility updates and evolving best practices as part of our development process.
                            If you experience any difficulty accessing content or using any feature on this website, or if you have feedback regarding accessibility, please contact us at venetianman@live.com and we will respond as soon as possible.
                            <br /><br />
                            ‍Scope
                            This accessibility statement applies to all pages, images, and digital content found under the Exotic domain.
                            <br /><br />
                            Thank you for visiting. If there is anything we can do to improve your experience, please reach out
                            <br /><br />

                        </p>

                        <div className="contact-details" style={{ borderTop: '1px solid var(--line-color)', paddingTop: '2rem', display: 'flex', gap: '3rem' }}>
                            <div className="c-item">
                                <span className="c-label">Call</span>
                                <span className="c-value">(305) 801-2581</span>
                            </div>
                            <div className="c-item">
                                <span className="c-label">Email</span>
                                <span className="c-value">venetianman@live.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
