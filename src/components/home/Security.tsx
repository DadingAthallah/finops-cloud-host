import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, CheckCircle } from 'lucide-react';

export const Security = () => {
  return (
    <section className="py-24 bg-[#101010] border-b border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Security is our first priority.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We know that billing data is sensitive. That's why we built CostPilot with a multi-layered security model that gives you total control.
            </p>
          </div>
          
          <div className="border-t border-white/10">
            {[
              { title: 'Read-Only IAM Access', desc: 'We never ask for "write" or "delete" permissions. Your infrastructure remains immutable.', icon: ShieldCheck },
              { title: 'SOC 2 Type II Compliant', desc: 'Our processes and platform are audited annually to ensure the highest standards.', icon: CheckCircle },
              { title: 'Data Encryption', desc: 'All data is encrypted in transit using TLS 1.3 and at rest with AES-256.', icon: Lock },
              { title: 'SAML & SSO Support', desc: 'Integrated with Okta, Azure AD, and Google Workspace out of the box.', icon: Eye }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 group hover:bg-white/[0.01] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0"
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-blue/30 transition-colors">
                    <item.icon className="w-6 h-6 text-brand-blue opacity-80" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm max-w-md">{item.desc}</p>
                  </div>
                </div>
                <div className="text-emerald-500/50 text-[10px] font-bold tracking-widest uppercase hidden md:block">
                  Verified
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-[#151515] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold tracking-wider uppercase">System Status: All Operational</span>
                  <span className="text-slate-500 text-[10px]">Real-time monitoring enabled for all regions</span>
                </div>
             </div>
             <div className="flex items-center gap-8">
               <div className="text-center">
                 <div className="text-white text-sm font-bold">99.99%</div>
                 <div className="text-slate-500 text-[10px] uppercase tracking-tighter">Uptime</div>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div className="text-center">
                 <div className="text-white text-sm font-bold">Grade A</div>
                 <div className="text-slate-500 text-[10px] uppercase tracking-tighter">SSL Rating</div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
