// components/CTA.tsx
export default function CTA() {
    return (
        <section id="get" className="section">
            <div className="container">
                <div className="card p-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Launch faster with a <span className="text-brand">clean, minimal</span> base.
                    </h2>
                    <p className="mt-3 text-muted">Get the template and start building today.</p>

                    <a className="btn mt-6" href="#" aria-label="Get this template">
                        Get this template
                    </a>

                    <div className="mt-6 hr" />
                    <p className="mt-6 text-sm text-muted">No unnecessary dependencies. No backend. Just ship.</p>
                </div>
            </div>
        </section>
    );
}
