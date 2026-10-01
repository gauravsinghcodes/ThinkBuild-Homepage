import React from 'react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Endorsements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kind Words From Our Partners.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read how our growth architecture delivers revenue acceleration for leaders scaling fast.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-full hover:border-slate-300 transition-all"
            >
              <div className="mb-8">
                <div className="text-3xl text-indigo-300 font-serif leading-none mb-4">“</div>
                <p className="text-slate-700 text-sm leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}, <span className="text-slate-800">{item.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
