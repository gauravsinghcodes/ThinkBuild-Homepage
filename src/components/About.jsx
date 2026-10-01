import React, { useEffect, useRef } from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: "01",
    icon: Target,
    title: "Strategy Before Everything",
    desc: "We analyze unit economics, positioning, and buyer psychology before executing a single ad campaign or design asset."
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Creativity With Purpose",
    desc: "Thoughtful visual storytelling and copy frameworks built specifically to communicate value and convert attention into revenue."
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Results That Matter",
    desc: "We prioritize qualified lead generation, pipeline growth, and net profit over empty vanity impressions."
  }
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Heading & Intro */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              About ThinkBuild
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Good Ideas Deserve Great Execution.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              ThinkBuild is an independent digital marketing agency. We bridge the gap between editorial visual craftsmanship and rigorous analytical performance.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Mission</h3>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                "To empower ambitious companies through thoughtful digital strategies, transparent data attribution, and sustainable multi-channel growth."
              </p>
            </div>
          </div>

          {/* Right Editorial Image Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] shadow-xs">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                alt="ThinkBuild Studio Strategy Team"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="about-card-reveal p-8 rounded-3xl bg-[#faf8f5] border border-slate-200/80 flex flex-col justify-between hover:border-indigo-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-indigo-600">{item.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                      <IconComp className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
