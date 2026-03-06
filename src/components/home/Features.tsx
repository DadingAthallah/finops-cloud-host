import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Features = () => {
  const [activeTab, setActiveTab] = useState('Anomaly Detection');

  const tabs = [
    { title: 'Anomaly Detection', desc: 'Real-time alert engine for unexpected spikes.' },
    { title: 'Budget Caps', desc: 'Enforce spend limits by team or project.' },
    { title: 'Multi-Cloud View', desc: 'Unified AWS, GCP, and Azure visibility.' }
  ];

  return (
    <section className="py-24 bg-black border-b border-white/5" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Sidebar */}
          <div className="col-span-1 pr-8">
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              Monitor,<br/> govern,<br/> and optimize
            </h2>
            <p className="text-sm text-slate-500 mb-8 max-w-xs leading-relaxed font-medium">
              Stop waiting for the month-end bill. Get granular visibility into your cloud spend instantly, preventing bill shock before it happens.
            </p>
            <a href="#" className="text-white text-sm font-semibold hover:opacity-80 mb-12 inline-block transition-opacity">Explore platform ↗</a>
            
            <nav className="space-y-4 mt-8">
              {tabs.map((tab) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab.title)}
                  className={`block w-full text-left py-4 px-5 rounded-xl transition-all ${
                    activeTab === tab.title 
                    ? 'bg-white/[0.04] border border-white/10 shadow-lg' 
                    : 'hover:bg-white/[0.02] border border-transparent'
                  }`}
                >
                  <h3 className={`text-sm font-bold tracking-tight mb-1 ${activeTab === tab.title ? 'text-white' : 'text-slate-400'}`}>
                    {tab.title}
                  </h3>
                  <p className={`text-[13px] ${activeTab === tab.title ? 'text-slate-400' : 'text-slate-600'}`}>
                    {tab.desc}
                  </p>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="col-span-3">
             <div className="bg-[#050505] border border-white/5 rounded-3xl p-2 shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center relative">
                
                <AnimatePresence mode="wait">
                  {activeTab === 'Anomaly Detection' && (
                    <motion.div 
                      key="anomaly"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full p-8"
                    >
                      <div className="max-w-xl mx-auto space-y-4 mt-10">
                        <div className="bg-[#0a0a0a] border border-red-500/20 rounded-xl p-6 flex items-start space-x-4 shadow-[0_0_20px_-5px_rgba(239,68,68,0.1)]">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                           <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                               <h4 className="text-white font-bold tracking-tight">Unusual EC2 Spend Detected</h4>
                               <span className="text-red-400 font-mono text-sm tracking-tight">+$4,200</span>
                             </div>
                             <p className="text-slate-500 text-[13px] font-medium leading-relaxed">us-east-1 region spike originated from <code className="bg-white/5 px-1 rounded">ml-training-cluster</code>.</p>
                             <div className="mt-5 flex space-x-3">
                               <button className="text-[11px] font-bold tracking-wide bg-white text-black hover:bg-slate-200 px-4 py-2 rounded-full transition">Investigate Route</button>
                               <button className="text-[11px] font-bold tracking-wide bg-white/5 hover:bg-white/10 text-white border border-white/5 px-4 py-2 rounded-full transition">Acknowledge</button>
                             </div>
                           </div>
                        </div>
                        
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex items-start space-x-4 opacity-70">
                           <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1.5"></div>
                           <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                               <h4 className="text-white font-bold tracking-tight">BigQuery Storage Increase</h4>
                               <span className="text-amber-400 font-mono text-sm tracking-tight">+$820</span>
                             </div>
                             <p className="text-slate-500 text-[13px] font-medium leading-relaxed">Table size grew by 4TB in dataset <code className="bg-white/5 px-1 rounded">analytics_prod</code>.</p>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'Budget Caps' && (
                    <motion.div 
                      key="budgets"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full p-8"
                    >
                      <div className="max-w-2xl mx-auto mt-6 bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 bg-white/[0.02] text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                          <div className="col-span-1">Team</div>
                          <div className="col-span-2">Utilization</div>
                          <div className="col-span-1 text-right">Status</div>
                        </div>
                        <div className="divide-y divide-white/5">
                           {[
                             { team: 'Platform Infra', spent: 42100, budget: 50000, status: 'On Track', color: 'bg-emerald-500' },
                             { team: 'ML/AI Services', spent: 38400, budget: 35000, status: 'Over Budget', color: 'bg-red-500' },
                             { team: 'Data Warehouse', spent: 21300, budget: 25000, status: 'Warning', color: 'bg-amber-500' },
                           ].map((b, i) => (
                             <motion.div key={i} whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }} transition={{ duration: 0.2 }} className="grid grid-cols-4 gap-4 px-6 py-5 items-center cursor-pointer transition-colors">
                               <div className="col-span-1 text-[13px] font-semibold text-white tracking-tight">{b.team}</div>
                               <div className="col-span-2 flex flex-col justify-center">
                                  <div className="flex justify-between text-xs font-mono mb-2">
                                    <span className="text-white tracking-tight">${b.spent.toLocaleString()}</span>
                                    <span className="text-slate-500 tracking-tight">${b.budget.toLocaleString()}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: `${Math.min((b.spent / b.budget) * 100, 100)}%` }}
                                      transition={{ duration: 1, delay: 0.2, type: 'spring' }}
                                      className={`h-full ${b.color} rounded-full`}
                                    ></motion.div>
                                  </div>
                               </div>
                               <div className="col-span-1 text-right">
                                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${b.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-400' : b.status === 'Over Budget' ? 'bg-red-500/10 text-red-500' : 'bg-amber-500/10 text-amber-500'}`}>{b.status}</span>
                               </div>
                             </motion.div>
                           ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'Multi-Cloud View' && (
                    <motion.div 
                      key="multicloud"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full p-8 flex items-center justify-center"
                    >
                       <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
                          {[
                            { name: 'AWS', spend: '$84,500', trend: '+5%', color: 'border-white px-0', badgeColor: 'bg-orange-500' },
                            { name: 'GCP', spend: '$32,100', trend: '-2%', color: 'border-white/10 px-0', badgeColor: 'bg-blue-500' },
                            { name: 'Azure', spend: '$8,230', trend: '+1%', color: 'border-white/10 px-0', badgeColor: 'bg-sky-500' },
                          ].map(c => (
                            <motion.div 
                               whileHover={{ y: -5 }} 
                               transition={{ type: "spring", stiffness: 400, damping: 30 }}
                               key={c.name} 
                               className={`bg-[#0a0a0a] border-t-[3px] ${c.color} border-l border-r border-b border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group`}
                            >
                               <div className={`absolute top-0 right-0 w-32 h-32 ${c.badgeColor} opacity-[0.03] rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-[0.08] transition-opacity`}></div>
                               <h4 className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-4 flex items-center">
                                 <div className={`w-2 h-2 rounded-full ${c.badgeColor} mr-2`}></div>
                                 {c.name}
                               </h4>
                               <div className="text-2xl font-mono font-bold text-white mb-2 tracking-tight">{c.spend}</div>
                               <div className={`text-[11px] font-medium tracking-tight ${c.trend.startsWith('+') ? 'text-red-400' : 'text-emerald-400'}`}>{c.trend} vs last month</div>
                            </motion.div>
                          ))}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
