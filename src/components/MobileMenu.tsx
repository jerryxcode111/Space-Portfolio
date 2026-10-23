import React, { useEffect } from 'react';
import { X, Play, Pause } from 'lucide-react';
import { SectionId } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
  activeSection: SectionId;
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeSection,
  motionEnabled,
  onToggleMotion,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const chapters: { id: SectionId; label: string; name: string }[] = [
    { id: 'home', label: '01', name: 'MOON' },
    { id: 'about', label: '02', name: 'EARTH' },
    { id: 'focus', label: '03', name: 'MARS' },
    { id: 'journey', label: '04', name: 'SATURN' },
    { id: 'work', label: '05', name: 'JUPITER' },
    { id: 'next', label: '06', name: 'NEPTUNE' },
    { id: 'contact', label: '07', name: 'SUN' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-[100] bg-[#05060A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn"
    >
      {/* Header row */}
      <div className="flex items-center justify-between pt-safe">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
          // CELESTIAL INDEX
        </span>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chapters list */}
      <nav className="flex flex-col gap-4 my-auto py-4">
        {chapters.map((ch) => {
          const isActive = activeSection === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => {
                onNavigate(ch.id);
                onClose();
              }}
              className="group flex items-baseline gap-4 text-left transition-transform active:scale-95 cursor-pointer"
            >
              <span className="font-mono text-xs tracking-widest text-[#C9D3F0]/60 group-hover:text-[#C9D3F0]">
                {ch.label}
              </span>
              <span
                className={`font-headline text-3xl sm:text-4xl font-bold tracking-tight transition-colors ${
                  isActive
                    ? 'text-white drop-shadow-[0_0_12px_rgba(201,211,240,0.5)]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                — {ch.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer controls: motion toggle */}
      <div className="pb-safe flex flex-col gap-4 border-t border-white/10 pt-5">
        <div className="flex items-center justify-between">
          <button
            onClick={onToggleMotion}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-xs font-mono tracking-wider text-white/80 cursor-pointer hover:bg-white/10 transition-colors"
          >
            {motionEnabled ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>MOTION {motionEnabled ? 'ON' : 'OFF'}</span>
          </button>
          <span className="font-mono text-[11px] tracking-widest text-white/40">
            © 2026
          </span>
        </div>
      </div>
    </div>
  );
};
