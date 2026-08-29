import { useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const orbs = heroRef.current.querySelectorAll('.hero-orb') as NodeListOf<HTMLElement>;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.3;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Grid pattern */}
      <div className={`absolute inset-0 hero-grid opacity-60 ${darkMode ? '' : 'opacity-40'}`} />

      {/* Gradient orbs */}
      <div className="hero-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl transition-transform duration-700 ease-out" />
      <div className="hero-orb absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-800/15 blur-3xl transition-transform duration-700 ease-out" />
      <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-3xl transition-transform duration-700 ease-out" />

      {/* Radial spotlight */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-radial-[ellipse_80%_50%_at_50%_0%] from-blue-900/30 to-transparent' : 'bg-radial-[ellipse_80%_50%_at_50%_0%] from-blue-50/80 to-transparent'}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 mt-20 fade-in-up">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
            darkMode
              ? 'bg-blue-950/60 border-blue-700/40 text-blue-300'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-500 pulse-dot" />
            AI-Powered PDF RFQ Extraction — Works Inside Gmail & Outlook
          </div>
        </div>

        {/* H1 */}
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-5 fade-in-up delay-100 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Extract RFQ Data from{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">PDF Attachments</span>
          <br />
          — Automatically, Inside Your Inbox
        </h1>

        {/* Subheadline */}
        <p className={`text-base sm:text-lg font-medium max-w-2xl mx-auto mb-5 leading-relaxed fade-in-up delay-200 ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Stop manually reading PDF RFQs line by line. Let AI extract every product name, quantity,
          specification, and delivery term — and pre-fill your quote reply in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 fade-in-up delay-400">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-lg font-bold shadow-2xl shadow-blue-500/30 w-full sm:w-auto justify-center"
          >
            <span className="flex items-center gap-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12l4-4 4 4M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Extract Your First PDF Free
            </span>
          </a>
          <button
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 border w-full sm:w-auto justify-center ${
              darkMode
                ? 'border-white/15 text-slate-200 hover:bg-white/8 hover:border-white/25'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            See PDF Extraction in Action
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 fade-in-up delay-500">
          {[
            { icon: '✓', text: '98.7% extraction accuracy' },
            { icon: '✓', text: 'Handles scanned & digital PDFs' },
            { icon: '✓', text: 'Works inside Gmail & Outlook' },
          ].map((badge) => (
            <div
              key={badge.text}
              className={`flex items-center gap-2 text-sm font-medium ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span className="text-blue-500 font-bold">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium max-w-2xl mx-auto fade-in-up delay-600 ${
          darkMode
            ? 'bg-amber-950/40 border border-amber-700/30 text-amber-300'
            : 'bg-amber-50 border border-amber-200 text-amber-800'
        }`}>
          <span className="text-2xl">📊</span>
          <p>
            Sales teams spend an average of{' '}
            <strong>34 minutes per PDF RFQ</strong> on manual data entry.
            RFQ AutoPilot reduces that to{' '}
            <strong>under 45 seconds</strong>.
          </p>
        </div>

        {/* Hero visual mockup */}
        <div className="mt-16 relative fade-in-up delay-600">
          <div className={`relative mx-auto max-w-4xl rounded-3xl overflow-hidden ${
            darkMode
              ? 'bg-slate-900 border border-white/10 shadow-2xl shadow-black/50'
              : 'bg-slate-50 border border-slate-200 shadow-2xl shadow-slate-900/10'
          }`}>
            {/* Mockup header */}
            <div className={`flex items-center gap-2 px-5 py-4 border-b ${
              darkMode ? 'border-white/8 bg-slate-950/80' : 'border-slate-200 bg-white'
            }`}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className={`ml-4 flex-1 h-6 rounded-lg text-xs flex items-center px-3 font-mono ${
                darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
              }`}>
                mail.google.com — RFQ AutoPilot Active
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-500/15 border border-green-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
                <span className="text-green-500 text-xs font-semibold">Extracting...</span>
              </div>
            </div>

            {/* Mockup content */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
              {/* Left: Email */}
              <div className={`p-6 border-r ${darkMode ? 'border-white/8' : 'border-slate-200'}`}>
                <div className={`flex items-start gap-3 mb-4`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    P
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>procurement@acmecorp.com</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Re: RFQ-2024-0847 — Q4 Components</p>
                  </div>
                </div>
                <div className={`rounded-xl p-4 border ${darkMode ? 'bg-slate-800/60 border-white/8' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    </svg>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>RFQ-2024-0847.pdf</span>
                    <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>• 22 pages</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { col: 'Product', val: 'SS Hex M10-50mm' },
                      { col: 'Qty', val: '5,000 pcs' },
                      { col: 'Spec', val: 'ISO 4017 Grade 8.8' },
                    ].map((row) => (
                      <div key={row.col} className={`flex justify-between text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <span className="font-medium">{row.col}:</span>
                        <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{row.val}</span>
                      </div>
                    ))}
                    <div className={`text-xs italic mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>+ 197 more line items...</div>
                  </div>
                </div>
              </div>

              {/* Right: Extracted data */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>AI Extraction Complete</span>
                  <span className="ml-auto text-xs font-bold text-green-500">⚡ 12 sec</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Line items extracted', val: '200', color: 'text-blue-500' },
                    { label: 'Products matched', val: '187/200', color: 'text-green-500' },
                    { label: 'Flagged for review', val: '13', color: 'text-amber-500' },
                    { label: 'Quote draft ready', val: '✓ Yes', color: 'text-green-500' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs ${
                        darkMode ? 'bg-slate-800/60' : 'bg-slate-100/80'
                      }`}
                    >
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 btn-brand rounded-xl px-4 py-2.5 text-white text-xs font-semibold text-center cursor-pointer">
                  <span>Send Quote Draft →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className={`absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold float-anim ${
            darkMode
              ? 'bg-slate-800 border border-white/15 text-white shadow-xl'
              : 'bg-white border border-slate-200 text-slate-800 shadow-xl'
          }`}>
            <span className="text-lg">⚡</span>
            <div>
              <p>Processing time</p>
              <p className="text-blue-500 font-black">8–15 seconds</p>
            </div>
          </div>

          <div className={`absolute -bottom-4 -left-4 hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold float-anim delay-300 ${
            darkMode
              ? 'bg-slate-800 border border-white/15 text-white shadow-xl'
              : 'bg-white border border-slate-200 text-slate-800 shadow-xl'
          }`}>
            <span className="text-lg">🎯</span>
            <div>
              <p>Accuracy rate</p>
              <p className="text-green-500 font-black">98.7%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
