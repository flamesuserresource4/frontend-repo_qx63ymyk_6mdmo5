import { useEffect, useState } from 'react';
import { Button } from './Primitives';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${
      scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm' : 'bg-white/40 backdrop-blur-md'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'Space Grotesk, ui-sans-serif, system-ui' }}>Tauriam</span>
            <span className="sr-only">Tauriam Home</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#docs" className="hover:text-gray-900">Docs</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" href="#login">Login</Button>
            <Button variant="primary" href="#signup">Signup</Button>
          </div>

          {/* Mobile menu icon placeholder (non-functional) */}
          <div className="md:hidden" />
        </nav>
      </div>
    </header>
  );
}
