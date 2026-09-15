import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  FileText, 
  Download, 
  Award, 
  User, 
  Calendar, 
  BookOpen, 
  Code2, 
  CheckCircle,
  Sparkles,
  Layers
} from 'lucide-react';

interface ProjectPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPresentationModal: React.FC<ProjectPresentationModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0f172a] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-purple-900/50 shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-purple-400 block">
                Academic Portfolio &amp; Capstone Dossier
              </span>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                Project Synopsis &amp; Architecture Report
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm">
          
          {/* Project Title Block */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800/80 dark:via-purple-950/40 dark:to-slate-800/80 border border-blue-100 dark:border-purple-900/50 space-y-2">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              Major Project Final Submission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
              AI-Powered Lost Child Detection System
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              A Real-Time Deep Learning Computer Vision Solution for Locating Missing Children in High-Density Crowded Environments.
            </p>
          </div>

          {/* Academic Team & Guide Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Project Supervision</span>
              </div>
              <div className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Dr. R. K. Mukherjee, Ph.D.
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Professor &amp; Head, Artificial Intelligence Research Lab
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Department of Computer Science &amp; Engineering
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Student Project Team</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">1. Jayam Verma (Lead ML / Computer Vision)</div>
                <div className="font-semibold text-slate-900 dark:text-white">2. Priya Nair (Backend &amp; RTSP Streaming)</div>
                <div className="font-semibold text-slate-900 dark:text-white">3. Rohan Sengupta (Cloud &amp; Notification Engine)</div>
                <div className="font-semibold text-slate-900 dark:text-white">4. Ananya Das (Frontend UI / UX Dashboard)</div>
              </div>
            </div>
          </div>

          {/* Project Abstract */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Project Abstract
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              In high-density public venues such as railway terminals, carnivals, shopping atriums, and beaches, losing a child causes severe psychological panic and immediate risk of abduction or injury. Traditional searching relies heavily on public address (PA) announcements and human security staff inspecting hours of surveillance footage, leading to critical delays during the "Golden Hour". This project implements an end-to-end automated surveillance platform leveraging Dlib ResNet-34 deep convolutional neural networks to extract 128-dimensional invariant facial embeddings from a parent-provided portrait. In parallel, multi-threaded OpenCV processes concurrent RTSP video feeds from deployed CCTV cameras, isolating candidate faces via HOG and DNN detectors. Using Euclidean distance metrics with an empirical threshold of 0.52, the system achieves a 99.38% verification score on standard benchmarks. Once verified, instantaneous push alerts with spatial metadata are dispatched via WebSockets and Twilio SMS to security teams and guardians in under 30 seconds.
            </p>
          </div>

          {/* Key Objectives */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              Primary Project Objectives
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>1. Real-Time Processing:</strong> Maintain 30+ FPS ingestion across multiple RTSP CCTV camera feeds simultaneously using GPU-accelerated video decoding.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>2. Robust Biometrics:</strong> Invariant matching under poor illumination, diverse facial poses, and partial occlusion (sunglasses, masks, caps).
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>3. Automated Dispatch:</strong> Reduce notification latency between initial camera detection and guardian receipt to under 30 seconds.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>4. Smart City Scalability:</strong> Seamless modular deployment ready for municipal command centers and private security networks.
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Report Document: <span className="font-mono text-slate-700 dark:text-slate-300">CS_MAJOR_PROJECT_2026_CHILDGUARD.PDF (4.8 MB)</span>
            </div>
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/20 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Report Downloaded!' : 'Download Project Report (PDF)'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
