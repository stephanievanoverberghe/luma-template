// components/Logos.tsx
import Image from 'next/image';
import { site } from '@/site.config';

export default function Logos() {
    return (
        <section className="section relative overflow-hidden">
            {/* Subtle background for depth */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                    background: `linear-gradient(to bottom, color-mix(in oklab, var(--brand) 4%, transparent), transparent 60%)`,
                }}
            />

            <div className="container text-center">
                {/* Headline */}
                <p className="text-sm uppercase tracking-widest font-semibold text-brand/80">
                    Trusted by <span className="text-foreground">creators</span> & <span className="text-foreground">indie founders</span>
                </p>

                {/* Subtext */}
                <p className="mt-2 text-muted text-sm">
                    Over <span className="font-semibold text-foreground">2,000+</span> teams use this clean foundation to build and sell faster.
                </p>

                {/* Logo grid */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                    {site.logos.map((logo) => (
                        <div
                            key={logo.alt}
                            className="group relative mx-auto flex h-12 w-32 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <Image src={logo.src} alt={logo.alt} width={140} height={40} className="object-contain transition-transform duration-300 group-hover:scale-105" />
                            <div aria-hidden="true" className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-brand" />
                        </div>
                    ))}
                </div>

                {/* Divider line */}
                <div className="mt-12 h-px w-full bg-border/60" />
            </div>
        </section>
    );
}
