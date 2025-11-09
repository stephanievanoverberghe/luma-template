// components/Logos.tsx
import Image from 'next/image';
import { site } from '@/site.config';

export default function Logos() {
    return (
        <section className="section">
            <div className="container text-center">
                <p className="text-sm text-muted">Trusted by creators & indie founders</p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
                    {site.logos.map((logo) => (
                        <div key={logo.alt} className="opacity-70 hover:opacity-100 transition-opacity">
                            <Image src={logo.src} alt={logo.alt} width={120} height={32} className="mx-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
