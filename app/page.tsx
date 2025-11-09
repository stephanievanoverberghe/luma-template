import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
    return (
        <main id="content">
            <Hero />
            <Features />
            <About />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
