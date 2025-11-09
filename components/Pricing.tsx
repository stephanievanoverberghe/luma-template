// components/Pricing.tsx
import { site } from '@/site.config';

export default function Pricing() {
    const { currency, plans } = site.pricing;

    return (
        <section id="pricing" className="section" aria-labelledby="pricing-title">
            {/* Header */}
            <div className="container text-center max-w-2xl mx-auto">
                <h2 id="pricing-title" className="text-3xl font-bold tracking-tight">
                    Simple pricing
                </h2>
                <p className="mt-3 text-muted">One-time license. Use forever.</p>
            </div>

            {/* Grid */}
            <div className="container mt-10 grid gap-6 md:grid-cols-3">
                {plans.map((p) => (
                    <article
                        key={p.name}
                        className={[
                            'relative card p-6 md:p-8 flex flex-col justify-between transition-transform duration-200',
                            p.popular ? 'ring-2 ring-brand shadow-[0_12px_30px_rgba(0,0,0,0.08)] -translate-y-0.5' : 'ring-1 ring-border',
                        ].join(' ')}
                        aria-labelledby={`${p.name}-title`}
                    >
                        {/* Popular badge */}
                        {p.popular && (
                            <span
                                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand text-white text-xs font-semibold px-3 py-1 shadow-sm"
                                aria-label="Most popular"
                            >
                                Most popular
                            </span>
                        )}

                        {/* Header */}
                        <header>
                            <h3 id={`${p.name}-title`} className="text-xl font-semibold tracking-tight">
                                {p.name}
                            </h3>

                            <div className="mt-2 flex items-baseline gap-2">
                                <span className="text-4xl font-bold tracking-tight">
                                    {currency}
                                    {p.price}
                                </span>
                                <span className="text-muted text-sm">/ {p.periodicity}</span>
                            </div>
                        </header>

                        {/* Features */}
                        <ul className="mt-5 flex-1 space-y-2">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                                    {/* check icon */}
                                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-brand" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-muted">{f}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href={p.cta.href}
                            className={[
                                'btn mt-6 w-full',
                                // Plan populaire -> bouton plein ; autres -> outline
                                p.popular ? '' : 'btn-outline',
                            ].join(' ')}
                            aria-label={p.cta.label}
                        >
                            {p.cta.label}
                        </a>
                    </article>
                ))}
            </div>

            {/* Footnote / reassurance */}
            <div className="container mt-8 text-center text-sm text-muted">Lifetime license • Free minor updates • No subscriptions • Deploy anywhere</div>
        </section>
    );
}
