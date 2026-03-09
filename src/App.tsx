import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { SocialProof } from './components/home/SocialProof';
import { ProblemStatement } from './components/home/ProblemStatement';
import { PlatformOverview } from './components/home/PlatformOverview';
import { HowItWorks } from './components/home/HowItWorks';
import { Features } from './components/home/Features';
import { UseCases } from './components/home/UseCases';
import { Integrations } from './components/home/Integrations';
import { Testimonials } from './components/home/Testimonials';
import { Security } from './components/home/Security';
import { Pricing } from './components/home/Pricing';
import { FAQ } from './components/home/FAQ';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-100 font-sans selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        {/* Actual Content Sections (11 Total) */}
        <Hero /> {/* 1 */}
        <SocialProof /> {/* 2 */}
        <ProblemStatement /> {/* 3 */}
        <PlatformOverview /> {/* 4 */}
        <HowItWorks /> {/* 5 */}
        <Features /> {/* 6 */}
        <UseCases /> {/* 7 */}
        <Integrations /> {/* 8 */}
        <Testimonials /> {/* 9 */}
        <Security /> {/* 10 */}
        <Pricing /> {/* 11 */}
        
        {/* Support Sections */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
