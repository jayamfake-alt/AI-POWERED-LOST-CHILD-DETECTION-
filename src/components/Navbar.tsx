import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Activity, 
  Cpu, 
  PlayCircle,
  GraduationCap,
  FileText
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenProjectDetails: () => void;
  onWatchDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  onOpenProjectDetails,
  onWatchDemo
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Live Demo', href: '#demo-dashboard' },
    { label: 'Future Scope', href: '#future-scope' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Academic Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium tracking-wide flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
              Final-Year Engineering Project • B.Tech Computer Science & AI
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <button 
              onClick={onOpenProjectDetails}
              className="text-blue-200 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              Project Abstract & Synopsis
            </button>
            <span className="text-blue-400/50">|</span>
            <span className="text-blue-200/90 font-mono">Academic Year 2025-2026</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className="glass-panel border-b border-slate-200/80 dark:border-purple-900/30 px-4 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                ChildGuard <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 uppercase font-medium block -mt-0.5">
                Lost Child Detection System
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-purple-400 hover:bg-blue-50/80 dark:hover:bg-purple-950/40 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2.5">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Watch Demo CTA */}
            <button
              onClick={onWatchDemo}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors cursor-pointer"
            >
              <PlayCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Watch Demo
            </button>

            {/* Launch Demo Dashboard CTA */}
            <a
              href="#demo-dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-600/25 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Launch Demo</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-slate-200/80 dark:border-slate-800/80 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-1 px-2 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-purple-950/40 hover:text-blue-600 dark:hover:text-purple-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectDetails();
                }}
                className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                View Project Synopsis
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onWatchDemo();
                }}
                className="text-xs text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                Live Demo Video
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
