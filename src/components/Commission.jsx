export default function Commission() {
    return (
        <section className="commission" id="commission">
            <div className="container text-center reveals fade-in-up">
                <span className="overline">03 / Contact</span>
                <h2 className="display-title">Commence<br />The Protocol</h2>

                <form className="minimal-form">
                    <input type="text" placeholder="Identity (Name)" required />
                    <input type="email" placeholder="Signal (Email)" required />
                    <textarea placeholder="The Vision (Project Details)" rows="1" required></textarea>
                    <button type="submit" className="brutal-btn">Transmit</button>
                </form>
            </div>
        </section>
    );
}
