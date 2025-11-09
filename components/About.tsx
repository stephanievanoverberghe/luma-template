// components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="section relative overflow-hidden" aria-labelledby="about-title">
            {/* soft brand aura */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
                style={{
                    background: 'radial-gradient(600px 400px at 80% 20%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 70%)',
                }}
            />

            <div className="container grid gap-12 md:grid-cols-2 items-center">
                {/* Image block */}
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg border border-border">
                    {/* glow behind card */}
                    <div
                        aria-hidden
                        className="absolute -inset-6 -z-10 rounded-3xl blur-2xl opacity-60"
                        style={{
                            background: 'radial-gradient(50% 50% at 30% 20%, color-mix(in oklab, var(--brand) 20%, transparent), transparent 60%)',
                        }}
                    />

                    {/* LIGHT image */}
                    <Image
                        src="/about-light.png" // <- exporte ta version claire ici
                        alt="Minimal desk in natural light with notebook, mug and laptop"
                        fill
                        sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                        className="only-light object-cover scale-[1.02]"
                        priority
                    />
                    {/* DARK image */}
                    <Image
                        src="/about-dark.png" // <- exporte ta version dark ici
                        alt="Minimal desk in moody light with notebook, mug and laptop"
                        fill
                        sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                        className="only-dark object-cover scale-[1.02]"
                        priority
                    />

                    {/* brand overlay to unify tones */}
                    <div
                        aria-hidden
                        className="absolute inset-0 mix-blend-multiply opacity-20"
                        style={{
                            background: 'linear-gradient(20deg, color-mix(in oklab,var(--brand) 16%, transparent), transparent 55%)',
                        }}
                    />

                    {/* subtle grain */}
                    <div aria-hidden className="absolute inset-0 pointer-events-none grain opacity-[0.08]" />
                </div>

                {/* Copy */}
                <div>
                    <span className="kicker text-brand/80 font-semibold tracking-wide uppercase">About this template</span>

                    <h2 id="about-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                        Designed for creators who move fast — built for long-term quality.
                    </h2>

                    <p className="mt-4 text-muted max-w-prose">
                        Luma is a <strong>ready-to-sell base</strong> built with modern best practices. Professional design, effortless customization, and timeless performance — so
                        you can ship sooner and sell with confidence.
                    </p>

                    <ul className="mt-6 space-y-3 text-muted">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            <span>Zero backend — 100% static and deploy-ready</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            <span>Responsive, accessible, production-grade layout</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            <span>Readable structure — edit, ship, or resell instantly</span>
                        </li>
                    </ul>

                    <div className="mt-8">
                        <a href="#get" className="inline-flex items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80">
                            Explore the full kit →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
