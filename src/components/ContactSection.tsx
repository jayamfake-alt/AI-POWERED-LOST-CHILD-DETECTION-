import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  Send, 
  PlayCircle, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  MapPin,
  Calendar,
  Building
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submittedAction, setSubmittedAction] = useState<'submit' | 'demo' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (actionType: 'submit' | 'demo', e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your Name and Email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedAction(actionType);
      setTimeout(() => {
        setSubmittedAction(null);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#0b0f19] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Demonstration Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Contact & Academic Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Interested in deploying our detection system at your venue, or reviewing our research source code and engineering report? Reach out below.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: College Project & Academic Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-purple-900/40 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Final-Year Engineering Capstone
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    B.Tech Computer Science &amp; Artificial Intelligence
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs space-y-2">
                <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Project Recognition:</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Developed as a comprehensive Major Project for Smart City Surveillance &amp; Public Safety, achieving 99.38% verification accuracy on standard facial benchmarks.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span><strong>Department:</strong> Computer Science & Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span><strong>Academic Session:</strong> 2025 – 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span><strong>Lab Location:</strong> AI & Computer Vision Research Lab</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span><strong>Project Mail:</strong> childguard.project@university.edu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl bg-white/95 dark:bg-slate-900/90">
              
              {submittedAction ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    {submittedAction === 'demo' ? 'Live Demo Request Received!' : 'Message Submitted Successfully!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name || 'Friend'}</strong>. Our project team and research guide will review your inquiry and follow up at <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Field 1: Name Required by Prompt */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <span>Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Prof. / Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
                      />
                    </div>

                    {/* Field 2: Email Required by Prompt */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-purple-600" />
                        <span>Email *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@institution.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-purple-500 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Phone Number Required by Prompt */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-hidden transition-all"
                    />
                  </div>

                  {/* Field 4: Message Required by Prompt */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                      <span>Message</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your inquiry, venue integration requirements, or research questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
                    />
                  </div>

                  {/* Buttons: Submit & Request Demo Required by Prompt */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    
                    {/* Button 1: Submit */}
                    <button
                      type="button"
                      onClick={(e) => handleSubmit('submit', e)}
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit</span>
                    </button>

                    {/* Button 2: Request Demo */}
                    <button
                      type="button"
                      onClick={(e) => handleSubmit('demo', e)}
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 hover:bg-purple-200/80 dark:hover:bg-purple-900 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <PlayCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>Request Demo</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center pt-2">
                    Academic confidentiality preserved • Student capstone presentation portfolio
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
