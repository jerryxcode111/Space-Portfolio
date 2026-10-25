/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { SectionId, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { BottomBar } from './components/BottomBar';
import { CelestialScrollProgress } from './components/CelestialScrollProgress';
import { MoonHero } from './components/sections/MoonHero';
import { EarthAbout } from './components/sections/EarthAbout';
import { MarsFocus } from './components/sections/MarsFocus';
import { SaturnJourney } from './components/sections/SaturnJourney';
import { JupiterWork } from './components/sections/JupiterWork';
import { NeptuneNext } from './components/sections/NeptuneNext';
import { SunContact } from './components/sections/SunContact';
import { Footer } from './components/sections/Footer';
import { SignalModal } from './components/SignalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [motionEnabled, setMotionEnabled] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    project: ProjectItem | null;
  }>({
    isOpen: false,
    project: null,
  });

  // Ensure root is strictly dark-mode first for deep space void
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    const metaThemeColor = document.getElementById('theme-color-meta');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#05060A');
    }
  }, []);

  // Handle active section on scroll with IntersectionObserver
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home',
      'about',
      'focus',
      'journey',
      'work',
      'next',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as SectionId;
          if (sectionIds.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: [0.1, 0.4],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  }, []);

  const handleToggleMotion = useCallback(() => {
    setMotionEnabled((prev) => !prev);
  }, []);

  const handleOpenSignalModal = useCallback(() => {
    setModalState({ isOpen: true, project: null });
  }, []);

  const handleSelectProject = useCallback((project: ProjectItem) => {
    setModalState({ isOpen: true, project });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState({ isOpen: false, project: null });
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-[#05060A] text-[#ECEFF6] ${
        !motionEnabled ? 'motion-paused' : ''
      }`}
    >
      {/* Top Celestial Scroll Loading Progress Bar */}
      <CelestialScrollProgress motionEnabled={motionEnabled} />

      {/* Subtle Starlight Grain Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.035] mix-blend-screen starlight-grid"
        aria-hidden="true"
      />

      {/* Floating Centered Pill Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Navigation Drawer Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        motionEnabled={motionEnabled}
        onToggleMotion={handleToggleMotion}
      />

      {/* Fixed Bottom-Right UI: Motion Switch */}
      <BottomBar
        motionEnabled={motionEnabled}
        onToggleMotion={handleToggleMotion}
      />

      {/* Main Content Area */}
      <main id="main-content" className="w-full relative z-10">
        {/* SECTION 01: MOON (Hero) */}
        <MoonHero
          onViewWork={() => handleNavigate('work')}
          onSayHello={handleOpenSignalModal}
        />

        {/* SECTION 02: EARTH (About) */}
        <EarthAbout />

        {/* SECTION 03: MARS (Focus) */}
        <MarsFocus />

        {/* SECTION 04: SATURN (Journey) */}
        <SaturnJourney />

        {/* SECTION 05: JUPITER (Work) */}
        <JupiterWork onSelectProject={handleSelectProject} />

        {/* SECTION 06: NEPTUNE (Next) */}
        <NeptuneNext />

        {/* SECTION 07: SUN (Contact) */}
        <SunContact onOpenSignalModal={handleOpenSignalModal} />

        {/* SECTION 08: FOOTER */}
        <Footer onNavigate={handleNavigate} onScrollToTop={handleScrollToTop} />
      </main>

      {/* Interactive Signal Transmission & Project Inspection Modal */}
      <SignalModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        selectedProject={modalState.project}
      />
    </div>
  );
}
