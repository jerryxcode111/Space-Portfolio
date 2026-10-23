import React from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenMobileMenu,
}) => {
  const navItems: { label: string; id: SectionId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Focus', id: 'focus' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* FLOATING CENTERED PILL NAVBAR (Desktop - Strictly 5 Links) */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto hidden md:block">
        <nav
          aria-label="Main Navigation"
          className="bg-[#05060A]/80 backdrop-blur-xl border border-white/10 rounded-full px-7 py-2.5 flex items-center gap-7 shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === 'focus' && activeSection === 'journey') ||
              (item.id === 'work' && activeSection === 'next');

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-body text-[13px] tracking-wide transition-colors cursor-pointer relative py-0.5 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#9FA4BC] hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9D3F0] shadow-[0_0_8px_#C9D3F0]" />
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* MOBILE TOP BAR: Single Centered "Menu" Pill matching attached designs */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pt-safe pointer-events-auto md:hidden">
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open navigation menu"
          className="h-9 px-5 rounded-full bg-[#0C0E14]/85 backdrop-blur-md border border-white/10 flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.7)] active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9D3F0] shadow-[0_0_8px_rgba(201,211,240,0.9)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 font-medium">
            Menu
          </span>
        </button>
      </header>
    </>
  );
};
