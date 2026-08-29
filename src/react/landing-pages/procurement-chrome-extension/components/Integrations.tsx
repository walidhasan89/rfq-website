import { Database, ArrowRightLeft, Sheet, GitBranch, Users2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const integrations = [
  {
    icon: Database,
    title: 'ERP Systems',
    description: 'Export structured RFQ data directly into SAP, Oracle, NetSuite, or any ERP that accepts CSV/Excel imports.',
    logos: ['SAP', 'Oracle', 'NetSuite'],
  },
  {
    icon: ArrowRightLeft,
    title: 'P2P Platforms',
    description: 'Use AutoPilot as the fast front-end that captures and organizes data before it enters your procure-to-pay workflow.',
    logos: ['Coupa', 'Ariba', 'Jaggaer'],
  },
  {
    icon: Sheet,
    title: 'Spreadsheets & Shared Drives',
    description: 'Prefer Google Sheets or Excel? Export with one click and maintain your current tracking methods.',
    logos: ['Google Sheets', 'Excel', 'CSV'],
  },
  {
    icon: GitBranch,
    title: 'Approval Workflows',
    description: 'RFQ AutoPilot accelerates the data-gathering stage so that approvals happen on clean, complete information.',
    logos: ['Slack', 'Teams', 'Email'],
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    description: 'Multiple team members can install the extension and work from the same shared data environment.',
    logos: ['Shared Data', 'Real-time', 'Sync'],
  },
];

export default function Integrations({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]'
          : 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              color: darkMode ? '#60a5fa' : '#2563eb',
              border: '1px solid rgba(59,130,246,0.2)'
            }}
          >
            Workflow Integration
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Fits Into Your Existing Stack —{' '}
            <span className="gradient-text">Doesn't Replace It</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot is designed as a{' '}
            <a
              href="https://rfqautopilot.com/rfq-automation-software"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              procurement workflow automation
            </a>{' '}
            tool that complements the tools you already rely on. As{' '}
            <a
              href="https://www.mckinsey.com/capabilities/operations/our-insights/redefining-procurement-performance-in-the-era-of-agentic-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              McKinsey's research on agentic AI in procurement
            </a>{' '}
            highlights, the future of procurement is intelligent automation layered on top of existing workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`card-3d p-6 rounded-2xl reveal reveal-delay-${Math.min(i + 1, 4)} ${
                  darkMode
                    ? 'bg-slate-800/60 border border-white/6 hover:border-brand-500/30'
                    : 'bg-slate-50 border border-slate-200 hover:border-brand-200 hover:shadow-lg'
                } transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.logos.map((logo, j) => (
                    <span key={j} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                      darkMode
                        ? 'bg-slate-700/80 text-slate-300'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Highlight card */}
          <div className={`md:col-span-2 lg:col-span-1 card-3d p-6 rounded-2xl reveal reveal-delay-4 overflow-hidden relative ${
            darkMode
              ? 'bg-gradient-to-br from-brand-900/60 to-slate-900 border border-brand-700/30'
              : 'bg-gradient-to-br from-brand-50 to-white border border-brand-100'
          }`}>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-brand-500 opacity-5 blur-2xl" />
            <div className="relative z-10">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Layer Between Your Inbox and Your Systems
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                RFQ AutoPilot captures data at the point of entry, eliminates re-keying, and ensures
                nothing falls through the cracks — without being your single source of truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
