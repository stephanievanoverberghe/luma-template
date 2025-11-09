import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Luma — Minimal Next.js 14 Landing',
    description: 'A clean, sellable landing template built with Next.js 14, Tailwind v4 and TypeScript.',
    metadataBase: new URL('https://example.com'), // ← à remplacer
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Luma — Minimal Next.js 14 Landing',
        description: 'Clean structure, modern design, zero bloat.',
        url: 'https://example.com', // ← à remplacer
        siteName: 'Luma',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luma — Minimal Next.js 14 Landing',
        description: 'Clean structure, modern design, zero bloat.',
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        other: [{ rel: 'manifest', url: '/site.webmanifest' }],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f7fbff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-(--bg) text-(--fg) scroll-smooth">
            <body className={inter.className}>
                {/* skip-link a11y */}
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-(--card) focus:text-(--fg) focus:shadow"
                >
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
