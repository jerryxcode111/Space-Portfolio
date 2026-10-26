import React, { useState, useEffect, useRef } from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: { label: string; id: SectionId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Focus', id: 'focus' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP: Floating Centered Pill Navbar                    */}
      {/* ========================================================= */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto hidden md:block select-none">
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
                className={`font-body text-[13px] tracking-wide transition-colors cursor-pointer relative py-0.5 focus:outline-none ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#9FA4BC] hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* ========================================================= */}
      {/* PHONE: Only a Hamburger on the Right Side + Blur Popover   */}
      {/* ========================================================= */}
      <div ref={menuRef} className="md:hidden">
        {/* Only Hamburger Button (Top Right) */}
        <header className="fixed top-4 right-4 sm:top-5 sm:right-5 z-50 pt-safe pointer-events-auto select-none">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="w-11 h-11 rounded-full bg-[#05060A]/85 backdrop-blur-xl border border-white/15 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:border-[#C9D3F0]/50 active:scale-95 transition-all cursor-pointer focus:outline-none"
          >
            {/* Animated 3-Line Hamburger Icon */}
            <div className="w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
              <span
                className={`w-5 h-0.5 bg-[#ECEFF6] rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-[#ECEFF6] rounded-full transition-all duration-200 self-end ${
                  isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#ECEFF6] rounded-full transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </header>

        {/* Backdrop click shield (Closes when tapping anywhere outside) */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Compact Blur Background Window with strictly the 5 menus */}
        {isOpen && (
          <div
            role="menu"
            aria-label="Mobile Navigation"
            className="fixed top-17 right-4 sm:top-18 sm:right-5 z-50 w-48 rounded-2xl bg-[#06080F]/90 backdrop-blur-2xl border border-white/12 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_24px_rgba(201,211,240,0.12)] flex flex-col gap-1 select-none animate-fadeIn"
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id ||
                (item.id === 'focus' && activeSection === 'journey') ||
                (item.id === 'work' && activeSection === 'next');

              return (
                <button
                  key={item.id}
                  role="menuitem"
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-body text-sm font-medium transition-all flex items-center justify-between cursor-pointer focus:outline-none active:scale-[0.98] ${
                    isActive
                      ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'text-[#9FA4BC] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
