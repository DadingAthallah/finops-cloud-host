import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-brand-blue -z-10 bg-opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 rotate-12"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#101010] border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              Ready to take control?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1]">
              Stop overpaying your cloud <br className="hidden md:block" />
              provider today.
            </h2>
            
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              Joint 500+ high-growth companies using CostPilot to regain spend accountability and focus on building, not billing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="text-base px-10 py-4 w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)]">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-base px-10 py-4 w-full sm:w-auto border border-white/10 hover:bg-white/5">
                Book a Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-neutral-500 text-xs font-medium uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> 14-Day Free Trial
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
