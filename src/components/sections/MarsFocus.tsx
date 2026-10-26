import React from 'react';

export const MarsFocus: React.FC = () => {
  return (
    <section
      id="focus"
      aria-label="Section 03: Mars — Focus & Technical Specialization"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-16 py-16 sm:py-20 select-none border-b border-white/5"
    >
      {/* Vivid Atmospheric Mars with Dramatic Rim Light & Glow */}
      <div
        className="pointer-events-none absolute -right-24 sm:-right-36 md:-right-48 -top-12 sm:-top-16 w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] md:w-[760px] md:h-[760px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, #D67B5F 0%, #B2634A 25%, #38150C 55%, #05060A 80%)',
          boxShadow:
            'inset -45px -45px 90px rgba(0,0,0,0.98), inset 12px 12px 40px rgba(214,123,95,0.9), 0 0 140px rgba(178,99,74,0.45)',
        }}
      >
        {/* Mars Atmosphere Haze */}
        <div className="w-full h-full rounded-full opacity-60 mix-blend-screen bg-gradient-to-tr from-transparent via-[#B2634A]/30 to-[#D67B5F]/40" />
      </div>

      {/* Section Label: 03 — MARS */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#B2634A] shadow-[0_0_12px_#D67B5F]" />
          <span className="font-mono text-xs text-[#9FA4BC] uppercase tracking-[0.25em] font-medium">
            03 — MARS
          </span>
        </div>
      </div>

      {/* Main Central Composition: FLUTTER + PHONE OUTLINE + DART */}
      <div className="relative w-full max-w-7xl mx-auto my-auto py-6 sm:py-8 flex flex-col items-center justify-center z-10">
        {/* FLUTTER: Solid Display Bold */}
        <div className="w-full flex justify-center text-center">
          <h2 className="font-headline font-extrabold uppercase tracking-tighter text-white leading-none select-none text-[clamp(3.8rem,14vw,12.5rem)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
            FLUTTER
          </h2>
        </div>

        {/* Center Phone Outline */}
        <div className="w-full flex flex-col items-center justify-center my-4 sm:my-6 md:my-8 z-20">
          <div className="relative w-28 h-48 sm:w-36 sm:h-64 md:w-40 md:h-72 rounded-[2.2rem] border border-[#B2634A]/60 bg-[#05060A]/70 backdrop-blur-xl p-2.5 shadow-[0_0_40px_rgba(178,99,74,0.25),inset_0_0_15px_rgba(214,123,95,0.2)] flex flex-col justify-between">
            {/* Dynamic speaker notch */}
            <div className="w-10 h-1.5 bg-white/20 rounded-full mx-auto" />

            {/* Minimal viewport inner display */}
            <div className="w-full h-[calc(100%-1.75rem)] rounded-[1.6rem] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#B2634A]/10 to-transparent">
              <div className="w-10 h-10 rounded-full border border-[#D67B5F]/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D67B5F] shadow-[0_0_8px_#D67B5F] animate-ping" />
              </div>
            </div>

            {/* Bottom bar indicator */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />
          </div>

          {/* Short Supporting Line */}
          <p className="mt-5 sm:mt-7 text-center font-body text-base md:text-lg text-white/90 font-normal tracking-wide px-4">
            Crafting fluid{' '}
            <span className="font-serif italic text-2xl md:text-3xl text-white ml-0.5">
              mobile
            </span>{' '}
            experiences.
          </p>
        </div>

        {/* DART: Bright Outline Display Bold */}
        <div className="w-full flex justify-center text-center">
          <h2 className="font-headline font-extrabold uppercase tracking-tighter text-stroke-bright leading-none select-none text-[clamp(3.8rem,14vw,12.5rem)] drop-shadow-[0_0_25px_rgba(236,239,255,0.25)]">
            DART
          </h2>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 pb-2" />
    </section>
  );
};
