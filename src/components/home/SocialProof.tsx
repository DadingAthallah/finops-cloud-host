export const SocialProof = () => {
  const logos = [
    { name: 'Density', opacity: 'opacity-60' },
    { name: 'FabFitFun', opacity: 'opacity-60' },
    { name: 'CoinDesk', opacity: 'opacity-60' },
    { name: 'EVgo', opacity: 'opacity-60' },
    { name: 'Motive', opacity: 'opacity-60' },
    { name: 'Secureframe', opacity: 'opacity-60' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-12 items-center grayscale">
          {logos.map((logo) => (
             <div key={logo.name} className={`text-xl font-bold text-slate-400 ${logo.opacity} hover:opacity-100 transition-opacity`}>
               {logo.name}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
