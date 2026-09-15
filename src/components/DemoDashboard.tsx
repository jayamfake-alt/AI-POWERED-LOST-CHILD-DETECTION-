import React, { useState } from 'react';
import { 
  Users, 
  Camera, 
  BellRing, 
  CheckCircle2, 
  Play, 
  Scan, 
  Radio, 
  Plus, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Eye, 
  Smartphone, 
  Share2, 
  RefreshCw,
  Search,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  REGISTERED_CHILDREN_SAMPLE, 
  CCTV_CAMERAS_SAMPLE, 
  INITIAL_ALERTS, 
  CHART_DETECTION_METRICS,
  CHART_RESPONSE_TIME_COMPARISON 
} from '../data/mockData';
import { ChildRecord, CameraFeed, DetectionAlert } from '../types';

export const DemoDashboard: React.FC = () => {
  // State for sample dashboard data
  const [children, setChildren] = useState<ChildRecord[]>(REGISTERED_CHILDREN_SAMPLE);
  const [cameras, setCameras] = useState<CameraFeed[]>(CCTV_CAMERAS_SAMPLE);
  const [alerts, setAlerts] = useState<DetectionAlert[]>(INITIAL_ALERTS);

  // Simulation test state
  const [selectedChildId, setSelectedChildId] = useState<string>(children[0].id);
  const [selectedCameraId, setSelectedCameraId] = useState<string>('CAM-04');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [activeMatchAlert, setActiveMatchAlert] = useState<DetectionAlert | null>(null);

  // New Child Registration Modal
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [newChildName, setNewChildName] = useState('');
  const [newChildAge, setNewChildAge] = useState('6');
  const [newChildLocation, setNewChildLocation] = useState('Central Plaza Mall Entrance');
  const [newChildContact, setNewChildContact] = useState('+1 (555) 832-1984');

  // Active child and camera objects
  const activeChild = children.find(c => c.id === selectedChildId) || children[0];
  const activeCamera = cameras.find(c => c.id === selectedCameraId) || cameras[0];

  // Run simulated recognition scan
  const handleRunScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setActiveMatchAlert(null);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          
          // Generate new detection alert
          const newAlert: DetectionAlert = {
            id: `ALT-${Math.floor(1000 + Math.random() * 9000)}`,
            childId: activeChild.id,
            childName: activeChild.name,
            cameraId: activeCamera.id,
            cameraName: activeCamera.name,
            location: activeCamera.location,
            confidence: Number((98.2 + Math.random() * 1.5).toFixed(1)),
            timestamp: 'Just now (' + new Date().toLocaleTimeString() + ')',
            status: 'New',
            coordinates: { lat: 28.6139, lng: 77.2090 },
            snapshotUrl: activeChild.photoUrl
          };

          setAlerts(prevAlerts => [newAlert, ...prevAlerts]);
          setActiveMatchAlert(newAlert);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  // Handle register child
  const handleRegisterChildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChildName) return;

    const newRecord: ChildRecord = {
      id: `CH-2026-0${children.length + 90}`,
      name: newChildName,
      age: parseInt(newChildAge) || 6,
      gender: 'Male',
      lastSeenLocation: newChildLocation,
      lastSeenTime: 'Just now',
      reportedBy: 'Guardian (Registered)',
      contactNumber: newChildContact,
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      status: 'Searching'
    };

    setChildren([newRecord, ...children]);
    setSelectedChildId(newRecord.id);
    setIsRegisterModalOpen(false);
    setNewChildName('');
  };

  return (
    <section id="demo-dashboard" className="py-20 bg-slate-50 dark:bg-[#0b0f19] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-rose-500" />
              <span>Live System Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Demo Dashboard
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              Interactive demonstration of facial recognition matching, camera feed coordination, and real-time alert dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Register Missing Child</span>
            </button>
          </div>
        </div>

        {/* 4 Required Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          {/* Card 1: Registered Children */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Registered Children
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
                  {children.length + 140}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>{children.filter(c => c.status === 'Searching').length + 3} active search cases</span>
            </div>
          </div>

          {/* Card 2: Active Cameras */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-600 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Active Cameras
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
                  52 Feeds
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Camera className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>100% RTSP streams healthy</span>
            </div>
          </div>

          {/* Card 3: Alerts Generated */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-600 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Alerts Generated
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
                  {alerts.length + 35}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <BellRing className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>Avg response: 18 seconds</span>
            </div>
          </div>

          {/* Card 4: Successful Identifications */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-emerald-400 dark:hover:border-emerald-600 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Successful Identifications
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
                  98.6%
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>138 children reunited safely</span>
            </div>
          </div>

        </div>

        {/* Interactive AI Recognition Simulator Tool */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
                  TEST ENGINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Live Facial Recognition Test Workbench
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Select a target child profile and surveillance camera, then execute the AI matching pipeline.
              </p>
            </div>

            {/* Run Recognition Scan Button */}
            <button
              onClick={handleRunScan}
              disabled={isScanning}
              id="run-ai-scan-btn"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scanning Video Frames ({scanProgress}%)...</span>
                </>
              ) : (
                <>
                  <Scan className="w-4 h-4" />
                  <span>Execute Facial Recognition Scan</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            {/* Step A: Select Registered Child Profile */}
            <div className="lg:col-span-4 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                1. Select Missing Child Reference
              </label>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {children.map(child => (
                  <div
                    key={child.id}
                    onClick={() => setSelectedChildId(child.id)}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      selectedChildId === child.id
                        ? 'bg-blue-50/90 dark:bg-blue-950/60 border-blue-500 ring-1 ring-blue-500'
                        : 'bg-white/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={child.photoUrl}
                      alt={child.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {child.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {child.age} yrs
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {child.lastSeenLocation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step B: Select Camera Stream */}
            <div className="lg:col-span-4 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                2. Select Surveillance Stream
              </label>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {cameras.map(cam => (
                  <div
                    key={cam.id}
                    onClick={() => setSelectedCameraId(cam.id)}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      selectedCameraId === cam.id
                        ? 'bg-purple-50/90 dark:bg-purple-950/60 border-purple-500 ring-1 ring-purple-500'
                        : 'bg-white/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={cam.streamThumbnail}
                      alt={cam.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {cam.id}: {cam.name}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          {cam.fps} FPS
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {cam.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step C: Live Scan Viewport & Result Display */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  3. CCTV Feed Analysis
                </label>
                
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-52 flex items-center justify-center">
                  <img
                    src={activeCamera.streamThumbnail}
                    alt="Camera viewport"
                    className={`w-full h-full object-cover transition-opacity ${
                      isScanning ? 'opacity-70' : 'opacity-85'
                    }`}
                  />

                  {/* Scanning Laser Beam */}
                  {isScanning && (
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none">
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] animate-scan-line"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-3 bg-black/80 rounded-xl text-center backdrop-blur-md border border-cyan-500/40">
                          <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-1" />
                          <div className="text-xs font-mono text-cyan-300">
                            Matching 128-D Vectors...
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                            Progress: {scanProgress}%
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Timestamp & Location overlay */}
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] font-mono text-white">
                    {activeCamera.id} • {activeCamera.location}
                  </div>
                </div>
              </div>

              {/* Match Result Banner */}
              {activeMatchAlert && (
                <div className="mt-3 p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      MATCH CONFIRMED!
                    </span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded">
                      {activeMatchAlert.confidence}% Conf.
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                    Identified <strong>{activeMatchAlert.childName}</strong> at {activeMatchAlert.location}. SMS notification dispatched.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Sample Charts and Analytics Required by Prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Chart 1: Scanned Faces & Detection Timeline */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Real-Time Face Scans & Match Frequency
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Hourly cumulative face scans vs positive detections across public zones
                </p>
              </div>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded">
                Live Hourly Data
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DETECTION_METRICS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scannedGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="matchesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderRadius: '8px', 
                      border: '1px solid #334155',
                      color: '#f8fafc',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Area 
                    type="monotone" 
                    dataKey="totalScanned" 
                    name="Faces Scanned" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#scannedGrad)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="matches" 
                    name="Matches Detected" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#matchesGrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Time to Response Comparison */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Search Time (Minutes)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manual Searching vs. AI Detection System
                </p>
              </div>
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded">
                Benchmark
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_RESPONSE_TIME_COMPARISON} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="metric" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderRadius: '8px', 
                      border: '1px solid #334155',
                      color: '#f8fafc',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="manualSearch" name="Manual Search (Mins)" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="aiSystem" name="AI System (Mins)" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Live Incident Alert Feed Table */}
        <div className="glass-panel rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <BellRing className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Recent Detection Alerts & Dispatch Log
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Auto-refreshed via WebSocket
            </span>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-3">Alert ID</th>
                  <th className="p-3">Child Name</th>
                  <th className="p-3">Camera Node</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Confidence</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                {alerts.map((alt) => (
                  <tr key={alt.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3 font-bold text-blue-600 dark:text-blue-400">{alt.id}</td>
                    <td className="p-3 font-medium font-sans text-slate-900 dark:text-white">{alt.childName}</td>
                    <td className="p-3">{alt.cameraId}</td>
                    <td className="p-3 font-sans">{alt.location}</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">{alt.confidence}%</td>
                    <td className="p-3 text-slate-500">{alt.timestamp}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {alt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Register Missing Child Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-purple-900/50 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                Register New Missing Child
              </h3>
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRegisterChildSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Child Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anaya Verma"
                  value={newChildName}
                  onChange={(e) => setNewChildName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="16"
                    value={newChildAge}
                    onChange={(e) => setNewChildAge(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Guardian Phone
                  </label>
                  <input
                    type="tel"
                    value={newChildContact}
                    onChange={(e) => setNewChildContact(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Last Seen Location
                </label>
                <input
                  type="text"
                  value={newChildLocation}
                  onChange={(e) => setNewChildLocation(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl border border-blue-200 dark:border-blue-900 text-slate-600 dark:text-slate-300 text-[11px]">
                Note: In this test workbench, a default portrait reference is paired for the simulated face vector calculation.
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Confirm &amp; Register Case
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
