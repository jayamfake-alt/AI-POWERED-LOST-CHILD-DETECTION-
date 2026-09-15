import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Camera, 
  ShieldAlert, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Maximize2 
} from 'lucide-react';

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchDemoModal: React.FC<WatchDemoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedCam, setSelectedCam] = useState<'CAM-01' | 'CAM-04' | 'CAM-11'>('CAM-04');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-950 rounded-3xl max-w-4xl w-full overflow-hidden border border-slate-800 shadow-2xl text-white">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="font-heading font-bold text-sm sm:text-base text-white">
              Surveillance Stream Playback Demo • ChildGuard AI
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          
          {/* Main Feed Viewport */}
          <img
            src={
              selectedCam === 'CAM-04'
                ? 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80'
                : selectedCam === 'CAM-01'
                ? 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80'
                : 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80'
            }
            alt="CCTV surveillance playback"
            className="w-full h-full object-cover opacity-80"
          />

          {/* AI Scan Line */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-0.5 w-full bg-cyan-400/90 shadow-[0_0_15px_#22d3ee] animate-scan-line"></div>
            </div>
          )}

          {/* CCTV HUD Elements */}
          <div className="absolute top-4 left-4 font-mono text-xs bg-black/70 p-2.5 rounded border border-white/10 space-y-0.5">
            <div className="text-emerald-400 font-bold">● REC [H.264 / RTSP 30.0 FPS]</div>
            <div>FEED: {selectedCam} (MALL NORTH CORRIDOR)</div>
            <div className="text-blue-300">GEO: 28°36'50.0"N 77°12'32.4"E</div>
          </div>

          {/* Bounding Box on Target Child */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-40 border-2 border-emerald-400 rounded pointer-events-none">
            <div className="absolute -top-6 left-0 bg-emerald-600 text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold flex items-center gap-1 shadow">
              <CheckCircle2 className="w-3 h-3" />
              MATCH: 99.4% (Aarav S.)
            </div>
            <div className="absolute -bottom-5 left-0 text-[9px] font-mono text-emerald-300 bg-black/80 px-1.5 py-0.5 rounded">
              Dist: 0.41 &lt; 0.52
            </div>
          </div>

          {/* Radio Commentary Box */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-xs text-slate-200">
            <div className="font-bold text-amber-400 font-mono text-[11px] mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>CONTROL ROOM DISPATCH LOG</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              "Target child Aarav Sharma detected on CAM-04 near 2nd Floor escalator. Security Alpha unit responding on foot. Parents alerted with GPS location."
            </p>
          </div>
        </div>

        {/* Video Controls Bar */}
        <div className="px-6 py-4 bg-slate-900/95 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="font-mono text-slate-400">
              00:02:44 / 00:05:00 • LIVE INFERENCE
            </span>
          </div>

          {/* Camera Feed Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Switch Stream:</span>
            {(['CAM-01', 'CAM-04', 'CAM-11'] as const).map(cam => (
              <button
                key={cam}
                onClick={() => setSelectedCam(cam)}
                className={`px-2.5 py-1 rounded font-mono text-[11px] transition-colors cursor-pointer ${
                  selectedCam === cam
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {cam}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
