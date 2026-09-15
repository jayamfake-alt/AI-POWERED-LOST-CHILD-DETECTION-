import React from 'react';
import { 
  Zap, 
  ScanFace, 
  BellRing, 
  Camera, 
  ShieldCheck, 
  Database, 
  Grid, 
  Gauge, 
  Sparkles,
  Layers
} from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      title: 'Real-Time Face Detection',
      icon: Zap,
      badge: '30+ FPS Edge Inferencing',
      desc: 'Detects and tracks human faces instantly in dense crowded scenes using optimized Haar-cascades and Single Shot Multibox Detectors (SSD).',
      color: 'from-blue-600 to-cyan-600',
      specs: 'Latency: < 24ms • Multi-face tracking up to 35 faces/frame'
    },
    {
      title: 'AI Facial Recognition',
      icon: ScanFace,
      badge: '128-D Deep Metric Embeddings',
      desc: 'Generates robust 128-dimensional biometric embeddings from face landmarks, unaffected by aging, hairstyle changes, or varied facial expressions.',
      color: 'from-indigo-600 to-blue-600',
      specs: 'dlib ResNet-34 Architecture • Invariant affine transform'
    },
    {
      title: 'Instant Alerts & Notifications',
      icon: BellRing,
      badge: 'Under 30 Seconds Dispatch',
      desc: 'Direct multi-channel notification dispatcher notifying venue security guards, nearby police patrol units, and parents with live GPS map coordinates.',
      color: 'from-purple-600 to-indigo-600',
      specs: 'WebSocket Push • Twilio SMS API • Webhook integrations'
    },
    {
      title: 'CCTV Integration',
      icon: Camera,
      badge: 'RTSP / ONVIF Protocol Support',
      desc: 'Seamlessly hooks into existing municipal surveillance networks, IP cameras, mall security hubs, and smart city infrastructure without proprietary hardware.',
      color: 'from-violet-600 to-purple-600',
      specs: 'RTSP/HLS/RTMP protocols • H.264 & H.265 hardware decoding'
    },
    {
      title: 'High Accuracy Detection',
      icon: ShieldCheck,
      badge: '99.38% LFW Benchmark',
      desc: 'Trained on millions of diverse facial images to prevent false alarms, maintaining high discriminative power even under dim and uneven lighting conditions.',
      color: 'from-emerald-600 to-teal-600',
      specs: 'False Acceptance Rate: < 0.001% • Distance threshold: 0.52'
    },
    {
      title: 'Secure Data Storage',
      icon: Database,
      badge: 'AES-256 Vector Encryption',
      desc: 'Biometric embeddings and child identification records are stored using AES-256 encryption. Automatically purges raw CCTV footage in compliance with privacy laws.',
      color: 'from-blue-700 to-indigo-800',
      specs: 'Data protection standards • Role-based access control (RBAC)'
    },
    {
      title: 'Multi-Camera Monitoring',
      icon: Grid,
      badge: 'Concurrent Stream Cluster',
      desc: 'Coordinates simultaneous video streams across multiple gates, levels, corridors, and exits to reconstruct the missing child’s movement trajectory.',
      color: 'from-purple-700 to-pink-600',
      specs: '50+ cameras per node • Synchronized millisecond timestamps'
    },
    {
      title: 'Fast Search Results',
      icon: Gauge,
      badge: 'Sub-Second KD-Tree Indexing',
      desc: 'Ultra-fast vector index searches millions of facial candidates within milliseconds, drastically shortening the search radius before the child exits the perimeter.',
      color: 'from-amber-600 to-orange-600',
      specs: 'FLANN / KD-Tree indexing • < 0.12s database vector lookup'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-[#0b0f19] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key System Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            System Features
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Engineered for high-throughput public safety, combining state-of-the-art computer vision with immediate automated alerting.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-purple-600 transition-all duration-300 glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title Required by Prompt */}
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Technical Specs Footer */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-purple-400 bg-blue-50/50 dark:bg-slate-900/40 -mx-6 -mb-6 p-3 rounded-b-2xl">
                  {item.specs}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
