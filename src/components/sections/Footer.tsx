import React from 'react';
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
    <footer className="relative w-full bg-[#030407] pt-16 pb-12 overflow-hidden flex flex-col justify-between border-t border-white/5 select-none">
      {/* Minimal Row: Links + Back to top */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="font-mono text-xs uppercase tracking-widest text-[#9FA4BC] hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6 sm:gap-8">
          <span className="font-mono text-xs text-[#9FA4BC] uppercase tracking-widest">
            © 2026
          </span>
          <button
            onClick={onScrollToTop}
            className="font-mono text-xs uppercase tracking-widest text-[#9FA4BC] hover:text-white flex items-center gap-2 group transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>
      </div>

      {/* Outlined display name (~15% opacity) */}
      <div className="w-full px-2 sm:px-4 overflow-hidden pointer-events-none pt-4 pb-2">
        <h2 className="font-headline font-extrabold text-[clamp(2.1rem,7.5vw,7.8rem)] text-center uppercase tracking-tight text-transparent text-stroke-footer opacity-20 whitespace-nowrap leading-none mx-auto select-none">
          MUHAMMAD JAHANZAIB
        </h2>
      </div>
    </footer>
  );
};
