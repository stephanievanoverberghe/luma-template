// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="section">
            <div className="container grid gap-10 md:grid-cols-12 items-center">
                {/* Copy */}
                <div className="md:col-span-6">
                    <span className="kicker">Next.js 16 • Tailwind v4 • TypeScript</span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        Launch a <span className="text-brand">professional</span> landing in minutes.
                    </h1>

                    <p className="mt-4 text-lg text-muted max-w-prose">Clean structure, modern design, zero bloat. Customize fast and resell confidently as a premium template.</p>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="#get" className="btn" aria-label="Get this template">
                            Get this template
                        </a>
                        <a href="#features" className="btn btn-outline" aria-label="View features">
                            View features
                        </a>
                    </div>

                    {/* Micro-proof */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">⭐️ 4.9/5</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">2k+ downloads</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">&lt;10 min setup</span>
                    </div>
                </div>

                {/* Visual */}
                <div className="md:col-span-6">
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                        {/* subtle brand edge (FIX: only outline-1) */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl outline-1 outline-brand/15" aria-hidden />
                        <Image
                            src="/hero-placeholder.png"
                            alt="Template preview — clean, minimal landing"
                            fill
                            priority
                            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                        {/* corner badge */}
                        <div className="absolute left-3 top-3">
                            <span className="badge">Zero bloat</span>
                        </div>
                    </div>

                    <p className="mt-3 text-center text-sm text-muted">Swap colors & copy via CSS variables and config — no refactor needed.</p>
                </div>
            </div>
        </section>
    );
}
