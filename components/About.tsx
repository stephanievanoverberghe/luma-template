import Image from 'next/image';

export default function About() {
    return (
        <section className="section">
            <div className="container grid gap-10 md:grid-cols-2 items-center">
                <div className="relative aspect-4/3 w-full card overflow-hidden">
                    <Image
                        src="/about-placeholder.png"
                        alt="Clean, minimal workspace"
                        fill
                        sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">About this template</h2>
                    <p className="mt-4 text-muted">A minimal landing starter built with modern best practices. Customize quickly and sell as a template.</p>
                    <ul className="mt-4 space-y-2 text-muted">
                        <li>• Zero backend, zero DB</li>
                        <li>• Accessible, responsive layout</li>
                        <li>• Simple, readable code structure</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
