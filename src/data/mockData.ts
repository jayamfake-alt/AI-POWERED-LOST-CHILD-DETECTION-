import { ChildRecord, CameraFeed, DetectionAlert, TechItem, ArchitectureStep } from '../types';

export const REGISTERED_CHILDREN_SAMPLE: ChildRecord[] = [
  {
    id: 'CH-2026-089',
    name: 'Aarav Sharma',
    age: 6,
    gender: 'Male',
    lastSeenLocation: 'Central Mall Atrium - 2nd Floor',
    lastSeenTime: '15 mins ago (14:32)',
    reportedBy: 'Sunita Sharma (Mother)',
    contactNumber: '+1 (555) 392-8472',
    photoUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=400&q=80',
    status: 'Searching',
    matchConfidence: 98.4,
    detectedLocation: 'North Exit Promenade',
    detectedCamera: 'CAM-04 (North Exit Escalators)'
  },
  {
    id: 'CH-2026-090',
    name: 'Sophia Chen',
    age: 7,
    gender: 'Female',
    lastSeenLocation: 'Grand Metro Station Concourse',
    lastSeenTime: '32 mins ago (14:15)',
    reportedBy: 'David Chen (Father)',
    contactNumber: '+1 (555) 749-1029',
    photoUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80',
    status: 'Identified',
    matchConfidence: 99.1,
    detectedLocation: 'Platform 3 Gate B',
    detectedCamera: 'CAM-11 (Platform 3 Overpass)'
  },
  {
    id: 'CH-2026-091',
    name: 'Liam Johnson',
    age: 5,
    gender: 'Male',
    lastSeenLocation: 'City Carnival Ferris Wheel Area',
    lastSeenTime: '1 hour ago (13:45)',
    reportedBy: 'Emma Johnson (Mother)',
    contactNumber: '+1 (555) 912-3844',
    photoUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80',
    status: 'Searching',
    matchConfidence: 97.8,
    detectedLocation: 'Food Court Plaza',
    detectedCamera: 'CAM-08 (Food Court Entrance)'
  },
  {
    id: 'CH-2026-092',
    name: 'Maya Patel',
    age: 8,
    gender: 'Female',
    lastSeenLocation: 'Public Beach Promenade Zone C',
    lastSeenTime: '45 mins ago (14:02)',
    reportedBy: 'Rajesh Patel (Father)',
    contactNumber: '+1 (555) 438-2910',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    status: 'Reunited',
    matchConfidence: 99.6,
    detectedLocation: 'Lifeguard Tower 4',
    detectedCamera: 'CAM-14 (Boardwalk West)'
  }
];

export const CCTV_CAMERAS_SAMPLE: CameraFeed[] = [
  {
    id: 'CAM-01',
    name: 'Mall Central Atrium',
    location: 'Sector 4 - Grand Mall',
    status: 'Scanning',
    resolution: '1080p @ 30fps',
    fps: 30,
    facesScannedPerSec: 142,
    crowdLevel: 'High',
    streamThumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'CAM-04',
    name: 'North Exit Escalator',
    location: 'Sector 4 - Grand Mall North Wing',
    status: 'Alert',
    resolution: '4K @ 24fps',
    fps: 24,
    facesScannedPerSec: 88,
    crowdLevel: 'Moderate',
    streamThumbnail: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'CAM-11',
    name: 'Metro Platform 3 Overpass',
    location: 'Central Transit Hub',
    status: 'Scanning',
    resolution: '1080p @ 60fps',
    fps: 60,
    facesScannedPerSec: 215,
    crowdLevel: 'Extremely High',
    streamThumbnail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'CAM-08',
    name: 'Food Court Plaza',
    location: 'Carnival Grounds Area B',
    status: 'Scanning',
    resolution: '1080p @ 30fps',
    fps: 30,
    facesScannedPerSec: 160,
    crowdLevel: 'High',
    streamThumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'CAM-14',
    name: 'Beach Boardwalk West',
    location: 'Coastal Recreation Pier',
    status: 'Scanning',
    resolution: '1080p @ 30fps',
    fps: 30,
    facesScannedPerSec: 94,
    crowdLevel: 'Moderate',
    streamThumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'CAM-19',
    name: 'Children Discovery Park Gate',
    location: 'Botanical Gardens South',
    status: 'Scanning',
    resolution: '2K @ 30fps',
    fps: 30,
    facesScannedPerSec: 72,
    crowdLevel: 'Low',
    streamThumbnail: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=500&q=80'
  }
];

export const INITIAL_ALERTS: DetectionAlert[] = [
  {
    id: 'ALT-9041',
    childId: 'CH-2026-089',
    childName: 'Aarav Sharma',
    cameraId: 'CAM-04',
    cameraName: 'North Exit Escalator',
    location: 'Grand Mall North Wing, Gate 2',
    confidence: 98.4,
    timestamp: '2 mins ago (14:47:12)',
    status: 'New',
    coordinates: { lat: 28.6139, lng: 77.2090 },
    snapshotUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ALT-9038',
    childId: 'CH-2026-090',
    childName: 'Sophia Chen',
    cameraId: 'CAM-11',
    cameraName: 'Metro Platform 3 Overpass',
    location: 'Central Transit Hub Platform 3',
    confidence: 99.1,
    timestamp: '18 mins ago (14:31:05)',
    status: 'Dispatched',
    coordinates: { lat: 28.6145, lng: 77.2085 },
    snapshotUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=300&q=80'
  }
];

export const TECHNOLOGIES: TechItem[] = [
  {
    name: 'Python',
    category: 'Core Language',
    iconName: 'Code2',
    description: 'Powers backend algorithms, threading, and hardware-accelerated computer vision pipelines.',
    purpose: 'Core application execution & image manipulation scripting',
    version: '3.11 LTS',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'OpenCV',
    category: 'Computer Vision',
    iconName: 'Camera',
    description: 'Performs multi-camera frame extraction, Haar-cascade / DNN face localization, and contrast normalization.',
    purpose: 'Video stream preprocessing & frame capture (RTSP/HLS)',
    version: '4.9.0',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Face Recognition Library',
    category: 'Biometric AI Engine',
    iconName: 'ScanFace',
    description: 'Built on dlib deep learning state-of-the-art face recognition with 99.38% accuracy on LFW benchmark.',
    purpose: '128-dimensional facial embedding vector extraction',
    version: 'dlib 19.24',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Machine Learning',
    category: 'Pattern Recognition',
    iconName: 'Cpu',
    description: 'Supervised classification and k-nearest neighbors (KNN) for lightning-fast matching against database vectors.',
    purpose: 'Fast indexing and nearest distance vector clustering',
    version: 'Scikit-Learn 1.4',
    color: 'from-violet-600 to-purple-600'
  },
  {
    name: 'Deep Learning',
    category: 'Neural Networks',
    iconName: 'Brain',
    description: 'Deep Residual Network (ResNet-34) backbone pretrained to preserve invariant facial landmark vectors.',
    purpose: 'Handles pose variations, low-lighting, and partial occlusion',
    version: 'PyTorch / TensorRT',
    color: 'from-fuchsia-600 to-pink-600'
  },
  {
    name: 'Flask / Django',
    category: 'Backend Framework',
    iconName: 'Server',
    description: 'High-performance REST API handling image uploads, database queries, and async WebSocket alert broadcasts.',
    purpose: 'Server controller, authentication & notification dispatcher',
    version: 'Flask 3.0 / Django 5.0',
    color: 'from-blue-700 to-purple-700'
  },
  {
    name: 'MySQL Database',
    category: 'Relational Database',
    iconName: 'Database',
    description: 'Stores encrypted child records, parent contacts, camera configurations, and vector embeddings in BLOB format.',
    purpose: 'Data persistence, audit logging & incident history',
    version: 'MySQL 8.0',
    color: 'from-sky-600 to-blue-700'
  },
  {
    name: 'HTML, CSS, JavaScript',
    category: 'Frontend & UI',
    iconName: 'Layout',
    description: 'Modern, responsive, real-time dashboard with glassmorphism UI, interactive charts, and live CCTV canvas rendering.',
    purpose: 'Intuitive user interface for guardians & control room security',
    version: 'HTML5, ES2024, React',
    color: 'from-indigo-500 to-blue-600'
  }
];

export const ARCHITECTURE_STEPS: ArchitectureStep[] = [
  {
    stepNumber: 1,
    title: 'Parent Uploads Image',
    subtitle: 'High-Resolution Reference Photo',
    description: 'Guardian submits the recent clear portrait of the lost child along with clothing description and last seen metadata via the web portal or kiosk.',
    technology: 'Flask Multipart File Upload / React Client',
    input: 'RGB JPEG/PNG portrait (min 300x300px)',
    output: 'Validated image file + Timestamp metadata',
    codeSnippet: 'image = cv2.imread(uploaded_file)\nrgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)'
  },
  {
    stepNumber: 2,
    title: 'Face Encoding',
    subtitle: '128-Dimensional Landmark Vector',
    description: 'Dlib deep neural network locates 68 facial landmark coordinates (eyes, nose, jawline, lips) and generates a unique 128-float mathematical embedding.',
    technology: 'Dlib ResNet-34 Face Encoder',
    input: 'Cropped normalized face rectangle',
    output: '128-dimensional floating point vector',
    codeSnippet: 'face_locations = face_recognition.face_locations(rgb_image)\nknown_encoding = face_recognition.face_encodings(rgb_image, face_locations)[0]'
  },
  {
    stepNumber: 3,
    title: 'AI Processing Engine',
    subtitle: 'Central Inference Cluster',
    description: 'The engine stores the target encoding in an in-memory KD-Tree index and queues parallel processing threads across all registered surveillance nodes.',
    technology: 'Multiprocessing / Async Workers',
    input: '128-d Target Vector + Active Camera Registry',
    output: 'Active surveillance task distributed to worker threads',
    codeSnippet: 'task_queue.dispatch({\n  "child_id": "CH-2026-089",\n  "encoding": known_encoding.tolist(),\n  "threshold": 0.52\n})'
  },
  {
    stepNumber: 4,
    title: 'CCTV Video Stream Analysis',
    subtitle: 'Real-Time Edge Frame Extraction',
    description: 'Continuous RTSP live streams from public cameras (malls, stations, streets) are captured at 24–60 FPS. Background subtraction and Haar/HOG cascades identify candidate faces.',
    technology: 'OpenCV VideoCapture / GPU CUDA Decoders',
    input: 'RTSP H.264 video streams from 50+ camera nodes',
    output: 'Extracted candidate bounding boxes per video frame',
    codeSnippet: 'success, frame = video_capture.read()\nface_boxes = face_detector.detect_faces(frame)'
  },
  {
    stepNumber: 5,
    title: 'Face Matching',
    subtitle: 'Euclidean Distance Calculation',
    description: 'Candidate faces extracted from CCTV frames are encoded and compared against the registered child vector using Euclidean distance. Match is confirmed if distance < 0.52.',
    technology: 'Vector Similarity / Euclidean Metric',
    input: 'CCTV face vector vs Registered vectors',
    output: 'Match distance score & Confidence percentage (e.g. 98.4%)',
    codeSnippet: 'distances = face_recognition.face_distance(known_encodings, current_face_encoding)\nif distances[0] < 0.52:\n    match_confidence = (1.0 - distances[0]) * 100'
  },
  {
    stepNumber: 6,
    title: 'Alert Generation',
    subtitle: 'Incident Packet Compilation',
    description: 'Upon positive match, the system packages the exact camera ID, physical location, GPS coordinate, timestamp, and CCTV video snapshot into an encrypted incident payload.',
    technology: 'Python Event Bus / REST Webhook',
    input: 'Camera metadata + Match snapshot + Child profile',
    output: 'Incident Alert ID & Geo-referenced payload',
    codeSnippet: 'alert = AlertModel.create({\n  "child_id": child.id,\n  "camera_id": camera.id,\n  "confidence": match_confidence,\n  "timestamp": datetime.now()\n})'
  },
  {
    stepNumber: 7,
    title: 'Authorities & Parents Notified',
    subtitle: 'Immediate Multi-Channel Broadcast',
    description: 'Security control room dashboard flashes audio-visual alerts, local mall guards receive automated handheld push alerts, and parents receive instant SMS & WhatsApp with location pins.',
    technology: 'Twilio SMS API / WebSocket / Push Notifications',
    input: 'Alert record + Parent contact + Security radio channel',
    output: 'Dispatched security team + Relieved parents (< 45s latency)',
    codeSnippet: 'send_sms(parent_phone, f"ALERT: Match detected at {camera.location} with {confidence}% confidence.")\nwebsocket_broadcast("/topic/security_alerts", alert_payload)'
  }
];

export const CHART_DETECTION_METRICS = [
  { time: '10:00', totalScanned: 1840, matches: 0, crowdIndex: 45 },
  { time: '11:00', totalScanned: 3420, matches: 1, crowdIndex: 60 },
  { time: '12:00', totalScanned: 5200, matches: 0, crowdIndex: 78 },
  { time: '13:00', totalScanned: 7100, matches: 2, crowdIndex: 85 },
  { time: '14:00', totalScanned: 9400, matches: 3, crowdIndex: 92 },
  { time: '15:00', totalScanned: 11200, matches: 1, crowdIndex: 88 },
  { time: '16:00', totalScanned: 13500, matches: 2, crowdIndex: 75 },
];

export const CHART_RESPONSE_TIME_COMPARISON = [
  { metric: 'Initial Detection', manualSearch: 180, aiSystem: 1.2 },
  { metric: 'Crowd Scan (1,000 p)', manualSearch: 240, aiSystem: 2.5 },
  { metric: 'Multi-Zone Correlation', manualSearch: 360, aiSystem: 4.0 },
  { metric: 'Alert Notification', manualSearch: 45, aiSystem: 0.5 },
];
