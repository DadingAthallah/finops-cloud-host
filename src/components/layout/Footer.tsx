import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-white/[0.02] blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 tracking-tight">Get started with CostPilot</h2>
          <Button variant="primary" className="bg-white text-black hover:bg-slate-200 px-8 py-3 text-base shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] rounded-full font-bold">
            Book a live demo ↗
          </Button>
          
          <div className="mt-16 mx-auto max-w-4xl px-4 pointer-events-none">
             {/* High Fidelity Footer Dashboard Graphic */}
             <div className="h-64 border border-white/5 border-b-0 rounded-t-3xl bg-[#050505] overflow-hidden relative flex flex-col shadow-2xl">
                {/* Header */}
                <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
                   <div className="flex space-x-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                   </div>
                   <div className="flex space-x-4 text-[10px] font-bold tracking-widest uppercase text-slate-500">
                     <span className="text-white">Cost Breakdown</span>
                     <span>Forecasting</span>
                     <span>Optimization</span>
                   </div>
                </div>
                {/* Body */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-6 relative">
                   {/* Gradient fade out at bottom */}
                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
                   
                   {/* Col 1 */}
                   <div className="col-span-1 space-y-4">
                     <div className="h-3 w-24 bg-white/5 rounded-full"></div>
                     <div className="p-5 border border-white/5 bg-[#0a0a0a] rounded-2xl">
                       <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Potential Savings</div>
                       <div className="text-3xl font-mono text-white font-bold tracking-tighter">$12,450</div>
                       <div className="mt-4 flex items-center text-[10px] text-black font-bold tracking-wide bg-white w-max px-3 py-1.5 rounded-full">24 actions available</div>
                     </div>
                   </div>

                   {/* Col 2 & 3 */}
                   <div className="col-span-2 space-y-4">
                     <div className="h-3 w-32 bg-white/5 rounded-full"></div>
                     <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 flex items-end space-x-2 h-32 pl-4">
                       {[30, 45, 25, 60, 40, 75, 50, 90, 65, 100].map((h, i) => (
                         <div key={i} className="flex-1 bg-white/[0.08] hover:bg-white/20 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                       ))}
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-slate-800/50 pt-12">
          <div className="col-span-2">
            <span className="text-xl font-bold text-white mb-6 block">CostPilot</span>
            <div className="text-xs text-slate-500 space-y-2 mt-8">
               <p>X</p>
               <p>© CostPilot Company</p>
               <p>SOC Type II Certified</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">What is CostPilot</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Scorecards</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Eng Intelligence</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Self-Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Production Readiness</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Migration Tracking</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cost Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-brand-indigo hover:text-white text-sm transition-colors">Careers <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-brand-indigo/20 text-brand-indigo">WE'RE HIRING</span></a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};
