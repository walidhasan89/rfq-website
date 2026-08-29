import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const TIME_SAVINGS = [
  { activity: 'Email scanning for RFQs', manual: '45 min', auto: '0 min', saved: '45 min' },
  { activity: 'Reading & understanding RFQs', manual: '2.5 hrs', auto: '15 min', saved: '2 hr 15 min' },
  { activity: 'Product lookup & matching', manual: '4 hrs', auto: '10 min', saved: '3 hr 50 min' },
  { activity: 'Pricing calculation', manual: '2 hrs', auto: '5 min', saved: '1 hr 55 min' },
  { activity: 'Typing quotation emails', manual: '3 hrs', auto: '20 min (review)', saved: '2 hr 40 min' },
  { activity: 'Formatting & proofreading', manual: '1.5 hrs', auto: '5 min', saved: '1 hr 25 min' },
];

const STATS = [
  { icon: '📊', stat: '35–50%', label: 'of RFQ awards go to the first respondent' },
  { icon: '⚡', stat: '11x', label: 'faster average response with RFQ AutoPilot' },
  { icon: '🏆', stat: '28–34%', label: 'win rate improvement reported' },
  { icon: '💰', stat: '$540K+', label: 'average revenue increase per year' },
];

export default function ROI({ dark }: Props) {
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
      id="roi"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[500px] h-[500px] top-1/3 right-0 ${dark ? 'bg-green-600/8' : 'bg-green-100/40'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-600 border border-green-200'
            }`}>
              📈 Distributor ROI
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Numbers Your{' '}
            <span className="gradient-text">CFO Will Love</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            <a href="/rfq-automation-software" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ automation for distributors</a>{' '}
            is not an expense — it is a revenue multiplier. See what{' '}
            <a href="https://www.distributiongroup.com/best-practices" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>industry best practices</a>{' '}
            say about distribution quoting efficiency.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <div
              key={s.stat}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-6 text-center border transition-all duration-300 card-3d ${
                dark
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-extrabold gradient-text mb-1">{s.stat}</div>
              <div className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Time Savings Table */}
          <div className="reveal-left">
            <h3 className={`text-2xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Daily Time Comparison
              <span className={`block text-sm font-normal mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Team processing 25 RFQs/day
              </span>
            </h3>
            <div className={`rounded-2xl overflow-hidden border ${dark ? 'border-slate-700/50' : 'border-slate-200 shadow-sm'}`}>
              <table className="w-full styled-table">
                <thead className={dark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <tr>
                    <th className={dark ? 'text-slate-400' : 'text-slate-500'}>Activity</th>
                    <th className={`text-red-500`}>Manual</th>
                    <th className={`text-green-500`}>Automated</th>
                    <th className={`text-blue-500`}>Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {TIME_SAVINGS.map((row) => (
                    <tr key={row.activity} className={`transition-colors ${dark ? 'hover:bg-slate-800/50' : 'hover:bg-blue-50/30'}`}>
                      <td className={`text-xs ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{row.activity}</td>
                      <td className={`text-xs font-medium text-red-500`}>{row.manual}</td>
                      <td className={`text-xs font-medium text-green-500`}>{row.auto}</td>
                      <td className={`text-xs font-bold text-blue-500`}>{row.saved}</td>
                    </tr>
                  ))}
                  <tr className={`font-bold ${dark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                    <td className={`text-xs font-extrabold ${dark ? 'text-white' : 'text-slate-900'}`}>Daily Total</td>
                    <td className="text-xs font-extrabold text-red-500">13+ hours</td>
                    <td className="text-xs font-extrabold text-green-500">55 min</td>
                    <td className="text-xs font-extrabold text-blue-500">12+ hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={`text-xs mt-3 text-center ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Monthly saved: 264+ hours | Annual saved: 3,168+ hours
            </p>
          </div>

          {/* ROI Calculator */}
          <div className="reveal-right">
            <h3 className={`text-2xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Monthly ROI Estimate
              <span className={`block text-sm font-normal mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Based on industry averages
              </span>
            </h3>
            <div className={`rounded-2xl border overflow-hidden ${dark ? 'border-slate-700/50' : 'border-slate-200 shadow-sm'}`}>
              {[
                { label: 'Time saved', calc: '25 RFQs × 38 min × 22 days', value: '348 hrs/mo', color: 'blue' },
                { label: 'Labor cost saved', calc: '348 hours × $35/hour', value: '$12,180/mo', color: 'green' },
                { label: 'Additional quotes', calc: '5x more daily capacity', value: '2,750 more/mo', color: 'indigo' },
                { label: 'Revenue from speed', calc: '34% win rate improvement', value: '$45,000+/mo', color: 'purple' },
                { label: 'Error reduction', calc: 'Eliminate 2–4% margin leakage', value: '$8,000+/mo', color: 'teal' },
              ].map(row => (
                <div key={row.label} className={`flex items-center justify-between px-5 py-3.5 border-b last:border-0 ${
                  dark ? 'border-slate-700/50' : 'border-slate-100'
                }`}>
                  <div>
                    <p className={`text-sm font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>{row.label}</p>
                    <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{row.calc}</p>
                  </div>
                  <span className={`text-sm font-bold gradient-text`}>{row.value}</span>
                </div>
              ))}
              <div className={`px-5 py-4 ${dark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                <div className="flex items-center justify-between">
                  <p className={`font-extrabold text-base ${dark ? 'text-white' : 'text-slate-900'}`}>Total Monthly Impact</p>
                  <p className="text-xl font-extrabold gradient-text">$65,000+</p>
                </div>
                <p className={`text-xs mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  vs. RFQ AutoPilot cost: $14.99–$29.99/mo → <span className="font-bold text-green-500">2,000x+ ROI</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research citations */}
        <div className={`reveal mb-10 px-4 py-4 rounded-xl border text-sm ${
          dark ? 'bg-slate-800/40 border-slate-700/50 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
        }`}>
          <p className="font-semibold mb-2">📚 Industry Research &amp; Sources:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a href="https://www.mckinsey.com/industries/advanced-electronics/our-insights/distribution-sales-productivity" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>McKinsey — Distribution Sales Productivity</a>
            <a href="https://www.naw.org/research-and-resources" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>NAW Research &amp; Resources</a>
            <a href="https://www.supplychaindigital.com/procurement" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Supply Chain Digital — Procurement</a>
            <a href="https://www.distributiongroup.com/best-practices" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Distribution Group — Best Practices</a>
            <a href="https://www.gartner.com/en/supply-chain/topics/distribution-operations" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Gartner — Distribution Operations</a>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`reveal rounded-2xl p-6 lg:p-10 border ${
          dark
            ? 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-blue-500/20'
            : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
        }`}>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                dark ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                🏭
              </div>
            </div>
            <div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className={`text-base sm:text-lg font-medium mb-4 italic ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                "We process 40 RFQs a day across our 3 branches. Before RFQ AutoPilot, we needed 6 people dedicated to quoting. Now 2 people handle the same volume in half the time — and our response speed went from next-day to same-hour. Our win rate jumped 31% in the first quarter."
              </blockquote>
              <p className={`text-sm font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                — VP of Sales, Regional Industrial Distributor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
