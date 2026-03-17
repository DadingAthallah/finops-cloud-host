import { motion } from 'framer-motion';
import { Cloud, Zap, Database, BarChart } from 'lucide-react';

export const PlatformOverview = () => {
  return (
    <section className="py-24 bg-[#101010] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unify your cloud fleet into a single source of truth.
            </h2>
            <p className="text-neutral-400 text-lg mb-[64px]">
              CostPilot sits between your infrastructure and your budget, providing a high-fidelity lens into every dollar spent across AWS, GCP, and Azure.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Database, title: 'Multi-Cloud Ingestion', desc: 'Real-time data fetching from all major cloud providers.' },
                { icon: Zap, title: 'Instant Processing', desc: 'Transforming raw billing files into actionable insights in seconds.' },
                { icon: BarChart, title: 'Unified Dashboard', desc: 'A singular pane of glass for engineering and finance teams.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-neutral-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Architectural Diagram Mockup */}
            <div className="aspect-square rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex items-center justify-center overflow-hidden">
                {/* Network Diagram */}
                <div className="w-full flex flex-col items-center relative z-10 w-full max-w-md mx-auto">
                  
                  {/* Top Row: Cloud Providers */}
                  <div className="grid grid-cols-3 gap-4 w-full relative z-20">
                    {['AWS', 'Azure', 'GCP'].map((cloud) => (
                      <div key={cloud} className="bg-[#101010] border border-white/10 p-4 rounded-2xl text-center shadow-lg transform transition hover:scale-105 hover:border-brand-blue/30 flex flex-col items-center">
                        <Cloud className="w-6 h-6 text-brand-blue/70 mb-2" />
                        <span className="text-[11px] font-bold tracking-widest text-neutral-300">{cloud}</span>
                      </div>
                    ))}
                  </div>

                  {/* Top Piping (Connecting AWS/Azure/GCP to C) */}
                  <div className="w-full h-16 relative z-10 -my-2 flex justify-center">
                    {/* Left Pipe: From AWS to Center */}
                    <div className="absolute top-0 left-[16.66%] w-[33.34%] h-[60%] border-l-2 border-b-2 border-brand-blue/40 rounded-bl-xl shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
                    {/* Right Pipe: From GCP to Center */}
                    <div className="absolute top-0 right-[16.66%] w-[33.34%] h-[60%] border-r-2 border-b-2 border-brand-blue/40 rounded-br-xl shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
                    {/* Center Pipe: From Azure down directly to C */}
                    <div className="absolute top-0 left-[50%] -ml-[1px] w-[2px] h-full bg-brand-blue/40 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    
                    {/* Data Flow Dot (Center) */}
                    <motion.div 
                       initial={{ opacity: 0, top: 0 }}
                       animate={{ opacity: [0, 1, 0], top: '80%' }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                       className="absolute left-[50%] -ml-[3px] w-1.5 h-6 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"
                    ></motion.div>
                  </div>

                  {/* Central Hub */}
                  <div className="flex justify-center relative z-30 my-2">
                    <div className="w-24 h-24 rounded-3xl bg-brand-blue flex items-center justify-center shadow-[0_0_60px_-10px_rgba(37,99,235,0.8)] relative border-2 border-cyan-300 overflow-hidden">
                      <span className="text-black font-extrabold text-4xl tracking-tighter relative z-10">C</span>
                      <div className="absolute inset-0 rounded-3xl border-4 border-cyan-400/50 animate-ping z-0" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-3xl z-10"></div>
                    </div>
                  </div>

                  {/* Bottom Piping (Connecting C to Dashboards/Reports) */}
                  <div className="w-full h-16 relative z-10 -my-2 flex justify-center">
                    {/* Main trunk going down from C */}
                    <div className="absolute top-0 left-[50%] -ml-[1px] w-[2px] h-[50%] bg-brand-blue/40 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                    
                    {/* Split left to Dashboards */}
                    <div className="absolute bottom-0 left-[25%] w-[25%] h-[50%] border-l-2 border-t-2 border-brand-blue/40 rounded-tl-xl shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
                    {/* Split right to Reports */}
                    <div className="absolute bottom-0 right-[25%] w-[25%] h-[50%] border-r-2 border-t-2 border-brand-blue/40 rounded-tr-xl shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
                    
                    {/* Pulse at the split */}
                    <motion.div 
                       initial={{ opacity: 0.3, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1.2 }}
                       transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                       className="absolute top-[50%] left-[50%] -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"
                    ></motion.div>
                  </div>

                  {/* Bottom Row: Outcomes */}
                  <div className="grid grid-cols-2 gap-4 w-full relative z-20">
                    {['Dashboards', 'Reports'].map((outcome) => (
                      <div key={outcome} className="bg-[#101010] border border-white/10 p-5 rounded-2xl text-center shadow-lg transform transition hover:scale-105 hover:border-brand-blue/30 flex flex-col items-center">
                        <BarChart className="w-6 h-6 text-brand-blue/70 mb-3" />
                        <span className="text-[12px] font-bold tracking-widest text-neutral-300">{outcome}</span>
                      </div>
                    ))}
                  </div>

                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
