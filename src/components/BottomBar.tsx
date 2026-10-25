import React from 'react';

interface BottomBarProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  motionEnabled,
  onToggleMotion,
}) => {
  return (
    /* FIXED BOTTOM-RIGHT MOTION TOGGLE ONLY (Bottom-left box removed per user request) */
    <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 pointer-events-auto select-none">
      <button
        onClick={onToggleMotion}
        aria-label={motionEnabled ? 'Pause celestial motion' : 'Resume celestial motion'}
        className="font-mono text-[11px] sm:text-xs text-[#9FA4BC] hover:text-white border border-white/10 hover:border-white/30 bg-[#05060A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-95"
        type="button"
      >
        <span>Motion</span>
        <span
          className="text-[9px] transition-colors"
          style={{ color: motionEnabled ? '#C9D3F0' : '#676C82' }}
        >
          ●
        </span>
        <span className="font-medium text-white/90">
          {motionEnabled ? 'ON' : 'OFF'}
        </span>
      </button>
    </div>
  );
};
