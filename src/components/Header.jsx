import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Briefcase, 
  FileText, 
  Clock, 
  BookOpen, 
  Home, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenUploadModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'cv', label: 'CV', icon: FileText },
    { id: 'now', label: "What I'm Doing Now", icon: Clock },
    { id: 'blog', label: 'Blog', icon: BookOpen },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl p-1.5 sm:p-2 shadow-2xl shadow-black/40 border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl w-full">
          
          {/* Desktop Navigation Tabs - Filling entire header */}
          <nav className="hidden lg:grid lg:grid-cols-6 gap-2 w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative py-2.5 px-3 text-xs xl:text-sm font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 w-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/25"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 shrink-0 ${isActive ? 'text-cyan-200' : 'text-slate-400'}`} />
                  <span className="relative z-10 tracking-tight truncate">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Bar */}
          <div className="flex lg:hidden items-center justify-between px-2 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {tabs.find((t) => t.id === activeTab)?.label || 'Menu'}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="lg:hidden mt-2 p-3 rounded-2xl glass-panel border border-slate-800/90 shadow-2xl bg-slate-950/95"
            >
              <div className="flex flex-col gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-cyan-300" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
