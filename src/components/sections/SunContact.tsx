import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface SunContactProps {
  onOpenSignalModal: () => void;
}

export const SunContact: React.FC<SunContactProps> = ({ onOpenSignalModal }) => {
  return (
    <section
      id="contact"
      aria-label="Section 07: Sun — Contact & Collaborations"
      className="relative w-full min-h-screen px-4 sm:px-6 lg:px-16 pt-24 sm:pt-28 pb-28 sm:pb-32 flex flex-col justify-between items-center overflow-hidden select-none"
    >
      {/* Strong Amber Sun Glow (#E8A85A) Rising from Bottom Edge */}
      <div className="pointer-events-none absolute -bottom-44 sm:-bottom-48 left-1/2 -translate-x-1/2 w-[850px] lg:w-[1300px] h-[450px] lg:h-[600px] bg-gradient-to-t from-[#E8A85A]/30 via-[#E8A85A]/[0.08] to-transparent rounded-t-full blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-64 sm:-bottom-72 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full border border-[#E8A85A]/15 opacity-50" />
      <div className="pointer-events-none absolute -bottom-80 sm:-bottom-96 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1250px] h-[900px] sm:h-[1250px] rounded-full border border-[#E8A85A]/10 opacity-30" />

      {/* Section Label: 07 — SUN */}
      <div className="relative z-10 w-full flex justify-center pt-2">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#E8A85A] flex items-center gap-2.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A85A] shadow-[0_0_10px_#E8A85A]" />
          <span>07 — SUN</span>
        </div>
      </div>

      {/* Center Contact Unit */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl my-auto py-10 sm:py-12 px-4">
        {/* Giant Headline: Bricolage Grotesque bold with ONLY "together" in Instrument Serif Italic */}
        <h2 className="font-headline font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08] mb-4 sm:mb-6">
          Let's make something{' '}
          <span className="font-serif italic font-normal text-[#E8A85A]">
            together
          </span>
          .
        </h2>

        {/* EXACTLY ONE supporting line */}
        <p className="font-body text-base sm:text-lg text-white/70 max-w-md mb-8 sm:mb-12 font-light">
          Open for collaborations.
        </p>

        {/* Big pill button with concentric ripple rings */}
        <div className="relative flex items-center justify-center mb-8 sm:mb-12">
          <span className="absolute w-56 sm:w-64 h-20 rounded-full border border-[#E8A85A]/25 animate-ping opacity-30 pointer-events-none" />
          <span className="absolute w-64 sm:w-72 h-24 rounded-full border border-[#E8A85A]/15 pointer-events-none" />

          <button
            onClick={onOpenSignalModal}
            className="relative z-10 h-13 sm:h-14 px-8 sm:px-10 rounded-full bg-[#C9D3F0] text-[#05060A] font-body text-sm font-semibold tracking-wide flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_32px_rgba(232,168,90,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Send a Signal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Outline Icon Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            aria-label="GitHub Profile"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full border border-white/10 text-[#9FA4BC] hover:text-white hover:border-[#E8A85A]/60 bg-[#0C0E14]/70 transition-all cursor-pointer active:scale-95"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            aria-label="LinkedIn Profile"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full border border-white/10 text-[#9FA4BC] hover:text-white hover:border-[#E8A85A]/60 bg-[#0C0E14]/70 transition-all cursor-pointer active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            aria-label="Email Transmission"
            href="mailto:jahanzaib152307@gmail.com"
            className="p-3.5 rounded-full border border-white/10 text-[#9FA4BC] hover:text-white hover:border-[#E8A85A]/60 bg-[#0C0E14]/70 transition-all cursor-pointer active:scale-95"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="h-4" />
    </section>
  );
};
