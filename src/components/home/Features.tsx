import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { title: 'Anomaly Detection', desc: 'Instantly detect and investigate unexpected cost spikes across all your cloud environments before they impact your monthly bill. Our ML models learn your baseline usage and alert you to true anomalies in real-time.' },
  { title: 'Budget Caps', desc: 'Set granular budget thresholds for departments, environments, or specific projects. Automatically trigger notifications when spending approaches critical limits to maintain strict financial discipline.' },
  { title: 'Multi-Cloud View', desc: 'Stop jumping between different cloud provider consoles. Get a single, normalized pane of glass for all your cloud investments to easily compare cross-cloud costs and find optimization opportunities.' }
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState('Anomaly Detection');
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const trackers = tabs.map((_, i) => document.getElementById(`tracker-${i}`));
      let closestI = -1;
      let minDistance = Infinity;
      const viewportMid = window.innerHeight / 2;

      trackers.forEach((tracker, i) => {
        if (!tracker) return;
        const rect = tracker.getBoundingClientRect();
        const trackerMid = rect.top + rect.height / 2;
        const dist = Math.abs(trackerMid - viewportMid);
        if (dist < minDistance) {
          minDistance = dist;
          closestI = i;
        }
      });

      if (closestI !== -1) {
        setActiveTab(prev => {
           const newTab = tabs[closestI].title;
           return prev !== newTab ? newTab : prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, title: string) => {
    setActiveTab(title);
    isScrollingRef.current = true;
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navs
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
    // Unlock scroll listener after flight completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <section className="pt-24 pb-[96px] bg-[#101010] border-t border-white/5" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-[64px]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Monitor, govern, and optimize
          </h2>
          <p className="text-base text-neutral-500 mb-8 max-w-2xl leading-relaxed font-medium">
            Stop waiting for the month-end bill. Get granular visibility into your cloud spend instantly, preventing bill shock before it happens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative items-start">
          {/* Left Sidebar - Sticky */}
          <div className="col-span-1 lg:sticky lg:top-32 self-start z-10 pt-0 pb-[96px]">
            
            <nav className="border-t border-white/10 hidden lg:block">
              {tabs.map((tab, i) => (
                <button
                  key={tab.title}
                  onClick={() => handleNavClick(`tracker-${i}`, tab.title)}
                  className="block w-full text-left py-8 px-6 border-b border-white/10 transition-colors hover:bg-white/[0.02]"
                >
                  <h3 className={`text-sm font-bold tracking-tight transition-colors ${activeTab === tab.title ? 'text-white' : 'text-neutral-500'}`}>
                    {tab.title}
                  </h3>
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: activeTab === tab.title ? 'auto' : 0, 
                      opacity: activeTab === tab.title ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13px] text-neutral-400 leading-relaxed pt-3">
                      {tab.desc}
                    </p>
                  </motion.div>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area - Stacking Cards */}
          <div className="col-span-3 relative">
             
             {/* Trackers - Invisible divs in normal document flow that trigger state changes consistently on scroll up/down */}
             <div className="absolute inset-x-0 top-0 h-full pointer-events-none flex flex-col gap-12 pb-[96px] z-0">
                {tabs.map((_, i) => (
                   <div 
                      id={`tracker-${i}`}
                      key={`tracker-${i}`}
                      className="h-[550px] w-full"
                   />
                ))}
             </div>

             {/* Actual sticky cards container */}
             <div className="flex flex-col gap-12 pb-[96px] relative z-10 w-full relative">
                {tabs.map((tab, i) => {
                  const isActive = activeTab === tab.title;
                  return (
                    <div
                      key={tab.title}
                      className={`sticky top-32 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#151515] border border-white/5 rounded-3xl p-2 shadow-2xl overflow-hidden h-[550px] flex items-center justify-center cursor-pointer ${
                        isActive ? 'scale-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]' : 'scale-[0.96] shadow-none'
                      }`}
                      style={{ zIndex: i }}
                      onClick={() => handleNavClick(`tracker-${i}`, tab.title)}
                    >
                      {/* Dark overlay instead of CSS opacity to prevent see-through stacking bugs */}
                      <div className={`absolute inset-0 bg-[#151515] z-50 pointer-events-none transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-[0.75]'}`} />
                      
                      <div className="w-full h-full p-8 relative z-10 flex flex-col justify-center">
                        
                        {/* Anomaly Detection Content */}
                        {i === 0 && (
                          <div className="max-w-xl mx-auto space-y-4 w-full">
                            <div className="bg-[#1a1a1a] border border-red-500/20 rounded-xl p-6 flex items-start space-x-4 shadow-[0_0_20px_-5px_rgba(239,68,68,0.1)]">
                               <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                               <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                   <h4 className="text-white font-bold tracking-tight">Unusual EC2 Spend Detected</h4>
                                   <span className="text-red-400 font-mono text-sm tracking-tight">+$4,200</span>
                                 </div>
                                 <p className="text-neutral-500 text-[13px] font-medium leading-relaxed">us-east-1 region spike originated from <code className="bg-white/5 px-1 rounded">ml-training-cluster</code>.</p>
                                 <div className="mt-5 flex space-x-3">
                                   <button className="text-[11px] font-bold tracking-wide bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-full transition" onClick={(e) => { e.stopPropagation(); setActiveTab(tab.title); }}>Investigate Route</button>
                                   <button className="text-[11px] font-bold tracking-wide bg-white/5 hover:bg-white/10 text-white border border-white/5 px-4 py-2 rounded-full transition" onClick={(e) => { e.stopPropagation(); setActiveTab(tab.title); }}>Acknowledge</button>
                                 </div>
                               </div>
                            </div>
                            
                            <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 flex items-start space-x-4 opacity-70">
                               <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1.5"></div>
                               <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                   <h4 className="text-white font-bold tracking-tight">BigQuery Storage Increase</h4>
                                   <span className="text-amber-400 font-mono text-sm tracking-tight">+$820</span>
                                 </div>
                                 <p className="text-neutral-500 text-[13px] font-medium leading-relaxed">Table size grew by 4TB in dataset <code className="bg-white/5 px-1 rounded">analytics_prod</code>.</p>
                               </div>
                            </div>
                          </div>
                        )}

                        {/* Budget Caps Content */}
                        {i === 1 && (
                          <div className="max-w-2xl mx-auto bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden w-full">
                            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 bg-white/[0.02] text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                              <div className="col-span-1">Team</div>
                              <div className="col-span-2">Utilization</div>
                              <div className="col-span-1 text-right">Status</div>
                            </div>
                            <div className="divide-y divide-white/5">
                               {[
                                 { team: 'Platform Infra', spent: 42100, budget: 50000, status: 'On Track', color: 'bg-emerald-500' },
                                 { team: 'ML/AI Services', spent: 38400, budget: 35000, status: 'Over Budget', color: 'bg-red-500' },
                                 { team: 'Data Warehouse', spent: 21300, budget: 25000, status: 'Warning', color: 'bg-amber-500' },
                               ].map((b, idx) => (
                                 <motion.div key={idx} whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }} transition={{ duration: 0.2 }} className="grid grid-cols-4 gap-4 px-6 py-5 items-center cursor-pointer transition-colors" onClick={(e) => { e.stopPropagation(); setActiveTab(tab.title); }}>
                                   <div className="col-span-1 text-[13px] font-semibold text-white tracking-tight">{b.team}</div>
                                   <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex justify-between text-xs font-mono mb-2">
                                        <span className="text-white tracking-tight">${b.spent.toLocaleString()}</span>
                                        <span className="text-neutral-500 tracking-tight">${b.budget.toLocaleString()}</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={isActive ? { width: `${Math.min((b.spent / b.budget) * 100, 100)}%` } : { width: 0 }}
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
                        )}

                        {/* Multi-Cloud View Content */}
                        {i === 2 && (
                          <div className="grid grid-cols-3 gap-6 w-full max-w-3xl mx-auto place-content-center">
                              {[
                                { name: 'AWS', spend: '$84,500', trend: '+5%', color: 'border-orange-500', badgeColor: 'bg-orange-500' },
                                { name: 'GCP', sizable: true, spend: '$32,100', trend: '-2%', color: 'border-blue-500', badgeColor: 'bg-blue-500' },
                                { name: 'Azure', spend: '$8,230', trend: '+1%', color: 'border-sky-500', badgeColor: 'bg-sky-500' },
                              ].map((c) => (
                                <motion.div 
                                  key={c.name} 
                                  whileHover={{ y: isActive ? -5 : 0 }} 
                                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                  className={`bg-[#1a1a1a] border-t-[3px] ${c.color} border-l border-r border-b border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group flex flex-col justify-between min-h-[160px]`}
                                  onClick={(e) => { e.stopPropagation(); setActiveTab(tab.title); }}
                                >
                                  <div className={`absolute top-0 right-0 w-32 h-32 ${c.badgeColor} opacity-[0.03] rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-[0.08] transition-opacity`}></div>
                                  <h4 className="text-neutral-500 text-[11px] font-bold uppercase tracking-widest mb-4 flex items-center">
                                    <div className={`w-2 h-2 rounded-full ${c.badgeColor} mr-2`}></div>
                                    {c.name}
                                  </h4>
                                  <div>
                                    <div className="text-3xl font-mono font-bold text-white mb-2 tracking-tight">{c.spend}</div>
                                    <div className={`text-[11px] font-medium tracking-tight px-2 py-1 inline-flex rounded ${c.trend.startsWith('+') ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                      {c.trend} vs last month
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

