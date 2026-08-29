import { useEffect, useRef } from 'react';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 160);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 noise-overlay ${
        darkMode ? 'hero-bg-dark' : 'hero-bg-light'
      }`}
    >
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'}`} />
        <div className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`} />
        <div className={`absolute bottom-20 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge — 80px top margin for breathing room */}
          <div className="fade-in flex justify-center" style={{ marginBottom: '1.75rem', marginTop: '80px' }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border ${
              darkMode
                ? 'bg-blue-950/60 border-blue-500/30 text-blue-300'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              🚀 Just Launched · Featured on Chrome Web Store
            </div>
          </div>

          {/* H1 */}
          <h1 className={`fade-in delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            The #1 Gmail Chrome Extension{' '}
            <span className="gradient-text block sm:inline">for Sales Teams</span>{' '}
            Handling RFQ Emails
          </h1>

          {/* Subheadline — concise, no paragraph wall */}
          <p className={`fade-in delay-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-9 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Auto-detect quote requests, extract buyer requirements, and generate professional quotation replies —{' '}
            <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              all without leaving Gmail.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="fade-in delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base shadow-2xl pulse-glow w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" className="opacity-20" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span>Add to Chrome — It's Free</span>
            </a>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center border ${
                darkMode
                  ? 'border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-white hover:bg-white/5'
                  : 'border-slate-200 text-slate-700 hover:border-blue-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>▶</span>
              <span>Watch 90-Second Demo</span>
            </button>
          </div>

          {/* Trust Badge Line */}
          <div className={`fade-in delay-400 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {[
              '✓ 30-second installation',
              '✓ Works natively inside Gmail',
              '✓ Free plan — no credit card',
            ].map((item) => (
              <span key={item} className={`flex items-center gap-1 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Visual — Gmail Mockup */}
        <div className="fade-in delay-500 mt-14 relative max-w-5xl mx-auto">
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              darkMode
                ? 'border border-slate-700/50 bg-slate-900'
                : 'border border-slate-200 bg-white'
            }`}
            style={{
              boxShadow: darkMode
                ? '0 40px 100px rgba(59,130,246,0.15), 0 0 0 1px rgba(59,130,246,0.1)'
                : '0 40px 100px rgba(0,0,0,0.12)',
            }}
          >
            {/* Browser Bar */}
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className={`flex-1 mx-4 py-1 px-3 rounded-lg text-xs text-center ${
                darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500'
              }`}>
                mail.google.com
              </div>
            </div>

            {/* Gmail Interface */}
            <div className="flex min-h-80">
              {/* Sidebar */}
              <div className={`hidden sm:flex w-48 flex-col p-3 gap-1 border-r ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
              }`}>
                <button className="btn-primary px-3 py-2 rounded-xl text-white text-xs font-semibold mb-2">
                  <span>✏️ Compose</span>
                </button>
                {['Inbox (47)', 'Starred', 'Sent', 'Drafts', '— RFQ Emails (6)'].map((item, i) => (
                  <div
                    key={i}
                    className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      i === 4
                        ? 'bg-blue-100 text-blue-700 font-bold'
                        : darkMode
                          ? 'text-slate-400 hover:bg-white/5'
                          : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Email List */}
              <div className={`flex-1 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <div className={`px-4 py-2 text-xs font-semibold border-b ${
                  darkMode ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-100'
                }`}>
                  Inbox — 47 messages
                </div>
                {[
                  { from: 'Global Procurement Inc.', subject: 'RFQ - Industrial Valves Q3', time: '10:24 AM', rfq: true, urgent: true, read: false },
                  { from: 'TechSource Asia Ltd.', subject: 'Request for Quote — PCB Components', time: '9:11 AM', rfq: true, urgent: false, read: false },
                  { from: 'Newsletter Digest', subject: 'Your weekly industry update', time: '8:45 AM', rfq: false, urgent: false, read: true },
                  { from: 'Midwest Manufacturing', subject: 'RFQ Batch #2847 — Fasteners', time: 'Yesterday', rfq: true, urgent: false, read: true },
                ].map((email, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 border-b cursor-pointer transition-colors ${
                      darkMode
                        ? `border-slate-800 ${i === 0 ? 'bg-blue-950/30' : 'hover:bg-white/3'}`
                        : `border-slate-50 ${i === 0 ? 'bg-blue-50/80' : 'hover:bg-slate-50'}`
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {email.from[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-xs font-semibold truncate ${
                          !email.read
                            ? darkMode ? 'text-white' : 'text-slate-900'
                            : darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>{email.from}</span>
                        {email.rfq && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                            ● RFQ
                          </span>
                        )}
                        {email.urgent && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-600">
                            ⚡ Urgent
                          </span>
                        )}
                      </div>
                      <span className={`text-xs truncate block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {email.subject}
                      </span>
                    </div>
                    <span className={`text-xs flex-shrink-0 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{email.time}</span>
                  </div>
                ))}
              </div>

              {/* RFQ Panel */}
              <div className={`hidden lg:flex w-64 flex-col border-l ${
                darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/50 border-slate-200'
              }`}>
                <div className="px-4 py-3 border-b border-inherit">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold gradient-text">RFQ AutoPilot</span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-700 font-semibold">● Active</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-white'} border ${darkMode ? 'border-slate-600/50' : 'border-blue-100'}`}>
                    <div className="text-xs font-semibold text-blue-500 mb-2">📋 Extracted Data</div>
                    {[
                      ['Product', 'Gate Valve 2"'],
                      ['Quantity', '500 Units'],
                      ['Delivery', 'Sep 30, 2025'],
                      ['Spec', 'SS316, ANSI 150'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs mb-1.5">
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{k}:</span>
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-primary w-full py-2.5 rounded-xl text-white text-xs font-bold">
                    <span>✨ Generate Quote</span>
                  </button>
                  <div className={`text-center text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Ready in ~3 seconds
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -top-4 -right-4 hidden xl:block floating">
            <div className={`px-4 py-2.5 rounded-2xl shadow-xl text-xs font-semibold ${
              darkMode ? 'bg-green-900/80 text-green-300 border border-green-700/50' : 'bg-green-50 text-green-700 border border-green-200'
            }`}>
              ⚡ Quote sent in 3 min
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden xl:block floating-delayed">
            <div className={`px-4 py-2.5 rounded-2xl shadow-xl text-xs font-semibold ${
              darkMode ? 'bg-blue-900/80 text-blue-300 border border-blue-700/50' : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              📊 22 RFQs processed today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
