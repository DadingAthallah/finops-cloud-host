import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Connect Account',
    description: 'Securely link your cloud billing accounts via read-only IAM roles. Works with AWS, GCP, and Azure.'
  },
  {
    title: 'Analyze Clusters',
    description: 'Our proprietary engine classifies spend into micro-services, teams, and environments automatically.'
  },
  {
    title: 'Start Saving',
    description: 'Implement automated right-sizing and commitment strategies to cut your bill by up to 50%.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#101010] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Efficiency in three steps.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            No complex setup. No agent installation. No code changes required.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/5 rounded-3xl bg-white/[0.01] flex flex-col md:flex-row relative z-10 mt-12 transition-colors hover:border-white/10"
        >
          {steps.map((step, i) => (
            <div 
              key={i}
              className={`flex-1 p-10 lg:p-14 relative flex flex-col justify-center max-w-sm mx-auto md:max-w-none w-full ${
                i !== steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''
              }`}
            >
              {i !== steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#101010] border border-white/10 rounded-full items-center justify-center z-20 group cursor-default">
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed md:pr-4">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
