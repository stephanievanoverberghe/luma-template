// components/FAQ.tsx
'use client';

import { site } from '@/site.config';

export default function FAQ() {
    const faqs = site.faq;

    // SEO JSON-LD
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f: { q: string; a: string }) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    return (
        <section id="faq" className="section" aria-labelledby="faq-title">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 id="faq-title" className="text-3xl font-bold tracking-tight">
                    Frequently asked questions
                </h2>
                <p className="mt-3 text-muted">Answers to common questions about the template, licensing, and customization.</p>
            </div>

            <div className="container mt-10 max-w-2xl mx-auto space-y-4">
                {faqs.map((item: { q: string; a: string }, i: number) => (
                    <details
                        key={i}
                        className="group rounded-xl border border-border bg-card px-4 md:px-6 py-3 md:py-4 shadow-[0_1px_0_var(--border)] open:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow"
                        onToggle={(e) => {
                            // TS-safe: currentTarget is HTMLDetailsElement
                            const detailsEl = e.currentTarget as HTMLDetailsElement;
                            const summary = detailsEl.querySelector('summary');
                            if (summary) summary.setAttribute('aria-expanded', String(detailsEl.open));
                        }}
                    >
                        <summary className="flex items-center gap-3 cursor-pointer list-none select-none" aria-controls={`faq-panel-${i}`} aria-expanded="false">
                            {/* plus/minus icon */}
                            <span aria-hidden className="relative grid h-6 w-6 place-items-center rounded-md border border-border">
                                <span className="absolute h-px w-3.5 bg-foreground/70 transition-opacity duration-200" />
                                <span className="absolute h-3.5 w-px bg-foreground/70 transition-opacity duration-200 group-open:opacity-0" />
                            </span>

                            <span className="text-left text-base md:text-lg font-medium">{item.q}</span>
                        </summary>

                        {/* Smooth open */}
                        <div id={`faq-panel-${i}`} className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                            <div className="overflow-hidden">
                                <p className="pt-3 md:pt-4 text-muted">{item.a}</p>
                            </div>
                        </div>
                    </details>
                ))}
            </div>

            <div className="container mt-8 text-center text-sm">
                <span className="text-muted">Still have questions?</span>{' '}
                <a href="#get" className="font-semibold text-brand hover:opacity-80">
                    Get the template →
                </a>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </section>
    );
}
