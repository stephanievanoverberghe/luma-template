import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center px-6" aria-labelledby="nf-title">
            {/* Soft brand mesh */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
                style={{
                    background:
                        `radial-gradient(700px 260px at 85% 0%, color-mix(in oklab, var(--brand) 16%, transparent) 0%, transparent 60%),` +
                        `radial-gradient(520px 220px at 0% 100%, color-mix(in oklab, var(--brand) 12%, transparent) 0%, transparent 65%)`,
                }}
            />

            {/* Illustration */}
            <div className="relative aspect-16/10 w-full max-w-2xl rounded-2xl overflow-hidden border border-border bg-card shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                {/* Light */}
                <Image src="/404-light.webp" alt="" fill sizes="(max-width:768px) 100vw, 560px" className="only-light object-cover" priority />
                {/* Dark */}
                <Image src="/404-dark.webp" alt="" fill sizes="(max-width:768px) 100vw, 560px" className="only-dark object-cover" priority />
                {/* Overlay */}
                <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-multiply opacity-20"
                    style={{
                        background: 'linear-gradient(20deg, color-mix(in oklab,var(--brand) 14%, transparent), transparent 55%)',
                    }}
                />
            </div>

            {/* Texte principal */}
            <span className="kicker mt-8 text-brand/90">Error 404</span>
            <h1 id="nf-title" className="mt-3 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Page not found.
            </h1>
            <p className="mt-4 text-lg text-muted max-w-prose">We couldn’t find what you were looking for. Check the URL, or head back to the homepage.</p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/" className="btn" aria-label="Back to homepage">
                    Back to homepage
                </Link>
                <Link href="/#features" className="btn btn-outline" aria-label="Explore features">
                    Explore features
                </Link>
            </div>

            {/* Quick links */}
            <ul className="mt-6 grid gap-2 text-sm text-muted">
                <li>
                    <a href="#pricing" className="font-medium text-brand hover:opacity-80">
                        See pricing →
                    </a>
                </li>
                <li>
                    <a href="#faq" className="font-medium text-brand hover:opacity-80">
                        Read the FAQ →
                    </a>
                </li>
            </ul>
        </main>
    );
}
