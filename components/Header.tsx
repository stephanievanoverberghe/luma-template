// components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/site.config';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 header ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container flex items-center justify-between h-14">
                {/* Gauche : logo */}
                <Link href="/" className="font-semibold tracking-tight">
                    {site.name}
                </Link>

                {/* Centre/droite : nav desktop */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {site.nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="transition-opacity"
                            style={{ color: 'var(--header-link)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--header-link-hover)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--header-link)')}
                        >
                            {n.label}
                        </a>
                    ))}
                    <ThemeSwitch />
                    <a href="#get" className="btn">
                        Get template
                    </a>
                </nav>

                {/* Droite : actions mobile */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Switch visible sur mobile en permanence */}
                    <ThemeSwitch />

                    {/* Bouton hamburger */}
                    <button
                        aria-label="Open menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <span aria-hidden className="flex flex-col items-center justify-center gap-1">
                            <span className="block h-0.5 w-5 bg-foreground"></span>
                            <span className="block h-0.5 w-5 bg-foreground"></span>
                            <span className="block h-0.5 w-5 bg-foreground"></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Panneau mobile */}
            {open && (
                <div id="mobile-menu" className="md:hidden border-t border-border" style={{ background: 'var(--surface-1)' }}>
                    <div className="container py-3 flex flex-col gap-3">
                        {/* Liens */}
                        {site.nav.map((n) => (
                            <a key={n.href} href={n.href} className="text-foreground" onClick={() => setOpen(false)}>
                                {n.label}
                            </a>
                        ))}

                        <a href="#get" className="btn w-full" onClick={() => setOpen(false)}>
                            Get template
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
