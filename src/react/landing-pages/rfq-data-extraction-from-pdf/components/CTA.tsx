import { useEffect, useRef } from 'react';

interface CTAProps {
  darkMode: boolean;
}

const trustElements = [
  { icon: '⭐⭐⭐⭐⭐', text: '4.8/5 average rating' },
  { icon: '🔒', text: 'Enterprise-grade encryption' },
  { icon: '💳', text: 'No credit card for free plan' },
  { icon: '✅', text: 'Gmail & Outlook compatible' },
  { icon: '📄', text: 'Handles any PDF format' },
];

export default function CTA({ darkMode }: CTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Top divider */}
      <div className="section-divider mb-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-900/8" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/25' : 'bg-blue-100/60'
        }`} />
        {/* Hero grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Setup steps */}
        <div className="mb-20 reveal">
          <h3 className={`text-center text-sm font-bold uppercase tracking-widest mb-8 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Quick Setup Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Install', desc: 'Add RFQ AutoPilot to Gmail or Outlook', time: '60 seconds' },
              { step: '2', title: 'Import', desc: 'Upload your product catalog for automatic matching', time: '15 minutes' },
              { step: '3', title: 'Extract', desc: 'Forward a PDF RFQ and watch AI extract every line item instantly', time: 'Instant' },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`relative rounded-2xl p-6 border text-center ${
                  darkMode
                    ? 'bg-slate-900 border-white/8'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                {idx < 2 && (
                  <div className={`hidden sm:block absolute top-1/2 -right-2 w-4 h-0.5 ${darkMode ? 'bg-white/20' : 'bg-slate-300'}`} />
                )}
                <div className="w-10 h-10 rounded-xl btn-brand flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
                  <span>{item.step}</span>
                </div>
                <h4 className={`font-bold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${darkMode ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  ⚡ {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA block */}
        <div className={`reveal relative rounded-3xl overflow-hidden ${
          darkMode
            ? 'bg-gradient-to-br from-slate-900 to-blue-950/50 border border-blue-700/30'
            : 'bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/30'
        }`}>
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-700/15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 hero-grid opacity-10" />

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8 border ${
              darkMode ? 'border-blue-600/40 bg-blue-950/40 text-blue-400' : 'border-white/20 bg-white/10 text-white'
            }`}>
              <span className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
              Stop Manual Data Entry — Start Automating Now
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-white'
            }`}>
              Your Next PDF RFQ Just Arrived.
              <br />
              <span className={darkMode ? 'shimmer-text' : 'text-blue-200'}>Extract It in 15 Seconds.</span>
            </h2>

            <p className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-blue-100'
            }`}>
              The painful ritual of manually reading PDF RFQs, copying line items, and formatting cells ends today.
              RFQ AutoPilot's <a href="https://rfqautopilot.com/ai-rfq-generator" className={`underline font-medium ${darkMode ? 'text-blue-400' : 'text-blue-200'}`}>AI RFQ generator</a> and{' '}
              <a href="https://rfqautopilot.com/quotation-email-automation" className={`underline font-medium ${darkMode ? 'text-blue-400' : 'text-blue-200'}`}>quotation email automation</a>{' '}
              extracts every product name, quantity, specification, and delivery term automatically — right inside your inbox.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 w-full sm:w-auto justify-center ${
                  darkMode
                    ? 'btn-brand text-white shadow-2xl shadow-blue-500/30'
                    : 'bg-white text-blue-700 hover:bg-blue-50 shadow-2xl shadow-black/20 hover:shadow-white/20'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Start Free — 30 RFQs/Month
                </span>
              </a>
              <button
                onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 border w-full sm:w-auto justify-center ${
                  darkMode
                    ? 'border-white/15 text-slate-200 hover:bg-white/8'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                Watch PDF Extraction Demo
              </button>
              <button
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 w-full sm:w-auto justify-center ${
                  darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-blue-200 hover:text-white'
                }`}
              >
                Compare Plans →
              </button>
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustElements.map((item) => (
                <div key={item.text} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-400' : 'text-blue-100'}`}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accuracy guarantee */}
        <div className={`reveal mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left ${
          darkMode
            ? 'bg-slate-900 border border-white/8'
            : 'bg-slate-50 border border-slate-200'
        }`}>
          <div className="text-4xl flex-shrink-0">🛡️</div>
          <div>
            <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Accuracy Guarantee</h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              "If RFQ AutoPilot's PDF extraction accuracy falls below 95% on your documents within the first 30 days,
              our team will personally optimize the AI for your specific document types — <strong>free of charge.</strong>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
