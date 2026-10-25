import React, { useEffect, useState } from 'react';

interface CelestialScrollProgressProps {
  motionEnabled?: boolean;
}

export const CelestialScrollProgress: React.FC<CelestialScrollProgressProps> = ({
  motionEnabled = true,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Celestial scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none select-none bg-white/[0.04]"
    >
      {/* Hardware-accelerated GPU transformed progress line */}
      <div
        className="h-full w-full will-change-transform transition-transform duration-75 ease-out"
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: 'left',
          background:
            'linear-gradient(90deg, #C9D3F0 0%, #3C5C9E 22%, #B2634A 45%, #CDB98A 68%, #BFA58A 85%, #E8A85A 100%)',
          boxShadow:
            '0 0 10px rgba(201, 211, 240, 0.5), 0 0 20px rgba(232, 168, 90, 0.35)',
        }}
      />

      {/* Leading glowing celestial comet node */}
      {progress > 0.5 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${progress}%`,
          }}
        >
          {/* Pulsing starlight corona halo */}
          <span
            className={`absolute inset-0 rounded-full bg-[#E8A85A] opacity-60 ${
              motionEnabled ? 'animate-ping' : ''
            }`}
            style={{ animationDuration: '2.5s' }}
          />
          {/* Center pinpoint luminous core */}
          <span className="relative block w-full h-full rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_16px_#C9D3F0,0_0_24px_#E8A85A]" />
        </div>
      )}
    </div>
  );
};
