// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    consent?: boolean;
    confirm_email?: string; // honeypot
};

function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message, consent, confirm_email }: ContactPayload = await req.json();

        // Honeypot: silently succeed for bots
        if (confirm_email && confirm_email.trim()) {
            return NextResponse.json({ success: true }, { status: 200 });
        }

        const n = (name ?? '').trim();
        const m = (email ?? '').trim();
        const s = (subject ?? '').trim();
        const msg = (message ?? '').replace(/\s+/g, ' ').trim();

        if (!n || n.length < 2 || n.length > 80) {
            return NextResponse.json({ success: false, error: 'Invalid name' }, { status: 400 });
        }
        if (!m || !isValidEmail(m) || m.length > 120) {
            return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
        }
        if (msg.length < 10 || msg.length > 5000) {
            return NextResponse.json({ success: false, error: 'Please write at least 10 characters.' }, { status: 400 });
        }

        const access_key = process.env.WEB3FORMS_KEY;
        if (!access_key) {
            // This is the #1 reason on Vercel: env var not set in the dashboard
            return NextResponse.json({ success: false, error: 'Missing server configuration (WEB3FORMS_KEY).' }, { status: 500 });
        }

        // Build FormData as Web3Forms expects
        const fd = new FormData();
        fd.set('access_key', access_key);
        fd.set('subject', s ? `Contact — ${s}` : 'Contact — Form');
        fd.set('name', n);
        fd.set('from_name', n);
        fd.set('email', m); // used as reply-to
        fd.set('replyto', m); // explicit reply-to
        fd.set('message', msg);
        fd.set('consent', consent ? 'yes' : 'no');
        fd.set('botcheck', 'false');

        // Optional meta (best-effort)
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
        const ua = req.headers.get('user-agent') ?? '';
        const referer = req.headers.get('referer') ?? '';
        if (ip) fd.set('ip', ip);
        if (ua) fd.set('user_agent', ua);
        if (referer) fd.set('referrer', referer);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { Accept: 'application/json' }, // Content-Type auto set with FormData
            cache: 'no-store',
            body: fd,
        });

        // Try JSON first; fallback to text
        let data: { success?: boolean; message?: string } = {};
        let rawText = '';
        try {
            data = await res.json();
        } catch {
            rawText = await res.text().catch(() => '');
        }

        if (!res.ok || !data?.success) {
            const upstreamMsg = data?.message || (rawText ? `Raw: ${rawText.slice(0, 200)}` : '') || `Upstream status ${res.status}`;

            // Log full details server-side
            console.error('Web3Forms failure', { status: res.status, data, rawText });

            return NextResponse.json(
                { success: false, error: upstreamMsg },
                { status: 502 } // keep 502 so your UI path stays the same
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
        console.error('Contact API error', e);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export function GET() {
    return NextResponse.json({ ok: true, hint: 'POST only' }, { status: 200 });
}
