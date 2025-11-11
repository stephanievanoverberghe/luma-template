// components/Features.tsx
import Image from 'next/image';
import type { ReactNode } from 'react';

const FEATURE_BLUR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';

type Feature = { title: string; desc: string; icon: ReactNode };

const icons = {
    lightning: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    paint: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l8-8 4 4-8 8H4v-4z" />
            <circle cx="17" cy="7" r="2" />
        </svg>
    ),
    cubes: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 9l4 2 4-2-4-2-4 2z" />
            <path d="M8 13l4 2 4-2" />
            <path d="M8 17l4 2 4-2" />
        </svg>
    ),
    cart: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l2 12h10l2-8H7" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="17" cy="20" r="1.5" />
        </svg>
    ),
};

export default function Features() {
    const features: Feature[] = [
        { title: 'Modern stack', desc: 'Built with Next.js 14, TypeScript & Tailwind v4 for the fastest workflow.', icon: icons.lightning },
        { title: 'Instant theming', desc: 'Edit color tokens once — rebrand your entire site in seconds.', icon: icons.paint },
        { title: 'Balanced sections', desc: 'Every block you need — Hero, Features, Pricing, FAQ, Testimonials, CTA.', icon: icons.cubes },
        { title: 'Ready to sell', desc: 'Clean structure, easy packaging, and built-in resell license guide.', icon: icons.cart },
    ];

    return (
        <section id="features" className="section section-alt" aria-labelledby="features-title">
            <div className="container grid gap-10 lg:grid-cols-2 items-center">
                {/* LEFT: content */}
                <div>
                    <h2 id="features-title" className="text-3xl font-bold tracking-tight">
                        Built for creators who want to <span className="text-brand">launch faster</span>.
                    </h2>
                    <p className="mt-4 text-muted max-w-prose">Stop building from scratch. Get a professional base that’s clean, scalable, and ready to customize.</p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {features.map((f) => (
                            <article
                                key={f.title}
                                className="group relative flex flex-col gap-2 p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3">
                                    {/* always perfectly round */}
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground transition-colors duration-200 group-hover:bg-brand/10 group-hover:text-brand">
                                        {f.icon}
                                    </span>
                                    <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
                                </div>
                                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                            </article>
                        ))}
                    </div>

                    <a href="#pricing" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-brand hover:opacity-80 transition-opacity">
                        Learn more about pricing →
                    </a>
                </div>

                {/* RIGHT: illustration (light + dark images) */}
                <div className="relative">
                    {/* soft brand glows */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 blur-3xl opacity-30"
                        style={{
                            background: 'radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 60%)',
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 blur-2xl opacity-20"
                        style={{
                            background: 'radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--brand) 30%, transparent), transparent 60%)',
                        }}
                    />

                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-border">
                        {/* Light */}
                        <Image
                            src="/features-light.png"
                            alt="Abstract product composition — light theme"
                            fill
                            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover only-light"
                            placeholder="blur"
                            blurDataURL={FEATURE_BLUR}
                        />
                        {/* Dark */}
                        <Image
                            src="/features-dark.png"
                            alt="Abstract product composition — dark theme"
                            fill
                            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover only-dark"
                            placeholder="blur"
                            blurDataURL={FEATURE_BLUR}
                        />
                    </div>
                </div>
            </div>

            <div className="container mt-12 h-px w-full bg-border/60" />
        </section>
    );
}
