import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      desc: 'For small teams getting started',
      price: '$49',
      period: 'per month',
      features: ['1 cloud account', '3 users', '30-day history', 'Email alerts', 'Basic cost explorer'],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Growth',
      desc: 'For scaling engineering teams',
      price: '$199',
      period: 'per month',
      features: ['Everything in Starter, plus:', '5 cloud accounts', '15 users', '1-year history', 'Slack & PagerDuty integration', 'Budget enforcement'],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      desc: 'For large complex cloud footprints',
      price: 'Custom',
      period: 'annually',
      features: ['Everything in Growth, plus:', 'Unlimited accounts & users', 'SSO & advanced RBAC', 'Custom compliance reports', 'Dedicated CSM', 'Anomaly API access'],
      cta: 'Contact Sales',
      highlighted: false,
    }
  ];

  return (
    <section className="py-24 bg-[#101010] border-b border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Transparent Pricing</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto tracking-tight">Start tracking and optimizing your cloud spend today. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${
                plan.highlighted 
                ? 'bg-white/[0.02] border border-white/20 shadow-[0_0_50px_-15px_rgba(255,255,255,0.05)]' 
                : 'bg-[#101010] border border-white/5'
              }`}
            >
              {plan.highlighted && (
                <>
                  {/* Animated Border Beam */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl border border-white/10"></div>
                    <svg className="absolute inset-0 w-full h-full rounded-3xl" preserveAspectRatio="none">
                      <rect
                        width="100%"
                        height="100%"
                        rx="24"
                        fill="none"
                        stroke="url(#beam-gradient)"
                        strokeWidth="2"
                        className="animate-border-beam"
                        style={{
                          strokeDasharray: '200, 1000',
                        }}
                      />
                      <defs>
                        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="transparent" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="60%" stopColor="#60a5fa" />
                          <stop offset="70%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Shadow/Glow effect following the beam can be tricky with pure SVG, so we use a subtle glow on the whole border */}
                  </div>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                </>
              )}
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">{plan.desc}</p>
                </div>
                {plan.highlighted && (
                  <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-mono font-bold text-white tracking-tighter">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-sm font-medium text-slate-500 ml-2">{plan.period}</span>}
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-slate-600'}`} />
                      <span className={`text-[13px] font-medium tracking-tight ${i === 0 && feature.includes('Everything') ? 'text-white' : 'text-slate-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'} 
                className={`w-full py-3.5 font-bold ${plan.highlighted ? '' : 'border-white/10 hover:bg-white/5'}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Removed Certifications Badge */}
      </div>
    </section>
  );
};
