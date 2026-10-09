import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export default function WorkExperienceSection({ experience }) {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-xs font-mono text-indigo-600">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE // IMPACT LOG</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Work Experience
        </h1>
        
        <p className="text-slate-500 max-w-3xl text-base sm:text-lg">
          Track record of shipping mission-critical infrastructure, driving product velocity, and scaling engineering teams.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:border-cyan-500 group-hover:scale-125 transition-all shadow-md shadow-blue-300/40" />

            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200 hover:border-blue-400/50 transition-all duration-300 space-y-4 shadow-sm hover:shadow-md">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-base font-semibold text-blue-600 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 pt-2">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Footer */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400">Technologies:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
