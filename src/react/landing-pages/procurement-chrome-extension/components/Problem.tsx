import { AlertTriangle, FileX, Timer, DollarSign } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const problems = [
  {
    icon: FileX,
    title: 'Scattered Data',
    description: 'Supplier quotes arrive as emails, PDFs, and spreadsheets with no unified structure. Procurement teams spend hours copying and pasting information between systems, reformatting supplier responses, and chasing approvals via email.',
    stat: '3+ hrs/day',
    statLabel: 'lost to data wrangling',
  },
  {
    icon: AlertTriangle,
    title: 'Manual Extraction',
    description: 'Someone has to manually read every RFQ email, open every attachment, and re-type product names, quantities, specs, and pricing into a comparison sheet. Every. Single. Time.',
    stat: '100%',
    statLabel: 'manual & error-prone',
  },
  {
    icon: Timer,
    title: 'Slow Response Times',
    description: 'When responses depend on manual processing, turnaround stalls. In procurement, speed matters — research shows 35–50% of deals go to the vendor who responds first.',
    stat: '35–50%',
    statLabel: 'deals lost to slow replies',
  },
  {
    icon: DollarSign,
    title: 'Enterprise Overkill',
    description: 'Full-scale procurement platforms require IT involvement, months-long deployments, and budgets that don\'t make sense for small and mid-size teams. You need speed, not complexity.',
    stat: '$100K+',
    statLabel: 'average enterprise cost/yr',
  },
];

export default function Problem({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="problem"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background accent */}
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04),transparent_60%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(239,68,68,0.1)' : 'rgba(239,68,68,0.08)',
              color: '#ef4444',
              border: '1px solid rgba(239,68,68,0.2)'
            }}
          >
            <AlertTriangle size={11} />
            The Problem
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Procurement Teams Are Stuck{' '}
            <span className="gradient-text">in the Stone Age</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Most procurement workflows still start and end in the inbox. Yet the tools designed to manage{' '}
            <a
              href="https://rfqautopilot.com/rfq-email-management-tool"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              RFQ emails
            </a>{' '}
            live on entirely separate platforms — requiring logins, training, and endless tab-switching.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`card-3d relative p-6 rounded-2xl reveal reveal-delay-${i + 1} ${
                  darkMode
                    ? 'bg-slate-900/80 border border-white/5 hover:border-white/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg'
                } transition-all duration-300`}
              >
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(239,68,68,0.1)' }}>
                    <Icon size={18} style={{ color: '#ef4444' }} />
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
                <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                  <div className="text-2xl font-extrabold text-red-500">{item.stat}</div>
                  <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl reveal ${
          darkMode
            ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/5'
            : 'bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200'
        }`}>
          <p className={`text-lg sm:text-xl font-semibold text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            The result? According to{' '}
            <a
              href="https://www.mckinsey.com/capabilities/operations/our-insights/transforming-procurement-functions-for-an-ai-driven-world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 transition-colors"
            >
              McKinsey research
            </a>
            , procurement professionals waste{' '}
            <span className="text-red-500 font-extrabold">40%+</span>{' '}
            of their time on administrative busywork instead of strategic sourcing.
          </p>
          <p className={`text-base mt-2 text-center ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            There's a better way. ↓
          </p>
        </div>
      </div>
    </section>
  );
}
