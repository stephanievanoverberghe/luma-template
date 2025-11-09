export default function Testimonials() {
    const items = [
        { quote: 'Perfect base for my startup landing. Clean, fast, and easy to tweak.', author: 'Alex M.', role: 'Founder, Seed Studio' },
        { quote: 'I reskinned it in an hour and shipped the same day.', author: 'Clara M.', role: 'Indie Maker' },
        { quote: 'No bloat — clients love the clean look.', author: 'Jon K.', role: 'Freelance Developer' },
    ];

    return (
        <section className="section">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">What people say</h2>
                <p className="mt-3 text-muted">Simple, elegant, effective.</p>
            </div>

            <div className="container mt-10 grid gap-6 md:grid-cols-3">
                {items.map((t, i) => (
                    <figure key={i} className="card p-6 text-left">
                        <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
                        <figcaption className="mt-4 text-sm text-muted">
                            <span className="font-semibold text-(--fg)">{t.author}</span> — {t.role}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
