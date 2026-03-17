import { Navbar } from './components/layout/Navbar';
import { HeroV2 } from './components/home/HeroV2';
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
import { FooterV2 } from './components/layout/FooterV2';

export const HomeV2 = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-neutral-100 font-sans selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        {/* NEW V2 HERO */}
        <HeroV2 />
        
        {/* Rest of the original sections */}
        <SocialProof />
        <ProblemStatement />
        <PlatformOverview />
        <HowItWorks />
        <Features />
        <UseCases />
        <Integrations />
        <Testimonials />
        <Security />
        <Pricing />
        <FAQ />
      </main>
      <FooterV2 />
    </div>
  );
};
