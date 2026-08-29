import { Chrome, Star, Users, Clock, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('visible');
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden pt-16 ${
      darkMode ? 'bg-slate-950' : 'bg-white'
    }`}>
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`hero-glow w-[600px] h-[600px] -top-32 -left-32 ${
          darkMode ? 'bg-brand-600 opacity-20' : 'bg-brand-400 opacity-10'
        }`} />
        <div className={`hero-glow w-[500px] h-[500px] top-20 right-0 ${
          darkMode ? 'bg-brand-700 opacity-15' : 'bg-brand-500 opacity-8'
        }`} />
        <div className={`hero-glow w-[400px] h-[400px] bottom-0 left-1/3 ${
          darkMode ? 'bg-blue-400 opacity-10' : 'bg-blue-300 opacity-8'
        }`} />

        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${
          darkMode
            ? 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)]'
        } bg-[size:60px_60px]`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center" ref={ref}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-7 reveal visible
            badge-shimmer border border-brand-200/30"
            style={{ color: darkMode ? '#60a5fa' : '#2563eb' }}
          >
            <Zap size={12} fill="currentColor" />
            <span>Chrome Extension · Works with Gmail & Outlook</span>
          </div>

          {/* H1 — reduced sizes */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5 reveal visible
            ${darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            The Procurement Chrome Extension That{' '}
            <span className="gradient-text animate-gradient-shift">Automates RFQ Processing</span>{' '}
            Inside Your Inbox
          </h1>

          {/* Subheadline — reduced size */}
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto reveal visible reveal-delay-1
            ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Stop switching between clunky enterprise platforms, spreadsheets, and your email.
            RFQ AutoPilot auto-detects RFQ emails, extracts product data from attachments, and helps
            you generate quote responses — all without leaving{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className="text-brand-500 hover:text-brand-600 transition-colors font-medium">Gmail</a>{' '}
            or{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-brand-500 hover:text-brand-600 transition-colors font-medium">Outlook</a>.
          </p>

          {/* CTA — single button only */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal visible reveal-delay-2">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand flex items-center gap-3 text-white font-bold text-base px-8 py-4 rounded-2xl relative overflow-hidden z-10 shadow-xl"
            >
              <Chrome size={20} className="relative z-10 flex-shrink-0" />
              <span className="relative z-10">Install Free on Chrome</span>
            </a>
          </div>

          {/* Trust Bar */}
          <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 reveal visible reveal-delay-3
            ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ teams</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-current opacity-20" />
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-500" />
              <span className="text-sm font-medium">5+ hours saved per week</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-current opacity-20" />
            <div className="flex items-center gap-1.5">
              <Zap size={14} className="text-brand-500" />
              <span className="text-sm font-medium">30-second setup</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-current opacity-20" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-brand-500" />
              <span className="text-sm font-medium">Works with Gmail & Outlook</span>
            </div>
          </div>
        </div>

        {/* Hero UI Preview */}
        <div className="mt-14 lg:mt-16 max-w-5xl mx-auto reveal visible reveal-delay-4">
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl border animate-float
            ${darkMode
              ? 'border-white/10 shadow-brand-900/30'
              : 'border-slate-200 shadow-slate-200/60'
            }`}
            style={{ boxShadow: darkMode
              ? '0 25px 80px rgba(59,130,246,0.15), 0 0 0 1px rgba(255,255,255,0.05)'
              : '0 25px 80px rgba(59,130,246,0.12), 0 0 0 1px rgba(59,130,246,0.08)'
            }}
          >
            {/* Browser Bar */}
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${
              darkMode ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className={`flex-1 mx-4 rounded-lg px-3 py-1 text-xs font-mono ${
                darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-400 border border-slate-200'
              }`}>
                mail.google.com/mail/u/0/#inbox
              </div>
              <img src="https://rfqautopilot.com/asset/logo.png" alt="" className="h-5 w-auto" />
            </div>

            {/* Inbox Preview */}
            <div className={`grid grid-cols-3 min-h-[320px] ${
              darkMode ? 'bg-slate-900' : 'bg-white'
            }`}>
              {/* Email List */}
              <div className={`col-span-1 border-r ${
                darkMode ? 'border-white/5' : 'border-slate-100'
              }`}>
                {[
                  { from: 'Acme Corp', subject: 'RFQ #4421 — Steel Parts', tag: 'RFQ', active: true },
                  { from: 'GlobalSupply', subject: 'Quote Request: Q2 2025', tag: 'QUOTE', active: false },
                  { from: 'PartnerInc', subject: 'Request for Quotation', tag: 'RFQ', active: false },
                ].map((email, i) => (
                  <div
                    key={i}
                    className={`p-3 border-b cursor-pointer transition-all ${
                      email.active
                        ? darkMode
                          ? 'bg-brand-900/30 border-brand-700/20'
                          : 'bg-brand-50 border-brand-100'
                        : darkMode
                          ? 'border-white/5 hover:bg-white/3'
                          : 'border-slate-50 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold truncate ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>{email.from}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        email.tag === 'RFQ'
                          ? 'bg-brand-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}>{email.tag}</span>
                    </div>
                    <p className={`text-[11px] truncate ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>{email.subject}</p>
                  </div>
                ))}
              </div>

              {/* Email Content + Sidebar */}
              <div className="col-span-2 flex">
                {/* Email */}
                <div className={`flex-1 p-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        RFQ #4421 — Steel Parts Q2 2025
                      </h3>
                      <p className="text-xs opacity-60 mt-0.5">From: procurement@acme.com</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-brand-500 text-white rounded-lg font-medium">
                      ✓ Auto-Detected
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-70 mb-3">
                    Please find attached our RFQ for Q2 2025. We require the following
                    steel components: 500 units of Part #A-221, 250 units of Part #B-104...
                  </p>
                  <div className={`p-2 rounded-lg text-xs ${
                    darkMode ? 'bg-slate-800' : 'bg-slate-50'
                  }`}>
                    <span className="opacity-50">📎 RFQ_Q2_2025.pdf — 48KB</span>
                  </div>
                </div>

                {/* AutoPilot Sidebar */}
                <div className={`w-44 border-l p-3 ${
                  darkMode ? 'border-white/5 bg-slate-800/50' : 'border-slate-100 bg-blue-50/50'
                }`}>
                  <div className="flex items-center gap-1.5 mb-3">
                    <img src="https://rfqautopilot.com/asset/logo.png" alt="" className="h-4 w-auto" />
                    <span className={`text-[10px] font-bold ${
                      darkMode ? 'text-brand-300' : 'text-brand-700'
                    }`}>AutoPilot</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Part #A-221', val: '500 units' },
                      { label: 'Part #B-104', val: '250 units' },
                      { label: 'Deadline', val: 'Apr 15' },
                    ].map((item, i) => (
                      <div key={i} className={`p-1.5 rounded-lg text-[10px] ${
                        darkMode ? 'bg-slate-700/60' : 'bg-white border border-slate-100'
                      }`}>
                        <div className="opacity-50 mb-0.5">{item.label}</div>
                        <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {item.val}
                        </div>
                      </div>
                    ))}
                    <button className="w-full text-[10px] font-bold py-1.5 rounded-lg btn-brand text-white relative overflow-hidden z-10">
                      <span className="relative z-10">Generate Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value prop strip moved below hero mockup */}
        <div className={`mt-12 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl reveal visible reveal-delay-4 ${
          darkMode
            ? 'bg-slate-900/70 border border-white/6'
            : 'bg-slate-50 border border-slate-200'
        }`}>
          <p className={`text-sm sm:text-base leading-relaxed text-center ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Enterprise{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
              RFQ automation software
            </a>{' '}
            costs thousands and takes months to deploy.
            RFQ AutoPilot gives you{' '}
            <strong className={darkMode ? 'text-white' : 'text-slate-800'}>80% of the value in 30 seconds</strong>{' '}
            — right inside the browser. No contracts. No IT tickets. No learning curve.
          </p>
        </div>
      </div>
    </section>
  );
}
