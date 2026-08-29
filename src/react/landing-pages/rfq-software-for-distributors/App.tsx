import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import StatsBar from './components/StatsBar';
import Challenges from './components/Challenges';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import PricingRules from './components/PricingRules';
import ROI from './components/ROI';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import InstallCTA from './components/InstallCTA';
import StickyBottomBar from './components/StickyBottomBar';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    // Only sync with system preference on first load if user hasn't manually toggled
    // Default is light mode
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#020617'; // slate-950
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [dark]);

  return (
    <div className={dark ? 'dark' : ''} style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />
      <main>
        <Hero dark={dark} />
        <SocialProof dark={dark} />
        <StatsBar dark={dark} />
        <Challenges dark={dark} />
        <HowItWorks dark={dark} />
        <UseCases dark={dark} />
        <PricingRules dark={dark} />
        <ROI dark={dark} />
        <Pricing dark={dark} />
        <FAQ dark={dark} />
        <InstallCTA dark={dark} />
      </main>
      <StickyBottomBar dark={dark} />
    </div>
  );
}
