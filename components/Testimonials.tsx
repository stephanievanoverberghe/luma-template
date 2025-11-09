// components/Testimonials.tsx

type Testimonial = {
    quote: string;
    author: string;
    role: string;
};

const items: Testimonial[] = [
    { quote: 'Perfect base for my startup landing. Clean, fast, and easy to tweak.', author: 'Alex M.', role: 'Founder, Seed Studio' },
    { quote: 'I reskinned it in an hour and shipped the same day.', author: 'Clara M.', role: 'Indie Maker' },
    { quote: 'No bloat — clients love the clean look.', author: 'Jon K.', role: 'Freelance Developer' },
];

const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .replace('.', '')
        .slice(0, 2)
        .toUpperCase();

export default function Testimonials() {
    return (
        <section className="section section-alt" aria-labelledby="testimonials-title">
            <div className="container text-center max-w-2xl mx-auto">
                <h2 id="testimonials-title" className="text-3xl font-bold tracking-tight">
                    What people say
                </h2>
                <p className="mt-3 text-muted">Simple, elegant, effective.</p>
            </div>

            <div className="container mt-10 grid gap-6 md:grid-cols-3">
                {items.map((t) => (
                    <figure key={t.author + t.role} className="relative card p-6 md:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                        {/* Accent top bar */}
                        <div className="absolute left-0 right-0 top-0 h-1 bg-brand/20 rounded-t-2xl" aria-hidden />

                        {/* Quote body */}
                        <blockquote className="relative text-lg leading-relaxed">
                            {/* Decorative opening quote */}
                            <span aria-hidden className="absolute -left-2 -top-2 text-4xl text-brand/30 select-none">
                                “
                            </span>
                            <span className="pl-4 block"> {t.quote} </span>
                        </blockquote>

                        {/* Footer */}
                        <figcaption className="mt-6 flex items-center gap-3">
                            {/* Avatar (auto-initials, no images) */}
                            <span aria-hidden className="grid h-10 w-10 place-items-center rounded-full bg-accent text-foreground font-semibold" title={t.author}>
                                {getInitials(t.author)}
                            </span>

                            <div className="text-sm">
                                <div className="font-semibold text-foreground">{t.author}</div>
                                <div className="text-muted">{t.role}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Reassurance microcopy */}
            <div className="container mt-8 text-center text-sm text-muted">Loved by indie makers, studios, and fast-moving teams</div>
        </section>
    );
}
