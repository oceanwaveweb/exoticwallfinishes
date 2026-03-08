import { Video } from "lucide-react";

export default function Exhibition() {
    return (
        <section className="exhibition" id="exhibition">
            <div className="sticky-container">
                <div className="exhibition-title-area">
                    <span className="overline">02 / Exhibition</span>
                    <div className="display-title outline-text full-width-title">
                        <div className="title-row">
                            <span>M</span><span>A</span><span>S</span><span>T</span><span>E</span><span>R</span>
                        </div>
                        <div className="title-row works-row">
                            <span>W</span><span>O</span><span>R</span><span>K</span><span>S</span>
                        </div>
                    </div>
                    <div className="exhibition-desc">
                        <p>Observe the tension between light and shadow. Each surface is an unrepeatable monolithic entity.</p>
                    </div>
                </div>

                <div className="exhibition-gallery">
                    <div className="gallery-item reveals fade-in-up">
                        <div className="aspect-landscape">
                            <img src="/images/hero_plaster_wall_1772909184023.png" alt="The Anthracite Estate" />
                        </div>
                        <div className="item-meta">
                            <h3>Void & Metal</h3>
                            <span>Anthracite / Gold Vein</span>
                        </div>
                    </div>

                    <div className="gallery-item reveals fade-in-up margin-huge">
                        <div className="aspect-square">
                            <video src="/images/portfolio_bathroom_1772916040233.mp4" autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="item-meta">
                            <h3>Terracotta Monolith</h3>
                            <span>Seamless Waterproof Tadelakt</span>
                        </div>
                    </div>

                    <div className="gallery-item reveals fade-in-up margin-huge">
                        <div className="aspect-portrait">
                            <video src="/images/portfolio_office_1772916057766.mp4" autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="item-meta">
                            <h3>Corporate Brutalism</h3>
                            <span>Oxidized Metallic Bronze</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
