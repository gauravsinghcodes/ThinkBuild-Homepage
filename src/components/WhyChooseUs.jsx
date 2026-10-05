import React, { useRef, useEffect } from 'react';
import { Target, MessageSquare, Compass, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    num: "01",
    title: "Personalized Strategies",
    desc: "Every growth plan is custom-engineered to match your target unit economics and exact market positioning."
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "Clear Communication",
    desc: "Direct communication with your senior strategy squad, weekly sprints, and real-time executive reporting."
  },
  {
    icon: Compass,
    num: "03",
    title: "Creative Thinking",
    desc: "Thoughtful visual storytelling, short-form video creatives, and sleek web experiences that cut through noise."
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Measurable Growth",
    desc: "We focus on revenue velocity, pipeline growth, and CAC efficiency. If it doesn't move bottom line, we don't do it."
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.value-card-reveal',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Why RVCanvas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Small Details. Big Impact.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We focus on the essential levers that drive real commercial momentum for ambitious brands.
          </p>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="value-card-reveal p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-slate-200/80 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between h-full shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400">{item.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                      <IconComp className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
