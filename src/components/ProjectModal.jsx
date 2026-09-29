import React from "react";
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Activity,
  Zap,
  CheckCircle2,
  Layers,
} from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6 relative border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner */}
        <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Summary */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.summary}
        </p>

        {/* System Performance Specs Dashboard */}
        {project.specs && (
          <div className="glass-panel p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              System Architecture & Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                <div className="text-slate-400 text-[10px]">Architecture</div>
                <div className="text-white font-semibold mt-0.5">
                  {project.specs.architecture}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-xs font-semibold text-slate-300">
                Technical Milestones:
              </div>
              {project.specs.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400">
            Built With Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs font-semibold hover:border-cyan-500/40 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};
