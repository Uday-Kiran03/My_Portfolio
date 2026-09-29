import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export const Certifications = ({ onSelectCert }) => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="section-container reveal">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Award className="w-5 h-5" />
        </div>
        04. Verified Certifications & Credentials
      </div>
      <p className="section-subtitle">
        Official industry certifications validating cloud architecture, Kubernetes administration, and senior frontend engineering.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={cert.id}
            className={`glass-panel p-6 rounded-2xl glass-card-interactive flex flex-col justify-between reveal delay-${(idx + 1) * 100}`}
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold badge-emerald flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  VERIFIED
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mb-3">
                {cert.issuer} • {cert.date}
              </p>

              <div className="text-[11px] font-mono text-slate-400 mb-4 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                ID: <span className="text-slate-200">{cert.credentialId}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((sk, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {cert.badge}
              </span>
              <button
                onClick={() => onSelectCert(cert)}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Inspect Verification
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
