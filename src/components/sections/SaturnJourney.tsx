import React from 'react';

export const SaturnJourney: React.FC = () => {
  return (
    <section
      id="journey"
      aria-label="Section 04: Saturn — Journey & Milestones"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-16 py-16 sm:py-20 select-none border-b border-white/5"
    >
      {/* Saturn Planet Sphere */}
      <div
        className="pointer-events-none absolute -left-20 sm:-left-28 md:-left-20 top-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[600px] md:h-[600px] rounded-full z-0 opacity-80 sm:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 65% 35%, #E6D7B0 0%, #CDB98A 30%, #4D4229 65%, #05060A 90%)',
          boxShadow:
            'inset -40px -40px 90px rgba(0,0,0,0.98), inset 12px 12px 35px rgba(230,215,176,0.85), 0 0 140px rgba(205,185,138,0.3)',
        }}
      >
        {/* Saturn Banding Strata */}
        <div className="w-full h-full rounded-full opacity-35 bg-gradient-to-tr from-transparent via-[#CDB98A] to-transparent" />
      </div>

      {/* Tilted Pale-Gold Planetary Ring SVG across section */}
      <div className="pointer-events-none absolute inset-0 w-full h-full z-1 overflow-visible">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
          <defs>
            <linearGradient id="saturnRingGlow" x1="0%" x2="100%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="#CDB98A" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#E6D7B0" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#CDB98A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#CDB98A" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Broad diffuse ring glow */}
          <path
            d="M-120,680 C360,560 920,380 1560,200"
            fill="none"
            filter="blur(6px)"
            stroke="#CDB98A"
            strokeOpacity="0.2"
            strokeWidth="32"
          />
          {/* Prominent Primary Gold Ring */}
          <path
            d="M-120,680 C360,560 920,380 1560,200"
            fill="none"
            stroke="url(#saturnRingGlow)"
            strokeWidth="2.5"
          />
          {/* Subtle Outer Echo Ring Lines */}
          <path
            d="M-120,660 C360,540 920,360 1560,180"
            fill="none"
            stroke="#CDB98A"
            strokeDasharray="4 4"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            d="M-120,705 C360,585 920,405 1560,225"
            fill="none"
            stroke="#CDB98A"
            strokeOpacity="0.25"
            strokeWidth="0.75"
          />
        </svg>
      </div>

      {/* Section Label: 04 — SATURN */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#CDB98A] shadow-[0_0_12px_#E6D7B0]" />
          <span className="font-mono text-xs text-[#9FA4BC] uppercase tracking-[0.25em] font-medium">
            04 — SATURN
          </span>
        </div>
      </div>

      {/* Section Body Content */}
      <div className="relative w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 flex flex-col justify-center z-10">
        {/* Headline: "Finding my orbit." */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <h2 className="font-headline font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
            Finding my{' '}
            <span className="font-serif italic font-normal text-[#E6D7B0] text-5xl sm:text-7xl md:text-8xl lg:text-9xl ml-1">
              orbit
            </span>
            .
          </h2>
        </div>

        {/* Ring Timeline: 3 Milestone Dots Positioned Directly Along the Trajectory */}
        <div className="relative w-full min-h-[280px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-start relative w-full">
            {/* DOT 1: Foundations */}
            <div className="relative flex flex-col items-start md:translate-y-24 group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#CDB98A] shadow-[0_0_16px_#E6D7B0]" />
                  <span
                    className="absolute w-6 h-6 rounded-full border border-[#CDB98A]/40 animate-ping"
                    style={{ animationDuration: '3s' }}
                  />
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-white tracking-tight">
                  Foundations
                </h3>
              </div>
              <p className="font-body text-sm md:text-base text-white/70 font-light pl-6 max-w-[280px]">
                Computer Science, The Superior University
              </p>
            </div>

            {/* DOT 2: Direction */}
            <div className="relative flex flex-col items-start md:translate-y-12 group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#CDB98A] shadow-[0_0_16px_#E6D7B0]" />
                  <span
                    className="absolute w-6 h-6 rounded-full border border-[#CDB98A]/40 animate-ping"
                    style={{ animationDuration: '3.5s' }}
                  />
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-white tracking-tight">
                  Direction
                </h3>
              </div>
              <p className="font-body text-sm md:text-base text-white/70 font-light pl-6 max-w-[280px]">
                Flutter and Dart
              </p>
            </div>

            {/* DOT 3: In progress */}
            <div className="relative flex flex-col items-start md:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E6D7B0] shadow-[0_0_20px_#E6D7B0]" />
                  <span
                    className="absolute w-6 h-6 rounded-full border border-[#E6D7B0]/60 animate-ping"
                    style={{ animationDuration: '2.5s' }}
                  />
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-[#E6D7B0] tracking-tight">
                  In progress
                </h3>
              </div>
              <p className="font-body text-sm md:text-base text-white/70 font-light pl-6 max-w-[280px]">
                Growing as a developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 pb-4" />
    </section>
  );
};
