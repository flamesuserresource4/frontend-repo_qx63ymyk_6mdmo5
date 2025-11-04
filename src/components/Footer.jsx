import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-xl font-semibold" style={{ fontFamily: 'Space Grotesk, ui-sans-serif, system-ui' }}>Tauriam</div>
            <p className="mt-2 text-sm text-gray-400">Schema-driven ERP SaaS for modern businesses.</p>
          </div>
          <div className="flex gap-6 text-sm justify-center md:justify-start">
            <a href="#docs" className="hover:text-white">Docs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
          <div className="flex gap-4 justify-start md:justify-end">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">© 2025 Tauriam. All rights reserved.</div>
      </div>
    </footer>
  );
}
