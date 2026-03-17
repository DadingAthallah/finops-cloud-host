import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does CostPilot differ from cloud provider native tools?",
    answer: "Cloud native tools like AWS Cost Explorer are great for basic analysis, but they often lack service-level granularity, struggle with multi-cloud environments, and have delayed reporting. CostPilot provides real-time data, automated anomaly detection, and unified views across all your clouds."
  },
  {
    question: "Does CostPilot require agent installation?",
    answer: "No. CostPilot is completely agentless. We connect to your infrastructure using secure, read-only IAM roles and read billing data via standard APIs. This means zero performance impact on your applications."
  },
  {
    question: "Is my billing data secure?",
    answer: "Absolutely. We are SOC 2 Type II compliant and use enterprise-grade encryption for all data. Furthermore, we only require read-only access to billing data—we can't change or delete your infrastructure."
  },
  {
    question: "Can I try CostPilot before committing?",
    answer: "Yes! We offer a 14-day free trial with full feature access. You can connect your accounts and see your potential savings in less than 15 minutes."
  },
  {
    question: "How accurate are the cost predictions?",
    answer: "Our machine learning models analyze your historical spend and current growth trajectories to provide forecasts with up to 95% accuracy for the next 30 days."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#101010] border-t border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Common questions.
          </motion.h2>
          <p className="text-neutral-400">
            Everything you need to know about CostPilot and FinOps.
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left transition-colors group"
              >
                <span className={`font-semibold text-base md:text-lg pr-8 transition-colors ${openIndex === i ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-brand-blue" />
                  ) : (
                    <Plus className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="pb-8 text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
