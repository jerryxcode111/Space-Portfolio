import React from 'react';
import { SectionId } from '../types';

interface BottomBarProps {
  activeSection: SectionId;
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  activeSection,
  motionEnabled,
  onToggleMotion,
}) => {
  const getSectionDetails = (id: SectionId) => {
    switch (id) {
      case 'home':
        return { label: '01 — MOON', color: '#C9D3F0' };
      case 'about':
        return { label: '02 — EARTH', color: '#769CFF' };
      case 'focus':
        return { label: '03 — MARS', color: '#D67B5F' };
      case 'journey':
        return { label: '04 — SATURN', color: '#E6D7B0' };
      case 'work':
        return { label: '05 — JUPITER', color: '#BFA58A' };
      case 'next':
        return { label: '06 — NEPTUNE', color: '#AFC6FF' };
      case 'contact':
        return { label: '07 — SUN', color: '#E8A85A' };
      default:
        return { label: '01 — MOON', color: '#C9D3F0' };
    }
  };

  const { label, color } = getSectionDetails(activeSection);

  return (
    <>
      {/* FIXED BOTTOM-LEFT SECTION INDICATOR */}
      <div className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-40 pointer-events-none select-none transition-all duration-300">
        <div className="flex items-center gap-2.5 bg-[#05060A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
          <span
            className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-[#9FA4BC] uppercase font-medium">
            {label}
          </span>
        </div>
      </div>

      {/* FIXED BOTTOM-RIGHT MOTION TOGGLE */}
      <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 pointer-events-auto">
        <button
          onClick={onToggleMotion}
          aria-label={motionEnabled ? 'Pause celestial motion' : 'Resume celestial motion'}
          className="font-mono text-[11px] sm:text-xs text-[#9FA4BC] hover:text-white border border-white/10 hover:border-white/30 bg-[#05060A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95"
          type="button"
        >
          <span>Motion</span>
          <span
            className="text-[9px] transition-colors"
            style={{ color: motionEnabled ? color : '#676C82' }}
          >
            ●
          </span>
          <span className="font-medium text-white/90">
            {motionEnabled ? 'ON' : 'OFF'}
          </span>
        </button>
      </div>
    </>
  );
};
