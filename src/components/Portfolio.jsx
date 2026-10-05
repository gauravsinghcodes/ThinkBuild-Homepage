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

        {/* Projects Row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Visual Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 mb-6 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-emerald-700 font-mono">
                    ⚡ {project.results}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <span>View Case Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
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
            <div className="relative rounded-2xl overflow-hidden h-44 sm:h-52 w-full border border-slate-200 bg-slate-100">
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
