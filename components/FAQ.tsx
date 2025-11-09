// components/FAQ.tsx
import { site } from '@/site.config';

export default function FAQ() {
    return (
        <section id="faq" className="section">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
                <p className="mt-3 text-muted">Answers to common questions.</p>
            </div>

            <div className="container mt-10 max-w-2xl mx-auto divide-y divide-border">
                {site.faq.map((item, i) => (
                    <details key={i} className="py-4 group">
                        <summary className="flex justify-between items-center cursor-pointer text-left font-medium text-lg">
                            <span>{item.q}</span>
                            <span className="text-muted group-open:rotate-180 transition-transform">⌄</span>
                        </summary>
                        <p className="mt-3 text-muted">{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
