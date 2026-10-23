import React from 'react';

export const EarthAbout: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Section 02: Earth — About & Background"
      className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24 overflow-hidden bg-gradient-to-b from-[#05060A] via-[#05060A] to-[#080B14] select-none border-b border-white/5"
    >
      {/* Top Section Label */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative z-10 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#769CFF] shadow-[0_0_10px_#769CFF]" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/60 font-medium">
            02 — EARTH
          </span>
        </div>
      </div>

      {/* Giant Headline & Minimal Statement Block */}
      <div className="relative z-10 my-auto py-12 max-w-5xl mx-auto w-full">
        {/* Giant headline with ONLY "Builder" in Instrument Serif Italic */}
        <h2 className="font-headline font-extrabold text-[2.75rem] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[7rem] tracking-[-0.035em] text-[#ECEFF6] leading-[0.96]">
          Student by day.
          <br />
          <span className="font-serif font-normal italic lowercase tracking-normal text-[#C9D3F0] ml-1">
            Builder
          </span>{' '}
          always.
        </h2>

        {/* ONE short supporting line only */}
        <p className="font-body text-base sm:text-lg md:text-xl text-white/75 font-light tracking-normal mt-6 sm:mt-8 max-w-xl">
          Computer Science at The Superior University, Lahore.
        </p>

        {/* Clean mono tags */}
        <div className="flex items-center gap-2 mt-8 sm:mt-10">
          <span className="font-mono text-xs tracking-widest uppercase text-white/70 bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full">
            CODE · IDEAS · MOBILE
          </span>
        </div>
      </div>

      {/* EARTH HORIZON AT BOTTOM: Curved glowing Earth horizon with deep blue tint #3C5C9E & rim light */}
      <div className="relative w-full z-10 select-none pb-2 mt-8 sm:mt-12">
        {/* Atmospheric Backglow */}
        <div className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[1200px] h-[300px] rounded-[100%] bg-[#3C5C9E]/30 blur-[90px]" />

        <div className="relative w-full h-24 sm:h-28 flex items-end justify-center overflow-visible">
          {/* Curved Earth Horizon Arc */}
          <div className="absolute bottom-0 w-[260%] sm:w-[220%] left-[-80%] sm:left-[-60%] h-64 rounded-[50%] border-t border-[#769CFF]/60 shadow-[0_-12px_40px_rgba(60,92,158,0.5)] pointer-events-none bg-gradient-to-b from-[#182647]/50 to-transparent" />

          {/* Single Subtle Lahore Beacon Dot */}
          <div className="relative z-20 flex flex-col items-center gap-2 -mb-1">
            <div className="relative flex items-center justify-center">
              <span className="w-3.5 h-3.5 rounded-full bg-[#C9D3F0] shadow-[0_0_12px_#C9D3F0] animate-ping absolute opacity-70" />
              <span className="w-2 h-2 rounded-full bg-white relative shadow-[0_0_8px_#ffffff]" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/80 bg-[#05060A]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              Lahore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
