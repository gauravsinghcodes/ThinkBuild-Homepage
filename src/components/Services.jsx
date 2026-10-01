import React, { useState, useEffect, useRef } from 'react';
import { Search, Share2, Target, FileText, Sparkles, Code2, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/services';
import Modal from './Modal';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Search: Search,
  Share2: Share2,
  Target: Target,
  FileText: FileText,
  Sparkles: Sparkles,
  Code2: Code2
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item-reveal',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%'
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Thoughtful Strategies. Meaningful Results.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We provide integrated digital marketing solutions designed to build brand authority and generate sustainable long-term revenue.
          </p>
        </div>

        {/* 2 or 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" ref={gridRef}>
          {servicesData.map((service) => {
            const IconComp = iconMap[service.iconName] || Search;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="service-item-reveal group p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between h-full shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="flex-1 flex flex-col">
                  {/* Minimal Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5 text-slate-700 group-hover:text-white" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-3">
                    {service.shortDesc}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-indigo-600 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed text-base">
              {selectedService.description}
            </p>

            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Core Deliverables Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <a
                href="#contact"
                onClick={() => {
                  setSelectedService(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Request {selectedService.title} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
