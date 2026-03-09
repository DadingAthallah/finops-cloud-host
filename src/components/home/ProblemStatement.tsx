import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const ProblemStatement = () => {
  return (
    <section className="py-24 bg-[#101010] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Cloud costs are a black box. <br className="hidden md:block" />
            Until now.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Engineering teams move fast, but finance teams are left playing catch-up with surprise monthly bills. CostPilot bridges the gap.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <XCircle className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">The Old Way</h3>
            <ul className="space-y-4">
              {[
                'Monthly billing surprises',
                'Manual spreadsheet tracking',
                'Delayed anomaly detection',
                'Generic cloud provider dashboards',
                'Disconnected engineering & finance'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-400">
                  <XCircle className="w-5 h-5 text-red-500/50 mr-3 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With CostPilot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-8 relative overflow-hidden group shadow-[0_0_40px_-15px_rgba(37,99,235,0.3)]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 className="w-24 h-24 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">With CostPilot</h3>
            <ul className="space-y-4">
              {[
                'Real-time spend accountability',
                'Automated unit-cost tracking',
                'Instant anomaly alerts',
                'Deep internal visibility',
                'Unified FinOps workflow'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
