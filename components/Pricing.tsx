// components/Pricing.tsx
'use client';
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
                            p.popular ? 'ring-2 ring-brand shadow-lg -translate-y-0.5' : 'ring-1 ring-border hover:-translate-y-0.5 hover:shadow-md',
                        ].join(' ')}
                        aria-labelledby={`${p.name}-title`}
                    >
                        {/* Popular badge + soft glow */}
                        {p.popular && (
                            <span
                                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand text-white text-xs font-semibold px-3 py-1 shadow-sm"
                                aria-label="Most popular"
                            >
                                Most popular
                                {/* glow */}
                                <span aria-hidden className="absolute inset-0 -z-10 rounded-full" style={{ boxShadow: '0 0 0 0 rgba(25,109,245,.35)' }} />
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
                        <a href={p.cta.href} className={['btn mt-6 w-full', p.popular ? '' : 'btn-outline'].join(' ')} aria-label={p.cta.label}>
                            {p.cta.label}
                        </a>

                        {/* pulsing aura for Pro card (separate to avoid Tailwind conflicts) */}
                        {p.popular && <span aria-hidden className="pricing-pulse" />}
                    </article>
                ))}
            </div>

            {/* Reassurance row with mini icons */}
            <div className="container mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                    {/* lifetime */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                        <circle cx="12" cy="12" r="9" />
                    </svg>
                    Lifetime license
                </span>
                <span className="inline-flex items-center gap-2">
                    {/* instant download */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
                    </svg>
                    Instant download
                </span>
                <span className="inline-flex items-center gap-2">
                    {/* updates */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 019-9m9 9a9 9 0 01-9 9" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 10v4" />
                    </svg>
                    Free minor updates
                </span>
                <span className="inline-flex items-center gap-2">
                    {/* deploy anywhere */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                    Deploy anywhere
                </span>
            </div>

            {/* local keyframes for the pulsing glow */}
            <style jsx>{`
                .pricing-pulse {
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem;
                    pointer-events: none;
                    box-shadow: 0 0 0 0 rgba(25, 109, 245, 0.22);
                    animation: pulseGlow 2.2s ease-in-out infinite;
                }
                @keyframes pulseGlow {
                    0% {
                        box-shadow: 0 0 0 0 rgba(25, 109, 245, 0.22);
                    }
                    70% {
                        box-shadow: 0 0 0 18px rgba(25, 109, 245, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(25, 109, 245, 0);
                    }
                }
            `}</style>
        </section>
    );
}
