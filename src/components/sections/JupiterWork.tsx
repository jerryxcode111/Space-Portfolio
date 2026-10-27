import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Layers, Cpu, Radio, Globe, Github } from 'lucide-react';
import { ProjectItem } from '../../types';
import { PROJECTS_DATA } from '../../data/projects';

interface JupiterWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const JupiterWork: React.FC<JupiterWorkProps> = ({ onSelectProject }) => {
  const laneRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Mouse drag-to-scroll tracking refs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const checkScrollLimits = useCallback(() => {
    const lane = laneRef.current;
    if (!lane) return;
    setCanScrollLeft(lane.scrollLeft > 10);
    setCanScrollRight(
      Math.ceil(lane.scrollLeft + lane.clientWidth) < lane.scrollWidth - 10
    );
  }, []);

  // Track scroll limits for left/right arrow buttons
  useEffect(() => {
    const lane = laneRef.current;
    if (!lane) return;

    lane.addEventListener('scroll', checkScrollLimits, { passive: true });
    checkScrollLimits();

    return () => {
      lane.removeEventListener('scroll', checkScrollLimits);
    };
  }, [checkScrollLimits]);

  // 2. Mouse Drag-to-Scroll (Hold & move mouse left/right to pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    const lane = laneRef.current;
    if (!lane) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - lane.offsetLeft;
    scrollLeftRef.current = lane.scrollLeft;
    setIsGrabbing(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const lane = laneRef.current;
    if (!lane) return;

    e.preventDefault();
    const x = e.pageX - lane.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;

    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }

    lane.scrollLeft = scrollLeftRef.current - walk;
    checkScrollLimits();
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  const handleCardClick = (proj: ProjectItem) => {
    // If the user was dragging to scroll, don't trigger modal
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    onSelectProject(proj);
  };

  const scrollLane = (direction: 'left' | 'right') => {
    if (laneRef.current) {
      const scrollAmount = laneRef.current.clientWidth * 0.8;
      laneRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="work"
      aria-label="Section 05: Jupiter — Selected Work"
      className="relative w-full min-h-screen px-4 sm:px-6 lg:px-16 pt-24 sm:pt-32 pb-24 sm:pb-32 flex flex-col justify-between overflow-hidden select-none border-b border-white/5"
    >
      {/* Ambient Jovian Glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-[#BFA58A]/[0.08] blur-[80px]" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#BFA58A] flex items-center gap-2.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFA58A] shadow-[0_0_8px_#BFA58A]" />
            <span>05 — JUPITER</span>
          </div>

          <h2 className="font-headline font-extrabold text-4xl sm:text-6xl lg:text-8xl text-white tracking-tight leading-none">
            Selected{' '}
            <span className="font-serif italic font-normal text-[#BFA58A]">
              work.
            </span>
          </h2>
        </div>

        {/* Navigation Arrow Buttons */}
        <div className="flex items-center gap-2.5 self-start md:self-end">
          <button
            onClick={() => scrollLane('left')}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className={`w-10 h-10 rounded-full border border-white/12 flex items-center justify-center transition-all cursor-pointer active:scale-95 focus:outline-none ${
              canScrollLeft
                ? 'bg-[#080A10] text-white hover:border-[#BFA58A]/60'
                : 'bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollLane('right')}
            disabled={!canScrollRight}
            aria-label="Next project"
            className={`w-10 h-10 rounded-full border border-white/12 flex items-center justify-center transition-all cursor-pointer active:scale-95 focus:outline-none ${
              canScrollRight
                ? 'bg-[#080A10] text-white hover:border-[#BFA58A]/60'
                : 'bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed'
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Carousel with Mouse Drag-to-Scroll + Invisible Scrollbars */}
      <div
        ref={laneRef}
        role="region"
        aria-label="Projects Carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`relative z-10 w-full flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar max-w-7xl mx-auto focus:outline-none select-none transition-colors ${
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {PROJECTS_DATA.map((proj, idx) => {
          const accent = proj.accentColor || '#BFA58A';

          return (
            <article
              key={proj.id}
              onClick={() => handleCardClick(proj)}
              className="shrink-0 w-[86vw] sm:w-[440px] lg:w-[480px] flex flex-col justify-between bg-[#07090F]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#BFA58A]/60 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.95)]"
            >
              {/* Header row: Number + Category Badge + Year */}
              <div className="flex items-center justify-between pb-4 border-b border-white/8 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-white/40 group-hover:text-white transition-colors">
                    {proj.num || `0${idx + 1}`}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 font-medium"
                    style={{ color: accent }}
                  >
                    {proj.category || 'Mobile Project'}
                  </span>
                </div>

                <span className="font-mono text-xs text-white/40">
                  {proj.year || '2026'}
                </span>
              </div>

              {/* Visual Interactive Viewport */}
              <div className="w-full aspect-[16/10] my-4 rounded-2xl bg-[#030408] relative overflow-hidden border border-white/8 group-hover:border-white/20 transition-all p-4 flex flex-col justify-between pointer-events-none">
                {/* Background Stardust Dots */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:14px_14px] pointer-events-none" />

                {proj.id === 'orbit-mobile' ? (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-white/40 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#C9D3F0]" />
                      ORBIT_CANVAS
                    </span>
                    <div className="my-auto flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-dashed border-[#C9D3F0]/40 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                        <span className="w-3 h-3 rounded-full bg-[#C9D3F0] shadow-[0_0_10px_#C9D3F0]" />
                        <span className="absolute -top-1 left-3 w-2 h-2 rounded-full bg-[#BFA58A]" />
                      </div>
                    </div>
                    <span className="font-mono text-[9px] text-[#C9D3F0] text-right">60 FPS</span>
                  </div>
                ) : proj.id === 'celestial-ui' ? (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-white/40 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-[#769CFF]" />
                      SPRING_PRIMITIVES
                    </span>
                    <div className="my-auto w-full px-2 flex items-end gap-1.5 h-10">
                      {[35, 65, 100, 75, 45, 85, 95, 60, 40, 70, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#769CFF]/40 to-[#ECEFF6] rounded-t group-hover:scale-y-110 transition-transform"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] text-[#769CFF] text-right">WCAG AA</span>
                  </div>
                ) : (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-white/40 flex items-center gap-1.5">
                      <Radio className="w-3 h-3 text-[#E8A85A]" />
                      ASYNC_ISOLATES
                    </span>
                    <div className="my-auto flex flex-col gap-2 px-2">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                        <div className="h-full bg-[#E8A85A] w-3/4 rounded-full" />
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                        <div className="h-full bg-[#C9D3F0] w-1/2 rounded-full" />
                      </div>
                    </div>
                    <span className="font-mono text-[9px] text-[#E8A85A] text-right">12ms PING</span>
                  </div>
                )}
              </div>

              {/* Title & Short Tagline */}
              <div className="flex flex-col gap-1 pointer-events-none">
                <h3 className="font-headline font-bold text-xl text-white group-hover:text-[#BFA58A] transition-colors">
                  {proj.title}
                </h3>
                <p className="font-body text-xs text-white/60 font-light line-clamp-2">
                  {proj.tagline || proj.subtitle}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="pt-3 flex flex-wrap gap-1.5 pointer-events-none">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/70 border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Direct Buttons: Live Demo + Details + GitHub */}
              <div
                className="pt-5 mt-3 border-t border-white/8 flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={proj.liveUrl || proj.githubUrl || 'https://github.com/jerryxcode111'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 px-4 rounded-full bg-[#BFA58A] hover:bg-[#BFA58A]/90 text-[#05060A] font-body text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-[0_0_14px_rgba(191,165,138,0.3)] cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>

                <button
                  onClick={() => onSelectProject(proj)}
                  className="h-9 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Details</span>
                  <Sparkles className="w-3 h-3 text-[#BFA58A]" />
                </button>

                <a
                  href={proj.githubUrl || 'https://github.com/jerryxcode111'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
