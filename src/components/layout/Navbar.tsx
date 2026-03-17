import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-black/40 backdrop-blur-xl border-b border-white/5' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300">
              <span className="text-black font-bold text-xl tracking-tighter">C</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">CostPilot</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Product', 'Resources', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button variant="primary" className="py-2.5">Start Free Trial</Button>
          </div>

          {/* Mobile Menu Button (stub) */}
          <div className="md:hidden flex items-center">
            <button className="text-neutral-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};
