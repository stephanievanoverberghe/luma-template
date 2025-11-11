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

type Web3FormsResponse = {
    success?: boolean;
    message?: string;
    // Web3Forms can return additional properties; keep them flexible but typed
    data?: unknown;
    [key: string]: unknown;
};

function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isWeb3FormsResponse(x: unknown): x is Web3FormsResponse {
    if (typeof x !== 'object' || x === null) return false;
    // success may be boolean; message may be string; both optional
    const maybe = x as Record<string, unknown>;
    const hasSuccess = !('success' in maybe) || typeof maybe.success === 'boolean';
    const hasMessage = !('message' in maybe) || typeof maybe.message === 'string';
    return hasSuccess && hasMessage;
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

        // Basic validation
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
            return NextResponse.json({ success: false, error: 'Missing server configuration (WEB3FORMS_KEY).' }, { status: 500 });
        }

        // Meta (best-effort)
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
        const ua = req.headers.get('user-agent') ?? '';
        const referer = req.headers.get('referer') ?? '';

        // Send to Web3Forms
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            cache: 'no-store',
            body: JSON.stringify({
                access_key,
                subject: s ? `Contact — ${s}` : 'Contact — Form',
                name: n,
                from_name: n,
                email: m, // reply-to
                replyto: m, // explicit reply-to field supported by Web3Forms
                message: msg,
                consent: consent ? 'yes' : 'no',
                botcheck: false,
                ip,
                user_agent: ua,
                referrer: referer,
            }),
        });

        const raw: unknown = await res.json().catch(() => ({}));
        const data: Web3FormsResponse = isWeb3FormsResponse(raw) ? raw : {};

        if (!res.ok || !data.success) {
            // Log details server-side to debug keys / domain restrictions / suppression list, etc.
            console.error('Web3Forms error', { status: res.status, data });
            return NextResponse.json({ success: false, error: data.message || `Failed to send via Web3Forms (status ${res.status}).` }, { status: 502 });
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
