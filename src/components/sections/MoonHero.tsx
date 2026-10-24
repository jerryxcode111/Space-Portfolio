import React from 'react';

interface MoonHeroProps {
  onViewWork: () => void;
  onSayHello: () => void;
}

export const MoonHero: React.FC<MoonHeroProps> = ({ onViewWork, onSayHello }) => {
  return (
    <section
      id="home"
      aria-label="Section 01: Moon — Introduction"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-26 pb-10 sm:pb-12 md:pb-14 overflow-hidden select-none"
    >
      {/* ROTATING VISIBLE STARS IN CIRCULAR ORBITS */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Orbit Plane 1 */}
        <div className="w-[600px] h-[600px] sm:w-[780px] sm:h-[780px] md:w-[940px] md:h-[940px] rounded-full border border-white/[0.05] relative animate-orbit-slow">
          <span className="absolute top-[8%] left-[24%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          <span className="absolute top-[42%] right-[4%] w-1 h-1 rounded-full bg-[#C9D3F0] shadow-[0_0_6px_#C9D3F0]" />
          <span className="absolute bottom-[16%] left-[12%] w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_6px_#ffffff]" />
          <span className="absolute bottom-[28%] right-[18%] w-1 h-1 rounded-full bg-[#C9D3F0]/80" />
          <span className="absolute top-[2%] right-[32%] w-1 h-1 rounded-full bg-white/70" />
          <span className="absolute bottom-[6%] left-[45%] w-1 h-1 rounded-full bg-white/80" />
        </div>

        {/* Orbit Plane 2 (Wider + Reverse Orbit) */}
        <div className="absolute w-[850px] h-[850px] sm:w-[1140px] sm:h-[1140px] md:w-[1360px] md:h-[1360px] rounded-full border border-white/[0.03] animate-orbit-medium">
          <span className="absolute top-[18%] left-[15%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_7px_#fff]" />
          <span className="absolute top-[28%] right-[10%] w-1 h-1 rounded-full bg-[#C9D3F0]" />
          <span className="absolute bottom-[22%] left-[22%] w-1.5 h-1.5 rounded-full bg-white/80" />
          <span className="absolute bottom-[12%] right-[25%] w-1 h-1 rounded-full bg-white/90 shadow-[0_0_6px_#fff]" />
          <span className="absolute top-[65%] left-[6%] w-1 h-1 rounded-full bg-[#C9D3F0]/70" />
        </div>

        {/* Atmospheric Soft Ice-Silver Rim Glow */}
        <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] rounded-full bg-[#C9D3F0]/15 blur-[90px] animate-pulse-slow" />
      </div>

      {/* Section Label: 01 — MOON */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 pt-2 px-2">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C9D3F0] shadow-[0_0_10px_#C9D3F0]" />
          <span className="font-mono text-xs text-[#9FA4BC] uppercase tracking-[0.25em]">
            01 — MOON
          </span>
        </div>
      </div>

      {/* REALISTIC MOON SPHERE */}
      <div className="pointer-events-none relative z-10 mt-3 sm:mt-5 md:mt-6 mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
        <div
          className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[330px] md:h-[330px] lg:w-[350px] lg:h-[350px] rounded-full relative overflow-hidden shadow-[0_0_80px_rgba(201,211,240,0.25),0_0_24px_rgba(201,211,240,0.35)]"
          style={{
            background:
              'radial-gradient(circle at 32% 28%, #DCE3F5 0%, #B8C2DA 28%, #6B7285 58%, #2A2E3B 84%, #10121A 100%)',
          }}
        >
          {/* Lunar Maria (Dark Basalt Plains) */}
          <div
            className="absolute inset-0 rounded-full mix-blend-multiply opacity-55"
            style={{
              background: `
                radial-gradient(ellipse 55% 42% at 36% 36%, #414759 0%, transparent 80%),
                radial-gradient(ellipse 45% 35% at 65% 30%, #363C4E 0%, transparent 75%),
                radial-gradient(ellipse 60% 50% at 52% 64%, #2E3342 0%, transparent 85%),
                radial-gradient(ellipse 30% 25% at 24% 60%, #3A3F50 0%, transparent 75%)
              `,
            }}
          />

          {/* Tycho-like Crater & Rays (South) */}
          <div className="absolute bottom-[18%] left-[44%] w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-white/10 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-3px_-3px_5px_rgba(0,0,0,0.8)] opacity-70" />

          {/* Copernicus-like Crater */}
          <div className="absolute top-[38%] left-[28%] w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-[#282D3B]/40 shadow-[inset_3px_3px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_6px_rgba(0,0,0,0.85)] opacity-80" />

          {/* Kepler Crater */}
          <div className="absolute top-[46%] left-[18%] w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-white/30 bg-black/30 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3)] opacity-70" />

          {/* Mare Crisium (Oval plain) */}
          <div className="absolute top-[28%] right-[20%] w-10 h-8 sm:w-14 sm:h-11 rounded-full bg-[#1C202B]/85 border border-white/10 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.9)] opacity-75" />

          {/* Additional Micro Craters */}
          <div className="absolute top-[62%] right-[28%] w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/30 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2)] opacity-60" />
          <div className="absolute top-[20%] left-[48%] w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-white/20 bg-black/25 opacity-50" />

          {/* Upper-Left Rim Highlight */}
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_14px_14px_30px_rgba(255,255,255,0.65),inset_-24px_-24px_50px_rgba(5,6,10,0.95)]" />

          {/* Outer Crisp Ice-Silver Rim Accent */}
          <div className="absolute inset-0 rounded-full border border-[#C9D3F0]/60 pointer-events-none" />
        </div>
      </div>

      {/* FOREGROUND HERO CONTENT (Separated with clean breathing room on desktop) */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto w-full mt-2 sm:mt-4 md:mt-8 lg:mt-10">
        {/* Giant Headline in Bricolage Grotesque Bold */}
        <h1 className="font-headline font-extrabold text-[2.75rem] sm:text-[4.25rem] md:text-[5.25rem] lg:text-[6.25rem] tracking-[-0.035em] text-[#ECEFF6] uppercase leading-[0.92] drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
          <span className="block">MUHAMMAD</span>
          <span className="block text-[#ECEFF6]">JAHANZAIB</span>
        </h1>

        {/* Role Line */}
        <p className="font-body text-base sm:text-lg md:text-xl text-white/90 font-normal tracking-wide mt-3 sm:mt-4">
          Mobile App Developer
        </p>

        {/* Locked Subtitle */}
        <p className="font-body text-xs sm:text-sm md:text-base text-white/60 font-light tracking-wide mt-2 max-w-md px-4">
          Exploring code, building ideas, finding my orbit.
        </p>

        {/* Dual Pill Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={onViewWork}
            className="h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-[#ECEFF6] text-[#05060A] font-body font-semibold text-sm tracking-wide flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(236,239,246,0.5)] cursor-pointer active:scale-95"
          >
            View Work
          </button>
          <button
            onClick={onSayHello}
            className="h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-transparent border border-white/25 hover:border-white text-[#ECEFF6] font-body text-sm tracking-wide flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06] cursor-pointer active:scale-95"
          >
            Say Hello
          </button>
        </div>
      </div>

      <div className="w-full h-2" />
    </section>
  );
};
