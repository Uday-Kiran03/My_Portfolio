import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export const Contact = ({ showToast }) => {
  const { contact } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, label) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard!`, 'info');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getSocialIcon = (iconName) => {
    const map = {
      Github: <Github className="w-5 h-5" />,
      Linkedin: <Linkedin className="w-5 h-5" />,
      Twitter: <Twitter className="w-5 h-5" />,
      Mail: <Mail className="w-5 h-5" />
    };
    return map[iconName] || <Mail className="w-5 h-5" />;
  };

  return (
    <section id="contact" className="section-container reveal">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Mail className="w-5 h-5" />
        </div>
        06. Initiate Contact & Connect
      </div>
      <p className="section-subtitle">
        {contact.tagline}
      </p>

      {/* Centered Direct Communication Card */}
      <div className="max-w-3xl mx-auto reveal delay-100">
        <div className="glass-panel p-8 rounded-2xl space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Direct Communication
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Available for technical consultations, full-stack architecture roles, and high-impact advisory work.
          </p>

          {/* Contact Items with Copy Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">{contact.email}</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(contact.email, 'Email')}
                className="p-2 shrink-0 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-all"
                title="Copy Email"
              >
                {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">{contact.phone}</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(contact.phone, 'Phone')}
                className="p-2 shrink-0 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-all"
                title="Copy Phone"
              >
                {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">{contact.location}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">Connect across networks:</div>
            <div className="flex items-center gap-3">
              {contact.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:scale-105 transition-all"
                  title={s.name}
                >
                  {getSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Signature */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center space-y-2">
        <div className="text-xs text-slate-400 font-mono">
          Designed & Built by <span className="text-cyan-400 font-bold">Uday Kiran</span> • Powered by React & Glassmorphism UI
        </div>
        <div className="text-[10px] text-slate-600 font-mono">
          © {new Date().getFullYear()} Uday Kiran. All rights reserved. Sub-50ms render latency.
        </div>
      </div>
    </section>
  );
};
