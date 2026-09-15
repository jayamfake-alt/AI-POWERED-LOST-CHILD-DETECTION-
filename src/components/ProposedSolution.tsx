import React from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  ScanFace, 
  BellRing, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck,
  Video,
  SendHorizontal
} from 'lucide-react';

export const ProposedSolution: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Search Speed & Latency',
      manual: 'Hours or days to pull & view CCTV tapes',
      aiSystem: '< 3 seconds across 50+ concurrent streams',
      highlight: true
    },
    {
      feature: 'Face Identification Precision',
      manual: 'Subjective human memory, high fatigue error',
      aiSystem: '128-D Euclidean Vector match (>99.38% LFW benchmark)',
      highlight: true
    },
    {
      feature: 'Surveillance Scale',
      manual: 'Limited to 1–2 guards reviewing single screen',
      aiSystem: 'Scalable across municipal CCTV grids & smart cities',
      highlight: false
    },
    {
      feature: 'Alert & Dispatch Speed',
      manual: 'Manual phone calls and PA loudspeaker notices',
      aiSystem: 'Instant SMS, WhatsApp & security radio push alert',
      highlight: true
    },
    {
      feature: 'Night & Low-Light Performance',
      manual: 'Easily missed in shadow or crowded corners',
      aiSystem: 'Histogram equalization & adaptive gamma filters',
      highlight: false
    }
  ];

  return (
    <section id="solution" className="py-20 bg-slate-50 dark:bg-[#0b0f19] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Automated Surveillance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Proposed AI Solution
          </h2>
          {/* Required Exact Text from Prompt */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] rounded-2xl shadow-lg shadow-blue-500/10">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl">
              <p className="text-base sm:text-xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                &ldquo;Our system uses Artificial Intelligence and Facial Recognition technology to identify missing children from CCTV cameras and public surveillance systems. When a match is found, authorities and guardians receive immediate alerts.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of Solution */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-purple-600 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
              Deep Metric Learning
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Transforms standard facial photographs into robust 128-dimensional invariant biometric embeddings that identify children despite lighting, angle, or hairstyle changes.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
              Parallel Stream Processing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Harnesses multi-threading and OpenCV GPU hardware acceleration to scan dozens of high-traffic CCTV feeds in real time without dropping frames.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <SendHorizontal className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
              Instant Closed-Loop Alerts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dispatches geo-tagged video snapshots with camera coordinates directly to police patrol radios, venue security staff, and anxious parents via SMS in seconds.
            </p>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-14 glass-panel rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2 font-heading font-bold text-base sm:text-lg">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>Comparative Engineering Analysis: Manual Search vs. ChildGuard AI</span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800">
              Benchmark v2.4
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-4 sm:p-5 w-1/3">Evaluation Metric</th>
                  <th className="p-4 sm:p-5 w-1/3 text-rose-600 dark:text-rose-400">
                    Traditional Manual Search
                  </th>
                  <th className="p-4 sm:p-5 w-1/3 text-emerald-600 dark:text-emerald-400">
                    AI-Powered Lost Child Detection
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className={item.highlight ? 'bg-blue-50/40 dark:bg-blue-950/20' : ''}>
                    <td className="p-4 sm:p-5 font-medium text-slate-900 dark:text-white">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>{item.manual}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{item.aiSystem}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
