import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(visualRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, '-=0.7');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, href) => {
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
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[90vh] pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 flex flex-col justify-between overflow-hidden bg-[#faf8f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Headline & Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Digital Marketing & Growth Agency</span>
            </motion.div>

            {/* Headline */}
            <h1 
              ref={titleRef}
              className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 sm:mb-8"
            >
              Marketing That Moves Your Business Forward.
            </h1>

            {/* Supporting Text */}
            <p 
              ref={textRef}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10"
            >
              We help ambitious brands build meaningful connections and achieve sustainable growth through thoughtful digital strategies.
            </p>

            {/* Touch-Friendly Mobile Buttons */}
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all duration-300 shadow-sm group active:bg-slate-800"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#services"
                onClick={(e) => scrollToSection(e, '#services')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:border-slate-400 rounded-full transition-all duration-300 shadow-xs"
              >
                <span>Explore Our Services</span>
              </motion.a>
            </div>

          </div>

          {/* Fully Responsive Editorial Visual Card */}
          <div className="lg:col-span-4 relative flex justify-center w-full" ref={visualRef}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square rounded-3xl bg-gradient-to-tr from-slate-100 via-white to-slate-50 border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>ThinkBuild Studio</span>
                <span>Est. 2026</span>
              </div>

              <div className="my-auto space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-extrabold text-lg sm:text-xl">
                  ↗
                </div>
                <div className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 leading-tight">
                  Strategy. Design. Performance.
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Combining analytical rigor with editorial design aesthetics.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400 font-mono">
                <span>01 / PHILOSOPHY</span>
                <span>LESS IS MORE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 flex justify-start">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, '#about')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-indigo-600" />
        </a>
      </div>
    </section>
  );
}
