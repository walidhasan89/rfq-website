import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Integrations from './components/Integrations';
import Security from './components/Security';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ComparisonSection from './components/ComparisonSection';
import FinalCTA from './components/FinalCTA';

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
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // System preference listener
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('rfq-theme');
      if (!stored) setDarkMode(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Global scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
      style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <Problem darkMode={darkMode} />
        <Solution darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <UseCases darkMode={darkMode} />
        <Integrations darkMode={darkMode} />
        <Security darkMode={darkMode} />
        <ComparisonSection darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <FinalCTA darkMode={darkMode} />
      </main>
    </div>
  );
}
