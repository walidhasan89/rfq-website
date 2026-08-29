import { CheckCircle2, XCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const rows = [
  { feature: 'Time to value', autopilot: 'Immediate — install and start', enterprise: '4–12 weeks minimum' },
  { feature: 'Total cost of ownership', autopilot: 'Free tier + affordable plans', enterprise: '$10K–$100K+/year + implementation' },
  { feature: 'User adoption', autopilot: 'Near-instant (it\'s in your inbox)', enterprise: '30–60% adoption rates typical' },
  { feature: 'Training required', autopilot: 'Zero', enterprise: 'Days to weeks of training' },
  { feature: 'IT involvement', autopilot: 'None', enterprise: 'Security reviews, SSO, API setup' },
  { feature: 'Email integration', autopilot: 'Native — lives inside Gmail/Outlook', enterprise: 'Separate platform with email forwarding' },
  { feature: 'Best for team size', autopilot: '1–50 users', enterprise: '50–5,000+ users' },
  { feature: 'Flexibility', autopilot: 'Works alongside any existing tool', enterprise: 'Often requires full ecosystem buy-in' },
];

export default function ComparisonSection({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_60%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              color: darkMode ? '#60a5fa' : '#2563eb',
              border: '1px solid rgba(59,130,246,0.2)'
            }}
          >
            Chrome Extension vs Enterprise
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why a Chrome Extension Beats a{' '}
            <span className="gradient-text">Full Procurement Platform</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Not every procurement team needs a $100K enterprise platform. Here's when a Chrome extension is the smarter choice.
          </p>
        </div>

        {/* Comparison Table - Mobile scroll */}
        <div className="overflow-x-auto reveal">
          <div className={`rounded-2xl overflow-hidden border min-w-[600px] ${
            darkMode ? 'border-white/8' : 'border-slate-200'
          }`}>
            {/* Header */}
            <div className={`grid grid-cols-3 ${
              darkMode ? 'bg-slate-800/80' : 'bg-slate-50'
            }`}>
              <div className={`px-5 py-4 text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Feature
              </div>
              <div className="px-5 py-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold
                  bg-gradient-to-r from-brand-600 to-brand-800 text-white">
                  <img src="https://rfqautopilot.com/asset/logo.png" alt="" className="h-4 w-auto" />
                  RFQ AutoPilot
                </span>
              </div>
              <div className={`px-5 py-4 text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Enterprise Software
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t transition-all ${
                  darkMode
                    ? 'border-white/5 hover:bg-white/2'
                    : 'border-slate-100 hover:bg-slate-50/50'
                }`}
              >
                <div className={`px-5 py-4 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {row.feature}
                </div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                    {row.autopilot}
                  </span>
                </div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {row.enterprise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className={`mt-8 p-6 rounded-2xl text-center reveal border ${
          darkMode ? 'bg-slate-900/60 border-white/5' : 'bg-white border-slate-200'
        }`}>
          <p className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            The bottom line:{' '}
            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
              If your team is under 50 people and your RFQ workflow starts in email, a procurement Chrome extension is the fastest, most cost-effective way to automate your process.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
