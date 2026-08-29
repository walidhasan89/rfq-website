import { Briefcase, TrendingUp, Factory, ShoppingCart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const useCases = [
  {
    icon: Briefcase,
    color: 'from-brand-500 to-brand-700',
    role: 'Procurement Officers',
    subtitle: 'Managing Vendor Quotes',
    description: 'You\'re juggling dozens of supplier relationships and hundreds of quote emails per month. RFQ AutoPilot gives you a structured system to track, compare, and respond to every quote — without leaving your inbox.',
    highlight: 'Smaller procurement teams often see the greatest benefits because automation eliminates manual overhead that consumes a larger percentage of their limited resources.',
    benefits: ['Track all quotes in one view', 'Auto-compare suppliers', 'Respond 3x faster'],
    link: 'https://rfqautopilot.com/rfq-management-for-export-companies',
    linkLabel: 'RFQ management for export companies',
  },
  {
    icon: TrendingUp,
    color: 'from-violet-500 to-violet-700',
    role: 'Sourcing Managers',
    subtitle: 'Handling High-Volume RFQs',
    description: 'When RFQ volume scales, manual processes break down. RFQ AutoPilot lets you handle 2–3x the volume with the same headcount by eliminating repetitive data entry, attachment scanning, and template formatting.',
    highlight: 'Handle 2–3x the volume with the same headcount — no hiring, no bottlenecks.',
    benefits: ['2–3x throughput increase', 'Zero data re-entry', 'Automated templates'],
    link: 'https://rfqautopilot.com/rfq-software-for-manufacturers',
    linkLabel: 'RFQ software for manufacturers',
  },
  {
    icon: Factory,
    color: 'from-emerald-500 to-emerald-700',
    role: 'Operations Teams',
    subtitle: 'SMB Manufacturers & Distributors',
    description: 'You don\'t have a 20-person procurement department or a six-figure software budget. You need a procurement productivity Chrome extension that works now — not one that requires a three-month implementation project.',
    highlight: 'Purpose-built for teams of 1–50 people who need speed and simplicity without the enterprise overhead.',
    benefits: ['Zero IT involvement', 'Works in 30 seconds', 'No long-term contracts'],
    link: 'https://rfqautopilot.com/rfq-software-small-business',
    linkLabel: 'RFQ software for small business',
  },
  {
    icon: ShoppingCart,
    color: 'from-orange-500 to-orange-700',
    role: 'Sales Teams',
    subtitle: 'Responding to Inbound RFQs',
    description: 'If your sales or presales team receives buyer RFQs and needs to turn around accurate quotes quickly, RFQ AutoPilot helps you extract requirements and generate responses faster than any manual workflow.',
    highlight: '35–50% of deals go to the vendor who responds first. RFQ AutoPilot helps you be first.',
    benefits: ['Faster quote turnaround', 'Extract requirements instantly', 'Win more deals'],
    link: 'https://rfqautopilot.com/rfq-software-for-distributors',
    linkLabel: 'RFQ software for distributors',
  },
];

export default function UseCases({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.07),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.04),transparent_60%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              color: darkMode ? '#60a5fa' : '#2563eb',
              border: '1px solid rgba(59,130,246,0.2)'
            }}
          >
            Use Cases
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Built for the People Who{' '}
            <span className="gradient-text">Actually Process RFQs</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you're a solo procurement officer or running a sourcing team, RFQ AutoPilot adapts to your workflow.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={i}
                className={`card-3d group p-7 rounded-2xl reveal reveal-delay-${Math.min(i + 1, 4)} ${
                  darkMode
                    ? 'bg-slate-900/80 border border-white/6 hover:border-brand-500/20'
                    : 'bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300'
                } transition-all duration-300 overflow-hidden relative`}
              >
                {/* Bg accent */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-8 transition-opacity duration-500 bg-gradient-to-br ${uc.color}`} />

                <div className="relative z-10">
                  {/* Role header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${uc.color}`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {uc.role}
                      </h3>
                      <p className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {uc.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {uc.description}
                  </p>

                  {/* Highlight quote */}
                  <blockquote className={`text-sm italic px-4 py-3 rounded-xl mb-5 border-l-2 border-brand-500 ${
                    darkMode ? 'bg-brand-900/20 text-slate-300' : 'bg-brand-50 text-slate-700'
                  }`}>
                    "{uc.highlight}"
                  </blockquote>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {uc.benefits.map((b, j) => (
                      <span key={j} className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                        darkMode
                          ? 'bg-brand-900/30 text-brand-300 border border-brand-800/30'
                          : 'bg-brand-50 text-brand-700 border border-brand-100'
                      }`}>
                        ✓ {b}
                      </span>
                    ))}
                  </div>

                  {/* Internal link */}
                  <a
                    href={uc.link}
                    className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                      darkMode ? 'text-brand-400 hover:text-brand-300' : 'text-brand-600 hover:text-brand-700'
                    }`}
                  >
                    Explore {uc.linkLabel} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
