// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { site } from '@/site.config';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: `${site.name} — ${site.tagline}`,
    description: 'A clean, sellable landing template built with Next.js 16, Tailwind v4 and TypeScript.',
    metadataBase: new URL(site.domain),
    alternates: { canonical: '/' },
    openGraph: {
        title: `${site.name} — ${site.tagline}`,
        description: 'Clean structure, modern design, zero bloat.',
        url: site.domain,
        siteName: site.name,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${site.name} — ${site.tagline}`,
        description: 'Clean structure, modern design, zero bloat.',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f7fbff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
    ],
};

const THEME_BOOTSTRAP = `
(
  function () {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored === 'light' || stored === 'dark'
        ? stored
        : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
    } catch (e) {}
  }
)();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-background text-foreground scroll-smooth" suppressHydrationWarning>
            <head>
                <Script id="theme-bootstrap" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
                <Script
                    id="product-jsonld"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Product',
                            name: 'Luma — Minimal Next.js Landing Template',
                            description: 'Clean, sellable landing template. Next.js + Tailwind, light/dark, zero bloat.',
                            image: [`${site.domain}/og/og-cover.jpg`],
                            brand: { '@type': 'Brand', name: 'Luma' },
                            offers: {
                                '@type': 'Offer',
                                priceCurrency: 'EUR',
                                price: '39',
                                url: `${site.domain}`,
                                availability: 'https://schema.org/InStock',
                            },
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: '4.9',
                                reviewCount: '52',
                            },
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
