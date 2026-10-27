import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { SectionId } from '../../types';

interface FooterProps {
  onNavigate: (id: SectionId) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToTop }) => {
  const links: { label: string; id: SectionId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Focus', id: 'focus' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative w-full bg-[#030407] py-10 sm:py-12 overflow-hidden border-t border-white/5 select-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-6">
        {/* Simple Top Row: Navigation Links + Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5 pb-6 border-b border-white/5">
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="font-mono text-xs uppercase tracking-widest text-[#9FA4BC] hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
              © 2026
            </span>
            <button
              onClick={onScrollToTop}
              aria-label="Scroll back to top"
              className="font-mono text-xs uppercase tracking-widest text-[#9FA4BC] hover:text-white flex items-center gap-1.5 group transition-colors cursor-pointer focus:outline-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform text-[#C9D3F0]" />
            </button>
          </div>
        </div>

        {/* Center Bottom: Designed & Built with Heart */}
        <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-body text-white/70">
          <span>Designed & built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse inline" />
          <span>by <span className="text-white font-medium">Muhammad Jahanzaib</span></span>
        </div>
      </div>
    </footer>
  );
};
