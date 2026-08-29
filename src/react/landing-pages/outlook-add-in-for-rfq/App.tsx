import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import Enterprise from './components/Enterprise';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import StatsBar from './components/StatsBar';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rfq-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Keep a ref to track which elements have already been made visible
  const visibleSet = useRef<Set<Element>>(new Set());

  // Set up scroll animation observer once — persists across darkMode changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            visibleSet.current.add(entry.target);
            // Stop observing once visible — prevents loss of class on re-render
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      const elements = document.querySelectorAll('.fade-up, .fade-in');
      elements.forEach((el) => {
        if (visibleSet.current.has(el)) {
          // Already was visible — keep it visible
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    observe();

    // Re-run observe after short delay to catch any newly rendered elements
    const t = setTimeout(observe, 100);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [darkMode]); // Re-run when darkMode changes to re-attach observer to new DOM elements

  // After theme change, immediately restore 'visible' on previously-seen elements
  useEffect(() => {
    const restoreVisible = () => {
      visibleSet.current.forEach((el) => {
        el.classList.add('visible');
      });
    };
    // Run immediately and after paint
    restoreVisible();
    requestAnimationFrame(restoreVisible);
    const t = setTimeout(restoreVisible, 50);
    return () => clearTimeout(t);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#020817] text-slate-100' : 'bg-white text-slate-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <StatsBar darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <Compatibility darkMode={darkMode} />
        <Enterprise darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <CTASection darkMode={darkMode} />
      </main>


      {/* Conversion elements */}
    </div>
  );
}
