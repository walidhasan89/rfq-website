import { useEffect, useRef } from 'react';

interface CTAProps {
  darkMode: boolean;
}

const CTA: React.FC<CTAProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .slide-up, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: '🌍', text: '24/7 RFQ detection across all time zones' },
    { icon: '🌐', text: '40+ language processing for global buyer emails' },
    { icon: '💱', text: 'Multi-currency pricing with live exchange rates' },
    { icon: '🚢', text: 'Incoterms and shipping integrated into quotes' },
    { icon: '📨', text: 'Professional quotation replies in buyer\'s language' },
    { icon: '📊', text: 'Global analytics dashboard tracking performance by region' },
  ];

  return (
    <section
      id="cta"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-100/60'
        } blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Block */}
        <div className={`slide-up text-center mb-16`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-700'
            }`}>
              Get Started Today
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-6 leading-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Start Winning International Orders{' '}
            <span className="gradient-text">Before Your Competitors Wake Up</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Your global buyers are not waiting for your office hours. They are sending RFQs right now — from Shanghai, from Riyadh, from Lagos, from São Paulo. RFQ AutoPilot's{' '}
            <a href="https://rfqautopilot.com/ai-rfq-generator" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              AI RFQ generator
            </a>{' '}
            ensures every international quote request is detected, processed, and ready for your response the moment you open your inbox. Explore our full guide on{' '}
            <a href="https://www.trade.gov/export-solutions" target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              export solutions
            </a>{' '}
            to understand what's at stake for global trade.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className={`slide-up flex items-center gap-3 p-4 rounded-xl border text-left ${
                  darkMode
                    ? 'bg-white/5 border-white/10'
                    : 'bg-gray-50 border-gray-200'
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-5 glow-blue text-lg"
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Start Free — 30 RFQs/Month
              </span>
            </a>
            <a
              href="#use-cases"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#use-cases')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`btn-secondary text-base px-8 py-5 border ${
                darkMode
                  ? 'border-white/20 text-gray-200 hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Export Company Demo
              </span>
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-sm font-semibold transition-colors ${
                darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Compare Plans →
            </a>
          </div>

          {/* Trust badges */}
          <div className={`flex flex-wrap items-center justify-center gap-6 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <div className="flex items-center gap-1.5">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.8/5 average rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🌍</span>
              <span>Used by exporters in 45+ countries</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>💳</span>
              <span>No credit card for free plan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>✅</span>
              <span>Gmail & Outlook compatible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🔒</span>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>

        {/* Final Urgency Block */}
        <div className={`scale-in relative p-10 lg:p-14 rounded-3xl border text-center overflow-hidden ${
          darkMode
            ? 'bg-gradient-to-br from-blue-950 to-gray-900 border-blue-500/30'
            : 'bg-gradient-to-br from-blue-600 to-blue-800'
        }`}>
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
              darkMode ? 'text-blue-400' : 'text-blue-200'
            }`}>
              ⚡ Don't lose another international order
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              A Buyer in Dubai Just Sent You an RFQ.
              <br />
              <span className={darkMode ? 'gradient-text' : 'text-blue-200'}>
                Will You Reply First — or Will Your Competitor?
              </span>
            </h3>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-blue-100'
            }`}>
              Export companies receive RFQs around the clock from global buyers. Speed of response directly determines who wins the order. While you sleep, RFQ AutoPilot detects incoming requests, extracts requirements in any language, converts pricing to any currency, and prepares professional quotation drafts for your morning review.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                darkMode
                  ? 'gradient-brand text-white hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1'
                  : 'bg-white text-blue-700 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Add to Chrome — It's Free
            </a>
            <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-blue-200'}`}>
              No credit card required · 30 free RFQs/month · Works in 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
