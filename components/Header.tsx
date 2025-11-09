// components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/site.config';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    // Scroll state for solid header
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close on ESC + lock body scroll when menu open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        if (open) {
            const { overflow } = document.body.style;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = overflow;
                document.removeEventListener('keydown', onKey);
            };
        }
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    // Click outside to close
    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if (panelRef.current && !panelRef.current.contains(target)) {
                setOpen(false);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [open]);

    return (
        <header
            className={[
                'sticky top-0 z-50',
                // base = transparent / blur only when supported
                'supports-backdrop-filter:backdrop-blur',
                scrolled ? 'bg-card/80 border-b border-border shadow-sm' : 'bg-transparent',
                'transition-colors duration-200',
                'header',
            ].join(' ')}
        >
            <div className="container flex items-center justify-between h-14">
                {/* Left: brand */}
                <Link href="/" className="font-semibold tracking-tight">
                    {site.name}
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {site.nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className={[
                                'group',
                                'text-muted hover:text-foreground transition-colors',
                                // underline effect via background-size trick (no custom CSS needed)
                                'bg-gradient-to-r from-brand to-brand',
                                'bg-[length:0%_2px] bg-no-repeat bg-[0_100%]',
                                'hover:bg-[length:100%_2px] transition-[background-size] duration-200',
                            ].join(' ')}
                        >
                            {n.label}
                        </a>
                    ))}

                    <ThemeSwitch />

                    <a href="#get" className="btn">
                        Get template
                    </a>
                </nav>

                {/* Mobile actions (switch + burger) */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeSwitch />
                    <button
                        aria-label="Open menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
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

            {/* Mobile overlay + sheet */}
            {open && (
                <div className="md:hidden">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px]" />

                    {/* Sheet */}
                    <div
                        id="mobile-menu"
                        ref={panelRef}
                        className={[
                            'fixed left-0 right-0 top-0',
                            'mt-14', // start below header
                            'mx-0 rounded-none', // full width strip
                            'bg-card border-t border-border',
                            'shadow-[0_12px_30px_rgba(0,0,0,0.18)]',
                            'transition-transform duration-200',
                        ].join(' ')}
                    >
                        <div className="container py-4 flex flex-col gap-3">
                            {site.nav.map((n) => (
                                <a key={n.href} href={n.href} className="text-foreground py-2" onClick={() => setOpen(false)}>
                                    {n.label}
                                </a>
                            ))}
                            <a href="#get" className="btn w-full mt-2" onClick={() => setOpen(false)}>
                                Get template
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
