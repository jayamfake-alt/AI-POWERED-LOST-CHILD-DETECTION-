import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProblem } from './components/AboutProblem';
import { ProposedSolution } from './components/ProposedSolution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { TechnologiesUsed } from './components/TechnologiesUsed';
import { SystemArchitecture } from './components/SystemArchitecture';
import { Benefits } from './components/Benefits';
import { DemoDashboard } from './components/DemoDashboard';
import { FutureEnhancements } from './components/FutureEnhancements';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectPresentationModal } from './components/ProjectPresentationModal';
import { WatchDemoModal } from './components/WatchDemoModal';

export default function App() {
  // Theme state: default to dark or light (let's check system or default to clean dark/light mode)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('childguard_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal dialog states
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
  const [isWatchDemoOpen, setIsWatchDemoOpen] = useState(false);

  // Sync dark mode class with root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('childguard_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('childguard_theme', 'light');
    }
  }, [darkMode]);

  const handleGetStarted = () => {
    const el = document.getElementById('demo-dashboard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans transition-colors duration-200">
      
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenProjectDetails={() => setIsProjectDetailsOpen(true)}
        onWatchDemo={() => setIsWatchDemoOpen(true)}
      />

      {/* Main Sections Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onGetStarted={handleGetStarted}
          onWatchDemo={() => setIsWatchDemoOpen(true)}
        />

        {/* 2. About the Problem Section */}
        <AboutProblem />

        {/* 3. Proposed AI Solution Section */}
        <ProposedSolution />

        {/* 4. How It Works (4-step process) */}
        <HowItWorks />

        {/* 5. Features Section (8 feature cards) */}
        <Features />

        {/* 6. Technologies Used (8 technology cards) */}
        <TechnologiesUsed />

        {/* 7. System Architecture (Visual Flow Diagram) */}
        <SystemArchitecture />

        {/* 8. Benefits Section (6 benefits cards) */}
        <Benefits />

        {/* 9. Demo Dashboard (Sample cards, analytics, interactive simulation) */}
        <DemoDashboard />

        {/* 10. Future Enhancements (5 enhancement cards) */}
        <FutureEnhancements />

        {/* 11. Contact Section (Form + Project Info) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* College Project Synopsis & Academic Portfolio Modal */}
      <ProjectPresentationModal
        isOpen={isProjectDetailsOpen}
        onClose={() => setIsProjectDetailsOpen(false)}
      />

      {/* CCTV Surveillance Video Demo Player Modal */}
      <WatchDemoModal
        isOpen={isWatchDemoOpen}
        onClose={() => setIsWatchDemoOpen(false)}
      />

    </div>
  );
}
