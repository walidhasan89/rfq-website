import { useEffect, useRef } from 'react';

interface HowItWorksProps {
  darkMode: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .slide-up, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: '01',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
      ),
      title: 'Install & Connect Your Inbox',
      description: 'Add RFQ AutoPilot to Chrome in 30 seconds. Connect Gmail, Google Workspace, or Outlook. Works with shared inboxes and custom domain emails.',
      highlight: '30 seconds setup',
    },
    {
      step: '02',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      ),
      title: 'AI Detects & Extracts RFQs 24/7',
      description: 'The AI monitors your inbox continuously in any language. It identifies RFQs, extracts buyer requirements from emails and attachments, detects currencies and incoterms.',
      highlight: '40+ languages, 150+ currencies',
    },
    {
      step: '03',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: 'AI Generates Quotation Drafts',
      description: 'Quotation drafts are prepared with correct pricing, multi-currency conversion, incoterms, shipping estimates, and compliance references — all in the buyer\'s language.',
      highlight: 'Ready when you wake up',
    },
    {
      step: '04',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      title: 'Review, Adjust & Send',
      description: 'Your export manager reviews drafted quotes each morning. Minor adjustments if needed, then send. Average review time: 2-5 minutes per quote.',
      highlight: 'Average 22 min response time',
    },
    {
      step: '05',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Track Global Performance',
      description: 'Monitor win rates by country, measure response times, track pipeline by region. See exactly which markets are converting and where to double down.',
      highlight: '31% avg win rate improvement',
    },
  ];

  const emailPlatforms = [
    {
      name: 'Gmail / Google Workspace',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" fill="#4285F4"/>
          <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      features: ['Chrome Extension', 'Shared inbox support', 'Google Workspace admin deploy', 'Custom domain Gmail'],
      tag: 'Most Popular',
      tagColor: darkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-700',
    },
    {
      name: 'Microsoft Outlook 365',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0078D4"/>
          <path d="M12 7a5 5 0 100 10A5 5 0 0012 7z" fill="white" opacity="0.9"/>
          <rect x="13" y="6" width="8" height="12" rx="1" fill="#50ABF1"/>
        </svg>
      ),
      features: ['Outlook Add-in', 'Desktop, web & mobile', 'Shared mailbox support', 'Exchange Server compatible'],
      tag: 'Enterprise',
      tagColor: darkMode ? 'bg-indigo-900/60 text-indigo-300' : 'bg-indigo-100 text-indigo-700',
    },
    {
      name: 'IMAP Email Accounts',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      features: ['Any IMAP provider', 'Yandex, Zoho, Mail.ru', 'Custom corp email servers', 'Web dashboard results'],
      tag: 'Universal',
      tagColor: darkMode ? 'bg-emerald-900/60 text-emerald-300' : 'bg-emerald-100 text-emerald-700',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ${
          darkMode ? 'bg-blue-900/10' : 'bg-blue-50'
        } blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-up inline-flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-700'
            }`}>
              How It Works
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            From RFQ Detection to{' '}
            <span className="gradient-text">Quotation Sent</span>
          </h2>
          <p className={`slide-up delay-200 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Our{' '}
            <a href="https://rfqautopilot.com/rfq-email-management-tool" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ email management tool
            </a>{' '}
            ensures you catch every international quote request regardless of time zone. Here's how the process works from inbox to order won.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connector line for desktop */}
          <div className={`absolute top-16 left-0 right-0 h-0.5 hidden lg:block ${
            darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent'
          }`} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.step} className={`slide-up flex flex-col items-center lg:items-center text-center`} style={{ transitionDelay: `${i * 0.12}s` }}>
                {/* Step icon */}
                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 z-10 gradient-brand text-white shadow-lg`}>
                  {step.icon}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white gradient-brand border-2 ${
                    darkMode ? 'border-gray-900' : 'border-white'
                  }`}>
                    {i + 1}
                  </div>
                </div>
                <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.description}
                </p>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                  darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-50 text-blue-700'
                }`}>
                  ✓ {step.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Platforms */}
        <div className="mb-16">
          <h3 className={`slide-up text-2xl sm:text-3xl font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Works With Every Email Platform Export Companies Use
          </h3>
          <p className={`slide-up text-center text-sm mb-8 max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Use our{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              Gmail Chrome extension for sales
            </a>{' '}
            or our{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              Outlook add-in for RFQ
            </a>{' '}
            — both connect to the same product catalog, pricing database, and analytics dashboard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailPlatforms.map((platform, i) => (
              <div
                key={platform.name}
                className={`slide-up card-hover p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-900/60 border-white/10 hover:border-blue-500/30' : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    darkMode ? 'bg-white/10' : 'bg-white shadow-sm'
                  }`}>
                    {platform.icon}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${platform.tagColor}`}>
                    {platform.tag}
                  </span>
                </div>
                <h4 className={`font-bold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {platform.name}
                </h4>
                <ul className="space-y-2">
                  {platform.features.map((feat) => (
                    <li key={feat} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Email Setup by Company Size */}
        <div className={`slide-up rounded-3xl border overflow-hidden ${
          darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`px-8 py-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Email Setup by Export Company Size
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-xs uppercase tracking-wider ${darkMode ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                  <th className="px-6 py-3 text-left font-semibold">Company Size</th>
                  <th className="px-6 py-3 text-left font-semibold">Recommended Setup</th>
                  <th className="px-6 py-3 text-left font-semibold hidden md:table-cell">Features Available</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-white/5' : 'divide-gray-100'}`}>
                {[
                  { size: 'Solo exporter', setup: 'Gmail + Chrome extension', features: 'Full extraction, quoting, tracking' },
                  { size: 'Small team (2–5)', setup: 'Google Workspace + shared inbox', features: 'Team assignment, shared catalog' },
                  { size: 'Mid-size (5–20)', setup: 'Outlook 365 + team deployment', features: 'Multi-user, approval workflows' },
                  { size: 'Large export house (20+)', setup: 'Enterprise deployment', features: 'Custom integration, API access' },
                ].map((row) => (
                  <tr key={row.size} className={`transition-colors ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 font-medium text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{row.size}</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{row.setup}</span>
                    </td>
                    <td className={`px-6 py-4 text-sm hidden md:table-cell ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
