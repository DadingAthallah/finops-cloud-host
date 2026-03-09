import { motion } from 'framer-motion';
import { Cloud, Slack, Github, Terminal, Shield } from 'lucide-react';

const Ship = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.2.6 4.3 1.62 6" /><path d="M12 10V2l4 2" /></svg>
);

const partners = [
  { name: 'AWS', icon: Cloud, color: 'text-[#FF9900]' },
  { name: 'Google Cloud', icon: Cloud, color: 'text-[#4285F4]' },
  { name: 'Azure', icon: Cloud, color: 'text-[#0089D6]' },
  { name: 'Slack', icon: Slack, color: 'text-[#4A154B]' },
  { name: 'GitHub', icon: Github, color: 'text-white' },
  { name: 'Terraform', icon: Terminal, color: 'text-[#844FBA]' },
  { name: 'Kubernetes', icon: Ship, color: 'text-[#326CE5]' },
  { name: 'Datadog', icon: Shield, color: 'text-[#632CA6]' }
];

export const Integrations = () => {
  return (
    <section className="py-24 bg-[#101010] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Connect to everything.
          </motion.h2>
          <p className="text-slate-400">
            One-click integrations with your entire cloud and developer ecosystem.
          </p>
        </div>

        <div className="relative">
          {/* Animated Marquee Mockup */}
          <div className="flex space-x-8 overflow-hidden py-10">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex space-x-12 whitespace-nowrap"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white/[0.03] border border-white/5 px-8 py-5 rounded-2xl hover:bg-white/[0.05] transition-colors cursor-pointer group">
                  <partner.icon className={`w-8 h-8 ${partner.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <span className="text-white font-medium tracking-tight text-lg">{partner.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Faded edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#101010] to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#101010] to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 font-mono tracking-widest uppercase">
            + 40 more integrations coming soon
          </p>
        </div>
      </div>
    </section>
  );
};
