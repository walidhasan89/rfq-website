import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import ComparisonSection from './components/ComparisonSection';
import SupportedFormats from './components/SupportedFormats';
import SecuritySection from './components/SecuritySection';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      'color-scheme', darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'dark' : ''} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#060b18] text-white' : 'bg-white text-slate-900'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <AIFeatures darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <HowItWorks darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <ComparisonSection darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <SupportedFormats darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <UseCases darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <SecuritySection darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <Pricing darkMode={darkMode} />
          <div className={`section-divider mx-8 ${darkMode ? 'opacity-40' : 'opacity-30'}`} />
          <FAQ darkMode={darkMode} />
          <FinalCTA darkMode={darkMode} />
        </main>
      </div>
    </div>
  );
}
