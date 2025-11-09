// components/Stats.tsx
import { site } from '@/site.config';

export default function Stats() {
    return (
        <section className="section section-alt" aria-labelledby="stats-title">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 id="stats-title" className="text-3xl font-bold tracking-tight">
                    Built for speed, designed to scale
                </h2>
                <p className="mt-3 text-muted">Real metrics from real use: performance, consistency, and simplicity.</p>
            </div>

            <div className="container mt-10 grid gap-6 sm:grid-cols-3">
                {site.stats.map((s) => (
                    <div key={s.label} className="card p-6 md:p-8 text-center card-hover transition" role="group" aria-label={`${s.value} ${s.label}`}>
                        {/* Accent bar */}
                        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand/30" aria-hidden />
                        {/* Big number */}
                        <div className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</div>
                        {/* Label */}
                        <div className="text-muted mt-2">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Subtle divider to close the section nicely */}
            <div className="container mt-12 h-px w-full bg-border/60" />
        </section>
    );
}
