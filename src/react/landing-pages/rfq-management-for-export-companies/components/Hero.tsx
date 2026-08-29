import { useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in, .slide-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 ${
        darkMode
          ? 'bg-gray-950'
          : 'bg-white'
      }`}
    >
      {/* Background Effects */}
      <div className={`absolute inset-0 hero-grid-bg ${darkMode ? 'opacity-100' : 'opacity-60'}`} />

      {/* Floating Orbs */}
      <div
        className="floating-orb w-96 h-96 top-20 -left-24 opacity-20"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', animationDelay: '0s' }}
      />
      <div
        className="floating-orb w-80 h-80 bottom-20 right-0 opacity-15"
        style={{ background: 'radial-gradient(circle, #1d4ed8, transparent)', animationDelay: '2s' }}
      />
      <div
        className="floating-orb w-60 h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ background: 'radial-gradient(circle, #818cf8, transparent)', animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        {/* Badge */}
        <div className="fade-in inline-flex items-center gap-2 mb-8">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
            darkMode
              ? 'bg-blue-950/50 border-blue-500/30 text-blue-300'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-blue-500"></span>
            </span>
            Chrome Extension — Free to Install
          </div>
        </div>

        {/* H1 */}
        <h1 className={`fade-in delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-5 max-w-5xl mx-auto ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          RFQ Management for Export &amp; Import Companies —{' '}
          <span className="gradient-text">Respond to Global Buyers Faster</span>
        </h1>

        {/* Subheadline */}
        <p className={`fade-in delay-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Your buyers are in Tokyo, Dubai, São Paulo, and Lagos — sending RFQs while you sleep. Stop losing international orders to time zones and slow manual processing. Automate your export quotation workflow inside Gmail and Outlook.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 glow-blue-sm"
          >
            <span className="flex items-center gap-2">
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
            className={`btn-secondary text-base px-8 py-4 border ${
              darkMode
                ? 'border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/30'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See Export Company Demo
            </span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className={`fade-in delay-400 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm mb-10 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {[
            { icon: '🌐', text: '40+ languages supported' },
            { icon: '💱', text: 'Multi-currency pricing' },
            { icon: '🕐', text: 'Works across all time zones, 24/7' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-1.5">
              <span>{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Export Stat Banner */}
        <div className={`fade-in delay-500 inline-flex items-center gap-3 px-6 py-4 rounded-2xl border max-w-2xl mx-auto ${
          darkMode
            ? 'bg-blue-950/40 border-blue-500/20 text-blue-200'
            : 'bg-blue-50 border-blue-200 text-blue-800'
        }`}>
          <span className="text-2xl">🌍</span>
          <p className="text-sm sm:text-base font-medium text-left">
            Export companies using RFQ AutoPilot respond to international buyers{' '}
            <strong>9x faster</strong> and capture <strong>27% more orders</strong> from overseas markets.
          </p>
        </div>

        {/* Stats Row */}
        <div className="fade-in delay-500 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { value: '9x', label: 'Faster Response' },
            { value: '40+', label: 'Languages Supported' },
            { value: '150+', label: 'Currencies' },
            { value: '24/7', label: 'Detection Coverage' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`stat-card p-5 rounded-2xl border text-center ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/30'
                  : 'bg-white border-gray-200 shadow-sm hover:border-blue-300'
              }`}
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none ${
        darkMode ? 'from-gray-950 to-transparent' : 'from-white to-transparent'
      }`} />
    </section>
  );
};

export default Hero;
