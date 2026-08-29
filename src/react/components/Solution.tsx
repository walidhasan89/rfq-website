import { useRef, useEffect } from 'react';
import { Lightbulb, Chrome, Clock, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const platformIcons = [
  { name: 'Gmail', abbr: 'GM', color: 'from-red-500 to-pink-500', href: '/gmail-rfq-extension', external: false },
  { name: 'Outlook', abbr: 'OL', color: 'from-blue-500 to-indigo-500', href: '/outlook-rfq-workflow', external: false },
  { name: 'Email', abbr: 'EM', color: 'from-violet-500 to-purple-600', href: '/rfq-email-automation', external: false },
  { name: 'PDF', abbr: 'PDF', color: 'from-rose-500 to-pink-600', href: '/rfq-pdf-data-extraction', external: false },
  { name: 'Quote Builder', abbr: 'QB', color: 'from-green-500 to-emerald-500', href: '/quotation-builder', external: false },
  { name: 'Chrome', abbr: 'CH', color: 'from-blue-600 to-cyan-600', href: null, external: false },
];

export default function Solution() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="reveal-left">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
              isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Lightbulb size={14} />
              The Solution
            </div>

            <h2 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
            >
              What Is{' '}
              <span className="gradient-text">RFQ AutoPilot?</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              RFQ AutoPilot is an <strong>AI-powered RFQ-to-quote Chrome extension</strong> for suppliers, distributors, manufacturers, wholesalers, and B2B sales teams. It helps capture incoming buyer requirements, organize RFQ details, build branded quotations, generate professional PDFs, and prepare response emails.
            </p>

            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Instead of replacing your inbox, CRM, or existing sales process, RFQ AutoPilot adds a focused quotation workflow inside the browser and keeps your team in control of the final review and send action.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, value: 'Email', label: 'RFQ intake' },
                { icon: Zap, value: 'AI', label: 'Requirement review' },
                { icon: Chrome, value: 'PDF', label: 'Quote export' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className={`p-4 rounded-xl text-center border ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <Icon size={18} className="text-blue-500 mx-auto mb-2" />
                  <div className={`text-xl font-black gradient-text`}>{value}</div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</div>
                </div>
              ))}
            </div>

            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-6 py-3.5 rounded-xl text-sm relative z-10 shadow-lg shadow-blue-500/25"
            >
              <Chrome size={18} className="relative z-10" />
              <span className="relative z-10">Add to Chrome &mdash; It&apos;s Free</span>
            </a>
          </div>

          {/* Right: Visual card */}
          <div className="reveal-right">
            <div className={`relative p-6 rounded-3xl border ${
              isDark
                ? 'bg-slate-800/80 border-slate-700'
                : 'bg-slate-50 border-slate-200 shadow-2xl shadow-blue-500/5'
            }`}>
              {/* Top bar */}
              <div className={`flex items-center gap-2 mb-5 pb-4 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className={`flex-1 h-6 rounded-md text-xs flex items-center px-3 ${
                  isDark ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-400 border border-slate-200'
                }`}>
                  rfqautopilot.com/dashboard
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="space-y-3">
                {/* Header */}
                <div className={`flex items-center justify-between mb-4`}>
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Quotation Builder
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>RFQ details reviewed</span>
                  </div>
                </div>

                {/* Comparison rows */}
                {[
                  { field: 'Buyer', a: 'Acme', b: 'Verified', c: 'Ready', best: 'c' },
                  { field: 'Items', a: '12', b: 'Reviewed', c: 'Ready', best: 'c' },
                  { field: 'Terms', a: 'Net 30', b: 'Added', c: 'Ready', best: 'c' },
                  { field: 'PDF', a: 'Branded', b: 'Previewed', c: 'Ready', best: 'c' },
                ].map((row) => (
                  <div key={row.field} className={`grid grid-cols-4 gap-2 p-3 rounded-xl ${
                    isDark ? 'bg-slate-900/80' : 'bg-white'
                  }`}>
                    <div className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.field}</div>
                    {(['a', 'b', 'c'] as const).map((supplier) => (
                      <div
                        key={supplier}
                        className={`text-xs font-bold text-center px-2 py-1 rounded-lg ${
                          row.best === supplier
                            ? 'bg-green-500/15 text-green-500'
                            : isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {row[supplier]}
                        {row.best === supplier && <span className="ml-1 text-green-500">&#10003;</span>}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Column headers */}
                <div className="grid grid-cols-4 gap-2 px-3">
                  <div />
                  {['RFQ Data', 'Quote Draft', 'Final'].map(s => (
                    <div key={s} className={`text-xs text-center font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{s}</div>
                  ))}
                </div>

                {/* Action bar */}
                <div className={`mt-4 p-3 rounded-xl flex items-center justify-between ${
                  isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                }`}>
                  <span className={`text-xs font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                    Quotation ready for review
                  </span>
                  <div className="btn-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg relative z-10 cursor-pointer">
                    <span className="relative z-10">Preview &rarr;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform compatibility */}
            <div className="mt-6">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Works with your RFQ workflow
              </p>
              <div className="flex flex-wrap gap-2">
                {platformIcons.map((p) => (
                  <div
                    key={p.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-white text-slate-700 border border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-sm bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                      <span className="text-white text-[7px] font-black">{p.abbr.charAt(0)}</span>
                    </div>
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
