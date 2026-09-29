import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Search, Code2, Server, Cloud, Database, FileCode, Palette, Layers, Terminal, GitMerge, Box, Workflow, Activity, Zap, Radio, Network } from 'lucide-react';

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getSkillIcon = (iconName) => {
    const map = {
      Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
      FileCode: <FileCode className="w-5 h-5 text-cyan-300" />,
      Palette: <Palette className="w-5 h-5 text-violet-400" />,
      Layers: <Layers className="w-5 h-5 text-violet-300" />,
      Server: <Server className="w-5 h-5 text-cyan-400" />,
      Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
      Terminal: <Terminal className="w-5 h-5 text-emerald-300" />,
      GitMerge: <GitMerge className="w-5 h-5 text-cyan-400" />,
      Box: <Box className="w-5 h-5 text-cyan-400" />,
      Cloud: <Cloud className="w-5 h-5 text-violet-400" />,
      Workflow: <Workflow className="w-5 h-5 text-emerald-400" />,
      Activity: <Activity className="w-5 h-5 text-cyan-300" />,
      Database: <Database className="w-5 h-5 text-cyan-400" />,
      Zap: <Zap className="w-5 h-5 text-violet-400" />,
      Radio: <Radio className="w-5 h-5 text-emerald-400" />,
      Network: <Network className="w-5 h-5 text-cyan-400" />
    };
    return map[iconName] || <Cpu className="w-5 h-5 text-cyan-400" />;
  };

  const filteredSkills = skills.items.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="section-container reveal">
      {/* Section Header */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Cpu className="w-5 h-5" />
        </div>
        02. Technical Skills Matrix
      </div>
      <p className="section-subtitle">
        Curated tech stack and production mastery across frontend, distributed backends, and cloud native infrastructure.
      </p>

      {/* Filter and Search Controls Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 reveal delay-100">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {skills.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`glass-pill text-xs ${
                selectedCategory === cat ? 'active' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full bg-slate-900/60 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
          />
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((sk, idx) => (
          <div key={idx} className="glass-panel p-5 rounded-2xl glass-card-interactive flex flex-col justify-between reveal delay-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                  {getSkillIcon(sk.icon)}
                </div>
                <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${
                  sk.tag === 'Expert' ? 'badge-cyan' : 'badge-violet'
                }`}>
                  {sk.tag}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white mb-1">
                {sk.name}
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mb-3">
                {sk.category}
              </p>
            </div>

            {/* Proficiency Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Proficiency</span>
                <span className="text-cyan-400 font-bold">{sk.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                  style={{ width: `${sk.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-sm font-mono">
          No matching skills found for "{searchQuery}".
        </div>
      )}
    </section>
  );
};
