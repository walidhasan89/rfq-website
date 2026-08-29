import { useEffect, useRef } from 'react';

interface CTAProps {
  darkMode: boolean;
}

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const benefits = [
  { icon: '🏠', text: 'Lives in Gmail — Zero learning curve' },
  { icon: '⚡', text: '30-second install — No IT needed' },
  { icon: '🤖', text: 'AI-powered extraction — Zero data entry' },
  { icon: '📝', text: 'One-click quotes — Generated instantly' },
  { icon: '📊', text: 'Built-in tracking — Know when quotes are opened' },
  { icon: '💰', text: 'Free plan available — No commitment' },
];

const trustBadges = [
  { icon: '⭐', text: '4.8/5 on Chrome Web Store' },
  { icon: '🔒', text: 'Google-reviewed & secure' },
  { icon: '💳', text: 'No credit card for free plan' },
  { icon: '👥', text: '2,000+ sales professionals' },
  { icon: '⚡', text: '30-second installation' },
];

export default function CTA({ darkMode }: CTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.slide-up, .fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${darkMode
          ? 'bg-gradient-to-br from-blue-950/30 via-transparent to-indigo-950/20'
          : 'bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/40'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              🚀 GET STARTED
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight mb-4 max-w-4xl mx-auto ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Your Sales Team Already Uses Gmail.{' '}
            <span className="gradient-text">Now Make Gmail Quote for Them.</span>
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Every sales rep on your team opens Gmail first thing in the morning. RFQ AutoPilot turns that familiar inbox into a powerful quoting machine. Install in 30 seconds. Quote in 5 minutes. Win more deals today.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="slide-up delay-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-800/50'
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm'
              }`}
            >
              <span className="text-2xl mb-2">{benefit.icon}</span>
              <span className={`text-xs font-medium leading-tight ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* Main CTA Block */}
        <div className={`slide-up rounded-3xl overflow-hidden relative`}>
          <div className="gradient-brand p-10 sm:p-16 text-center relative">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                Install RFQ AutoPilot. Send Your Next Quote in 3 Minutes.
              </h3>
              <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Your competitors are still copying data from PDFs, switching between tabs, and typing quotation emails from scratch. You will be clicking one button and sending polished, accurate quotes from inside Gmail before they finish opening their first attachment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30 w-full sm:w-auto justify-center"
                >
                  <span>Add to Chrome — Free</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 border-2 border-white/40 text-white hover:bg-white/10 font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  Watch 90-Second Demo
                </button>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-white text-sm underline underline-offset-4 transition-colors"
                >
                  Compare All Plans
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-sm text-blue-100">
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Internal Links — SEO Resource Section */}
        <div className={`slide-up mt-14 rounded-2xl p-7 border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="text-center mb-5">
            <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Explore More About RFQ AutoPilot
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: 'RFQ Automation Software', href: 'https://rfqautopilot.com/rfq-automation-software' },
              { label: 'AI RFQ Generator', href: 'https://rfqautopilot.com/ai-rfq-generator' },
              { label: 'RFQ Email Management', href: 'https://rfqautopilot.com/rfq-email-management-tool' },
              { label: 'Gmail Extension for Sales', href: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales' },
              { label: 'PDF Data Extraction', href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf' },
              { label: 'Quotation Email Automation', href: 'https://rfqautopilot.com/quotation-email-automation' },
              { label: 'Procurement Extension', href: 'https://rfqautopilot.com/procurement-chrome-extension' },
              { label: 'RFQ for Small Business', href: 'https://rfqautopilot.com/rfq-software-small-business' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-slate-700 text-slate-400 hover:border-blue-700 hover:text-blue-400 bg-slate-800/40'
                    : 'border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-700 bg-white shadow-sm'
                }`}
              >
                <span className="text-blue-500 flex-shrink-0">→</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
