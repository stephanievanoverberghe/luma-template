// components/Features.tsx

type Feature = { title: string; desc: string };

export default function Features() {
    const features: Feature[] = [
        { title: 'Modern stack', desc: 'Next.js 14, App Router, TypeScript & Tailwind v4.' },
        { title: 'Instant theming', desc: 'Change CSS variables once. Rebrand in seconds.' },
        { title: 'Balanced sections', desc: 'Hero, Logos, Stats, Features, About, Pricing, FAQ, Testimonials, CTA.' },
        { title: 'Ready to sell', desc: 'Clear README + packaging steps to distribute your template.' },
    ];

    return (
        <section id="features" className="section section-alt" aria-labelledby="features-title">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 id="features-title" className="text-3xl font-bold tracking-tight">
                    Features that help you ship — and sell
                </h2>
                <p className="mt-3 text-muted">Everything you need, nothing you don’t. Clean sections, fast theming, no bloat.</p>
            </div>

            <div className="container mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f, i) => (
                    <article
                        key={f.title}
                        className="group relative card p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                        aria-labelledby={`feature-${i}-title`}
                    >
                        <div>
                            {/* Accent bar (canonical rounded) */}
                            <div className="absolute left-0 right-0 top-0 h-1 bg-brand/20 rounded-t-2xl" aria-hidden />

                            {/* Number chip */}
                            <div className="mb-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-semibold">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            {/* Title */}
                            <h3 id={`feature-${i}-title`} className="text-lg font-semibold tracking-tight">
                                {f.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted mt-2">{f.desc}</p>
                        </div>

                        {/* Learn more pinned bottom (canonical gradient + bg-size utilities) */}
                        <div
                            className="mt-6 inline-flex items-center gap-2 text-sm text-muted select-none
                         bg-linear-to-r from-brand to-brand bg-size-[0%_2px] bg-no-repeat bg-[0_100%]
                         group-hover:bg-size-[100%_2px] transition-[background-size] duration-200"
                            aria-hidden
                        >
                            Learn more →
                        </div>
                    </article>
                ))}
            </div>

            <div className="container mt-12 h-px w-full bg-border/60" />
        </section>
    );
}
