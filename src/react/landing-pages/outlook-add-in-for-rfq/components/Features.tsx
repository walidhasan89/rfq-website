import { useEffect, useRef } from 'react';
import { Check, Zap, Globe, BarChart3, Users, Link, Shield } from 'lucide-react';

interface Props { darkMode: boolean; }

const featureRows = [
  'Automatic RFQ detection',
  'AI email body extraction',
  'PDF attachment parsing',
  'Excel attachment parsing',
  'OCR for scanned documents',
  'Multi-language support (40+)',
  'Product catalog matching',
  'Customer-specific pricing',
  'Volume discount calculation',
  'Multi-currency conversion',
  'Quote template library',
  'One-click quote generation',
  'Quote tracking & analytics',
  'Follow-up reminders',
  'Team collaboration',
  'CRM integration',
  'ERP data sync',
  'Approval workflows',
  'Data export (Excel/CSV)',
  'API access',
];

const featureCards = [
  {
    icon: Zap,
    title: 'Instant RFQ Detection',
    description: 'AI monitors your inbox in real time. Every incoming quote request is detected, flagged, and prioritized — automatically, before you even open it.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Globe,
    title: '40+ Language Support',
    description: 'Process RFQs from global buyers in any language. Our AI extracts structured data from emails and documents in over 40 languages.',
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track quote response times, win rates, and team performance. Embedded directly in the Outlook sidebar — no external dashboard needed.',
    gradient: 'from-violet-500 to-violet-700',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Shared product catalogs, pricing rules, and quote templates. Consistent experience whether your team is on Outlook or Gmail.',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    icon: Link,
    title: 'CRM & ERP Integration',
    description: 'Quote data syncs to Salesforce, HubSpot, Dynamics 365, and major ERP systems. No double data entry, ever.',
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. TLS 1.3 encryption. OAuth 2.0 via Microsoft identity. GDPR compliant. Your data never trains our AI models.',
    gradient: 'from-blue-700 to-indigo-900',
  },
];

export default function Features({ darkMode }: Props) {
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

  return (
    <section id="features" ref={ref} className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#020817]' : 'bg-white'}`}>
      {/* Bg decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} />
        <div className={`absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-300'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Check size={14} className="text-blue-500" />
              100% Feature Parity
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Every Gmail Feature —{' '}
            <span className="gradient-text">Now Inside Outlook</span>
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            We built the Outlook add-in with complete feature parity — every capability available in the{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              Gmail Chrome extension for sales
            </a>{' '}
            is available in the Microsoft Outlook quote add-in. No compromises. No missing features. No second-class experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`fade-up stagger-${(idx % 3) + 1} card-3d p-6 rounded-3xl border transition-all duration-300 group ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/40'
                    : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${card.gradient} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{card.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature Parity Table */}
        <div className="fade-up">
          <div className={`rounded-3xl overflow-hidden border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl ${darkMode ? 'shadow-black/30' : 'shadow-slate-200/80'}`}>
            {/* Table header */}
            <div className={`px-6 py-5 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'} border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Gmail Extension vs. Outlook Add-in — Feature Comparison</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>✅ 100% feature parity — every feature, setting, and capability is identically available on both platforms.</p>
            </div>
            <div className="overflow-x-auto table-scroll">
              <table className={`w-full text-sm feature-table ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={darkMode ? 'bg-slate-800/50' : 'bg-slate-50/80'}>
                    <th className={`px-6 py-4 text-left text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Feature</th>
                    <th className={`px-6 py-4 text-center text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Gmail Extension</th>
                    <th className={`px-6 py-4 text-center text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Outlook Add-in</th>
                    <th className={`px-6 py-4 text-center text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Parity</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                  {featureRows.map((feature, i) => (
                    <tr key={i} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-blue-50/20'}`}>
                      <td className={`px-6 py-3.5 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-sm">✓</span>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-sm">✓</span>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${darkMode ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                          Full
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Why Parity Matters */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Single-Platform Companies',
              description: 'If your entire team uses Outlook, you get the complete RFQ AutoPilot experience. Not a stripped-down version. Not a "coming soon" feature list. The full product.',
              link: { href: 'https://rfqautopilot.com/rfq-software-for-manufacturers', text: 'RFQ software for manufacturers →' },
            },
            {
              title: 'Multi-Platform Companies',
              description: 'Split across Gmail and Outlook? Shared catalogs, pricing rules, templates, and analytics work seamlessly across both platforms. Every team member gets the same experience.',
              link: { href: 'https://rfqautopilot.com/rfq-management-for-export-companies', text: 'RFQ for export companies →' },
            },
            {
              title: 'Platform Migrations',
              description: 'Transitioning from Gmail to Outlook (or vice versa)? RFQ AutoPilot transitions with you. No feature loss. No retraining. No data migration.',
              link: { href: 'https://rfqautopilot.com/rfq-automation-software', text: 'Full RFQ automation →' },
            },
          ].map((item, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="gradient-text">{item.title}</span>
              </h3>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  className="text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  {item.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
