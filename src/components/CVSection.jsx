import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  UploadCloud,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Users,
  UserCheck
} from 'lucide-react';

export default function CVSection({ cv, profile, onOpenUploadModal }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE // VERIFIED PROFILE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Curriculum Vitae
          </h1>
          
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified academic credentials, engineering competencies, and professional references for Anthony Saopa Phiri.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Export / Print PDF</span>
          </button>
        </div>
      </div>

      {/* Main CV Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Contact Info Header Bar */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {profile.name}
            </h2>
            <p className="text-xs font-mono text-cyan-400 mt-0.5">
              {profile.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <a href={`mailto:${profile.socialLinks.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.socialLinks.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.socialLinks.phone}</span>
            </span>
            <a 
              href={profile.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{profile.location}</span>
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Summary</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {cv.summary}
          </p>
        </div>

        {/* Education & Academic Foundation */}
        <div className="space-y-5">
          <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </h2>

          <div className="space-y-4">
            {cv.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div>
                  <div className="text-base font-bold text-white">
                    {edu.degree}
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mt-0.5">
                    {edu.school} · <span className="text-slate-400 font-normal">{edu.location}</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-2 max-w-xl leading-relaxed">
                    {edu.details}
                  </div>
                </div>

                <div className="text-xs font-mono text-cyan-300 px-3 py-1 rounded bg-slate-950 border border-slate-800 self-start sm:self-auto shrink-0">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies Matrix */}
        <div className="space-y-5">
          <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cv.skillsCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3"
              >
                <div className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[10px] font-mono text-slate-500">{cat.items.length} skills</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular & Leadership */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase text-indigo-400 tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Leadership & Extra-Curricular Activities</span>
          </h2>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">President of The African Society</h3>
                <p className="text-xs text-blue-400 font-medium">University of Nottingham Malaysia · Semenyih, Selangor</p>
              </div>
              <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded bg-slate-950 border border-slate-800 self-start sm:self-auto">
                Sept 2024 — April 2025
              </span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Set clear and attainable goals to ensure the society remains proactive and accomplishes aims for its members.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Acted as the society's chairperson, serving as the mediator and arbitrator of student grievances.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Achieved record membership count of <strong>90 registered members</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Established the first-ever Junior Committee to develop future executive student leaders.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional & Academic References */}
        {cv.references && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>Academic & Professional References</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cv.references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1"
                >
                  <div className="text-sm font-bold text-white">{ref.name}</div>
                  <div className="text-xs text-blue-400 font-medium">{ref.title}</div>
                  <div className="text-xs text-slate-400">{ref.institution}</div>
                  <div className="text-[11px] font-mono text-cyan-300 pt-1">
                    <a href={`mailto:${ref.email}`} className="hover:underline">{ref.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
