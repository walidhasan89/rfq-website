import { useEffect, useRef } from 'react';
import { Zap, Play, Check, ChevronRight, Mail, FileText, BarChart3, Sparkles } from 'lucide-react';

interface HeroProps { darkMode: boolean; }

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function Hero({ darkMode }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .fade-in').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const trustBadges = [
    'Native Outlook integration',
    'Microsoft 365 compatible',
    'Enterprise deployment ready',
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36 pb-16 noise-overlay ${
        darkMode ? 'hero-gradient-dark' : 'hero-gradient-light'
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${darkMode ? 'dot-pattern-dark' : 'dot-pattern'} opacity-50`} />
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} />
        <div className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-300'}`} />
        <div className={`absolute bottom-20 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="fade-up flex justify-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium badge-gradient ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              <Sparkles size={14} className="text-blue-500" />
              <span>Outlook Add-in for RFQ Processing</span>
              <ChevronRight size={14} className="opacity-60" />
            </div>
          </div>

          {/* H1 */}
          <h1 className={`fade-up stagger-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Automate RFQ Processing{' '}
            <span className="gradient-text">Inside Microsoft Outlook</span>
            {' '}— Detect, Extract, Quote
          </h1>

          {/* Subheadline — always visible */}
          <p className={`fade-up stagger-2 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-8 leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Your enterprise runs on Outlook. Your{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className="underline decoration-blue-400/50 hover:decoration-blue-500 transition-all duration-200">
              RFQ processing
            </a>{' '}
            should too. Detect incoming quote requests, extract buyer requirements from emails and PDF attachments, and generate professional quotation replies — all without leaving Microsoft Outlook.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient btn-glow pulse-glow flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Zap size={18} />
              <span>Install Outlook Add-in — Free</span>
            </a>
            <button
              onClick={() => {}}
              className={`flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold border transition-all duration-300 w-full sm:w-auto justify-center group ${
                darkMode
                  ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/30'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-50'
              }`}>
                <Play size={12} fill="currentColor" className="text-blue-500 ml-0.5" />
              </div>
              <span>Watch Outlook Demo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="fade-up stagger-4 flex flex-wrap items-center justify-center gap-3 mb-10">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 text-sm trust-pill px-3 py-1.5 rounded-full ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <Check size={12} className="text-blue-500 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Outlook Stat Banner */}
          <div className={`fade-up stagger-5 inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium max-w-2xl mx-auto ${
            darkMode
              ? 'bg-blue-500/10 border border-blue-500/20 text-blue-300'
              : 'bg-blue-50 border border-blue-100 text-blue-700'
          }`}>
            <BarChart3 size={18} className="text-blue-500 flex-shrink-0" />
            <p className="text-left">
              <strong>Over 400 million people</strong> use Microsoft Outlook worldwide. RFQ AutoPilot ensures every Outlook-based sales team can automate their{' '}
              <a href="https://rfqautopilot.com/rfq-email-management-tool" className="underline decoration-blue-400/50 hover:decoration-blue-600 transition-all duration-200 font-semibold">
                quoting workflow
              </a>{' '}
              — just like Gmail users already do.
            </p>
          </div>
        </div>

        {/* Hero Description — moved below banner for better layout */}
        <div className={`fade-up stagger-6 mt-12 max-w-4xl mx-auto`}>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
            {[
              {
                icon: '📧',
                title: 'Works Inside Outlook',
                desc: 'No tab switching, no external platforms. The entire RFQ workflow lives inside the Outlook interface your team already uses every day.',
              },
              {
                icon: '🤖',
                title: 'AI-Powered Extraction',
                desc: 'Our AI detects RFQs, extracts product data from emails and PDF attachments, and applies your pricing rules automatically.',
                link: { href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf', text: 'PDF extraction →' },
              },
              {
                icon: '⚡',
                title: 'Quote in Under 5 Minutes',
                desc: 'From RFQ detection to polished quotation reply — entirely within Outlook. One inbox. One workflow. Zero context switching.',
                link: { href: 'https://rfqautopilot.com/quotation-email-automation', text: 'See automation →' },
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30'
                    : 'bg-white/70 border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link.href} className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
                        {item.link.text}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual — Outlook Mockup */}
        <div className="mt-16 fade-up stagger-6">
          <div className={`relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl ${
            darkMode ? 'shadow-blue-900/40' : 'shadow-blue-200/60'
          }`}
            style={{ boxShadow: darkMode ? '0 40px 120px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.15)' : '0 40px 120px rgba(59,130,246,0.15), 0 0 0 1px rgba(59,130,246,0.1)' }}
          >
            {/* Window chrome */}
            <div className={`flex items-center gap-2 px-5 py-3 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className={`flex-1 mx-4 h-6 rounded-md text-xs flex items-center px-3 ${darkMode ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-400'}`}>
                Microsoft Outlook — Inbox
              </div>
            </div>

            {/* Outlook interface mock */}
            <div className={`flex min-h-80 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
              {/* Left sidebar */}
              <div className={`w-48 flex-shrink-0 p-3 border-r ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className={`text-xs font-semibold mb-3 px-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>FOLDERS</div>
                {['Inbox', 'Sent', 'Drafts', 'RFQ Requests'].map((folder, i) => (
                  <div key={folder} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs cursor-pointer mb-0.5 ${
                    i === 0
                      ? darkMode ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-50 text-blue-700'
                      : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600'
                  }`}>
                    <Mail size={12} />
                    <span>{folder}</span>
                    {i === 0 && <span className="ml-auto text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>}
                  </div>
                ))}
              </div>

              {/* Email list */}
              <div className={`w-64 flex-shrink-0 border-r ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className={`p-3 border-b text-xs font-semibold ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                  Inbox — 47 Messages
                </div>
                {[
                  { from: 'procurement@acme.com', subject: 'RFQ — Industrial Parts Q4', time: '2m', badge: true },
                  { from: 'buyer@techcorp.com', subject: 'Request for Quote #8821', time: '14m', badge: true },
                  { from: 'purchasing@globex.com', subject: 'Urgent: RFQ Needed Today', time: '1h', badge: false },
                ].map((email, i) => (
                  <div key={i} className={`p-3 border-b cursor-pointer transition-colors ${
                    i === 0
                      ? darkMode ? 'bg-blue-600/10 border-slate-700' : 'bg-blue-50/50 border-slate-200'
                      : darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold truncate ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{email.from}</span>
                      <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{email.time}</span>
                    </div>
                    <div className={`text-xs truncate ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{email.subject}</div>
                    {email.badge && (
                      <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        RFQ Detected
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Main content + sidebar */}
              <div className="flex-1 flex overflow-hidden">
                {/* Email body */}
                <div className={`flex-1 p-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="mb-4">
                    <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>RFQ — Industrial Parts Q4</h3>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>From: procurement@acme.com · 2 attachments</p>
                  </div>
                  <div className={`text-xs leading-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <p className="mb-2">Dear Sales Team,</p>
                    <p className="mb-2">Please provide a quotation for the following items as soon as possible. Delivery required by Nov 30th.</p>
                    <div className={`mt-3 p-2 rounded-lg text-xs ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                      <div className="flex gap-4 font-medium mb-1">
                        <span className="w-24">Part No.</span>
                        <span className="w-16">Qty</span>
                        <span>Description</span>
                      </div>
                      {[['PN-4421', '500', 'Steel Bracket Type A'], ['PN-8832', '200', 'Hex Bolt M8x25'], ['PN-1190', '1000', 'Spring Washer']].map(([pn, qty, desc], idx) => (
                        <div key={idx} className={`flex gap-4 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span className="w-24 font-mono text-blue-400">{pn}</span>
                          <span className="w-16">{qty}</span>
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <FileText size={12} className="text-blue-400" />
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>RFQ_Specifications.pdf</span>
                    <FileText size={12} className="text-green-400" />
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>BOM_Q4.xlsx</span>
                  </div>
                </div>

                {/* RFQ AutoPilot Sidebar */}
                <div className={`w-56 flex-shrink-0 border-l p-4 float-animation ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-blue-50/80 border-blue-100'}`}
                  style={{ background: darkMode ? 'rgba(15,23,42,0.95)' : 'rgba(239,246,255,0.95)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md overflow-hidden">
                      <img src="https://rfqautopilot.com/asset/logo.png" alt="" className="w-full h-full object-contain" onError={() => {}} />
                    </div>
                    <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>RFQ AutoPilot</span>
                  </div>
                  <div className={`text-xs font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓ RFQ Detected — 3 Items</div>
                  <div className="space-y-2 mb-4">
                    {[['PN-4421', '500 units', '$0.85'], ['PN-8832', '200 units', '$0.12'], ['PN-1190', '1000 units', '$0.05']].map(([pn, qty, price], idx) => (
                      <div key={idx} className={`p-2 rounded-lg text-xs ${darkMode ? 'bg-slate-700' : 'bg-white'}`}>
                        <div className="font-mono font-bold text-blue-400">{pn}</div>
                        <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{qty} · {price}/unit</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn-gradient w-full py-2 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1">
                    <Zap size={10} />
                    Generate Quote
                  </button>
                  <div className={`mt-2 text-center text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Est. 10s processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
