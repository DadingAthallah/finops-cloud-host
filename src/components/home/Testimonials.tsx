import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Trusted by engineering leaders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors group cursor-pointer shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-bold font-mono text-white tracking-tighter">$420k</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-[13px] text-slate-400 mb-8 font-medium">annualized savings found in unattached EC2 volumes</p>
            <div className="text-sm font-bold text-white tracking-tight">Fintech Startup</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors group cursor-pointer shadow-xl">
             <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-bold font-mono text-white tracking-tighter">45 min</span>
               <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-[13px] text-slate-400 mb-8 font-medium">mean time to resolve cost anomalies vs 3 days previously</p>
            <div className="text-sm font-bold text-white tracking-tight italic">E-Commerce Platform</div>
          </motion.div>

           {/* Card 3 (Text quote) */}
          <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl row-span-2 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.02] rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-[0.05] transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-800"></div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">Sarah Jenkins</div>
                  <div className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">VP of Engineering</div>
                </div>
              </div>
              <p className="text-slate-300 text-[15px] leading-relaxed mb-8 font-medium">
                "Before CostPilot, our finance team would complain about cloud bills weeks after the damage was done. Now, we get Slack alerts the moment an idle instance is spun up and forgotten. It completely changed our engineering culture."
              </p>
            </div>
            <div className="text-sm font-bold text-white tracking-tight relative z-10">Acme Corp</div>
          </motion.div>

          {/* Card 4 */}
          <motion.div whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors group cursor-pointer shadow-xl">
             <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-bold font-mono text-white tracking-tighter">100%</span>
               <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-[13px] text-slate-400 mb-8 font-medium">spend visibility mapped directly to product teams</p>
            <div className="text-sm font-bold text-white tracking-tight">SaaS Provider</div>
          </motion.div>

          {/* Card 5 */}
          <motion.div whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors group cursor-pointer shadow-xl">
             <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-bold font-mono text-white tracking-tighter">0</span>
               <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-[13px] text-slate-400 mb-8 font-medium">end-of-month budget surprises in Q3</p>
            <div className="text-sm font-bold text-white tracking-tight">Data Analytics Co.</div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};
