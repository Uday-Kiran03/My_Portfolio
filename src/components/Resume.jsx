import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, GraduationCap, Eye } from 'lucide-react';

export const Resume = ({ onOpenResumeModal }) => {
  const { resume } = PORTFOLIO_DATA;

  return (
    <section id="resume" className="section-container reveal">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <FileText className="w-5 h-5" />
        </div>
        05. Resume & Education
      </div>
      <p className="section-subtitle">
        Academic background, specialized coursework, and core engineering competencies.
      </p>

      {/* Top Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 glass-panel p-5 rounded-2xl reveal delay-100">
        <div>
          <h4 className="text-base font-bold text-white">Curriculum Vitae (CV)</h4>
          <p className="text-xs text-slate-400 font-mono">ADAKKI SAI UDAY KIRAN • Official Resume Document</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
          >
            <Eye className="w-4 h-4 text-white" />
            Inspect Resume
          </button>
        </div>
      </div>

      {/* Education & Traits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Education Column */}
        <div className="md:col-span-8 space-y-6 reveal-left delay-200">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-violet-400" />
            Education & Academic Foundation
          </h3>

          {resume.education.map((edu, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-3 border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white">
                  {edu.degree}
                </h4>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold badge-violet">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs font-semibold text-cyan-400">
                {edu.institution}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        {/* Key Competencies Side Card */}
        <div className="md:col-span-4 space-y-6 reveal-right delay-300">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-cyan-400" />
            Core Focus
          </h3>

          <div className="glass-panel p-6 rounded-2xl space-y-4 bg-gradient-to-br from-cyan-950/20 to-violet-950/20 border border-cyan-500/20">
            <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              Specialized Areas
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>AWS & Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                <span>Docker, Kubernetes & CI/CD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Terraform & CloudFormation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
