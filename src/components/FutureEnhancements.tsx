import React from 'react';
import { 
  Smartphone, 
  MapPin, 
  Building2, 
  Cloud, 
  Languages, 
  Sparkles, 
  Rocket,
  CheckCircle2
} from 'lucide-react';

export const FutureEnhancements: React.FC = () => {
  const enhancements = [
    {
      title: 'Mobile App Integration',
      icon: Smartphone,
      phase: 'Phase II Roadmap',
      desc: 'Dedicated cross-platform Flutter/React Native application allowing parents to report lost children in 1 click and receive real-time live CCTV trajectory push notifications.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'GPS Tracking Support',
      icon: MapPin,
      phase: 'Geo-Fencing v3',
      desc: 'Seamless integration with smart wearables, BLE beacons, and school bus GPS telemetry to construct predictive heatmaps of child wandering trajectories.',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Smart City Integration',
      icon: Building2,
      phase: 'Municipal Scale',
      desc: 'Native API hooks into Integrated Command and Control Centers (ICCC), traffic signal CCTV poles, and public emergency broadcasting systems.',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Cloud-Based Monitoring',
      icon: Cloud,
      phase: 'Distributed Cloud',
      desc: 'Elastic Kubernetes cluster capable of scaling to 10,000+ simultaneous 4K surveillance video feeds across entire states and festival gatherings.',
      color: 'from-pink-600 to-purple-600'
    },
    {
      title: 'Multi-Language Support',
      icon: Languages,
      phase: 'Accessibility',
      desc: 'Multilingual voice and textual interface across 12+ regional languages (Hindi, Spanish, French, Bengali, Tamil, etc.) for inclusive accessibility at tourist hubs.',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section id="future-scope" className="py-20 bg-white dark:bg-[#0e1322] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5" />
            <span>Academic & Industrial Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Future Enhancements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Strategic technical milestones planned to scale ChildGuard AI from a campus capstone into a national smart city safety standard.
          </p>
        </div>

        {/* 5 Cards Grid Required by Prompt */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enhancements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-purple-600 transition-all duration-300 glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item.phase}
                    </span>
                  </div>

                  {/* Title Required by Prompt */}
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Planned Implementation Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
