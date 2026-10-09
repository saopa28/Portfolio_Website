import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Tag, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Terminal 
} from 'lucide-react';

export default function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Systems', 'Frontend & Design', 'Infrastructure'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono text-blue-600">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO DIRECTORY // REPOSITORIES</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Engineered Systems & Projects
        </h1>
        
        <p className="text-slate-500 max-w-3xl text-base sm:text-lg">
          A curated selection of high-concurrency systems, low-latency AI pipelines, and responsive design architectures.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group relative rounded-3xl p-6 sm:p-7 glass-panel border border-slate-200 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
          >
            {/* Ambient Background Gradient for Card */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} />

            <div className="space-y-4 relative z-10">
              
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-indigo-600 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200">
                    <Sparkles className="w-3 h-3 text-indigo-500" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Badge */}
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-700 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{project.metrics}</span>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Links and Action Footer */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <span>Live Deploy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
