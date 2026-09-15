export interface ChildRecord {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  lastSeenLocation: string;
  lastSeenTime: string;
  reportedBy: string;
  contactNumber: string;
  photoUrl: string;
  status: 'Searching' | 'Identified' | 'Reunited';
  matchConfidence?: number;
  detectedLocation?: string;
  detectedCamera?: string;
}

export interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'Online' | 'Scanning' | 'Alert' | 'Offline';
  resolution: string;
  fps: number;
  facesScannedPerSec: number;
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Extremely High';
  streamThumbnail: string;
}

export interface DetectionAlert {
  id: string;
  childId: string;
  childName: string;
  cameraId: string;
  cameraName: string;
  location: string;
  confidence: number;
  timestamp: string;
  status: 'New' | 'Dispatched' | 'Resolved';
  coordinates: { lat: number; lng: number };
  snapshotUrl: string;
}

export interface TechItem {
  name: string;
  category: string;
  iconName: string;
  description: string;
  purpose: string;
  version?: string;
  color: string;
}

export interface ArchitectureStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  input: string;
  output: string;
  codeSnippet?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
