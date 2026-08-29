import { useEffect, useRef } from 'react';

const CHROME_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

interface HeroProps { dark: boolean; }

export default function Hero({ dark }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;
    const el = ref.current;
    if (!el) return;
    // Small delay to let render settle
    const timer = setTimeout(() => {
      el.querySelectorAll('.hero-reveal').forEach((node, i) => {
        setTimeout(() => {
          (node as HTMLElement).style.opacity = '1';
          (node as HTMLElement).style.transform = 'translateY(0)';
        }, i * 130);
      });
      animatedRef.current = true;
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-16 ${
        dark
          ? 'bg-slate-950'
          : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`hero-glow w-[700px] h-[700px] -top-48 -left-48 ${
            dark ? 'bg-blue-600/20' : 'bg-blue-400/15'
          }`}
        />
        <div
          className={`hero-glow w-[500px] h-[500px] top-1/2 -right-32 ${
            dark ? 'bg-indigo-600/20' : 'bg-indigo-400/10'
          }`}
        />
        <div
          className={`hero-glow w-[300px] h-[300px] bottom-0 left-1/3 ${
            dark ? 'bg-blue-500/15' : 'bg-blue-300/15'
          }`}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(${dark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ paddingTop: '100px' }}>
        {/* Badge — 80px top spacing */}
        <div
          className="hero-reveal flex justify-center mb-6"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease', marginTop: '80px' }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
            dark
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Chrome Extension for Gmail &amp; Outlook
          </div>
        </div>

        {/* H1 — reduced font size */}
        <h1
          className="hero-reveal"
          style={{
            opacity: 0,
            transform: 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-5xl mx-auto ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>
            RFQ Automation for Distributors —{' '}
            <span className="gradient-text">Respond to Quote Requests</span>{' '}
            in Minutes, Not Hours
          </span>
        </h1>

        {/* Subheadline — reduced font size */}
        <p
          className="hero-reveal"
          style={{
            opacity: 0,
            transform: 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className={`block text-base sm:text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            You carry thousands of SKUs. You receive dozens of RFQs every day. You compete on speed, accuracy, and price.{' '}
            <span className={dark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>
              Stop letting manual quote processing slow you down — automate it inside the inbox where your RFQs arrive.
            </span>
          </span>
        </p>

        {/* CTA Buttons — only primary */}
        <div
          className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <a
            href={CHROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient flex items-center gap-2.5 px-8 py-4 rounded-full text-white text-base font-bold shadow-xl shadow-blue-500/30 animate-pulse-glow"
          >
            <span className="flex items-center gap-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
              Start Free — 30 RFQs/Month
            </span>
          </a>
          <a
            href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-200 hover:scale-105 ${
              dark
                ? 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 bg-slate-900/50'
                : 'border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 bg-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            See How It Works
          </a>
        </div>

        {/* Trust Badges */}
        <div
          className="hero-reveal flex flex-wrap items-center justify-center gap-3 mb-10"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          {['✓ Built for high-volume, multi-SKU operations', '✓ Works inside Gmail & Outlook', '✓ Free plan available'].map(t => (
            <span key={t} className={`text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
              dark ? 'text-slate-400 bg-slate-800/60' : 'text-slate-500 bg-slate-100'
            }`}>{t}</span>
          ))}
        </div>

        {/* Stat Banner */}
        <div
          className="hero-reveal flex justify-center mb-16"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl ${
            dark
              ? 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20'
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200'
          }`}>
            <span className="text-2xl">📊</span>
            <p className={`text-sm sm:text-base font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
              Distributors using RFQ AutoPilot respond to quotes{' '}
              <span className="gradient-text font-extrabold">11x faster</span> and process{' '}
              <span className="gradient-text font-extrabold">5x more RFQs per day</span> without adding staff.
            </p>
          </div>
        </div>

        {/* Hero illustration / mockup */}
        <div
          className="hero-reveal relative max-w-4xl mx-auto"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl border ${
            dark ? 'border-slate-700/50 bg-slate-900' : 'border-slate-200 bg-white'
          }`}>
            {/* Fake browser bar */}
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${
              dark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className={`flex-1 mx-4 px-3 py-1 rounded-md text-xs ${
                dark ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-400 border border-slate-200'
              }`}>
                mail.google.com — RFQ AutoPilot Active ✓
              </div>
            </div>
            {/* Email mockup content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Email */}
                <div className={`rounded-xl p-5 ${dark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                  <div className={`flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span>📨</span> Incoming RFQ Email
                  </div>
                  <div className={`text-sm font-medium mb-2 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                    From: buyer@acme-construction.com
                  </div>
                  <div className={`text-xs mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Subject: Request for Quote — Project BOM #2841
                  </div>
                  <div className={`text-xs space-y-1 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <p>Hi, please quote the following items:</p>
                    <p>• 50x SS 304 Ball Valve 2" 150#</p>
                    <p>• 200x Hex Bolt M10x50 A2-70</p>
                    <p>• 25x LED Panel 60x60 4000K</p>
                    <p>• 100x PVC Conduit 20mm 3m...</p>
                    <p className={`font-medium ${dark ? 'text-blue-400' : 'text-blue-600'}`}>+ 83 more items in attachment</p>
                  </div>
                </div>
                {/* Right: Extracted + AI */}
                <div className={`rounded-xl p-5 ${dark ? 'bg-blue-900/20 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`}>
                  <div className={`flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wide ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span>⚡</span> RFQ AutoPilot — Processing
                  </div>
                  <div className="space-y-2">
                    {[
                      { status: '✅', text: '87 line items extracted', sub: 'PDF processed in 18 sec' },
                      { status: '✅', text: '79 items matched to catalog', sub: '91% auto-match rate' },
                      { status: '✅', text: 'Tier pricing applied', sub: 'Customer: Platinum — 22% off' },
                      { status: '⚡', text: 'Quote draft ready', sub: '4 min 12 sec total' },
                    ].map(item => (
                      <div key={item.text} className="flex items-start gap-2">
                        <span className="text-sm">{item.status}</span>
                        <div>
                          <p className={`text-xs font-medium ${dark ? 'text-slate-200' : 'text-slate-800'}`}>{item.text}</p>
                          <p className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-4 flex items-center gap-2 text-xs font-bold ${dark ? 'text-green-400' : 'text-green-700'}`}>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Quote ready to send — 42 min saved
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating badges */}
          <div className={`absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float ${
            dark ? 'bg-green-500 text-white' : 'bg-green-500 text-white'
          }`}>
            ⚡ 11x Faster Quotes
          </div>
          <div className={`absolute -bottom-4 -left-4 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float ${
            dark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
          }`} style={{ animationDelay: '1.5s' }}>
            🏆 31% Higher Win Rate
          </div>
        </div>

        {/* Hero description — moved below mockup for natural flow */}
        <div
          className="hero-reveal mt-16 max-w-3xl mx-auto pb-8"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <p className={`text-sm sm:text-base leading-relaxed text-center ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Distribution is a speed game. The first distributor to return a professional, accurate quote wins the order.{' '}
            <a href="https://www.mckinsey.com/industries/advanced-electronics/our-insights/distribution-sales-productivity" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Research shows</a>{' '}
            that suppliers spend 31% of their time on inefficient manual processes — reading emails, looking up product codes, checking inventory, and typing quotation replies one painful line item at a time.{' '}
            <a href="/rfq-automation-software" className={`font-medium underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ AutoPilot</a>{' '}
            eliminates that overhead so you quote faster, win more, and scale without adding staff.
          </p>
        </div>
      </div>
    </section>
  );
}
