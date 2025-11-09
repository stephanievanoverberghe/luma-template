// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="section pt-6">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <a href="#" className="underline-offset-4 hover:underline">
                    Legal (example)
                </a>
                <p className="text-muted">© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
            </div>
        </footer>
    );
}
