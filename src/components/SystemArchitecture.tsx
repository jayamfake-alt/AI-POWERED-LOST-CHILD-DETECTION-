import React, { useState } from 'react';
import { 
  Network, 
  ArrowDown, 
  Upload, 
  Binary, 
  Cpu, 
  Camera, 
  Scale, 
  BellRing, 
  Users, 
  CheckCircle,
  FileCode,
  Info,
  ChevronDown
} from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../data/mockData';

export const SystemArchitecture: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(3);

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return Upload;
      case 2: return Binary;
      case 3: return Cpu;
      case 4: return Camera;
      case 5: return Scale;
      case 6: return BellRing;
      case 7: return Users;
      default: return Cpu;
    }
  };

  const activeStepData = ARCHITECTURE_STEPS.find(s => s.stepNumber === selectedStep) || ARCHITECTURE_STEPS[2];

  return (
    <section id="architecture" className="py-20 bg-slate-50 dark:bg-[#0b0f19] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold">
            <Network className="w-3.5 h-3.5" />
            <span>Data Flow & Component Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            System Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A comprehensive visual flow diagram depicting the end-to-end data pipeline from guardian image ingestion to municipal alert broadcast.
          </p>
        </div>

        {/* Visual Flow Diagram & Inspection Inspector */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Flow Diagram */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
              <span>Pipeline Stages (Click any node to inspect data specs)</span>
              <span className="text-blue-600 dark:text-purple-400 font-mono">7 Sequential Phases</span>
            </div>

            {ARCHITECTURE_STEPS.map((step, index) => {
              const Icon = getStepIcon(step.stepNumber);
              const isSelected = selectedStep === step.stepNumber;
              const isLast = index === ARCHITECTURE_STEPS.length - 1;

              return (
                <div key={step.stepNumber} className="relative">
                  {/* Flow Node Card */}
                  <div
                    onClick={() => setSelectedStep(step.stepNumber)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800/90 border-blue-500 dark:border-purple-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/30 dark:ring-purple-500/30'
                        : 'glass-panel border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Node Number & Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Node Labels */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-purple-400">
                            PHASE 0{step.stepNumber}
                          </span>
                          <span className="text-xs font-medium text-slate-400">
                            • {step.technology.split('/')[0]}
                          </span>
                        </div>
                        <div className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                          {step.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {isSelected ? 'Inspecting' : 'View'}
                      </span>
                    </div>
                  </div>

                  {/* Downward Connector Arrow */}
                  {!isLast && (
                    <div className="py-2 flex justify-center items-center">
                      <div className="flex flex-col items-center">
                        <div className="h-3 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                        <ArrowDown className="w-4 h-4 text-purple-600 dark:text-purple-400 -my-1" />
                        <div className="h-3 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Details Inspector */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-purple-900/40 shadow-xl bg-white/95 dark:bg-slate-900/95 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-mono">
                    0{activeStepData.stepNumber}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-purple-400 font-mono">
                      Architectural Node Spec
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white leading-tight">
                      {activeStepData.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-semibold">
                  STATUS: READY
                </span>
              </div>

              {/* Description */}
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStepData.description}
              </div>

              {/* Input / Output Matrix */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono uppercase">
                    Input Stream / Data Payload:
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 font-mono">
                    {activeStepData.input}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 space-y-1">
                  <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 font-mono uppercase">
                    Processed Output / State Change:
                  </div>
                  <div className="text-xs font-semibold text-purple-950 dark:text-purple-200 font-mono">
                    {activeStepData.output}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 space-y-1">
                  <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono uppercase">
                    Underlying Engineering Technology:
                  </div>
                  <div className="text-xs font-semibold text-blue-950 dark:text-blue-200">
                    {activeStepData.technology}
                  </div>
                </div>
              </div>

              {/* Sample Code Hook */}
              {activeStepData.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 font-heading">
                    <FileCode className="w-3.5 h-3.5 text-blue-500" />
                    <span>Sample Implementation Code</span>
                  </div>
                  <pre className="p-3 rounded-xl bg-slate-950 text-emerald-400 font-mono text-[11px] overflow-x-auto leading-relaxed border border-slate-800">
                    {activeStepData.codeSnippet}
                  </pre>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
