import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Radio, Zap, BookOpen, Compass, Terminal, CheckCircle2 } from 'lucide-react';

export default function NowSection({ nowData }) {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>LIVE TELEMETRY // REAL-TIME NOW</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          What I'm Doing Now
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 text-sm sm:text-base">
          <p className="max-w-2xl">{nowData.subheadline}</p>
          <span className="sm:ml-auto text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
            Updated: {nowData.lastUpdated}
          </span>
        </div>
      </div>

      {/* Grid of Now Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nowData.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {section.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">ACTIVE</span>
              </div>

              <ul className="space-y-3 pt-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>STREAM // 2026.10</span>
              <span className="text-cyan-400/80 font-mono">STATUS: IN_PROGRESS</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Callout Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 text-center space-y-3">
        <h4 className="text-base font-semibold text-slate-200">
          The "/now" Movement
        </h4>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Inspired by Derek Sivers' public declaration pattern. This tab serves as a continuous contract with myself to focus on meaningful engineering frontiers rather than fleeting distractions.
        </p>
      </div>

    </div>
  );
}
