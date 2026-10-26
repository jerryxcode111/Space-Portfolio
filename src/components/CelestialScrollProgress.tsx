import React, { useEffect, useRef } from 'react';

interface CelestialScrollProgressProps {
  motionEnabled?: boolean;
}

/**
 * Ultra-smooth, zero-rerender GPU-accelerated celestial scroll progress indicator.
 * Updates directly on the compositor thread via requestAnimationFrame and 3D transforms,
 * eliminating all React re-renders, layout recalculations, and mobile scroll stutter.
 */
export const CelestialScrollProgress: React.FC<CelestialScrollProgressProps> = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      const clamped = Math.min(1, Math.max(0, ratio));

      // 100% GPU compositor update — 0 React re-renders & 0 DOM reflows
      if (barRef.current) {
        barRef.current.style.transform = `scale3d(${clamped}, 1, 1)`;
      }

      if (cometRef.current) {
        cometRef.current.style.transform = `translate3d(${clamped * 100}vw, -50%, 0)`;
        cometRef.current.style.opacity = clamped > 0.005 ? '1' : '0';
      }

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
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none select-none bg-white/[0.04]"
    >
      {/* Hardware-accelerated GPU transformed progress line (scale3d only, 0 layout shifts) */}
      <div
        ref={barRef}
        className="h-full w-full will-change-transform origin-left"
        style={{
          transform: 'scale3d(0, 1, 1)',
          background:
            'linear-gradient(90deg, #C9D3F0 0%, #3C5C9E 22%, #B2634A 45%, #CDB98A 68%, #BFA58A 85%, #E8A85A 100%)',
          boxShadow:
            '0 0 8px rgba(201, 211, 240, 0.4), 0 0 16px rgba(232, 168, 90, 0.3)',
        }}
      />

      {/* Leading glowing celestial comet node (translate3d only on GPU compositor) */}
      <div
        ref={cometRef}
        className="absolute top-1/2 left-0 -ml-1.5 w-3 h-3 rounded-full pointer-events-none opacity-0 will-change-transform"
        style={{
          transform: 'translate3d(0vw, -50%, 0)',
        }}
      >
        {/* Soft static starlight corona */}
        <span className="absolute -inset-1 rounded-full bg-[#E8A85A]/30 blur-[2px]" />
        {/* Center luminous core */}
        <span className="relative block w-full h-full rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_14px_#C9D3F0,0_0_20px_#E8A85A]" />
      </div>
    </div>
  );
};
