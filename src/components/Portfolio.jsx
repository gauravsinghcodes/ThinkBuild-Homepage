import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Check } from 'lucide-react';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Selected Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Work That Speaks for Itself.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover how our strategic campaigns turn complex business challenges into measurable market results.
          </p>
        </div>

        {/* 3 Projects Editorial Layout */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-7 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 cursor-pointer"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 space-y-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-emerald-700 font-mono">
                    ⚡ {project.results}
                  </div>

                  <div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={`${selectedProject.title} — Case Details`}
        >
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">{selectedProject.category}</span>
              <h4 className="text-xl font-bold font-heading text-slate-900 mt-1 mb-3">{selectedProject.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedProject.summary}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
              🚀 Key Outcome: {selectedProject.results}
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Scope & Services Delivered:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedProject.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <a
                href="#contact"
                onClick={() => {
                  setSelectedProject(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Request Similar Case Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
