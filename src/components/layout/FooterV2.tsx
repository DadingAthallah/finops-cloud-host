import { useEffect } from 'react';
import { Button } from '../ui/Button';

export const FooterV2 = () => {
  useEffect(() => {
    let intervalId: any;
    
    // Safety check container to prevent double canvas injection
    const container = document.getElementById('footer-unicorn-container');
    
    const tryInit = () => {
      // @ts-ignore
      if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
        // Only initialize if there are NO child nodes (i.e. canvases) yet.
        if (container && container.childNodes.length === 0) {
          // @ts-ignore
          window.UnicornStudio.init();
        }
        clearInterval(intervalId);
      }
    };
    
    tryInit();
    intervalId = setInterval(tryInit, 200);
    
    // Stop checking after 5s to avoid infinite polling
    setTimeout(() => clearInterval(intervalId), 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-[#0A0A0A] pt-0 pb-12 border-t border-white/5 font-sans">
      {/* Top CTA - Full Width Background with Unicorn Studio */}
      <div className="text-center relative pt-32 pb-0 overflow-hidden mb-24 min-h-[600px] flex flex-col justify-center border-b border-white/5">
        
        {/* Unicorn Studio Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-100">
          <div id="footer-unicorn-container" className="w-[100vw] h-[100vh]" data-us-project="XANMAMpW5QsZ4jhJQ8cS"></div>
          {/* Dark overlay to ensure text contrast and match Hero V2 */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Get started with CostPilot</h2>
          <Button variant="outline" className="bg-white text-black hover:bg-neutral-200 px-8 py-3 text-base shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] rounded-full font-bold border-none transition-all">
            Book a live demo ↗
          </Button>
          
          <div className="mt-20 mx-auto w-full max-w-4xl px-4 pointer-events-none">
             {/* High Fidelity Footer Dashboard Graphic - iOS 26 Glassmorphism */}
             <div className="h-64 rounded-t-[2.5rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-[60px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden relative flex flex-col translate-y-[1px]">
                
                {/* Header */}
                <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center px-6 justify-between">
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                   </div>
                   <div className="flex space-x-6 text-[10px] font-bold tracking-widest uppercase text-neutral-400">
                     <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Cost Breakdown</span>
                     <span>Forecasting</span>
                     <span>Optimization</span>
                   </div>
                </div>

                {/* Body */}
                <div className="flex-1 p-6 md:p-8 grid grid-cols-3 gap-6 relative">
                   {/* Gradient fade out at bottom */}
                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent z-10 rounded-t-none"></div>
                   
                   {/* Col 1 */}
                   <div className="col-span-1 space-y-4">
                     <div className="h-4 w-28 bg-white/10 rounded-full"></div>
                     <div className="p-6 border border-white/[0.08] bg-white/[0.03] backdrop-blur-md rounded-2xl shadow-inner">
                       <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Potential Savings</div>
                       <div className="text-4xl font-mono text-white font-bold tracking-tighter">$12,450</div>
                       <div className="mt-5 flex items-center justify-center text-[10px] text-white font-bold tracking-wide bg-white/10 border border-white/20 w-max px-4 py-2 rounded-full">24 actions available</div>
                     </div>
                   </div>

                   {/* Col 2 & 3 */}
                   <div className="col-span-2 space-y-4">
                     <div className="h-4 w-36 bg-white/10 rounded-full"></div>
                     <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 flex items-end space-x-3 h-36 pl-5 shadow-inner">
                       {[30, 45, 25, 60, 40, 75, 50, 90, 65, 100].map((h, i) => (
                         <div key={i} className="flex-1 bg-gradient-to-t from-white/20 to-white/5 hover:from-white/30 hover:to-white/10 transition-colors rounded-t pointer-events-auto cursor-pointer" style={{ height: `${h}%` }}></div>
                       ))}
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/5 pt-12">
          <div className="col-span-2">
            <span className="text-xl font-bold text-white mb-6 block drop-shadow-md">CostPilot</span>
            <div className="text-xs text-neutral-500 space-y-2 mt-8">
               <p>X</p>
               <p>© CostPilot Company</p>
               <p>SOC Type II Certified</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 drop-shadow-sm">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">What is CostPilot</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Scorecards</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Eng Intelligence</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Self-Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 drop-shadow-sm">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Production Readiness</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Migration Tracking</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cost Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 drop-shadow-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">Careers <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400">WE'RE HIRING</span></a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
