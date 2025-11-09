// components/Logos.tsx
'use client';

import Image from 'next/image';
import { site } from '@/site.config';

export default function Logos() {
    return (
        <section className="section relative overflow-hidden" aria-labelledby="logos-title">
            {/* Animated soft mesh for depth */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
                <div
                    className="absolute -top-24 -left-24 h-112 w-md rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)' }}
                />
                <div
                    className="absolute -bottom-20 -right-16 h-104 w-104 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--brand) 16%, transparent), transparent 60%)' }}
                />
            </div>

            {/* Gentle vertical float */}
            <div className="absolute inset-0 -z-10 animate-float-slow" aria-hidden />

            <div className="container text-center">
                <p id="logos-title" className="text-sm uppercase tracking-widest font-semibold text-brand/80">
                    Trusted by <span className="text-foreground">creators</span> &amp; <span className="text-foreground">indie founders</span>
                </p>
                <p className="mt-2 text-muted text-sm">
                    Over <span className="font-semibold text-foreground">2,000+</span> teams use this clean foundation to build and sell faster.
                </p>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                    {site.logos.map((logo) => (
                        <div
                            key={logo.alt}
                            className="group relative mx-auto flex h-12 w-32 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <span aria-hidden className="absolute inset-0 rounded-xl bg-brand/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image src={logo.src} alt={logo.alt} width={140} height={40} className="object-contain transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 h-px w-full bg-border/60" />
            </div>

            <style jsx>{`
                @media (prefers-reduced-motion: reduce) {
                    .animate-float-slow {
                        animation: none !important;
                    }
                }
                @keyframes float-slow {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(8px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                .animate-float-slow {
                    animation: float-slow 16s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
