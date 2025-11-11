// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Page() {
    return (
        <>
            <Header />
            <main id="content">
                <Hero />
                <Logos />
                <Stats />
                <Features />
                <About />
                <Pricing />
                <FAQ />
                <Testimonials />
                <Contact />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
