import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function MemojiAvatar({ customImage, onAvatarClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState("Hi! I'm Anthony — welcome to my digital workspace 👋");
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [use3DModel, setUse3DModel] = useState(true);
  const containerRef = useRef(null);

  // Auto-hide bubble after initial delay, reappear on click
  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbleVisible(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width * 1.2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height * 1.2)));
    setMousePos({ x: dx * 14, y: dy * 12 });
  };

  const handleAvatarTap = () => {
    const greetings = [
      "Welcome to my portfolio! 🚀",
      "Building AI models for disease forecasting 🩺",
      "M.Eng AI Systems Engineering @ Concordia University 🇨🇦",
      "Check out my work at Nottingham & Smart Zambia 💻",
      "Explore my projects tab or download my verified CV 📄"
    ];
    const nextGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setSpeechBubble(nextGreeting);
    setBubbleVisible(true);
    if (onAvatarClick) onAvatarClick();
  };

  // Image to use for 3D animated avatar
  const avatarImageSrc = customImage || '/assets/memoji_3d.jpg';

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative flex flex-col items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {bubbleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-16 z-30 px-4 py-2 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-xs sm:text-sm font-medium text-cyan-200 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl flex items-center gap-2 cursor-pointer hover:border-cyan-300 transition-colors"
            onClick={() => setBubbleVisible(false)}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
            <span>{speechBubble}</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-900/95" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Holographic Glowing Rings & Backdrop Aura */}
      <div 
        className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 flex items-center justify-center cursor-pointer"
        onClick={handleAvatarTap}
      >
        {/* Ambient Glowing Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/35 via-cyan-500/25 to-purple-600/30 blur-2xl animate-pulse-slow pointer-events-none" />
        
        {/* Rotating Tech Circuit Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1 rounded-full border border-dashed border-cyan-500/40 pointer-events-none"
        />
        
        {/* Inner Counter-Rotating Orbit with Tech Dots */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dotted border-blue-400/40 pointer-events-none"
        />

        {/* Floating tech status badge */}
        <motion.div 
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-2 z-20 px-2.5 py-1 rounded-full bg-slate-900/95 border border-emerald-500/50 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 backdrop-blur-md shadow-lg shadow-emerald-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>Active · M.Eng AI</span>
        </motion.div>

        <motion.div 
          animate={{ y: [3, -5, 3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-2 z-20 px-2.5 py-1 rounded-full bg-slate-900/95 border border-cyan-500/50 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 backdrop-blur-md shadow-lg shadow-cyan-500/20"
        >
          <Code2 className="w-3 h-3 text-cyan-400" />
          <span>Healthcare ML & React</span>
        </motion.div>

        {/* 3D Animated Card Frame with Real-Time Parallax Tilt */}
        <motion.div
          animate={{
            rotateY: mousePos.x * 1.4,
            rotateX: -mousePos.y * 1.4,
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4,
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-b from-slate-800 via-slate-950 to-[#070a10] border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 flex items-center justify-center p-1.5 group"
        >
          {/* The 3D Animated Memoji Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <motion.img 
              src={avatarImageSrc} 
              alt="Anthony Saopa Phiri · 3D Animated Memoji" 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Dynamic 3D Specular Light Sheen overlay */}
            <motion.div 
              className="absolute inset-0 rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
              style={{
                background: `radial-gradient(circle at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%, rgba(255,255,255,0.4) 0%, rgba(56,189,248,0.2) 30%, transparent 70%)`
              }}
            />

            {/* Ambient vignette */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-cyan-400/30 pointer-events-none" />
          </div>

          {/* Interactive touch indicator on hover */}
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full pointer-events-none flex items-center justify-center">
            <span className="text-[10px] text-cyan-200 font-mono tracking-wider bg-slate-900/90 px-2.5 py-1 rounded-full border border-cyan-400/50 shadow-lg">
              Click Anthony 👋
            </span>
          </div>
        </motion.div>
      </div>

      {/* Caption indicator */}
      <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-300">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>3D Animated Memoji · Live Parallax & Speech</span>
      </div>
    </div>
  );
}
