import React from 'react';

export const NeptuneNext: React.FC = () => {
  return (
    <section
      id="next"
      aria-label="Section 06: Neptune — Future Horizons"
      className="relative w-full h-[80vh] min-h-[550px] sm:min-h-[700px] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden select-none border-b border-white/5"
    >
      {/* Deep Indigo Glow (#4B4FA6) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px] rounded-full bg-[#4B4FA6]/[0.12] blur-[160px]" />
      </div>

      {/* Faint Orbit Arc with Neptune Coordinate Node */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-25"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <path
          d="M -100,850 C 350,680 850,380 1550,-50"
          stroke="#4B4FA6"
          strokeDasharray="4 10"
          strokeWidth="1.5"
        />
        <circle cx="760" cy="460" fill="#AFC6FF" r="3.5" />
        <circle cx="760" cy="460" r="18" stroke="#4B4FA6" strokeOpacity="0.45" strokeWidth="1" />
      </svg>

      {/* Content: Section label + Enormous headline only */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* Section Label: 06 — NEPTUNE */}
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#AFC6FF] mb-6 sm:mb-8 flex items-center gap-2.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4B4FA6] shadow-[0_0_8px_#4B4FA6]" />
          <span>06 — NEPTUNE</span>
        </div>

        {/* One enormous centered line: "Still exploring." */}
        <h2 className="font-headline font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-white tracking-tight leading-none">
          Still{' '}
          <span className="font-serif italic font-normal text-[#AFC6FF] ml-1">
            exploring
          </span>
          .
        </h2>
      </div>
    </section>
  );
};
