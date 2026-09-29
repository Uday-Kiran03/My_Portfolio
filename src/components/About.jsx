import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { User, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export const About = () => {
  const { about } = PORTFOLIO_DATA;

  const icons = [
    <Zap className="w-6 h-6 text-cyan-400" />,
    <Layers className="w-6 h-6 text-violet-400" />,
    <Cpu className="w-6 h-6 text-emerald-400" />,
    <ShieldCheck className="w-6 h-6 text-cyan-300" />
  ];

  return (
    <section id="about" className="section-container reveal">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <User className="w-5 h-5" />
        </div>
        01. About Me
      </div>
      <p className="section-subtitle">
        Engineering resilient software through minimal futuristic design and sub-50ms performance standards.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Paragraphs Column */}
        <div className="lg:col-span-6 space-y-6 reveal-left delay-100">
          <h3 className="text-2xl font-bold text-white leading-snug">
            {about.heading}
          </h3>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="glass-panel p-5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Highlights Cards Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-right delay-200">
          {about.highlights.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl glass-card-interactive flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-4 shadow-lg">
                  {icons[idx % icons.length]}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span>SPEC // 0{idx + 1}</span>
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
