import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, ExternalLink, Calendar, Key } from 'lucide-react';

export const CertModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel max-w-xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold badge-emerald inline-flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              OFFICIALLY VERIFIED
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {cert.name}
            </h3>
          </div>
        </div>

        {/* Info Grid */}
        <div className="glass-panel p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Issuing Organization:
            </span>
            <span className="text-white font-semibold">{cert.issuer}</span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-violet-400" />
              Validity Status:
            </span>
            <span className="text-cyan-300 font-semibold">{cert.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Key className="w-4 h-4 text-emerald-400" />
              Credential ID:
            </span>
            <span className="text-slate-200 font-semibold">{cert.credentialId}</span>
          </div>
        </div>

        {/* Validated Skills */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400">Validated Technical Competencies:</div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((sk, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
              >
                ✓ {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end">
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
          >
            Verify at Official Portal
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
