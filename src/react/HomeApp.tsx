import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import ScrollToTop from './components/ScrollToTop';

export default function HomeApp() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar currentPath="/" />
        <main id="main-content">
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <HowItWorks />
          <UseCases />
          <SocialProof />
          <Pricing />
          <FAQ />
          <Contact />
          <FinalCTA />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
