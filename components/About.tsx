// components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Decorative gradient background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[0.08]"
                style={{
                    background: 'radial-gradient(600px 400px at 80% 20%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 70%)',
                }}
            />

            <div className="container grid gap-12 md:grid-cols-2 items-center">
                {/* Left image */}
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg">
                    <div aria-hidden className="absolute -inset-4 -z-10 bg-linear-to-tr from-brand/30 via-transparent to-transparent rounded-2xl blur-2xl opacity-70" />
                    <Image
                        src="/about-placeholder.png"
                        alt="Clean, minimal workspace setup"
                        fill
                        sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover scale-[1.02]"
                        priority
                    />
                </div>

                {/* Right text */}
                <div>
                    <span className="kicker text-brand/80 font-semibold tracking-wide uppercase">About this template</span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                        Designed for creators who move fast — <br className="hidden sm:block" />
                        built for long-term quality.
                    </h2>

                    <p className="mt-4 text-muted max-w-prose">
                        Luma isn’t just a landing — it’s a <strong>ready-to-sell base</strong>. Crafted for indie founders and creative studios who want professional design,
                        effortless customization, and timeless performance.
                    </p>

                    {/* Feature bullets with minimalist icons */}
                    <ul className="mt-6 space-y-3 text-muted">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            <span>Zero backend — 100 % static and deploy-ready</span>
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

                    {/* Subtle CTA */}
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
