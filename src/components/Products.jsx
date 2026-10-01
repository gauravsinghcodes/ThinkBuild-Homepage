import React, { useRef, useEffect } from 'react';
import { productsData } from '../data/products';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-item-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%'
          }
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <section id="products" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Packaged Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Solutions Built Around Your Goals.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Productized marketing frameworks engineered for rapid deployment, clear scope, and predictable outcomes.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" ref={cardsRef}>
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="product-item-reveal p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-slate-200/80 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between h-full shadow-xs"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 mb-4">
                  {product.subtitle}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {product.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple CTA */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-900 hover:text-white border border-slate-300 transition-all duration-300 shadow-xs"
              >
                <span>{product.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
