import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, Tag, ArrowRight, X, Sparkles } from 'lucide-react';

export default function BlogSection({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
          <BookOpen className="w-3.5 h-3.5" />
          <span>TECHNICAL LOGS // THOUGHT LEADERSHIP</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Engineering Blog & Insights
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Deep-dives into systems engineering, machine learning pipelines, and modern reactive frontends.
          </p>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles or tags..."
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-xs text-slate-200 outline-none w-full sm:w-64 font-mono transition-colors"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            onClick={() => setSelectedPost(post)}
            className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:bg-slate-900/50"
          >
            <div className="space-y-4">
              
              {/* Meta info */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
              <span>Read Deep Dive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

          </motion.article>
        ))}
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel border border-slate-700 p-6 sm:p-8 bg-slate-950/95 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 text-sm text-blue-200">
                  {selectedPost.summary}
                </div>

                <div className="text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed pt-2">
                  <p>{selectedPost.snippet}</p>
                  <p className="text-slate-400">
                    High throughput and optimal concurrency require continuous re-evaluation of assumptions. By decoupling scheduling layers and measuring token distributions with OpenTelemetry spans, latency anomalies drop significantly across distributed cluster environments.
                  </p>
                  <p className="text-slate-400">
                    Stay tuned for the full architectural teardown and GitHub code walkthrough repository in the next update.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
