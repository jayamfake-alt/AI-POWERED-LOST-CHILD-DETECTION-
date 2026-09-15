import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Lock, 
  Heart,
  ArrowUp,
  FileText,
  CheckCircle2,
  X
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: About Project Required by Prompt */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                ChildGuard <span className="text-purple-400">AI</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong>AI-Powered Lost Child Detection System</strong> is a final-year engineering capstone project designed to dramatically reduce missing child recovery times in crowded public locations using deep learning facial recognition and continuous CCTV stream processing.
            </p>

            <div className="pt-2 text-xs font-mono text-purple-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Final Year B.Tech Project • CSE / AI</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Sections */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              System Core
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#problem" className="hover:text-blue-400 transition-colors">About Problem</a></li>
              <li><a href="#solution" className="hover:text-blue-400 transition-colors">AI Solution</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#tech-stack" className="hover:text-blue-400 transition-colors">Technologies Used</a></li>
              <li><a href="#architecture" className="hover:text-blue-400 transition-colors">System Architecture</a></li>
            </ul>
          </div>

          {/* Column 3: Privacy & Ethics Required by Prompt */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Privacy &amp; Compliance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our architecture implements strict ethical AI guardrails: mathematical vectors are encrypted via AES-256, and non-target facial data is purged immediately from memory cache.
            </p>
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Read Full Privacy &amp; Ethics Policy</span>
            </button>
          </div>

          {/* Column 4: Contact Information & Social Links Required by Prompt */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:childguard.ai.project@university.edu" className="hover:text-white transition-colors">
                  childguard.project@university.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>+1 (555) 839-2041</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Center for Computer Vision Research, Academic Complex IV</span>
              </div>
            </div>

            {/* Social Media Links Required by Prompt */}
            <div className="pt-2">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Social Media Links
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Twitter handle"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="YouTube presentation video"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} AI-Powered Lost Child Detection System. Final-Year Engineering Project.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-slate-300 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                Biometric Privacy &amp; Ethical AI Policy
              </h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                The <strong>AI-Powered Lost Child Detection System</strong> operates strictly within humanitarian search and rescue paradigms. In adherence to modern biometric privacy frameworks (GDPR, India DPDP Act):
              </p>
              
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1.5 border border-slate-700">
                <div className="font-bold text-white">1. Ephemeral In-Memory Verification:</div>
                <p className="text-slate-400">
                  CCTV frames scanned that do NOT match the registered missing child are discarded in RAM immediately without being written to persistent disk storage.
                </p>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1.5 border border-slate-700">
                <div className="font-bold text-white">2. 128-D Mathematical Hashes Only:</div>
                <p className="text-slate-400">
                  Raw facial photographs are transformed into irreversible mathematical floating-point vectors. The original face image cannot be mathematically reconstructed from these embeddings.
                </p>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1.5 border border-slate-700">
                <div className="font-bold text-white">3. Case Resolution Auto-Purge:</div>
                <p className="text-slate-400">
                  Once a child is marked 'Reunited' by authorities, their reference photos and embeddings are purged within 24 hours from the database index.
                </p>
              </div>
            </div>

            <div className="pt-3 flex justify-end">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
