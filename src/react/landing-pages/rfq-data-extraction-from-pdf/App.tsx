import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Accuracy from './components/Accuracy';
import Integration from './components/Integration';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('rfq-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('rfq-theme')) {
        setDarkMode(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero darkMode={darkMode} />
        <div className="section-divider" />
        <HowItWorks darkMode={darkMode} />
        <div className="section-divider" />
        <Features darkMode={darkMode} />
        <div className="section-divider" />
        <Accuracy darkMode={darkMode} />
        <div className="section-divider" />
        <Integration darkMode={darkMode} />
        <div className="section-divider" />
        <UseCases darkMode={darkMode} />
        <div className="section-divider" />
        <Pricing darkMode={darkMode} />
        <div className="section-divider" />
        <FAQ darkMode={darkMode} />
        <div className="section-divider" />
        <CTA darkMode={darkMode} />
      </main>

      {/* Conversion optimization */}
    </div>
  );
}
