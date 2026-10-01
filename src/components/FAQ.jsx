import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-center mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Questions? We've Got Answers.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our engagement model, methodology, and deliverables.
          </p>
        </div>

        {/* Minimal Divider-based Accordion */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-indigo-600 transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-slate-600 text-base leading-relaxed max-w-3xl font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
