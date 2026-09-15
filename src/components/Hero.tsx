import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Users, 
  Zap, 
  Radio, 
  Cpu, 
  AlertCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onWatchDemo }) => {
  const [activeFaceIndex, setActiveFaceIndex] = useState(0);
  const [scanProgress, setScanProgress] = useState(72);
  const [matchingConfidence, setMatchingConfidence] = useState(99.4);
  const [detectionState, setDetectionState] = useState<'analyzing' | 'matched'>('matched');

  const sampleFaces = [
    {
      name: 'Target: Aarav Sharma',
      age: '6 Yrs',
      photo: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=400&q=80',
      camera: 'CAM-04 (North Exit Escalator)',
      confidence: '99.4%',
      distance: '0.41 (Threshold < 0.52)'
    },
    {
      name: 'Target: Sophia Chen',
      age: '7 Yrs',
      photo: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80',
      camera: 'CAM-11 (Platform 3 Overpass)',
      confidence: '98.8%',
      distance: '0.43 (Threshold < 0.52)'
    },
    {
      name: 'Target: Liam Johnson',
      age: '5 Yrs',
      photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80',
      camera: 'CAM-08 (Food Court Plaza)',
      confidence: '99.1%',
      distance: '0.39 (Threshold < 0.52)'
    }
  ];

  // Rotate sample target every 5 seconds for dynamic demonstration
  useEffect(() => {
    const timer = setInterval(() => {
      setDetectionState('analyzing');
      setTimeout(() => {
        setActiveFaceIndex((prev) => (prev + 1) % sampleFaces.length);
        setDetectionState('matched');
      }, 700);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentProfile = sampleFaces[activeFaceIndex];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-purple-50/30 dark:from-[#0b0f19] dark:via-[#0e1322] dark:to-[#120f24]">
      {/* Background AI grid pattern & soft glow orbs */}
      <div className="absolute inset-0 bg-ai-grid pointer-events-none opacity-80" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* College Project Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
              <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Deep Learning & Computer Vision Surveillance</span>
            </div>

            {/* Main Title Required in Prompt */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              AI-Powered <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                Lost Child Detection System
              </span>
            </h1>

            {/* Subtitle Required in Prompt */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Using Artificial Intelligence and Facial Recognition to Quickly Locate Missing Children in Crowded Places.
            </p>

            {/* Core Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200 shadow-xs">
                <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
                Real-Time CCTV Stream (30 FPS)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                128-D Face Embeddings
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Instant Security & Guardian Alert
              </span>
            </div>

            {/* Call-to-Action Buttons Required in Prompt */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Button 1: Get Started */}
              <button
                onClick={onGetStarted}
                id="hero-get-started-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Button 2: Watch Demo */}
              <button
                onClick={onWatchDemo}
                id="hero-watch-demo-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 border border-slate-300/80 dark:border-purple-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/80 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Key Project Quick Metrics */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                  &lt; 3.0s
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Identification Time
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-heading">
                  99.38%
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  LFW Benchmark
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading">
                  50+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Simultaneous Feeds
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive AI Surveillance HUD Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Futuristic Dashboard Panel */}
              <div className="relative glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-purple-900/40 shadow-2xl bg-white/95 dark:bg-slate-900/90">
                
                {/* Surveillance Stream Header */}
                <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between text-xs border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                    <span className="font-mono font-bold tracking-wider text-rose-400">
                      LIVE CCTV INFERENCE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                    <Camera className="w-3.5 h-3.5 text-blue-400" />
                    <span>{currentProfile.camera.split(' ')[0]}</span>
                    <span className="text-emerald-400">30.2 FPS</span>
                  </div>
                </div>

                {/* Simulated CCTV Camera Viewport with Facial Recognition Overlay */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  
                  {/* Background Stream Image */}
                  <img
                    src={currentProfile.photo}
                    alt="Facial Recognition Target"
                    className="w-full h-full object-cover opacity-85 filter contrast-105"
                  />

                  {/* CCTV Dark Vignette & Grid */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

                  {/* Surveillance Timestamp Overlay */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-xs flex flex-col space-y-0.5">
                    <span className="text-emerald-400">CAM: {currentProfile.camera}</span>
                    <span>RES: 1920x1080 • ENCODING: H.264</span>
                    <span className="text-blue-300">TIMESTAMP: 14:48:32 UTC+05:30</span>
                  </div>

                  {/* AI Facial Recognition Bounding Box with Corner Accents */}
                  <div className="absolute w-44 h-48 sm:w-48 sm:h-52 border-2 border-emerald-400/90 rounded-lg pointer-events-none transition-all duration-300">
                    
                    {/* Corner Reticles */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-300"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-300"></div>

                    {/* Laser Scan Line */}
                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_8px_#34d399] animate-scan-line"></div>

                    {/* Biometric Landmark Mesh Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-80 pointer-events-none">
                      <div className="flex justify-around items-center pt-8">
                        {/* Eye landmarks */}
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mx-auto"></div>
                      <div className="w-6 h-1 border-b border-emerald-400/80 mx-auto mb-6"></div>
                    </div>

                    {/* Match Alert Tag */}
                    <div className="absolute -top-7 left-0 bg-emerald-600 text-white font-mono text-[10px] px-2 py-0.5 rounded shadow flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      MATCH: {currentProfile.confidence}
                    </div>

                    {/* Vector Distance metric */}
                    <div className="absolute -bottom-6 right-0 bg-black/80 text-emerald-300 font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-500/40">
                      Euclidean Dist: {currentProfile.distance}
                    </div>
                  </div>

                  {/* Target Crosshairs */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                    <div className="w-12 h-12 border border-dashed border-white/60 rounded-full"></div>
                  </div>
                </div>

                {/* Bottom Card Controls & Inspection Metrics */}
                <div className="p-4 space-y-3 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Matched Child Profile
                      </div>
                      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                        {currentProfile.name}
                        <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded font-mono">
                          {currentProfile.age}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Match Confidence</div>
                      <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                        {currentProfile.confidence}
                      </div>
                    </div>
                  </div>

                  {/* Notification Trigger Preview */}
                  <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-xl p-2.5 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-purple-900 dark:text-purple-200">
                          Instant Alert Dispatched
                        </div>
                        <div className="text-[11px] text-purple-700 dark:text-purple-300">
                          SMS to Guardian + Security Walkie Broadcast
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-white font-mono text-[10px] font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Target Selector Thumbnails */}
                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-medium">Switch Test Scenario:</span>
                    <div className="flex gap-1.5">
                      {sampleFaces.map((f, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveFaceIndex(idx);
                            setDetectionState('matched');
                          }}
                          className={`w-6 h-6 rounded-full overflow-hidden border-2 transition-transform cursor-pointer ${
                            activeFaceIndex === idx
                              ? 'border-blue-600 scale-110 ring-2 ring-blue-400/40'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                          title={`Switch to ${f.name}`}
                        >
                          <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
