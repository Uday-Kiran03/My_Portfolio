import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, Star, GitFork, ExternalLink, Github, Eye } from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Cloud & DevOps', 'AI & Data'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="section-container reveal">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <FolderGit2 className="w-5 h-5" />
        </div>
        03. Featured Engineering Projects
      </div>
      <p className="section-subtitle">
        Production systems, high-throughput microservices, and minimalist glass web interfaces.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 reveal delay-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`glass-pill text-xs ${
              activeCategory === cat ? 'active' : ''
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-cyan-500/30 transition-all reveal delay-${(idx + 1) * 100}`}
          >
            <div>
              {/* Project Image Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md border border-white/15 text-cyan-300">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300">
                      ★ FEATURED
                    </span>
                  )}
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 text-xs font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    {proj.stars || 120}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {proj.forks || 34}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {proj.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tg, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-6 py-4 border-t border-white/5 bg-slate-950/40 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(proj)}
                className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Eye className="w-4 h-4" />
                System Specs & Architecture
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
