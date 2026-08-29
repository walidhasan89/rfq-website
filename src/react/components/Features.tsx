import { useRef, useEffect } from 'react';
import { Bot, Send, BarChart3, FileText, TrendingUp, Bell, Globe, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered RFQ Interpretation',
    desc: 'Turn incoming buyer emails and attachments into structured RFQ details for review, including buyer information, line items, quantities, dates, and important requirements.',
    gradient: 'from-blue-500 to-indigo-600',
    badge: 'AI',
    link: '/rfq-response-software',
    linkLabel: 'Explore RFQ Responses →',
  },
  {
    icon: Send,
    title: 'Email and Attachment Extraction',
    desc: 'Capture RFQ information from email content, forwarded threads, PDFs, and related attachments so your team can review requirements in one structured workflow.',
    gradient: 'from-violet-500 to-purple-600',
    badge: 'Automation',
    link: '/rfq-email-automation',
    linkLabel: 'See Email Automation →',
  },
  {
    icon: BarChart3,
    title: 'Professional Quotation Builder',
    desc: 'Create clear line items, pricing, totals, lead time, validity, payment terms, delivery details, and buyer-facing quotation content in a repeatable builder.',
    gradient: 'from-emerald-500 to-teal-600',
    badge: 'Analytics',
    link: '/quotation-builder',
    linkLabel: 'See Quotation Builder →',
  },
  {
    icon: FileText,
    title: 'Branded PDF Quote Export',
    desc: 'Apply your company information, logo, brand colors, terms, and quotation layout, then generate a polished PDF ready to review and send to the buyer.',
    gradient: 'from-amber-500 to-orange-600',
    badge: 'Templates',
    link: '/quotation-builder',
    linkLabel: 'View PDF Quote Workflow →',
  },
  {
    icon: TrendingUp,
    title: 'Reusable Quote Templates',
    desc: 'Save company details, commercial terms, quotation structures, and commonly used content so your team does not rebuild the same document for every buyer request.',
    gradient: 'from-cyan-500 to-blue-600',
    badge: 'Insights',
    link: '/quotation-builder',
    linkLabel: 'Explore Quote Templates →',
  },
  {
    icon: Bell,
    title: 'Dynamic Response Emails',
    desc: 'Prepare consistent buyer responses using reusable email templates and dynamic quotation details. Preview and edit the message before opening the final compose workflow.',
    gradient: 'from-rose-500 to-pink-600',
    badge: 'Smart',
    link: '/rfq-email-automation',
    linkLabel: 'Explore Email Responses →',
  },
  {
    icon: Globe,
    title: 'Gmail and Outlook Workflows',
    desc: 'Support RFQ response work around Gmail and Outlook without replacing your normal inbox. Keep quotation preparation close to the buyer conversation.',
    gradient: 'from-blue-500 to-cyan-600',
    badge: 'Universal',
    link: '/gmail-rfq-extension',
    linkLabel: 'See Gmail Workflow →',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'The extension is designed to keep users in control of sensitive buyer and quotation information. Review the Privacy Policy for the current data handling and processor details.',
    gradient: 'from-slate-500 to-slate-700',
    badge: 'Secure',
    link: '/privacy',
    linkLabel: 'Read Privacy Policy →',
  },
];

export default function Features() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Gradient blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Bot size={14} />
            Powerful Features
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Powerful{' '}
            <span className="gradient-text">RFQ Automation</span>{' '}
            Features
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to move from an incoming buyer request to a reviewed, branded quotation and response email.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`reveal-scale card-hover group p-6 rounded-2xl border relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700 hover:border-blue-500/40 hover:bg-slate-800'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/8'
                }`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${f.gradient} rounded-2xl`} style={{ opacity: 0.03 }} />

                {/* Badge */}
                <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold mb-4 bg-gradient-to-r ${f.gradient} text-white`}>
                  {f.badge}
                </div>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${f.gradient} shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className={`text-base font-bold mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {f.desc}
                </p>
                <a
                  href={f.link}
                  className={`text-xs font-semibold transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                  {f.linkLabel}
                </a>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className={`reveal mt-20 rounded-2xl border overflow-hidden ${
          isDark ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className={`px-6 py-4 border-b ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              How RFQ AutoPilot Saves You Time
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={isDark ? 'bg-slate-800/50' : 'bg-slate-50'}>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Without RFQ AutoPilot
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                    With RFQ AutoPilot
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['RFQ details copied manually from emails', 'Structured email and attachment review'],
                  ['Separate Word, spreadsheet, and PDF files', 'One focused quotation-building workflow'],
                  ['Quotation formatting repeated every time', 'Reusable company details and templates'],
                  ['Inconsistent buyer response emails', 'Editable dynamic email templates'],
                  ['Unbranded or outdated quote documents', 'Consistent branded PDF quotations'],
                ].map(([without, with_rfq], idx) => (
                  <tr
                    key={idx}
                    className={`table-row-hover border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}
                  >
                    <td className={`px-6 py-4 text-sm flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 text-xs font-bold">x</span>
                      </span>
                      {without}
                    </td>
                    <td className={`px-6 py-4 text-sm ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-500 text-xs font-bold">&#10003;</span>
                        </span>
                        {with_rfq}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
