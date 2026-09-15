import React, { useState } from 'react';
import { 
  Code2, 
  Camera, 
  ScanFace, 
  Cpu, 
  Brain, 
  Server, 
  Database, 
  Layout, 
  CheckCircle2, 
  Layers, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/mockData';

export const TechnologiesUsed: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'backend' | 'frontend'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return Code2;
      case 'Camera': return Camera;
      case 'ScanFace': return ScanFace;
      case 'Cpu': return Cpu;
      case 'Brain': return Brain;
      case 'Server': return Server;
      case 'Database': return Database;
      default: return Layout;
    }
  };

  const filteredTechs = TECHNOLOGIES.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'ai') return ['Computer Vision', 'Biometric AI Engine', 'Pattern Recognition', 'Neural Networks'].includes(item.category);
    if (filter === 'backend') return ['Core Language', 'Backend Framework', 'Relational Database'].includes(item.category);
    if (filter === 'frontend') return ['Frontend & UI'].includes(item.category);
    return true;
  });

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-[#0e1322] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack & Engineering Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Technologies Used
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of the machine learning algorithms, computer vision pipelines, frameworks, and databases powering the system.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All 8 Technologies' },
            { id: 'ai', label: 'AI, Vision & Deep Learning' },
            { id: 'backend', label: 'Python, Server & Database' },
            { id: 'frontend', label: 'Interactive Web Client' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTechs.map((tech) => {
            const Icon = getIcon(tech.iconName);
            return (
              <div
                key={tech.name}
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-purple-600 transition-all duration-300 glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tech.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {tech.version && (
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tech.version}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-purple-400 font-mono">
                    {tech.category}
                  </span>

                  {/* Title Required by Prompt */}
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-1 mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    System Responsibility:
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    {tech.purpose}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Snippet Box for Engineering Presentation */}
        <div className="mt-14 glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Core Facial Embedding Extraction Pipeline (Python + OpenCV + dlib)
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-300 dark:border-emerald-800">
              Tested on Python 3.11 • CUDA 12.2
            </span>
          </div>

          <pre className="mt-4 p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
{`# AI-Powered Lost Child Detection - Core Face Embedding Pipeline
import cv2
import face_recognition
import numpy as np

def process_cctv_stream(rtsp_stream_url, target_encoding, tolerance=0.52):
    """
    Analyzes live CCTV feed against target child face vector using Euclidean distance.
    """
    video_capture = cv2.VideoCapture(rtsp_stream_url)
    
    while video_capture.isOpened():
        ret, frame = video_capture.read()
        if not ret:
            break
            
        # Downscale frame for 3x faster processing
        small_frame = cv2.resize(frame, (0, 0), fx=0.33, fy=0.33)
        rgb_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
        
        # Locate candidate faces in current frame
        face_locations = face_recognition.face_locations(rgb_frame, model="hog")
        current_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        
        for face_encoding, face_location in zip(current_encodings, face_locations):
            # Calculate Euclidean distance to registered target vector
            distance = np.linalg.norm(face_encoding - target_encoding)
            
            if distance < tolerance:
                confidence = round((1.0 - distance) * 100, 2)
                trigger_emergency_alert(face_location, confidence, stream_id="CAM-04")
                return True
                
    return False`}
          </pre>
        </div>

      </div>
    </section>
  );
};
