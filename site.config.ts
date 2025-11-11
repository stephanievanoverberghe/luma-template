// site.config.ts
export const site = {
    name: 'Luma',
    tagline: 'Minimal Next.js 16 Landing',
    domain: 'https://luma-template-five.vercel.app/',
    nav: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ],
    logos: [
        { alt: 'Acme', src: '/logos/acme.svg' },
        { alt: 'Vertex', src: '/logos/vertex.svg' },
        { alt: 'Nova', src: '/logos/nova.svg' },
        { alt: 'Pulse', src: '/logos/pulse.svg' },
        { alt: 'Orbit', src: '/logos/orbit.svg' },
    ],
    stats: [
        { value: '2k+', label: 'Templates sold' },
        { value: '99.9%', label: 'Perceived uptime' },
        { value: '<1s', label: 'Avg. LCP' },
    ],
    pricing: {
        currency: '€',
        plans: [
            {
                name: 'Starter',
                price: '19',
                periodicity: 'one-time',
                features: ['Personal license', 'Minor updates', 'Essential sections'],
                cta: { label: 'Buy Starter', href: '#' },
            },
            {
                name: 'Pro',
                price: '39',
                popular: true,
                periodicity: 'one-time',
                features: ['Commercial license', 'All pro sections', 'SEO meta files', 'Packaging & selling guide'],
                cta: { label: 'Buy Pro', href: '#' },
            },
            {
                name: 'Agency',
                price: '99',
                periodicity: 'one-time',
                features: ['Multi-project license', 'Priority on updates', 'Variants (SaaS / Agency / Course)'],
                cta: { label: 'Buy Agency', href: '#' },
            },
        ],
    },
    faq: [
        { q: 'Can I sell this template to my clients?', a: 'Yes with Pro and Agency licenses. Starter is personal use only.' },
        { q: 'Is there any database or API?', a: 'No. Zero backend, zero DB. Fully static and deployable anywhere.' },
        { q: 'How do I change colors and images?', a: 'Colors in `app/globals.css` (CSS variables). Images in `public/`.' },
    ],
};
