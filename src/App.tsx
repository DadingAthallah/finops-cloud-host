import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { SocialProof } from './components/home/SocialProof';
import { Features } from './components/home/Features';
import { Pricing } from './components/home/Pricing';
import { Testimonials } from './components/home/Testimonials';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-100 font-sans selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
