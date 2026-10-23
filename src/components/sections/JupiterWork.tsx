import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Moon, Globe, Compass } from 'lucide-react';
import { ProjectItem } from '../../types';

interface JupiterWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const JupiterWork: React.FC<JupiterWorkProps> = ({ onSelectProject }) => {
  const laneRef = useRef<HTMLDivElement>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-01',
      num: '01',
      title: 'Orbit Mobile — Spatial Note Engine',
      subtitle: 'Flutter & Dart Mobile Architecture',
      description:
        'A fluid cross-platform mobile client designed with zero-friction gestures, offline-first SQLite sync, and reactive Riverpod state management.',
      tech: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'Clean Architecture'],
      icon: 'crescent',
      status: 'Signal incoming',
      highlights: [
        '60 FPS gesture-driven orbital timeline interface',
        'Bi-directional offline synchronization',
        'Custom canvas-rendered planetary nodes',
      ],
      githubUrl: 'https://github.com',
    },
    {
      id: 'proj-02',
      num: '02',
      title: 'Celestial UI Kit — Cross-Platform Components',
      subtitle: 'Component System & Motion Primitives',
      description:
        'An accessible, high-performance Flutter widget library featuring physics-based spring curves, WCAG AA compliance, and dark-matter theme tokens.',
      tech: ['Flutter SDK', 'CustomPainter', 'Vector Math', 'Golden Tests'],
      icon: 'globe',
      status: 'Signal incoming',
      highlights: [
        'Zero-dependency reactive widget tree',
        'Sub-16ms layout calculations on low-end Android devices',
        'Automated CI golden image regression testing',
      ],
      githubUrl: 'https://github.com',
    },
    {
      id: 'proj-03',
      num: '03',
      title: 'Aura Telemetry — Async Network Signal Analyzer',
      subtitle: 'Real-time WebSocket & Protocol Client',
      description:
        'An observatory instrument app built for real-time mobile API telemetry monitoring with background isolates and stream buffering.',
      tech: ['Dart Async', 'WebSockets', 'Isolates', 'Protocol Buffers'],
      icon: 'star',
      status: 'Signal incoming',
      highlights: [
        'Multi-threaded isolate workers for zero UI thread stutter',
        'Live packet visualizer with logarithmic timeline scales',
        'Exportable session logs and HAR analyzer',
      ],
      githubUrl: 'https://github.com',
    },
  ];

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
      className="relative w-full min-h-screen px-4 sm:px-6 lg:px-16 pt-24 sm:pt-36 pb-24 sm:pb-32 flex flex-col justify-between overflow-hidden select-none border-b border-white/5"
    >
      {/* Strong Sand/Tan Rim Light & Glow (#BFA58A) */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full bg-[#BFA58A]/[0.12] blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[600px] h-[300px] bg-gradient-to-r from-[#BFA58A]/[0.08] to-transparent blur-[120px] -rotate-12" />

      {/* Top Header */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-14 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2.5 max-w-4xl">
          {/* Section Label: 05 — JUPITER */}
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#BFA58A] flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFA58A] shadow-[0_0_8px_#BFA58A]" />
            <span>05 — JUPITER</span>
          </div>

          {/* Giant Headline: Bricolage Grotesque bold with ONLY "work" in Instrument Serif Italic */}
          <h2 className="font-headline font-bold text-5xl sm:text-7xl lg:text-9xl text-white tracking-tight leading-none">
            Selected{' '}
            <span className="font-serif italic font-normal text-[#BFA58A]">
              work.
            </span>
          </h2>

          {/* ONE short supporting line */}
          <p className="font-body text-base sm:text-lg text-white/70 mt-2 font-light">
            Signals from active mobile development.
          </p>
        </div>

        {/* Lateral Nav Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <button
            onClick={() => scrollLane('left')}
            aria-label="Previous project panel"
            className="w-11 h-11 rounded-full bg-[#0C0E14] border border-white/10 flex items-center justify-center text-[#9FA4BC] hover:text-white hover:border-[#BFA58A]/50 transition-all cursor-pointer active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollLane('right')}
            aria-label="Next project panel"
            className="w-11 h-11 rounded-full bg-[#0C0E14] border border-white/10 flex items-center justify-center text-[#9FA4BC] hover:text-white hover:border-[#BFA58A]/50 transition-all cursor-pointer active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Jupiter Panels: Responsive Horizontal Carousel / Grid */}
      <div
        ref={laneRef}
        tabIndex={0}
        role="region"
        aria-label="Selected Works Carousel"
        className="relative z-10 w-full flex gap-5 sm:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar max-w-7xl mx-auto focus:outline-none focus:ring-1 focus:ring-[#BFA58A]/40 rounded-2xl"
      >
        {projects.map((proj) => (
          <article
            key={proj.id}
            onClick={() => onSelectProject(proj)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectProject(proj);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details for Project ${proj.num}: ${proj.title}`}
            className="snap-start shrink-0 w-[88vw] sm:w-[500px] lg:w-[580px] flex flex-col justify-between bg-[#080A10]/90 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-[#BFA58A]/60 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)] cursor-pointer active:scale-[0.99]"
          >
            {/* Visual Viewport Box */}
            <div className="w-full aspect-[16/10] bg-[#0E111B] rounded-xl flex flex-col items-center justify-center gap-3 relative overflow-hidden border border-white/5 group-hover:border-[#BFA58A]/30 transition-colors">
              {proj.icon === 'crescent' && (
                <Moon className="w-10 h-10 text-[#BFA58A]/70 group-hover:text-[#BFA58A] transition-colors duration-300" />
              )}
              {proj.icon === 'globe' && (
                <Globe className="w-10 h-10 text-[#BFA58A]/70 group-hover:text-[#BFA58A] transition-colors duration-300" />
              )}
              {proj.icon === 'star' && (
                <Compass className="w-10 h-10 text-[#BFA58A]/70 group-hover:text-[#BFA58A] transition-colors duration-300" />
              )}
              <span className="font-mono text-xs uppercase tracking-widest text-white/90 font-medium">
                {proj.status}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9FA4BC]">
                Click to inspect signal
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="pt-6 sm:pt-8 flex items-end justify-between">
              <div>
                <h3 className="font-headline font-bold text-lg sm:text-xl text-white group-hover:text-[#BFA58A] transition-colors">
                  {proj.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#9FA4BC] mt-1 line-clamp-1">
                  {proj.subtitle}
                </p>
              </div>
              <span className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white/20 group-hover:text-[#BFA58A] transition-colors">
                {proj.num}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
