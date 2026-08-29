import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const CHROME_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const FEATURES = [
  { icon: '📡', text: 'Automatic RFQ detection in Gmail and Outlook' },
  { icon: '📋', text: 'Multi-line item extraction from any email or attachment format' },
  { icon: '🎯', text: 'Product catalog matching across thousands of SKUs' },
  { icon: '💲', text: 'Customer-specific pricing applied automatically' },
  { icon: '📨', text: 'Professional quotation emails generated in your inbox' },
  { icon: '📊', text: 'Analytics dashboard tracking quotes and conversions' },
];

const TRUST = [
  { icon: '⭐', text: '4.8/5 average rating' },
  { icon: '🔒', text: 'Enterprise-grade security' },
  { icon: '💳', text: 'No credit card for free plan' },
  { icon: '✅', text: 'Gmail & Outlook compatible' },
  { icon: '📦', text: 'Built for high-volume distributors' },
];

export default function InstallCTA({ dark }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="install"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-950' : 'bg-white'}`}
    >
      {/* Hero gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          dark ? 'bg-blue-600/12' : 'bg-blue-400/8'
        }`} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${dark ? '#fff' : '#000'} 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Join headline */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              🚀 Get Started Free
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 max-w-4xl mx-auto ${dark ? 'text-white' : 'text-slate-900'}`}>
            Join Distributors Who Quote Faster,{' '}
            <span className="gradient-text">Win More</span>, and Scale Without Adding Staff
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Every day you process RFQs manually is a day you lose orders to faster competitors. Start free today.
          </p>
        </div>

        {/* Features + CTA two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* What you get */}
          <div className="reveal-left">
            <h3 className={`text-xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              What Distributors Get Immediately
            </h3>
            <div className="space-y-3">
              {FEATURES.map(f => (
                <div key={f.text} className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 border ${
                  dark
                    ? 'bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-sm'
                }`}>
                  <span className="text-2xl">{f.icon}</span>
                  <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="reveal-right">
            <div className={`rounded-2xl border overflow-hidden ${
              dark
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/20'
                : 'bg-gradient-to-br from-blue-600 to-indigo-700 border-transparent shadow-2xl shadow-blue-500/30'
            }`}>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Your Next RFQ Is Sitting in Your Inbox Right Now.
                </h3>
                <p className={`text-base mb-6 ${dark ? 'text-blue-300' : 'text-blue-100'}`}>
                  Quote it in 4 minutes.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Install the Chrome extension — 30 seconds',
                    'Upload your product catalog — 15 minutes',
                    'Process your first RFQ — under 5 minutes',
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        dark ? 'bg-blue-500 text-white' : 'bg-white/20 text-white'
                      }`}>
                        {i + 1}
                      </div>
                      <p className={`text-sm ${dark ? 'text-slate-300' : 'text-blue-50'}`}>{step}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href={CHROME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02] ${
                      dark
                        ? 'btn-gradient text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white text-blue-700 hover:bg-blue-50 shadow-xl'
                    }`}
                  >
                    <span>Start Free — 30 RFQs/Month</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <div className={`flex flex-wrap gap-3 justify-center text-xs ${dark ? 'text-slate-400' : 'text-blue-100'}`}>
                    {['💳 No credit card', '14-day trial', '✅ Free plan forever'].map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {TRUST.map(t => (
                <span key={t.text} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                  dark
                    ? 'bg-slate-800/60 text-slate-300 border border-slate-700/50'
                    : 'bg-slate-50 text-slate-600 border border-slate-200'
                }`}>
                  {t.icon} {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SEO internal links */}
        <div className={`reveal mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
          <a href="/rfq-software-small-business" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}>RFQ Software for Small Business</a>
          <span>·</span>
          <a href="/procurement-chrome-extension" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}>Procurement Chrome Extension</a>
          <span>·</span>
          <a href="/ai-rfq-generator" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}>AI RFQ Generator</a>
          <span>·</span>
          <a href="/rfq-automation-software" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}>RFQ Automation Software</a>
        </div>

        {/* Guarantee */}
        <div className={`reveal rounded-2xl p-6 lg:p-8 text-center border ${
          dark
            ? 'bg-gradient-to-r from-green-500/5 to-teal-500/5 border-green-500/20'
            : 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200'
        }`}>
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-2xl mb-4 ${
            dark ? 'bg-green-500/10' : 'bg-green-100'
          }`}>
            🛡️
          </div>
          <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Distributor Performance Guarantee
          </h3>
          <p className={`max-w-2xl mx-auto text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            If RFQ AutoPilot does not reduce your average quote processing time by at least{' '}
            <strong className={dark ? 'text-green-400' : 'text-green-700'}>50% within the first 30 days</strong>,
            our team will provide a dedicated optimization session for your catalog and workflow —
            completely free.
          </p>
        </div>
      </div>
    </section>
  );
}
