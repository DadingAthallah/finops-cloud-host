import { motion } from 'framer-motion';
import { Code, LineChart, ShieldCheck } from 'lucide-react';

const cases = [
  {
    icon: Code,
    title: 'Engineering Teams',
    description: 'Get real-time feedback on the cost impact of your code. No more "who left the GPU running?" messages in Slack.',
    benefits: ['Service-level granularity', 'Instant anomaly alerts', 'Right-sizing suggestions']
  },
  {
    icon: LineChart,
    title: 'Finance & FinOps',
    description: 'Eliminate end-of-month surprises. Predict future spend with 95% accuracy and automate unit-cost reporting.',
    benefits: ['Budget forecasting', 'Automated chargebacks', 'Unit-cost analysis']
  },
  {
    icon: ShieldCheck,
    title: 'Leadership',
    description: 'Full visibility across fragmented cloud providers. Align engineering spend with business value effortlessly.',
    benefits: ['Executive dashboards', 'Investment ROI tracking', 'Strategic planning']
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-[#101010] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for the whole team.
            </h2>
            <p className="text-slate-400 max-w-2xl">
              CostPilot brings accountability and visibility to every role, ensuring cloud cost is everyone's responsibility but no one's burden.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="h-full p-8 rounded-[calc(1rem-1px)] bg-[#101010] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-mono uppercase tracking-tight">{useCase.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center text-xs text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
