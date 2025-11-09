// components/Pricing.tsx
import { site } from '@/site.config';

export default function Pricing() {
    const { currency, plans } = site.pricing;
    return (
        <section id="pricing" className="section">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
                <p className="mt-3 text-muted">One-time license. Use forever.</p>
            </div>

            <div className="container mt-10 grid gap-6 md:grid-cols-3">
                {plans.map((p) => (
                    <div key={p.name} className={`card p-6 text-left ${p.popular ? 'outline-2 outline-brand' : ''}`}>
                        {p.popular && <span className="badge">Most popular</span>}
                        <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">
                                {currency}
                                {p.price}
                            </span>
                            <span className="text-muted ml-1 text-sm">/{p.periodicity}</span>
                        </div>

                        <ul className="mt-4 space-y-2 text-muted">
                            {p.features.map((f) => (
                                <li key={f}>• {f}</li>
                            ))}
                        </ul>

                        <a href={p.cta.href} className="btn mt-6 w-full" aria-label={p.cta.label}>
                            {p.cta.label}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
