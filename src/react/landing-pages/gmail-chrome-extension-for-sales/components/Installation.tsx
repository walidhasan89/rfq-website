import { useEffect, useRef } from 'react';

interface InstallationProps {
  darkMode: boolean;
}

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const steps = [
  {
    number: '01',
    icon: '🌐',
    title: 'Add to Chrome',
    time: '10 seconds',
    description: 'Click the "Add to Chrome" button on this page. Click "Add Extension" in the Chrome permission popup. The RFQ AutoPilot icon appears in your Chrome toolbar instantly.',
    note: 'No download. No executable file. No restart required.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: '✉️',
    title: 'Connect Your Gmail',
    time: '15 seconds',
    description: 'Click the RFQ AutoPilot icon in your Chrome toolbar. Click "Connect Gmail Account." Select your Gmail account and grant the requested permissions to read and compose emails.',
    note: 'We never delete, move, or modify your existing emails.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    number: '03',
    icon: '📦',
    title: 'Import Your Products',
    time: '2–5 minutes',
    description: 'Open the extension settings panel. Upload a CSV or Excel file with your products, SKUs, and pricing. Or connect your ERP/inventory system via API. Review the imported product list.',
    note: 'Skip this step initially — the AI still extracts RFQ data while you build your catalog.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Process Your First RFQ',
    time: '60 seconds',
    description: 'Open Gmail, find an email with an RFQ, notice the green RFQ badge. Click the RFQ AutoPilot icon, watch AI extract all data from email and attachments, review the generated quotation draft, click send.',
    note: 'Most users describe it as "magic" — 15 minutes of manual work completed in seconds.',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Installation({ darkMode }: InstallationProps) {
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
      id="installation"
      ref={sectionRef}
      className={`py-24 lg:py-32 section-bg-alt-${darkMode ? 'dark' : 'light'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              🛠️ INSTALLATION
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Install in 30 Seconds —{' '}
            <span className="gradient-text">Start Quoting in 5 Minutes</span>
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            No IT department. No complex configuration. No training sessions. Be up and running in under 5 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`slide-up delay-${(i + 1) * 100} group relative rounded-2xl p-6 border transition-all duration-500 card-hover ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-blue-800/60'
                  : 'bg-white border-slate-200 hover:border-blue-200'
              }`}
            >
              {/* Step Number */}
              <div className={`text-xs font-black tracking-wider mb-4 gradient-text`}>
                STEP {step.number}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl mb-4 bg-gradient-to-br ${step.color} shadow-md`}>
                {step.icon}
              </div>

              {/* Time Badge */}
              <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                darkMode ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                ⏱️ {step.time}
              </div>

              <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {step.description}
              </p>
              <p className={`text-sm italic ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                💡 {step.note}
              </p>

              {/* Connector arrow */}
              {i < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                    darkMode ? 'bg-slate-800 border border-slate-700 text-slate-400' : 'bg-white border border-slate-200 text-slate-400'
                  }`}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Table */}
        <div className={`slide-up rounded-2xl overflow-hidden border mb-10 ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className={`px-6 py-4 border-b ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
            <h3 className={`font-bold text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Total Setup Summary</h3>
          </div>
          <div className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
            {steps.map((step, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-3 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
                <span className={`text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Step {i + 1}</span>
                <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{step.title}</span>
                <span className={`text-sm font-bold text-right gradient-text`}>{step.time}</span>
              </div>
            ))}
            <div className={`grid grid-cols-3 px-6 py-4 ${darkMode ? 'bg-blue-950/30' : 'bg-blue-50'}`}>
              <span className={`text-sm font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Total</span>
              <span className={`text-sm font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Ready to quote</span>
              <span className="text-sm font-black gradient-text text-right">Under 5 minutes</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className={`slide-up text-sm font-medium mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Ready? Install now and process your first RFQ in 5 minutes.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-up delay-100 btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base shadow-xl pulse-glow"
          >
            <span>Add to Chrome — Free</span>
            <span>→</span>
          </a>
        </div>

        {/* External trust links */}
        <div className={`slide-up mt-10 flex flex-wrap justify-center gap-4 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <a
            href="https://developer.chrome.com/docs/extensions"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline underline-offset-2 transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
          >
            Chrome Extensions Documentation
          </a>
          <span>·</span>
          <a
            href="https://workspace.google.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline underline-offset-2 transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
          >
            Google Workspace Marketplace
          </a>
          <span>·</span>
          <a
            href="https://support.google.com/chrome_webstore/answer/1047776"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline underline-offset-2 transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
          >
            Chrome Web Store Security
          </a>
          <span>·</span>
          <a
            href="https://rfqautopilot.com/ai-rfq-generator"
            className={`underline underline-offset-2 transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
          >
            AI RFQ Generator Guide
          </a>
        </div>
      </div>
    </section>
  );
}
