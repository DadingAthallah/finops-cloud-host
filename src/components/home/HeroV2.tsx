import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const HeroV2 = () => {
  useEffect(() => {
    let intervalId: any;
    
    // Safety check container to prevent double canvas injection
    const container = document.querySelector('[data-us-project="XANMAMpW5QsZ4jhJQ8cS"]');
    
    const tryInit = () => {
      // @ts-ignore
      if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
        // Only initialize if there are NO child nodes (i.e. canvases) yet.
        if (container && container.childNodes.length === 0) {
          // @ts-ignore
          window.UnicornStudio.init();
        }
        clearInterval(intervalId);
      }
    };
    
    tryInit();
    intervalId = setInterval(tryInit, 200);
    
    // Stop checking after 5s to avoid infinite polling
    setTimeout(() => clearInterval(intervalId), 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] min-h-[85vh] flex flex-col justify-center font-sans">
      {/* Unicorn Studio Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-100">
        <div className="w-[100vw] h-[100vh]" data-us-project="XANMAMpW5QsZ4jhJQ8cS"></div>
        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
        
        {/* Left Column: Copy & CTA */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              Master your <br/>
              cloud spend
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed">
              Achieve 30-50% savings on AWS, GCP, and Azure with zero engineering downtime. Real-time accountability, beautifully visualized.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" className="text-base px-8 py-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] transition-all bg-blue-600 hover:bg-blue-500 border border-blue-400/30">
                Start Free Trial
              </Button>
              <Button variant="outline" className="text-base px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white transition-all shadow-sm">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: iOS 26 Glassmorphism Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl mx-auto lg:mr-0"
        >
          {/* Ambient Glow behind the glass */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Glass Panel */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-[60px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden flex flex-col p-6 sm:p-8">
            
            {/* Context/Header of glass panel */}
            <div className="flex justify-between items-start mb-8 z-10">
              <div>
                <h3 className="text-white/90 font-medium text-lg tracking-tight mb-1">Total Cloud Costs</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-white tracking-tighter">$124,830</span>
                  <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">-12.4% MTD</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Custom SVG Intersecting Line Chart */}
            <div className="flex-1 w-full relative z-10 min-h-0 mt-4 mb-2">
              <svg 
                viewBox="0 0 400 200" 
                className="w-full h-full overflow-visible drop-shadow-xl"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Glow Filters */}
                  <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Area Gradients */}
                  <linearGradient id="area-blue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  
                  {/* Line Gradients */}
                  <linearGradient id="line-purple" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                  <linearGradient id="line-emerald" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>

                {/* Grid Lines (subtle) */}
                <path d="M0 50 L400 50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M0 100 L400 100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M0 150 L400 150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Series 1: Area Fill underneath (Blue) */}
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  d="M0 150 C 100 150, 150 80, 250 100 C 320 110, 350 40, 400 40 L400 200 L0 200 Z"
                  fill="url(#area-blue)"
                />

                {/* Series 1: Primary (Blue) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  d="M0 150 C 100 150, 150 80, 250 100 C 320 110, 350 40, 400 40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3.5"
                  filter="url(#glow-blue)"
                  strokeLinecap="round"
                />

                {/* Series 2: Secondary (Purple) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                  d="M0 60 C 80 60, 160 140, 240 130 C 320 120, 350 60, 400 80"
                  fill="none"
                  stroke="url(#line-purple)"
                  strokeWidth="3.5"
                  filter="url(#glow-purple)"
                  strokeLinecap="round"
                />

                {/* Series 3: Tertiary (Emerald) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
                  d="M0 110 C 80 130, 140 70, 200 80 C 280 90, 320 150, 400 140"
                  fill="none"
                  stroke="url(#line-emerald)"
                  strokeWidth="3"
                  filter="url(#glow-emerald)"
                  strokeLinecap="round"
                />

                {/* Vertical Hover Reference Line (Decorative) */}
                <motion.line
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5 }}
                  x1="280" y1="20" x2="280" y2="180"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <motion.circle 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.6, type: "spring" }}
                  cx="280" cy="106" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2"
                  className="drop-shadow-lg"
                />

              </svg>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center space-x-6 pt-5 border-t border-white/5 z-10 shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="text-xs font-medium text-neutral-300">AWS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                <span className="text-xs font-medium text-neutral-300">GCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 border-2 border-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-xs font-medium text-neutral-300">Azure</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
