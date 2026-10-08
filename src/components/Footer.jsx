import React from 'react';
import { Terminal, Shield, Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ profile, setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-cyan-300 text-xs">
                  AP
                </div>
              </div>
              <span className="font-semibold text-slate-100 text-sm">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering high-scale digital platforms, intelligent agent workflows, and reactive web applications with uncompromising performance.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>P99: 14ms • ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-400">
              <button onClick={() => { setActiveTab('home'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                Home / Overview
              </button>
              <button onClick={() => { setActiveTab('projects'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                Projects
              </button>
              <button onClick={() => { setActiveTab('experience'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                Work Experience
              </button>
              <button onClick={() => { setActiveTab('cv'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                Curriculum Vitae
              </button>
              <button onClick={() => { setActiveTab('now'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                What I'm Doing Now
              </button>
              <button onClick={() => { setActiveTab('blog'); scrollToTop(); }} className="hover:text-cyan-300 text-left transition-colors">
                Engineering Blog
              </button>
            </div>
          </div>

          {/* Social / Connect */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-2 pt-1">
              <a 
                href={profile.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={profile.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${profile.socialLinks.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Encrypted channel • San Francisco, CA
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} • Crafted with React & Tailwind CSS
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
