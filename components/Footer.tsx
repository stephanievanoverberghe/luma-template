// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="section pt-12 border-t border-border bg-[color-mix(in oklab,var(--surface-1)_96%,var(--brand)_4%)]" aria-labelledby="footer-title">
            <div className="container grid gap-8 md:grid-cols-[1fr_auto_1fr] items-center text-sm">
                {/* Left — navigation */}
                <nav className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 text-muted">
                    <a href="#features" className="hover:text-foreground transition-colors">
                        Features
                    </a>
                    <a href="#pricing" className="hover:text-foreground transition-colors">
                        Pricing
                    </a>
                    <a href="#faq" className="hover:text-foreground transition-colors">
                        FAQ
                    </a>
                    <a href="#contact" className="hover:text-foreground transition-colors">
                        Contact
                    </a>
                </nav>

                {/* Center — brand */}
                <div className="text-center">
                    <h2 id="footer-title" className="font-semibold text-base tracking-tight text-foreground">
                        Luma
                    </h2>
                    <p className="text-xs text-muted mt-1">Minimal Next.js Landing Template</p>
                </div>

                {/* Right — social links */}
                <div className="flex items-center justify-center md:justify-end gap-4">
                    <a href="#" aria-label="Twitter" className="text-muted hover:text-foreground transition-colors">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path d="M22.46 6c-.77.35-1.5.58-2.29.69a4.15 4.15 0 001.83-2.3c-.8.48-1.66.83-2.58 1.03a4.13 4.13 0 00-7.17 3.76A11.74 11.74 0 013 4.79a4.14 4.14 0 001.28 5.52 4.13 4.13 0 01-1.86-.52v.05a4.14 4.14 0 003.31 4.06 4.13 4.13 0 01-1.85.07 4.14 4.14 0 003.86 2.87A8.3 8.3 0 012 19.54 11.7 11.7 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.3 8.3 0 0022.46 6z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="GitHub" className="text-muted hover:text-foreground transition-colors">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5a3.93 3.93 0 011.03-2.73c-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.04A9.34 9.34 0 0112 7.6a9.34 9.34 0 012.5.35c1.91-1.32 2.75-1.04 2.75-1.04.55 1.41.2 2.46.1 2.72a3.93 3.93 0 011.03 2.73c0 3.88-2.33 4.73-4.55 5 .36.32.68.94.68 1.91v2.82c0 .27.18.6.69.49A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z"
                            />
                        </svg>
                    </a>
                    <a href="#" aria-label="Dribbble" className="text-muted hover:text-foreground transition-colors">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.477 2 12a9.998 9.998 0 0015.826 7.826A9.998 9.998 0 0012 2zm6.938 4.942a8.014 8.014 0 011.61 4.16 13.1 13.1 0 00-6.382-.279 25.4 25.4 0 00-1.288-2.72 7.98 7.98 0 016.06-1.161zM12 4a7.96 7.96 0 014.59 1.386 6.98 6.98 0 00-4.954 1.48 26.9 26.9 0 00-1.562-2.823C10.57 4.02 11.283 4 12 4zM8.94 4.88a25.45 25.45 0 011.576 2.832 7.94 7.94 0 00-5.603 4.896A8.01 8.01 0 018.94 4.88zm-4.8 7.12c0-.1 0-.2.002-.3a9.9 9.9 0 016.366-4.457c.332.575.647 1.17.938 1.783a26.4 26.4 0 00-6.97 5.825A7.94 7.94 0 014.14 12zm7.86 7.86a7.94 7.94 0 01-5.61-2.2 25.9 25.9 0 016.948-5.775c.394.8.75 1.61 1.07 2.44-1.036.36-2.08.82-3.1 1.38a7.9 7.9 0 001.692 4.155zM12 20a8 8 0 01-1.28-.1 8.9 8.9 0 011.948-4.367c.3.95.54 1.91.71 2.89A7.95 7.95 0 0112 20zm2.53-.377a28 28 0 00-.784-3.146 8.8 8.8 0 014.37-.645 8 8 0 01-3.586 3.791zM17.8 14.48a10.3 10.3 0 00-4.624.56 25.5 25.5 0 00-.986-2.24 11.9 11.9 0 016.586.265 8 8 0 01-.976 1.415z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-8 text-center text-xs text-muted">
                © {new Date().getFullYear()} <span className="text-foreground font-medium">Luma</span>. All rights reserved.
            </div>
        </footer>
    );
}
