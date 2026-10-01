import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#faf8f5] border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 items-start">
          
          {/* Col 1: Brand & Wordmark */}
          <div className="lg:col-span-7 space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5">
              <div className="w-8.5 h-8.5 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs overflow-hidden p-1.5">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 22 26 H 78 V 38 H 56 V 76 H 44 V 38 H 22 V 26 Z" fill="currentColor"/>
                  <rect x="58" y="48" width="18" height="28" rx="6" fill="#818cf8"/>
                  <circle cx="67" cy="32" r="5" fill="#a5b4fc"/>
                </svg>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                Think<span className="text-indigo-600">Build</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              ThinkBuild is an independent digital marketing agency. We engineer full-funnel acquisition, SEO authority, branding systems, and modern web applications for ambitious brands.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-2">
              {[
                { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaXTwitter, href: 'https://x.com', label: 'X (Twitter)' },
                { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-xs active:scale-95"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Contact Details */}
          <div className="lg:col-span-5 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-heading">Contact Details</h4>
            <div className="space-y-2 text-sm text-slate-600 font-medium">
              <p>Email: <a href="mailto:hello@thinkbuild.agency" className="text-slate-900 font-bold hover:underline break-all">hello@thinkbuild.agency</a></p>
              <p>Phone: <span className="text-slate-900 font-bold">+1 (555) 019-2834</span></p>
              <p>Location: San Francisco, CA & London, UK</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} ThinkBuild Agency LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6 justify-center">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: ThinkBuild protects client confidentiality and user data."); }} className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: All engagement terms defined in master service agreements."); }} className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

