import React, { useState } from 'react';
import { Send, Mail, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const availableServices = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Strategy",
  "Branding & Creative",
  "Website Design & Development"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Performance Marketing',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please provide brief project details';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Start a Project
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tell us a little about your business and what you're looking to achieve. We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Options */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6 overflow-hidden">
              <h3 className="text-xl font-bold font-heading text-slate-900">Direct Contact</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prefer direct messaging or sending an email summary? Reach out directly below.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/15550192834?text=Hi%20RVCanvas%20Team,%20I'd%20like%20to%20discuss%20a%20digital%20marketing%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-all text-sm font-semibold group overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-slate-900 truncate">WhatsApp Message</span>
                    <span className="text-xs text-emerald-700 font-mono font-semibold block truncate">+1 (555) 019-2834</span>
                  </div>
                </a>

                <a
                  href="mailto:hello@rvcanvas.agency?subject=Project%20Inquiry%20-%20RVCanvas"
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 transition-all text-sm font-semibold group overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-slate-900 truncate">Direct Email</span>
                    <span className="text-xs text-indigo-600 font-mono font-semibold block break-all">hello@rvcanvas.agency</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium space-y-1">
                <div>HQ: San Francisco, CA & London, UK</div>
                <div>Response Time: Within 4 business hours</div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8">
            <div className="p-5 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                    Inquiry Sent Successfully
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-base">
                    Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. We've received your project inquiry for <span className="text-slate-900 font-bold">{formData.company}</span> and will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        company: '',
                        service: 'Performance Marketing',
                        details: ''
                      });
                    }}
                    className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                    </div>
                  </div>

                  {/* Company & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.company ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/10'
                        }`}
                      />
                      {errors.company && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 font-medium text-sm"
                      >
                        {availableServices.map((srv) => (
                          <option key={srv} value={srv}>{srv}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your goals, timelines, or specific marketing challenges..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.details ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/10'
                      }`}
                    />
                    {errors.details && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.details}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
