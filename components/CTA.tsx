import Image from 'next/image';

export default function CTA() {
    return (
        <section id="get" className="section" aria-labelledby="cta-title">
            <div className="container">
                <div className="relative overflow-hidden card p-8 md:p-12 text-center rounded-2xl">
                    {/* 1) Mesh brandé très doux */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.55]"
                        style={{
                            background:
                                `radial-gradient(700px 260px at 85% 0%, color-mix(in oklab, var(--brand) 16%, transparent) 0%, transparent 60%),` +
                                `radial-gradient(520px 220px at 0% 100%, color-mix(in oklab, var(--brand) 12%, transparent) 0%, transparent 65%)`,
                        }}
                    />

                    {/* 2) Mockup flouté (light/dark) derrière, très doux */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        {/* Light */}
                        <Image src="/cta-mock-light.webp" alt="" fill sizes="100vw" className="only-light object-cover opacity-15 blur-2xl scale-110" aria-hidden />
                        {/* Dark */}
                        <Image src="/cta-mock-dark.webp" alt="" fill sizes="100vw" className="only-dark object-cover opacity-15 blur-2xl scale-110" aria-hidden />
                        {/* voile pour lisibilité */}
                        <div className="absolute inset-0 bg-card/30" aria-hidden />
                    </div>

                    <h2 id="cta-title" className="text-2xl md:text-3xl font-bold tracking-tight">
                        Launch faster with a <span className="text-brand">clean, minimal</span> base.
                    </h2>
                    <p className="mt-3 text-muted">A professional Next.js landing you can customize in minutes — and resell confidently.</p>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a href="#pricing" className="btn relative shadow-[0_12px_26px_rgba(0,0,0,0.10)]">
                            <span className="absolute -inset-px rounded-full ring-2 ring-brand/0 opacity-0 animate-pulse pointer-events-none" aria-hidden />
                            Get this template
                        </a>

                        <a href="#features" className="btn btn-outline" aria-label="View features">
                            View features
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="mt-8 hr" />

                    {/* Points de réassurance avec petites icônes */}
                    <ul className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
                        <li className="inline-flex items-center justify-center gap-2 text-muted">
                            <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 text-brand" fill="currentColor">
                                <path d="M6 8V6a4 4 0 118 0v2h1a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2V9a1 1 0 011-1h1zm2 0h4V6a2 2 0 10-4 0v2z" />
                            </svg>
                            Secure checkout
                        </li>
                        <li className="inline-flex items-center justify-center gap-2 text-muted">
                            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="currentColor">
                                <path d="M18.5 8a4.5 4.5 0 00-3.536 1.68l-1.37 1.64-1.288-1.49A4.5 4.5 0 006.5 8 4.5 4.5 0 002 12.5 4.5 4.5 0 006.5 17a4.5 4.5 0 003.536-1.68l1.288-1.49 1.37 1.64A4.5 4.5 0 0018.5 17 4.5 4.5 0 0023 12.5 4.5 4.5 0 0018.5 8zm-12 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm12 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                            </svg>
                            Lifetime license
                        </li>
                        <li className="inline-flex items-center justify-center gap-2 text-muted">
                            <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 text-brand" fill="currentColor">
                                <path d="M11.3 1.05a1 1 0 011.7.95l-.9 5h4.4a1 1 0 01.8 1.6l-8 10a1 1 0 01-1.8-.8l.9-5H3a1 1 0 01-.8-1.6l8-10z" />
                            </svg>
                            Instant download
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
