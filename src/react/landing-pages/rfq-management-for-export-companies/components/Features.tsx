import { useEffect, useRef } from 'react';

interface FeaturesProps {
  darkMode: boolean;
}

const useScrollAnimation = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.fade-in, .slide-up, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
};

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef as React.RefObject<HTMLElement>);

  const mainFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      title: 'AI That Reads RFQs in 40+ Languages',
      description: 'Your buyers write in their native language. Some mix languages within the same email. RFQ AutoPilot\'s NLP handles all of it — automatically detecting, extracting, and structuring data from any language.',
      color: 'blue',
      badges: ['Auto Language Detection', 'Mixed-Language Processing', 'Technical Terms'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quote in Any Currency — Convert Automatically',
      description: 'International buyers expect quotes in their local currency. RFQ AutoPilot automates the entire multi-currency quoting process with live exchange rates updated multiple times daily.',
      color: 'indigo',
      badges: ['150+ Currencies', 'Live Exchange Rates', 'Rate Locking'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 RFQ Detection Across All Time Zones',
      description: 'RFQ detection runs continuously regardless of your business hours. When an RFQ arrives at 3 AM, the system detects it, extracts all data, and prepares a draft quotation ready for your morning review.',
      color: 'violet',
      badges: ['Real-time Monitoring', 'Morning Briefing Ready', 'Priority Flagging'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Gmail & Outlook Integration',
      description: 'Install as a Chrome Extension for Gmail or add-in for Outlook. Full support for shared inboxes (sales@, export@, quotes@) and Google Workspace or Microsoft 365 admin deployment.',
      color: 'cyan',
      badges: ['Gmail / Google Workspace', 'Microsoft Outlook 365', 'Shared Inboxes'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'Incoterms, Duties & Shipping Integrated',
      description: 'AI detects when buyers specify FOB, CIF, EXW, DDP and other incoterms, integrates with freight calculators, notes applicable duties, and includes required export documentation references automatically.',
      color: 'emerald',
      badges: ['All Incoterms', 'Freight Estimation', 'Compliance Docs'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Global Analytics Dashboard',
      description: 'Track quoting performance by region, measure win rates by country, monitor average response times, and visualize your global pipeline with a comprehensive analytics dashboard.',
      color: 'orange',
      badges: ['Win Rate by Region', 'Response Time Tracking', 'Pipeline Visibility'],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
    blue: {
      bg: darkMode ? 'bg-blue-950/30' : 'bg-blue-50',
      border: darkMode ? 'border-blue-500/20' : 'border-blue-200',
      icon: darkMode ? 'text-blue-400' : 'text-blue-600',
      badge: darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700',
    },
    indigo: {
      bg: darkMode ? 'bg-indigo-950/30' : 'bg-indigo-50',
      border: darkMode ? 'border-indigo-500/20' : 'border-indigo-200',
      icon: darkMode ? 'text-indigo-400' : 'text-indigo-600',
      badge: darkMode ? 'bg-indigo-900/40 text-indigo-300' : 'bg-indigo-100 text-indigo-700',
    },
    violet: {
      bg: darkMode ? 'bg-violet-950/30' : 'bg-violet-50',
      border: darkMode ? 'border-violet-500/20' : 'border-violet-200',
      icon: darkMode ? 'text-violet-400' : 'text-violet-600',
      badge: darkMode ? 'bg-violet-900/40 text-violet-300' : 'bg-violet-100 text-violet-700',
    },
    cyan: {
      bg: darkMode ? 'bg-cyan-950/30' : 'bg-cyan-50',
      border: darkMode ? 'border-cyan-500/20' : 'border-cyan-200',
      icon: darkMode ? 'text-cyan-400' : 'text-cyan-600',
      badge: darkMode ? 'bg-cyan-900/40 text-cyan-300' : 'bg-cyan-100 text-cyan-700',
    },
    emerald: {
      bg: darkMode ? 'bg-emerald-950/30' : 'bg-emerald-50',
      border: darkMode ? 'border-emerald-500/20' : 'border-emerald-200',
      icon: darkMode ? 'text-emerald-400' : 'text-emerald-600',
      badge: darkMode ? 'bg-emerald-900/40 text-emerald-300' : 'bg-emerald-100 text-emerald-700',
    },
    orange: {
      bg: darkMode ? 'bg-orange-950/30' : 'bg-orange-50',
      border: darkMode ? 'border-orange-500/20' : 'border-orange-200',
      icon: darkMode ? 'text-orange-400' : 'text-orange-600',
      badge: darkMode ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-700',
    },
  };

  const languages = [
    { flag: '🇬🇧', lang: 'English', note: 'US, UK, AU, IN variants' },
    { flag: '🇨🇳', lang: 'Chinese', note: 'Simplified & Traditional' },
    { flag: '🇪🇸', lang: 'Spanish', note: 'European & Latin American' },
    { flag: '🇫🇷', lang: 'French', note: 'European & African' },
    { flag: '🇩🇪', lang: 'German', note: '' },
    { flag: '🇯🇵', lang: 'Japanese', note: '' },
    { flag: '🇰🇷', lang: 'Korean', note: '' },
    { flag: '🇵🇹', lang: 'Portuguese', note: 'Brazilian & European' },
    { flag: '🇸🇦', lang: 'Arabic', note: 'Modern Standard & Gulf' },
    { flag: '🇷🇺', lang: 'Russian', note: '' },
    { flag: '🇮🇳', lang: 'Hindi/Urdu', note: '' },
    { flag: '🇹🇷', lang: 'Turkish', note: '' },
    { flag: '🇮🇹', lang: 'Italian', note: '' },
    { flag: '🇻🇳', lang: 'Vietnamese', note: '' },
    { flag: '🇹🇭', lang: 'Thai', note: '' },
    { flag: '🌍', lang: '20+ More', note: '' },
  ];

  return (
    <section
      id="features"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-30' : 'opacity-20'}`}>
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500 filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-500 filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-up inline-flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-700'
            }`}>
              Core Features
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Built for Global Trade —{' '}
            <span className="gradient-text">Multi-Language & Multi-Currency</span>
          </h2>
          <p className={`slide-up delay-200 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            International RFQ management demands capabilities that domestic quoting tools simply do not offer. RFQ AutoPilot's AI understands the linguistic diversity and financial complexity of global trade.
          </p>
        </div>

        {/* Context Block — moved from Hero description */}
        <div className={`slide-up delay-300 mb-14 p-7 rounded-2xl border max-w-4xl mx-auto ${ 
          darkMode ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50/60 border-blue-200'
        }`}>
          <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Export companies face a quoting challenge that domestic businesses never encounter. Your{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-800'}`}>
              international RFQ management
            </a>{' '}
            demands around-the-clock coverage across 15 different time zones. RFQs arrive in multiple languages — English mixed with Arabic, Spanish with technical French, Chinese descriptions inside English email threads — requesting pricing in currencies you need to convert and compliance documentation that varies by destination country.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            The brutal reality: <strong>speed of response directly determines who wins the international order.</strong> A buyer in Shanghai who sends an RFQ at 9 AM their time does not wait until your New York office opens. RFQ AutoPilot is the{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-800'}`}>
              RFQ automation software
            </a>{' '}
            that ensures you never miss a quote request — regardless of when it arrives, what language it is in, or what currency is needed.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainFeatures.map((feature, i) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`feature-card slide-up card-hover p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-900/60 border-white/10 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`feature-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.bg} ${colors.icon}`}>
                  {feature.icon}
                </div>
                <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.badges.map((badge) => (
                    <span key={badge} className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Language Grid */}
        <div className={`slide-up p-8 lg:p-12 rounded-3xl border ${
          darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              40+ Languages — From Arabic to Swahili
            </h3>
            <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Technical terminology across languages: "Acero inoxidable 304" (Spanish), "Edelstahl 1.4301" (German), and "SUS304" (Japanese) all refer to the same stainless steel grade. The AI recognizes these equivalencies automatically.{' '}
              Global trade complexity is well-documented by resources like{' '}
              <a href="https://www.intracen.org/resources/tools" target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                ITC Trade Tools
              </a>{' '}
              and{' '}
              <a href="https://unctad.org/topic/trade-facilitation/technology-for-trade" target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                UNCTAD Technology for Trade
              </a>.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {languages.map((lang) => (
              <div
                key={lang.lang}
                className={`flex flex-col items-center p-3 rounded-xl border text-center group transition-all duration-200 cursor-default ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:bg-blue-900/30 hover:border-blue-500/30'
                    : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl mb-1.5">{lang.flag}</span>
                <span className={`text-xs font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {lang.lang}
                </span>
                {lang.note && (
                  <span className={`text-[10px] mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {lang.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detection Accuracy Table */}
        <div className={`slide-up mt-8 rounded-3xl border overflow-hidden ${
          darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className={`px-8 py-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Detection Accuracy by Email Origin
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Industry-leading accuracy across all major trading regions. Supporting{' '}
              <a href="https://www.trade.gov/export-solutions" target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                U.S. export solutions
              </a>{' '}
              and global trade with{' '}
              <a href="https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020" target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                Incoterms 2020
              </a>{' '}
              built in.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-xs uppercase tracking-wider ${darkMode ? 'bg-white/5 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                  <th className="px-6 py-3 text-left font-semibold">Region</th>
                  <th className="px-6 py-3 text-left font-semibold">Detection Accuracy</th>
                  <th className="px-6 py-3 text-left font-semibold hidden sm:table-cell">Languages</th>
                  <th className="px-6 py-3 text-left font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-white/5' : 'divide-gray-100'}`}>
                {[
                  { region: '🇺🇸 North America', accuracy: '99.1%', langs: 'English, Spanish, French', notes: 'Standard formats', color: 'green' },
                  { region: '🇪🇺 Europe', accuracy: '98.7%', langs: '15+ European languages', notes: 'Formal procurement style', color: 'blue' },
                  { region: '🇸🇦 Middle East', accuracy: '97.9%', langs: 'Arabic, English, Farsi', notes: 'Mixed language common', color: 'orange' },
                  { region: '🇨🇳 East Asia', accuracy: '97.5%', langs: 'Chinese, Japanese, Korean', notes: 'Attachment-heavy style', color: 'red' },
                  { region: '🇮🇳 South Asia', accuracy: '97.8%', langs: 'English, Hindi, Tamil', notes: 'Forwarded chain style', color: 'yellow' },
                  { region: '🇧🇷 Latin America', accuracy: '98.2%', langs: 'Spanish, Portuguese', notes: 'Conversational style', color: 'green' },
                  { region: '🌍 Africa', accuracy: '97.4%', langs: 'English, French, Swahili', notes: 'Growing market focus', color: 'emerald' },
                  { region: '🇸🇬 Southeast Asia', accuracy: '97.6%', langs: 'English, Thai, Vietnamese', notes: 'Platform-originated', color: 'cyan' },
                ].map((row) => (
                  <tr key={row.region} className={`table-row-hover transition-colors ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 font-medium text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      {row.region}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-sm font-bold gradient-text">{row.accuracy}</span>
                        <div className={`h-1.5 w-16 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                          <div
                            className="h-full rounded-full gradient-brand"
                            style={{ width: row.accuracy }}
                          />
                        </div>
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm hidden sm:table-cell ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {row.langs}
                    </td>
                    <td className={`px-6 py-4 text-sm hidden md:table-cell ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {row.notes}
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
};

export default Features;
