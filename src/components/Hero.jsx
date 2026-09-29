import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  ArrowRight,
  Download,
  Terminal,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Award
} from "lucide-react";

export const Hero = () => {
  const { personal, stats } = PORTFOLIO_DATA;
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const roles = personal.typingRoles;
    const currentRole = roles[typingIndex];
    let timeout;

    if (!isDeleting && currentText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 70);
    } else if (!isDeleting && currentText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length - 1));
      }, 40);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, typingIndex, personal.typingRoles]);

  const copyEmail = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personal.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Main Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            {personal.status}
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient-cyan">{personal.name}</span>
            </h1>
            <div className="text-xl sm:text-3xl font-mono text-slate-300 h-10 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span>
              <span>{currentText}</span>
              <span className="w-2 h-6 bg-cyan-400 animate-blink inline-block"></span>
            </div>
          </div>

          {/* Bio statement */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {personal.bio}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("resume")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 font-semibold text-sm hover:border-cyan-500/40 hover:bg-slate-800/80 hover:text-white transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              View Resume
            </button>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/40 border border-white/5 text-slate-400 text-sm font-mono hover:text-slate-200 transition-all"
              title="Copy Email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span>{personal.email}</span>
            </button>
          </div>

          {/* Metrics & Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-white/10">
            {/* 1. Fresher Card */}
            <div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                Fresher
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                Aspiring Cloud & AI Engineer
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                Open to Immediate Roles
              </div>
            </div>

            {/* 2. AWS Certified Cloud Practitioner Badge Card */}
            <div className="glass-panel p-4 rounded-xl flex items-center gap-3.5 border border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-400 transition-all group">
              <img
                src="/aws-cloud-practitioner.png"
                alt="AWS Certified Cloud Practitioner"
                className="w-12 h-12 object-contain shrink-0 group-hover:scale-110 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  AWS Certified
                </div>
                <div className="text-xs font-bold text-white leading-snug mt-0.5">
                  Cloud Practitioner
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Foundational Verified
                </div>
              </div>
            </div>

            {/* 3. Cloud Architecture Card */}
            <div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                12+
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                Cloud Architecture
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                AWS / Docker / CI/CD
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Terminal Preview */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-white/15 shadow-2xl">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                system_architect.ts
              </div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                STABLE v2.8
              </div>
            </div>

            {/* Code Body */}
            <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-1">
              <div>
                <span className="text-violet-400">interface</span>{" "}
                <span className="text-cyan-300">EngineerProfile</span> &#123;
              </div>
              <div>
                {" "}
                <span className="text-slate-400">name</span>:{" "}
                <span className="text-emerald-300">'Uday Kiran'</span>;
              </div>
              <div>
                {" "}
                <span className="text-slate-400">title</span>:{" "}
                <span className="text-emerald-300">
                  'Aspiring Cloud & AI Engineer'
                </span>
                ;
              </div>
              <div>
                {" "}
                <span className="text-slate-400">coreStack</span>: [
                <span className="text-emerald-300">'AWS'</span>,{" "}
                <span className="text-emerald-300">'Python'</span>,{" "}
                <span className="text-emerald-300">'Linux'</span>,{" "}
                <span className="text-emerald-300">'Docker'</span>];
              </div>
              <div>
                {" "}
                <span className="text-slate-400">certification</span>:{" "}
                <span className="text-emerald-300">'AWS Cloud Practitioner'</span>;
              </div>
              <div>
                {" "}
                <span className="text-slate-400">availability</span>:{" "}
                <span className="text-emerald-300">'Immediate'</span>;
              </div>
              <div>&#125;</div>
              <div className="pt-2">
                <span className="text-violet-400">async function</span>{" "}
                <span className="text-cyan-300">deploySystem</span>():{" "}
                <span className="text-yellow-300">Promise</span>&lt;
                <span className="text-cyan-300">Status</span>&gt; &#123;
              </div>
              <div>
                {" "}
                <span className="text-violet-400">const</span> metrics ={" "}
                <span className="text-violet-400">await</span> telemetry.
                <span className="text-cyan-300">fetchHealth</span>();
              </div>
              <div>
                {" "}
                <span className="text-violet-400">if</span> (metrics.latencyP99
                &lt; <span className="text-cyan-400">25</span>) &#123;
              </div>
              <div>
                {" "}
                <span className="text-slate-500">
                  // 99.99% operational uptime
                </span>
              </div>
              <div>
                {" "}
                <span className="text-violet-400">return</span> &#123; status:{" "}
                <span className="text-emerald-300">'OPTIMAL'</span>, uptime:{" "}
                <span className="text-cyan-400">0.9999</span> &#125;;
              </div>
              <div> &#125;</div>
              <div>&#125;</div>
            </pre>

            {/* Glowing Accent Badge */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Zero Downtime Architecture</span>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                99.99% Latency SLI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
