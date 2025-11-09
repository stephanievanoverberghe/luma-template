// components/Stats.tsx
import { site } from '@/site.config';

export default function Stats() {
    return (
        <section className="section section-alt">
            <div className="container grid gap-6 sm:grid-cols-3">
                {site.stats.map((s) => (
                    <div key={s.label} className="card p-6 text-center">
                        <div className="text-3xl font-bold tracking-tight">{s.value}</div>
                        <div className="text-muted mt-1">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
