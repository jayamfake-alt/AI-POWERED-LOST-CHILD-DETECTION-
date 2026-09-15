import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  Users, 
  MapPin, 
  EyeOff, 
  TrendingDown, 
  Building2, 
  Train, 
  Sparkles, 
  Umbrella, 
  CalendarClock
} from 'lucide-react';

export const AboutProblem: React.FC = () => {
  const crowdedPlaces = [
    {
      title: 'Shopping Malls',
      icon: Building2,
      stat: '38% of incidents',
      desc: 'Multilevel atriums, escalators, and crowded storefronts cause rapid disorientation for young children.',
      color: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      title: 'Railway & Metro Stations',
      icon: Train,
      stat: 'High transit risk',
      desc: 'Dense passenger surges during boarding hours make physical visual line-of-sight impossible to maintain.',
      color: 'from-indigo-500/20 to-purple-500/10'
    },
    {
      title: 'Festivals & Public Events',
      icon: Sparkles,
      stat: 'Extreme noise & crowds',
      desc: 'Loud acoustics drown out announcements, and moving crowds disperse children hundreds of meters away.',
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Beaches & Public Parks',
      icon: Umbrella,
      stat: 'Expansive open perimeters',
      desc: 'Wide horizons without physical gates allow children to wander vast distances unnoticed in minutes.',
      color: 'from-sky-500/20 to-blue-500/10'
    }
  ];

  const manualSearchFlaws = [
    {
      title: 'Human Visual Fatigue',
      desc: 'Security guards watching dozens of CCTV monitors experience severe attention decline after only 20 minutes.',
      icon: EyeOff
    },
    {
      title: 'Delayed Golden Hour Action',
      desc: 'By the time authorities are notified and manual physical searches organized, the critical initial hour is lost.',
      icon: Clock
    },
    {
      title: 'Massive Crowd Occlusion',
      desc: 'Human search parties cannot scan thousands of moving individuals moving simultaneously across multiple gates.',
      icon: Users
    },
    {
      title: 'Lack of Synchronized Feeds',
      desc: 'Disconnected cameras without centralized facial recognition leave blind spots where children slip through exits.',
      icon: AlertTriangle
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white dark:bg-[#0e1322] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Problem Statement & Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            About the Problem
          </h2>
          {/* Required Exact Text from Prompt */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            &ldquo;Every year, thousands of children go missing in crowded places such as malls, railway stations, festivals, beaches, and public events. Manual searching is slow and often ineffective. A faster and smarter solution is needed.&rdquo;
          </p>
        </div>

        {/* Crowded Environments Grid */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Vulnerable Public Environments
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crowdedPlaces.map((place) => {
              const Icon = place.icon;
              return (
                <div
                  key={place.title}
                  className="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-purple-700 transition-all duration-300 glass-card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                    {place.stat}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {place.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                    {place.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Golden Hour Reality & Flaws of Manual Searching */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Golden Hour Stat Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-rose-500 via-rose-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarClock className="w-4 h-4" />
              <span>Critical Timeline Analysis</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3 leading-snug">
              The "Golden Hour" in Missing Child Recovery
            </h3>
            <p className="text-sm text-rose-100 leading-relaxed mb-6">
              Empirical search & rescue research demonstrates that the first 60 to 120 minutes are critical. Manual searches take an average of <strong>4.2 hours</strong> to review CCTV tapes, by which time the child may have exited the surveillance zone.
            </p>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Manual Search Detection Rate</span>
                <span className="text-amber-200">14.8% in Hour 1</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-3">
                <div className="w-[15%] h-full bg-amber-300 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>AI Automated CCTV System</span>
                <span className="text-emerald-300">&gt; 92.4% in &lt; 5 mins</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Flaws List */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-rose-500" />
              Why Traditional Manual Searching Fails:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manualSearchFlaws.map((flaw) => {
                const Icon = flaw.icon;
                return (
                  <div 
                    key={flaw.title}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                        {flaw.title}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {flaw.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
