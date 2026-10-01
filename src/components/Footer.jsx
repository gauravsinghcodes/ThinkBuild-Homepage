import React from 'react';
import { ArrowUp } from 'lucide-react';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#faf8f5] border-t border-slate-200 text-slate-600 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Col 1: Brand & Wordmark */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm">
                T
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                Think<span className="text-indigo-600">Build</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              ThinkBuild is an independent digital marketing agency. We engineer full-funnel acquisition, SEO authority, branding systems, and modern web applications for ambitious brands.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
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
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-all shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-heading">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Work', href: '#work' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-heading">Capabilities</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                'Search Engine Optimization',
                'Social Media Marketing',
                'Performance Marketing',
                'Content Strategy',
                'Branding & Creative',
                'Website Design & Development'
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-heading">Contact Details</h4>
            <div className="space-y-2 text-sm text-slate-600 font-medium">
              <p>Email: <a href="mailto:hello@thinkbuild.agency" className="text-slate-900 font-bold hover:underline">hello@thinkbuild.agency</a></p>
              <p>Phone: <span className="text-slate-900 font-bold">+1 (555) 019-2834</span></p>
              <p>Location: San Francisco, CA & London, UK</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} ThinkBuild Agency LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: ThinkBuild protects client confidentiality and user data."); }} className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: All engagement terms defined in master service agreements."); }} className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
