// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="section">
            <div className="container grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <span className="kicker">Next.js 14 + Tailwind v4 Template</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        Launch a <span className="text-brand">professional</span> landing in minutes.
                    </h1>
                    <p className="mt-4 text-lg text-muted">Clean structure, modern design, zero bloat. Perfect to sell as a template or kickstart your next idea.</p>
                    <div className="mt-6 flex gap-3">
                        <a href="#get" className="btn" aria-label="Get this template">
                            Get this template
                        </a>
                        <a href="#features" className="btn btn-outline" aria-label="View features">
                            View features
                        </a>
                    </div>
                </div>

                <div className="relative aspect-16/10 w-full card overflow-hidden">
                    <Image
                        src="/hero-placeholder.png"
                        alt="Product preview"
                        fill
                        priority
                        sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
