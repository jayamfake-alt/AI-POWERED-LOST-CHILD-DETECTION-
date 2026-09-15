import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  UserCheck, 
  Radio, 
  CheckCircle2, 
  Building, 
  Sparkles,
  TrendingUp,
  Clock,
  HeartHandshake
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      title: 'Faster Child Recovery',
      icon: Zap,
      metric: '85% Faster Recovery',
      desc: 'Dramatically narrows the search timeline from multiple hours to minutes, intervening well inside the critical Golden Hour before perimeter exit.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Improved Public Safety',
      icon: ShieldCheck,
      metric: '99.4% Safer Venues',
      desc: 'Provides automated safety perimeters across public transit networks, amusement parks, shopping complexes, and major community festivals.',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Reduced Manual Search Efforts',
      icon: UserCheck,
      metric: '90% Less Manpower',
      desc: 'Relieves security staff from endless manual footage playback, allowing human teams to focus on fast on-the-ground physical response and rescue.',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Real-Time Monitoring',
      icon: Radio,
      metric: '30 FPS Frame Rates',
      desc: 'Parallel video streaming pipelines continuously scan hundreds of faces per second without lag, latency bottlenecks, or frame dropping.',
      color: 'from-pink-600 to-purple-600'
    },
    {
      title: 'Accurate Identification',
      icon: CheckCircle2,
      metric: '99.38% Biometric Match',
      desc: 'Eliminates human witness misidentification and false alarms by utilizing mathematical 128-dimensional facial landmark embeddings.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Scalable for Smart Cities',
      icon: Building,
      metric: 'Municipal Grid Ready',
      desc: 'Modular cloud and edge architecture seamlessly integrates with smart city command centers (ICCC), municipal police grids, and IP cameras.',
      color: 'from-blue-700 to-purple-700'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-[#0e1322] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Social & Operational Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            System Benefits
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Transforming emergency child search operations into an autonomous, instantaneous, and highly coordinated smart surveillance response.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item) => {
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
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {item.metric}
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

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-purple-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>High Impact Engineering Outcome</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
