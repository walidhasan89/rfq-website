import { useEffect, useRef } from 'react';

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
        darkMode ? 'bg-[#060b18]' : 'bg-white'
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="glow-orb animate-float"
          style={{
            width: '600px', height: '600px',
            top: '-100px', left: '-200px',
            background: darkMode
              ? 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(29,78,216,0.08) 60%, transparent 100%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.05) 60%, transparent 100%)',
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: '500px', height: '500px',
            bottom: '-50px', right: '-150px',
            background: darkMode
              ? 'radial-gradient(circle, rgba(29,78,216,0.2) 0%, rgba(30,64,175,0.08) 60%, transparent 100%)'
              : 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, rgba(30,64,175,0.04) 60%, transparent 100%)',
            animationDelay: '2s',
          }}
        />
        <div
          className="glow-orb animate-float"
          style={{
            width: '300px', height: '300px',
            top: '40%', left: '50%', transform: 'translateX(-50%)',
            background: darkMode
              ? 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            animationDelay: '1s',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M0 0h60v1H0zm0 59h60v1H0zm0-30h60v1H0zM0 0v60h1V0zm59 0v60h1V0zm-30 0v60h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium
          bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AI-Powered Chrome Extension
        </div>

        {/* H1 */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          AI-Powered RFQ Processing —{' '}
          <span className="gradient-text">Extract Data, Generate Quotes,</span>{' '}
          Close Deals Faster
        </h1>

        {/* Subheadline */}
        <p className={`text-xl sm:text-2xl font-medium max-w-3xl mx-auto mb-4 leading-snug ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Turn your inbox into an intelligent RFQ processing engine. Extract data from emails and PDFs automatically, generate accurate quotes, and respond faster than ever.
        </p>

        {/* Description */}
        <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          RFQ AutoPilot uses advanced AI to read, understand, and process request-for-quote emails and attachments right where they arrive — in your inbox. No more manual data entry. No more missed details.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 btn-gradient text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 13.5 12 13.5 8.5 11.93 8.5 10 10.07 6.5 12 6.5zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
            </svg>
            Start Free Trial
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <button
            onClick={() => {
              const el = document.querySelector('#how-it-works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2.5 font-semibold text-base px-8 py-4 rounded-2xl border transition-all duration-300 cursor-pointer
              ${darkMode
                ? 'text-white border-white/15 hover:bg-white/[0.06] hover:border-white/25'
                : 'text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
          >
            See How It Works →
          </button>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm font-medium ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {['Processes 1000+ RFQs daily', '98.7% extraction accuracy', 'Enterprise-grade security'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg className="text-blue-500 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Hero visual - floating stats card */}
        <div className="mt-20 relative">
          {/* Main dashboard mockup */}
          <div className={`relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl
            ${darkMode ? 'shadow-blue-900/30' : 'shadow-slate-300/50'}
            border ${darkMode ? 'border-white/[0.08]' : 'border-slate-200/80'}`}
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
                : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
            }}
          >
            {/* Window chrome */}
            <div className={`flex items-center gap-2 px-5 py-3.5 border-b ${darkMode ? 'border-white/[0.06]' : 'border-slate-200/80'}`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className={`flex-1 text-center text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                RFQ AutoPilot — Gmail
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'RFQs Processed Today', value: '247', change: '+34%', up: true },
                  { label: 'Avg Processing Time', value: '2.1 min', change: '-91%', up: true },
                  { label: 'Quotes Generated', value: '189', change: '+340%', up: true },
                ].map((stat) => (
                  <div key={stat.label} className={`rounded-xl p-4 ${darkMode ? 'bg-white/[0.04] border border-white/[0.06]' : 'bg-white border border-slate-200/60'}`}>
                    <p className={`text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{stat.value}</span>
                      <span className="text-xs font-semibold text-emerald-500 flex items-center gap-0.5">
                        {stat.up ? '↑' : '↓'} {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Processing pipeline */}
              <div className={`rounded-xl p-4 ${darkMode ? 'bg-white/[0.04] border border-white/[0.06]' : 'bg-white border border-slate-200/60'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Live Processing Pipeline</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Live
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { email: 'rfq@supplierco.com', item: '15-line BOM PDF', status: 'Complete', time: '1.8s', color: 'emerald' },
                    { email: 'purchasing@acme.com', item: 'Email RFQ - 8 items', status: 'Processing', time: '...', color: 'blue' },
                    { email: 'orders@techcorp.io', item: 'Excel BOM (47 rows)', status: 'Queued', time: '--', color: 'slate' },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-white/[0.03]' : 'bg-slate-50'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          row.color === 'emerald' ? 'bg-emerald-500' : row.color === 'blue' ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'
                        }`} />
                        <div>
                          <p className={`text-xs font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{row.email}</p>
                          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{row.item}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-semibold ${
                          row.color === 'emerald' ? 'text-emerald-500' : row.color === 'blue' ? 'text-blue-500' : darkMode ? 'text-slate-400' : 'text-slate-400'
                        }`}>{row.status}</p>
                        <p className={`text-xs ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>{row.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={`absolute -left-4 lg:-left-16 top-12 px-4 py-3 rounded-2xl shadow-xl animate-float
            ${darkMode ? 'bg-slate-800/90 border border-white/[0.08]' : 'bg-white border border-slate-200/80 shadow-slate-200/50'}
            hidden lg:block`}
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-xs font-medium text-emerald-500 mb-0.5">✓ Extracted</p>
            <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>98.7% accuracy</p>
          </div>
          <div className={`absolute -right-4 lg:-right-12 bottom-16 px-4 py-3 rounded-2xl shadow-xl animate-float
            ${darkMode ? 'bg-slate-800/90 border border-white/[0.08]' : 'bg-white border border-slate-200/80 shadow-slate-200/50'}
            hidden lg:block`}
            style={{ animationDelay: '1.5s' }}
          >
            <p className="text-xs font-medium text-blue-500 mb-0.5">⚡ 12x faster</p>
            <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>vs. manual</p>
          </div>
        </div>
      </div>
    </section>
  );
}
