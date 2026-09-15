import React, { useState } from 'react';
import { 
  Upload, 
  Cpu, 
  Camera, 
  BellRing, 
  ArrowRight, 
  CheckCircle, 
  Scan, 
  ShieldCheck, 
  Radio, 
  Sparkles,
  Smartphone,
  ChevronRight
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Parent uploads child's photo.",
      subtitle: 'Incident Registration & Input Validation',
      icon: Upload,
      description: "Guardian submits a recent photo of the missing child along with basic metadata (name, age, clothing color, and last seen spot) through the mobile portal or emergency kiosk.",
      techDetails: "Image format verification, auto-orientation, histogram normalization, and contrast enhancement.",
      highlightColor: 'from-blue-600 to-cyan-600',
      badge: 'Step 01'
    },
    {
      step: 2,
      title: 'AI extracts facial features.',
      subtitle: '128-D Biometric Embedding Generation',
      icon: Cpu,
      description: "The deep convolutional neural network locates 68 distinctive facial landmark coordinates (eyes, nose bridge, jaw curvature) and compresses them into a unique 128-float biometric vector.",
      techDetails: "Dlib ResNet-34 pre-trained face encoder mapping faces to an affine-invariant hypersphere.",
      highlightColor: 'from-indigo-600 to-blue-600',
      badge: 'Step 02'
    },
    {
      step: 3,
      title: 'CCTV cameras continuously scan faces.',
      subtitle: 'Real-Time Edge Stream Inspection',
      icon: Camera,
      description: "Connected CCTV feeds in the vicinity (malls, metro stations, gates) capture RTSP streams. The system detects candidate faces in each frame and computes instant vector distances in parallel.",
      techDetails: "Multi-threaded OpenCV frame grabber, CUDA GPU inference, scanning up to 200 faces per second.",
      highlightColor: 'from-purple-600 to-indigo-600',
      badge: 'Step 03'
    },
    {
      step: 4,
      title: 'Match detected → Instant alert sent.',
      subtitle: 'Automated Dispatch & Notifications',
      icon: BellRing,
      description: "When Euclidean distance between the child's vector and candidate face drops below 0.52 (indicating 98%+ match), alarms trigger instantly with camera ID, GPS location, and video snapshot.",
      techDetails: "WebSocket real-time push to security monitors, Twilio SMS & WhatsApp alerts to parents in under 30 seconds.",
      highlightColor: 'from-pink-600 to-purple-600',
      badge: 'Step 04'
    }
  ];

  const current = steps.find(s => s.step === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-[#0e1322] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
            <Scan className="w-3.5 h-3.5" />
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A 4-step autonomous pipeline bridging parent reports and smart city surveillance systems.
          </p>
        </div>

        {/* 4 Step Process Cards Required by Prompt */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            const isSelected = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-50/90 to-purple-50/80 dark:from-slate-800 dark:to-purple-950/40 border-2 border-blue-500 dark:border-purple-500 shadow-xl -translate-y-1'
                    : 'glass-panel border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5'
                }`}
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.highlightColor} flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Step Title (Exact words from prompt) */}
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.step}. {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Visualizer Playground */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation & Specs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
                  Active Stage Simulation • Step {current.step} of 4
                </span>
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                {current.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Technical Implementation Detail:</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-mono">
                  {current.techDetails}
                </div>
              </div>

              {/* Navigation buttons between steps */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === 4}
                  onClick={() => setActiveStep(prev => Math.min(4, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Simulation Graphic for the Step */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-5 text-white border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  MODULE SIMULATOR
                </span>
                <span className="text-purple-400">STATUS: RUNNING</span>
              </div>

              {/* Dynamic Step Viewport */}
              <div className="py-6 min-h-[260px] flex items-center justify-center">
                {activeStep === 1 && (
                  <div className="w-full text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-2xl border-2 border-dashed border-blue-400 bg-blue-950/40 flex flex-col items-center justify-center">
                      <Upload className="w-8 h-8 text-blue-400 animate-bounce mb-1" />
                      <span className="text-[10px] text-blue-200">Drop Portrait</span>
                    </div>
                    <div className="text-xs text-slate-300 max-w-sm mx-auto">
                      <span className="text-emerald-400 font-mono">[VALIDATED]</span> 1080x1350 JPEG • Face Area: 44.2% • Sharpness Score: 94/100
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="w-full space-y-3">
                    <div className="text-xs font-mono text-purple-300 text-center">
                      Extracting 68 Facial Landmarks → ResNet-34 Hypersphere Projection
                    </div>
                    <div className="bg-slate-900 rounded-xl p-3 font-mono text-[11px] text-emerald-400 border border-slate-800 overflow-x-auto">
                      <div>// 128-Dimensional Embedding (Normalized):</div>
                      <div className="text-slate-400 mt-1">
                        [-0.1428, 0.0891, 0.0415, -0.1983, 0.0124, 0.1251, -0.0712, 0.2198, -0.0456, 0.1832, -0.1190, 0.0654, ... +116 floats]
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 text-[10px] font-mono text-slate-400">
                      <span className="px-2 py-0.5 bg-purple-950/80 rounded border border-purple-800 text-purple-300">
                        Vector Norm: 1.000
                      </span>
                      <span className="px-2 py-0.5 bg-blue-950/80 rounded border border-blue-800 text-blue-300">
                        Inference: 14ms
                      </span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-emerald-400 font-mono font-bold">CAM-01 • Mall Gate A</div>
                        <div className="text-slate-400 text-[10px]">Scanning: 12 faces/sec</div>
                        <div className="mt-1 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 animate-pulse w-3/4"></div>
                        </div>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-emerald-400 font-mono font-bold">CAM-04 • Escalator 2F</div>
                        <div className="text-rose-400 text-[10px]">Candidate Face Detected!</div>
                        <div className="mt-1 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 animate-pulse w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center font-mono text-xs text-amber-300">
                      Distance Metric: <span className="font-bold">0.412</span> (Threshold &lt; 0.52 = MATCH)
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="w-full space-y-3">
                    <div className="p-3 bg-rose-950/60 border border-rose-600 rounded-xl text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-rose-300 flex items-center gap-1.5">
                          <BellRing className="w-4 h-4 text-rose-400 animate-bounce" />
                          CRITICAL ALERT DISPATCHED
                        </span>
                        <span className="font-mono text-[10px] bg-rose-900 text-white px-1.5 py-0.5 rounded">
                          CONFIDENCE: 99.4%
                        </span>
                      </div>
                      <p className="text-slate-300 text-[11px]">
                        Target child matched at <strong>CAM-04 (North Exit)</strong>. Guard unit Alpha &amp; Police dispatched.
                      </p>
                    </div>

                    <div className="p-2.5 bg-blue-950/60 border border-blue-700 rounded-xl text-xs flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-blue-400 shrink-0" />
                      <div className="text-[11px] text-blue-200">
                        <strong>Guardian SMS:</strong> "Child matched at Grand Mall North Escalator. Location pin shared."
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Stepper Bar */}
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800">
                {[1, 2, 3, 4].map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveStep(s)}
                    className={`flex items-center gap-1 font-mono cursor-pointer transition-colors ${
                      activeStep === s ? 'text-blue-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span>Phase {s}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
