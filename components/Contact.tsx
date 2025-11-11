// components/Contact.tsx
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Contact() {
    const search = useSearchParams();
    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const err = useMemo(() => search.get('err'), [search]);
    const status = useMemo(() => search.get('sent'), [search]);
    const isOpen = status === '1' || status === '0';
    const isSuccess = status === '1';

    const handleClose = useCallback(() => {
        if (typeof window !== 'undefined') {
            const base = window.location.pathname;
            router.replace(`${base}#contact`, { scroll: false });
        }
    }, [router]);

    useEffect(() => {
        if (!isOpen) return;
        const t = setTimeout(() => handleClose(), 4000);
        return () => clearTimeout(t);
    }, [isOpen, handleClose]);

    const onSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (loading) return;

            const form = e.currentTarget;
            const fd = new FormData(form);

            // Honeypot
            if (String(fd.get('confirm_email') || '').trim()) {
                router.replace('/?sent=1#contact');
                return;
            }

            const payload = {
                name: String(fd.get('name') || '').trim(),
                email: String(fd.get('email') || '').trim(),
                subject: String(fd.get('subject') || '').trim(),
                message: String(fd.get('message') || '').trim(),
                consent: String(fd.get('consent') || '') === 'on',
                confirm_email: '',
            };

            setLoading(true);
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                let data: { success?: boolean; error?: string } | null = null;
                try {
                    data = await res.json();
                } catch {
                    // If body isn't JSON, rely on status
                }

                if (res.ok && data?.success) {
                    // Clear the form for a better UX on success
                    formRef.current?.reset();
                    router.replace('/?sent=1#contact');
                } else {
                    const reason = encodeURIComponent(data?.error || `http_${res.status}`);
                    router.replace(`/?sent=0&err=${reason}#contact`);
                }
            } catch {
                router.replace('/?sent=0&err=network#contact');
            } finally {
                setLoading(false);
            }
        },
        [router, loading]
    );

    const title = isSuccess ? 'Message sent ✅' : 'Something went wrong';
    const desc = isSuccess ? "Thanks! I'll reply within 24 hours." : err ? `Error: ${err}. Please try again.` : 'Please try again or contact me by email.';

    return (
        <section id="contact" className="section section-alt" aria-labelledby="contact-title">
            <div className="container grid gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-5">
                    <span className="kicker text-brand/80 font-semibold tracking-wide uppercase">Contact</span>
                    <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight">
                        Tell me about your project
                    </h2>
                    <p className="mt-3 text-muted">Need a custom landing or want a license for your team? Send a message — I’ll reply within 24 hours.</p>
                    <ul className="mt-6 space-y-3 text-muted text-sm">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            No spam, no newsletter — just a reply.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand/80 shrink-0" />
                            Typical response time: &lt; 24h (CET).
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-7">
                    <form ref={formRef} onSubmit={onSubmit} className="card p-6 md:p-8 space-y-4" noValidate>
                        {/* Honeypot — must be named confirm_email (same as API) */}
                        <input type="text" name="confirm_email" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input id="name" name="name" required className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                                    placeholder="you@domain.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                                placeholder="Custom landing template"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                                placeholder="Tell me about your goals, deadlines, budget range…"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <label className="flex items-center gap-2 text-sm text-muted">
                                <input type="checkbox" name="consent" required className="h-4 w-4 border-border" />I agree to be contacted about my request.
                            </label>
                            <button className="btn" type="submit" aria-label="Send message" disabled={loading}>
                                {loading ? 'Sending…' : 'Send message'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-3 text-xs text-muted">
                        This form posts to <code>/api/contact</code> and shows a confirmation modal.
                    </p>
                </div>
            </div>

            {/* URL-controlled modal (unchanged behavior) */}
            {isOpen && (
                <div role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" className="fixed inset-0 z-50 grid place-items-center px-4">
                    <div className="absolute inset-0 bg-black/40 supports-backdrop-filter:backdrop-blur-sm" onClick={handleClose} />
                    <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            {isSuccess ? (
                                <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                            <h3 id="contact-modal-title" className="text-lg font-semibold tracking-tight">
                                {title}
                            </h3>
                        </div>
                        <p className="mt-2 text-muted">{desc}</p>
                        <div className="mt-6 flex justify-end gap-2">
                            {!isSuccess && (
                                <a href="#contact" className="btn btn-outline" onClick={handleClose}>
                                    Try again
                                </a>
                            )}
                            <button className="btn" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -inset-px rounded-2xl opacity-30"
                            style={{
                                background: 'radial-gradient(600px 220px at 80% 0%, color-mix(in oklab, var(--brand) 16%, transparent), transparent 60%)',
                            }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
