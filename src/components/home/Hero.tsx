import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { BarChart3, Activity } from 'lucide-react';
import backgroundVideo from '../../assets/test_remix.webm';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden bg-[#101010] min-h-screen flex flex-col justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
          src={backgroundVideo}
        />
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute top-0 inset-x-0 h-96 bg-hero-gradient opacity-5 pointer-events-none blur-3xl z-0"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          30-50% Savings on AWS, GCP, <br/>
          and Azure while retaining full <br/>
          control of your cloud
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          No code change, no downtime, and no organizational change. CostPilot brings real-time accountability to your engineering spend.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button variant="primary" className="text-base px-8 py-3 shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)]">
            Book a Demo
          </Button>
        </motion.div>
      </div>

      {/* Dashboard Preview - High Fidelity FinOps Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="rounded-2xl border border-white/10 bg-[#101010] overflow-hidden shadow-2xl">
          {/* Mac window header mockup */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#101010]">
            <div className="flex space-x-2 opacity-50">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            </div>
            <div className="ml-4 text-xs font-mono text-slate-500 font-medium">app.costpilot.com/overview</div>
          </div>
          
          {/* Dashboard Body */}
          <div className="p-6 bg-[#101010] grid grid-cols-12 gap-6 relative">

            {/* Top KPI row */}
            <div className="col-span-12 grid grid-cols-4 gap-6">
              {[
                { label: 'Total Spend (MTD)', value: '$124,830', delta: '+8.2%', up: true },
                { label: 'Forecasted', value: '$148,200', delta: '-2.1%', up: false },
                { label: 'Budget Cap', value: '$150,000', delta: 'On Track', neutral: true },
                { label: 'Active Anomalies', value: '3', delta: 'High Severity', warning: true },
              ].map((kpi, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5"
                >
                  <p className="text-slate-500 text-[10px] mb-2 font-semibold uppercase tracking-widest">{kpi.label}</p>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-mono font-bold text-white tracking-tight">{kpi.value}</h3>
                    <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                      kpi.neutral ? 'bg-white/10 text-slate-300' :
                      kpi.warning ? 'bg-red-500/10 text-red-400' :
                      kpi.up ? 'bg-emerald-500/10 text-emerald-400' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      {kpi.delta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Left Column: Big Chart */}
            <div className="col-span-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="text-white font-medium flex items-center text-sm tracking-tight"><BarChart3 className="w-4 h-4 mr-2" /> Daily Spend by Provider</h4>
                 <div className="flex space-x-4 text-xs font-medium tracking-tight">
                   <span className="flex items-center text-slate-400"><div className="w-2 h-2 rounded-sm bg-orange-500 mr-2"></div>AWS</span>
                   <span className="flex items-center text-slate-400"><div className="w-2 h-2 rounded-sm bg-blue-500 mr-2"></div>GCP</span>
                 </div>
               </div>
               
               {/* Mock Bar Chart Area */}
               <div className="flex-1 flex items-end space-x-3 border-b border-l border-white/5 pb-2 pl-3 mt-4 min-h-[12rem]">
                 {[40, 60, 45, 80, 50, 65, 90, 100, 70, 85, 60, 55, 40].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 flex flex-col justify-end group cursor-pointer relative"
                      whileHover={{ scaleY: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      style={{ originY: 1, height: `${h}%` }}
                    >
                      {/* Track background for missing height */}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-white/[0.03] rounded-t-[4px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      
                      <div className="w-full bg-blue-500 rounded-t-[4px] transition-opacity group-hover:opacity-100 opacity-90 h-[30%]"></div>
                      <div className="w-full bg-orange-500 transition-opacity group-hover:opacity-100 opacity-90 h-[70%]"></div>
                    </motion.div>
                 ))}
               </div>
            </div>

            {/* Right Column: Anomalies */}
            <div className="col-span-4 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-white font-medium flex items-center text-sm tracking-tight"><Activity className="w-4 h-4 mr-2" /> Recent Anomalies</h4>
                <button className="text-[10px] font-bold tracking-tight text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/5">
                  + Create Alert
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { service: 'EC2 Spike', region: 'us-east-1', cost: '+$4,200', time: '2h ago', alert: 'High' },
                  { service: 'BigQuery Export', region: 'asia-se1', cost: '+$820', time: '5h ago', alert: 'Medium' },
                  { service: 'Azure Blob', region: 'global', cost: '+$310', time: '1d ago', alert: 'Low' },
                ].map((anomaly, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="flex flex-col p-4 rounded-xl bg-[#101010] border border-white/5 cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm text-white font-medium tracking-tight mb-0.5">{anomaly.service}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{anomaly.region} • {anomaly.time}</p>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <p className="text-sm font-mono text-white mb-2">{anomaly.cost}</p>
                        <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${
                          anomaly.alert === 'High' ? 'bg-red-500/10 text-red-400' :
                          anomaly.alert === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-sky-500/10 text-sky-400'
                        }`}>{anomaly.alert}</span>
                      </div>
                    </div>
                    {/* Always visible CTAs with high contrast in new Framer style */}
                    <div className="flex space-x-2 mt-2 pt-3 border-t border-white/5">
                      <button className="flex-1 text-[11px] bg-white text-black hover:bg-slate-200 py-1.5 rounded-full transition-colors font-bold">Investigate</button>
                      <button className="flex-1 text-[11px] bg-white/5 hover:bg-white/10 text-white py-1.5 rounded-full transition-colors font-semibold border border-white/5">Dismiss</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
