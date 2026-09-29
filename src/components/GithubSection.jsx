import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Star, GitFork, GitCommit, Users, BookOpen, ExternalLink, Calendar } from 'lucide-react';

export const GithubSection = () => {
  const { github } = PORTFOLIO_DATA;
  const [hoveredDay, setHoveredDay] = useState(null);

  // Generate 52 weeks x 7 days heatmap grid simulation
  const generateHeatmapDays = () => {
    const days = [];
    for (let i = 0; i < 364; i++) {
      // Create realistic commit count clusters
      const rand = Math.random();
      let count = 0;
      if (rand > 0.85) count = Math.floor(Math.random() * 8) + 6;
      else if (rand > 0.5) count = Math.floor(Math.random() * 5) + 1;
      else count = 0;
      days.push({ dayIndex: i, count });
    }
    return days;
  };

  const [heatmapDays] = useState(generateHeatmapDays);

  const getHeatmapColor = (count) => {
    if (count === 0) return 'bg-slate-900/60 border-white/5';
    if (count < 3) return 'bg-cyan-950 border-cyan-800/40 text-cyan-400';
    if (count < 6) return 'bg-cyan-700/60 border-cyan-500/50 text-cyan-200';
    return 'bg-cyan-400 border-cyan-300 text-slate-950 font-bold';
  };

  return (
    <section id="github" className="section-container">
      {/* Title */}
      <div className="section-title text-white">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Github className="w-5 h-5" />
        </div>
        05. GitHub Activity & Open Source
      </div>
      <p className="section-subtitle">
        Commit activity telemetry, open-source repository stats, and language distribution.
      </p>

      {/* GitHub Overview Dashboard Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
            <GitCommit className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-white font-mono">{github.totalCommits}</div>
            <div className="text-xs text-slate-400">Annual Commits</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-yellow-400">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-white font-mono">{github.starsEarned}</div>
            <div className="text-xs text-slate-400">Stars Earned</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-violet-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-white font-mono">{github.reposCount}</div>
            <div className="text-xs text-slate-400">Public Repos</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-white font-mono">{github.followers}</div>
            <div className="text-xs text-slate-400">Followers</div>
          </div>
        </div>
      </div>

      {/* Commit Activity Heatmap */}
      <div className="glass-panel p-6 rounded-2xl mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Calendar className="w-4 h-4 text-cyan-400" />
            2,840 Commits in the last 12 months
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Less</span>
            <span className="w-3 h-3 rounded bg-slate-900 border border-white/10"></span>
            <span className="w-3 h-3 rounded bg-cyan-950 border border-cyan-800"></span>
            <span className="w-3 h-3 rounded bg-cyan-700"></span>
            <span className="w-3 h-3 rounded bg-cyan-400"></span>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Matrix */}
        <div className="overflow-x-auto pb-2">
          <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[700px]">
            {heatmapDays.map((day) => (
              <div
                key={day.dayIndex}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                className={`w-3.5 h-3.5 rounded-[3px] border transition-transform hover:scale-125 ${getHeatmapColor(
                  day.count
                )}`}
                title={`${day.count} commits`}
              />
            ))}
          </div>
        </div>

        {hoveredDay && (
          <div className="text-xs font-mono text-cyan-300 mt-2">
            Day #{hoveredDay.dayIndex + 1}: <span className="font-bold">{hoveredDay.count} commits</span> recorded
          </div>
        )}
      </div>

      {/* Language Breakdown */}
      <div className="glass-panel p-6 rounded-2xl mb-8 space-y-4">
        <h4 className="text-sm font-bold text-white flex items-center justify-between">
          <span>Language Breakdown</span>
          <span className="text-xs font-mono text-slate-400">Primary Codebases</span>
        </h4>

        {/* Progress Bar Stack */}
        <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-900 border border-white/10">
          {github.topLanguages.map((lang, idx) => (
            <div
              key={idx}
              className="h-full transition-all"
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              title={`${lang.name}: ${lang.percentage}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 pt-2">
          {github.topLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
              <span>{lang.name}</span>
              <span className="text-slate-400 font-bold">{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Repos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {github.recentRepos.map((repo, idx) => (
          <a
            key={idx}
            href={`https://github.com/${github.username}/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 rounded-2xl glass-card-interactive flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white group-hover:text-cyan-300 transition-colors font-mono flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" />
                  {repo.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-slate-400 text-xs mb-4">
                {repo.desc}
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
              <span>{repo.language}</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                {repo.stars}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
