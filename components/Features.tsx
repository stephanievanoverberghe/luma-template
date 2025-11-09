// components/Features.tsx

export default function Features() {
    const features = [
        { title: 'Modern stack', desc: 'Next.js 14, App Router, TypeScript & Tailwind v4.' },
        { title: 'Instant theming', desc: 'Change CSS variables once. Rebrand in seconds.' },
        { title: 'Balanced sections', desc: 'Hero, Logos, Stats, Features, About, Pricing, FAQ, Testimonials, CTA.' },
        { title: 'Ready to sell', desc: 'Clear README + packaging steps to distribute your template.' },
    ];

    return (
        <section id="features" className="section section-alt">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Features</h2>
                <p className="mt-3 text-muted">Everything you need — nothing you don’t.</p>
            </div>

            <div className="container mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f, i) => (
                    <div key={i} className="card p-6 text-left card-hover transition">
                        <div className="relative mb-4">
                            <div className="h-12 w-12 rounded-full bg-accent" aria-hidden />
                            <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-brand" aria-hidden />
                        </div>
                        <h3 className="font-semibold text-lg">{f.title}</h3>
                        <p className="text-muted mt-2">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
