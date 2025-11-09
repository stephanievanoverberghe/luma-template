export default function Features() {
    const features = [
        { title: 'Modern Stack', desc: 'Next.js 14, App Router, TypeScript & Tailwind v4. Nothing extra.' },
        { title: 'Instant Theming', desc: 'Change CSS variables once. Rebrand in seconds.' },
        { title: 'Balanced Sections', desc: 'Hero, Features, About, Testimonials, CTA & Footer.' },
        { title: 'Ready to Sell', desc: 'README + packaging steps to ship your template.' },
    ];

    return (
        <section id="features" className="section">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Features</h2>
                <p className="mt-3 text-muted">Everything you need — nothing you don’t.</p>
            </div>

            <div className="container mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f, i) => (
                    <div key={i} className="card p-6 text-left">
                        <div className="rounded-full bg-accent h-12 w-12 mb-4" aria-hidden />
                        <h3 className="font-semibold text-lg">{f.title}</h3>
                        <p className="text-muted mt-2">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
