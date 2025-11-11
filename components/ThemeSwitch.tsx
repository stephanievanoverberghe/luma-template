// components/ThemeSwitch.tsx
'use client';

import { useEffect, useState } from 'react';
import { applyTheme, getStoredTheme, Theme } from '@/lib/theme';

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed
            className="relative inline-flex h-8 w-14 items-center justify-center rounded-full border border-border bg-card transition-all duration-300"
        >
            {/* Soleil (visible en light) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-2 h-4 w-4 z-10 text-yellow-500 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1M21 12h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707M18.657 17.657l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
            </svg>

            {/* Lune (visible en dark) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute right-2 h-4 w-4 z-10 text-sky-400 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>

            {/* Knob coulissant (en dessous des icônes) */}
            <span
                className={`absolute top-1 left-1 h-6 w-6 z-0 rounded-full bg-background shadow-sm transform transition-transform duration-300 pointer-events-none ${
                    theme === 'dark' ? 'translate-x-6' : ''
                }`}
                aria-hidden="true"
            />

            <span className="sr-only">{theme === 'dark' ? 'Switch to light' : 'Switch to dark'}</span>
        </button>
    );
}
