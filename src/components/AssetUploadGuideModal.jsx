import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Upload, 
  FileText, 
  Image as ImageIcon, 
  Folder, 
  Check, 
  Copy, 
  Sparkles, 
  Terminal, 
  Info,
  CheckCircle2
} from 'lucide-react';

export default function AssetUploadGuideModal({ 
  isOpen, 
  onClose, 
  userPhotos, 
  setUserPhotos,
  onCvParsed 
}) {
  const [copiedPath, setCopiedPath] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  if (!isOpen) return null;

  const folderPath = "c:\\Users\\saopa\\Desktop\\Portfolio Website\\public\\assets";

  const handleCopyPath = () => {
    navigator.clipboard.writeText(folderPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  const handleFileChange = (e, targetKey) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserPhotos(prev => ({
        ...prev,
        [targetKey]: url
      }));
      setUploadSuccess(`Loaded ${file.name} for ${targetKey}!`);
      setTimeout(() => setUploadSuccess(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-slate-700 p-6 sm:p-8 bg-slate-950/95 space-y-6 shadow-2xl relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                How to Provide Your CV & 2 Pictures
              </h3>
              <p className="text-xs text-slate-400">
                You can use any of the simple options below
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {uploadSuccess && (
          <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{uploadSuccess}</span>
          </div>
        )}

        {/* Option 1: Send in Chat */}
        <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-3">
          <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm">
            <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs">1</span>
            <span>Option A: Simply Paste / Attach in Chat (Easiest)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            • <strong>For your CV:</strong> Copy and paste the text of your CV directly into our chat, or share its contents! I will immediately parse your education, experience, skills, and projects into the website code.<br/>
            • <strong>For your 2 Pictures:</strong> Drag and drop the image files into our chat or into the project folder.
          </p>
        </div>

        {/* Option 2: Place Directly in Folder */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
            <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-xs">2</span>
            <span>Option B: Drop files into your project folder</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Save your files into the <code className="text-cyan-300 font-mono">public/assets</code> folder in this project:
          </p>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
            <Folder className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate flex-1">{folderPath}</span>
            <button
              onClick={handleCopyPath}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors flex items-center gap-1"
            >
              {copiedPath ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPath ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <div className="text-[11px] font-mono text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            <div className="p-2 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-cyan-400">photo1.jpg</span> (Picture 1)
            </div>
            <div className="p-2 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-cyan-400">photo2.jpg</span> (Picture 2)
            </div>
            <div className="p-2 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-cyan-400">cv.pdf</span> (Your CV)
            </div>
          </div>
        </div>

        {/* Option 3: Instant Live Preview Picker */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
            <span className="w-5 h-5 rounded-full bg-cyan-600/30 text-cyan-400 flex items-center justify-center text-xs">3</span>
            <span>Option C: Live Browser File Selector</span>
          </div>
          <p className="text-xs text-slate-300">
            Pick images directly from your computer right now to preview how they look immediately:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            
            {/* Picture 1 Picker */}
            <label className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex flex-col items-center justify-center text-center group transition-colors">
              <ImageIcon className="w-5 h-5 text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-200">Picture 1</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                {userPhotos.photo1 ? "Selected ✓" : "Browse file"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'photo1')}
              />
            </label>

            {/* Picture 2 Picker */}
            <label className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 cursor-pointer flex flex-col items-center justify-center text-center group transition-colors">
              <ImageIcon className="w-5 h-5 text-indigo-400 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-200">Picture 2</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                {userPhotos.photo2 ? "Selected ✓" : "Browse file"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'photo2')}
              />
            </label>

            {/* Memoji Picker */}
            <label className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex flex-col items-center justify-center text-center group transition-colors">
              <Sparkles className="w-5 h-5 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-200">Custom Memoji</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                {userPhotos.memoji ? "Custom ✓" : "Default animated"}
              </span>
              <input
                type="file"
                accept="image/*,video/mp4"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'memoji')}
              />
            </label>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-600/30 transition-all"
          >
            Got It! Return to Site
          </button>
        </div>

      </motion.div>
    </div>
  );
}
