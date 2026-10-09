import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Cloud, 
  Glasses, 
  ArrowRight, 
  FileText, 
  Terminal, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Camera,
  Upload,
  CheckCircle2,
  Activity,
  Code
} from 'lucide-react';
import MemojiAvatar from './MemojiAvatar';

const iconMap = {
  Cpu,
  Sparkles,
  Layers,
  Cloud,
  Glasses
};

export default function HomeSection({ 
  profile, 
  setActiveTab, 
  userPhotos, 
  onPhotoUpload,
  onOpenUploadModal 
}) {
  const [activeInterest, setActiveInterest] = useState(0);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Hero Section */}
      <section className="relative">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brief Overview & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* High-Tech Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-600">
                {profile.status.text}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 font-mono">
                  {profile.title}
                </span>
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {profile.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setActiveTab('projects')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/20 transition-all flex items-center gap-2 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('cv')}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-slate-900 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>View Full CV</span>
              </button>

              {/* Social links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a 
                  href={profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${profile.socialLinks.email}`}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Memoji Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-8 rounded-3xl glass-panel border border-slate-200/80 w-full max-w-md flex flex-col items-center shadow-xl">
              
              {/* Corner decorative markers */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-500/60">SYS // 01</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400">INTERACTIVE</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-400">60 FPS</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-500/60">RENDER // ON</div>

              {/* Animated Memoji */}
              <MemojiAvatar 
                customImage={userPhotos?.memoji || null}
                onAvatarClick={() => {}}
              />

              {/* Status info bar */}
              <div className="w-full mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-500" />
                  Focus: Low Latency
                </span>
                <span className="text-cyan-600 hover:underline cursor-pointer" onClick={onOpenUploadModal}>
                  [Upload Memoji]
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interests & Engineering Disciplines */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Engineering Interests & Domains
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Architecting robust systems that unite high-throughput reliability with reactive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.interests.map((interest, idx) => {
            const IconComponent = iconMap[interest.icon] || Sparkles;
            const isSelected = activeInterest === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => setActiveInterest(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected 
                    ? 'glass-panel-glow border-cyan-500/40' 
                    : 'glass-panel hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-cyan-600">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-1">
                  {interest.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Picture Gallery Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              In Focus: Life & Engineering
            </h2>
          </div>
          <button 
            onClick={onOpenUploadModal}
            className="text-xs font-mono text-cyan-600 hover:text-cyan-700 flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-400 transition-colors shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Update / Add Your 2 Pictures</span>
          </button>
        </div>

        {/* 2 High-Tech Picture Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Photo 1 Card */}
          <div className="relative group rounded-2xl overflow-hidden glass-panel border border-slate-200 hover:border-cyan-400/60 transition-all duration-500 p-3 shadow-sm">
            <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-white to-indigo-50 flex flex-col items-center justify-center text-center p-6">
              {userPhotos?.photo1 ? (
                <img 
                  src={userPhotos.photo1} 
                  alt="User Featured Photo 1" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-500 shadow-inner">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-700">
                      Picture 1: Professional Portrait / Workspace
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mt-1">
                      Ready to display your first photo. Place it in the folder or upload via the top button.
                    </p>
                  </div>
                  <button
                    onClick={onOpenUploadModal}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 border border-blue-200 text-blue-600 text-xs font-mono transition-colors"
                  >
                    Select Picture 1
                  </button>
                </div>
              )}

              {/* Corner tech bracket */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/80 backdrop-blur-md text-[10px] font-mono text-cyan-600 border border-cyan-300/60">
                FRAME_01 // PORTRAIT
              </div>
            </div>

            <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-slate-700">{profile.pictures.photo1.caption}</span>
              <span className="font-mono text-[11px] text-slate-400">RAW // 4K HIGH DENSITY</span>
            </div>
          </div>

          {/* Photo 2 Card */}
          <div className="relative group rounded-2xl overflow-hidden glass-panel border border-slate-200 hover:border-indigo-400/60 transition-all duration-500 p-3 shadow-sm">
            <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-white to-purple-50 flex flex-col items-center justify-center text-center p-6">
              {userPhotos?.photo2 ? (
                <img 
                  src={userPhotos.photo2} 
                  alt="User Featured Photo 2" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-500 shadow-inner">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-700">
                      Picture 2: Tech Talk / Creative Snapshot
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mt-1">
                      Ready to display your second photo. Supports JPG, PNG, WebP or high-res capture.
                    </p>
                  </div>
                  <button
                    onClick={onOpenUploadModal}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 border border-indigo-200 text-indigo-600 text-xs font-mono transition-colors"
                  >
                    Select Picture 2
                  </button>
                </div>
              )}

              {/* Corner tech bracket */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/80 backdrop-blur-md text-[10px] font-mono text-indigo-500 border border-indigo-300/60">
                FRAME_02 // ACTION
              </div>
            </div>

            <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-slate-700">{profile.pictures.photo2.caption}</span>
              <span className="font-mono text-[11px] text-slate-400">CAPTURE // AMBIENT</span>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Navigation Teaser Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        
        <div 
          onClick={() => setActiveTab('projects')}
          className="p-6 rounded-2xl glass-panel border border-slate-200 hover:border-blue-400/60 hover:bg-blue-50/40 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between text-blue-500 mb-2">
            <span className="text-xs font-mono">EXPLORE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            Projects Portfolio →
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Production systems, streaming LLM engines, and accessible design libraries.
          </p>
        </div>

        <div 
          onClick={() => setActiveTab('experience')}
          className="p-6 rounded-2xl glass-panel border border-slate-200 hover:border-indigo-400/60 hover:bg-indigo-50/40 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between text-indigo-500 mb-2">
            <span className="text-xs font-mono">CAREER</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
            Work Experience →
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Timeline of roles, team leadership, architecture metrics, and scaled systems.
          </p>
        </div>

        <div 
          onClick={() => setActiveTab('now')}
          className="p-6 rounded-2xl glass-panel border border-slate-200 hover:border-cyan-400/60 hover:bg-cyan-50/40 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between text-cyan-600 mb-2">
            <span className="text-xs font-mono">REAL-TIME</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
            What I'm Doing Now →
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Current explorations, latest papers read, active tech stacks, and experiments.
          </p>
        </div>

      </section>

    </div>
  );
}
