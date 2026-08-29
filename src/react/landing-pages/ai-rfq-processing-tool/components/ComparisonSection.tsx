import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const metrics = [
  { metric: 'Average RFQ Processing Time', manual: '25-45 minutes', ai: '2-3 minutes', better: true },
  { metric: 'Data Entry Errors', manual: '8-12% error rate', ai: '<1.3% error rate', better: true },
  { metric: 'Daily RFQ Capacity (per person)', manual: '10-15 RFQs', ai: '80-120 RFQs', better: true },
  { metric: 'Multi-page PDF Processing', manual: '15-30 min/document', ai: '45-90 seconds', better: true },
  { metric: 'After-hours Processing', manual: 'Not available', ai: '24/7 automated', better: true },
  { metric: 'Data Validation Checks', manual: 'Manual, inconsistent', ai: 'Automated, every field', better: true },
  { metric: 'Response Time (simple RFQs)', manual: '2-4 hours', ai: '5-10 minutes', better: true },
  { metric: 'Staff Training Time', manual: '2-3 weeks', ai: '1 day', better: true },
];

const stats = [
  { icon: '⚡', value: '12x', label: 'Faster RFQ processing on average' },
  { icon: '🎯', value: '98.7%', label: 'Extraction accuracy across all formats' },
  { icon: '📈', value: '5.5x', label: 'More quotes per sales rep per day' },
  { icon: '💰', value: '34%', label: 'Higher win rate from faster responses' },
];

export default function ComparisonSection({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#050912]' : 'bg-white'}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '500px', height: '500px',
          bottom: '-100px', left: '-150px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            📊 Performance Comparison
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            AI RFQ Automation vs.{' '}
            <span className="gradient-text">Manual Processing</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            See how{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              intelligent RFQ parsing
            </a>{' '}
            transforms your quotation workflow. According to{' '}
            <a href="https://www.mckinsey.com/capabilities/operations/our-insights/the-next-frontier-of-ai-in-procurement" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              McKinsey's AI in procurement research
            </a>
            , automation delivers measurable improvements in speed, accuracy, and team capacity.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} darkMode={darkMode} delay={i} />
          ))}
        </div>

        {/* Comparison table */}
        <CompTable darkMode={darkMode} />

        {/* Testimonial callout */}
        <TestimonialCallout darkMode={darkMode} />
      </div>
    </section>
  );
}

function StatCard({ stat, darkMode, delay }: { stat: typeof stats[0], darkMode: boolean, delay: number }) {
  const { ref, isVisible } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${delay + 1} ${isVisible ? 'visible' : ''} p-6 rounded-2xl border text-center card-3d
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-slate-50 border-slate-200/80'}`}
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
      <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
    </div>
  );
}

function CompTable({ darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${isVisible ? 'visible' : ''} mb-12 rounded-2xl overflow-hidden border
      ${darkMode ? 'border-white/[0.07]' : 'border-slate-200/80'}`}>
      {/* Table header */}
      <div className="grid grid-cols-3 p-4 lg:p-5"
        style={{ background: 'var(--gradient-brand)' }}>
        <div className="text-white font-semibold text-sm">Metric</div>
        <div className="text-white font-semibold text-sm text-center">Manual Processing</div>
        <div className="text-white font-bold text-sm text-center">RFQ AutoPilot AI ✨</div>
      </div>

      {/* Rows */}
      {metrics.map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-3 p-4 lg:p-5 table-row-hover transition-colors duration-200 border-t
            ${darkMode ? 'border-white/[0.04]' : 'border-slate-100'}
            ${i % 2 === 0 ? (darkMode ? 'bg-white/[0.01]' : 'bg-white') : (darkMode ? 'bg-transparent' : 'bg-slate-50/50')}`}
        >
          <div className={`text-sm font-medium pr-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{row.metric}</div>
          <div className={`text-sm text-center flex items-center justify-center gap-1.5 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 hidden sm:block" />
            {row.manual}
          </div>
          <div className="text-sm font-semibold text-center flex items-center justify-center gap-1.5 text-blue-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 hidden sm:block" />
            {row.ai}
          </div>
        </div>
      ))}
    </div>
  );
}

function TestimonialCallout({ darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${isVisible ? 'visible' : ''}`}>
      <div className={`relative rounded-2xl p-8 lg:p-10 overflow-hidden border
        ${darkMode ? 'border-blue-500/20' : 'border-blue-100'}`}
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(29,78,216,0.15) 100%)'
            : 'linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.8) 100%)',
        }}>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="text-9xl select-none">💡</div>
        </div>
        <p className="text-sm font-semibold text-blue-500 mb-3">💡 Real Customer Results</p>
        <blockquote className={`text-xl lg:text-2xl font-semibold leading-snug mb-4 max-w-3xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          "We reduced quote turnaround time by 87% and increased our quote volume by 340% without adding headcount."
        </blockquote>
        <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          — Operations Manager, Industrial Distributor
        </p>
      </div>
    </div>
  );
}
