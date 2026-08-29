import { useEffect, useRef, useState } from 'react';

interface UseCasesProps {
  darkMode: boolean;
}

const UseCases: React.FC<UseCasesProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeScenario, setActiveScenario] = useState(0);

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

  const scenarios = [
    {
      time: '7:45 AM',
      emoji: '🌅',
      title: 'Overnight RFQs Already Processed',
      subtitle: 'Before the Office Opens',
      color: 'blue',
      without: {
        label: 'Without RFQ AutoPilot',
        time: '45 min',
        text: 'Sarah arrives to 23 unread emails from overnight. She spends 45 minutes sorting through them to identify RFQs, follow-ups, and spam. Finds 11 RFQs — three in Arabic, two in Spanish, one in Chinese. Flags them and starts working through the pile.',
      },
      with: {
        label: 'With RFQ AutoPilot',
        time: '7 min',
        text: 'Sarah opens Gmail and sees 11 emails marked with green RFQ badges. Three overnight RFQs have draft quotation replies prepared by AI — including currency conversion, incoterm suggestions, and shipping estimates. She adjusts one price and sends the first quote at 7:52 AM — to a Dubai buyer who sent the RFQ 9 hours ago.',
      },
      impact: 'First quote sent within 7 minutes of arriving. Previously would have taken until 10 AM.',
    },
    {
      time: '8:30 AM',
      emoji: '🇨🇳',
      title: 'Chinese PDF RFQ Extracted and Quoted',
      subtitle: 'Multi-Language PDF Processing',
      color: 'red',
      without: {
        label: 'Without RFQ AutoPilot',
        time: '3+ hours',
        text: 'Email from Chinese buyer: "Please quote attached list." 4-page PDF written entirely in Simplified Chinese. Sarah cannot read Chinese. She forwards to a Mandarin-speaking colleague, waits 2 hours for translation, then manually matches products and builds the quote.',
      },
      with: {
        label: 'With RFQ AutoPilot',
        time: '11 min',
        text: 'Sarah clicks RFQ AutoPilot on the email. AI processes all 4 pages with Chinese-language OCR/NLP, extracts 28 line items, matches 24 products to catalog, converts pricing to CNY at current exchange rate, and generates a quotation draft in English with a Chinese-language courtesy copy.',
      },
      impact: '3-hour process reduced to 11 minutes. No translation dependency.',
    },
    {
      time: '10:00 AM',
      emoji: '🇸🇦',
      title: 'Urgent Saudi Arabia RFQ with Deadline',
      subtitle: 'Time-Zone Critical with Compliance',
      color: 'green',
      without: {
        label: 'Without RFQ AutoPilot',
        time: 'Missed deadline',
        text: 'Saudi buyer needs quote for 15 products in SAR, delivery CIF Jeddah, with SASO compliance references, by 2 PM Riyadh time — which is 7 AM Sarah\'s time. She missed the deadline by 3 hours. Competitors already sent quotes.',
      },
      with: {
        label: 'With RFQ AutoPilot',
        time: '3 hrs ahead',
        text: 'RFQ arrived at 5 AM. System immediately flagged high priority, extracted all 15 line items, converted to SAR, applied CIF Jeddah shipping, added SASO compliance references. Draft was waiting at 7:45 AM. Quote arrived in buyer\'s inbox at 10:50 AM — 3 hours before the 2 PM deadline.',
      },
      impact: 'Impossible deadline met automatically. Quote arrived 3 hours ahead instead of 3 hours late.',
    },
    {
      time: '11:30 AM',
      emoji: '🇪🇺',
      title: 'Five European RFQs — Morning Coffee',
      subtitle: 'Batch Multi-Language Processing',
      color: 'indigo',
      without: {
        label: 'Without RFQ AutoPilot',
        time: '4+ hours',
        text: 'Five RFQs from Germany (German), France (French), Italy (Italian), Poland (English), UK — different currencies (EUR, PLN, GBP) and incoterms. Processing all five manually takes Sarah and her team until 2 PM: 4 hours of combined effort.',
      },
      with: {
        label: 'With RFQ AutoPilot',
        time: '15 min',
        text: 'All five RFQs were detected and extracted overnight. Draft quotations in correct languages with correct currencies are waiting. Sarah reviews each one, makes minor adjustments, and sends all five between 11:30 and 11:45 AM.',
      },
      impact: '4 hours of team effort reduced to 15 minutes of review. All five European buyers receive quotes by noon.',
    },
    {
      time: '2:00 PM',
      emoji: '🇧🇷',
      title: 'Alibaba Lead from Brazil Converted to Quote',
      subtitle: 'B2B Marketplace Integration',
      color: 'orange',
      without: {
        label: 'Without RFQ AutoPilot',
        time: '50 min',
        text: 'Alibaba notification about Brazilian buyer inquiry for 8 products. Log into Alibaba, read inquiry, copy product list, switch to email, type response, look up pricing, convert to BRL, calculate FOB shipping, send quote. Back-and-forth takes 50 minutes.',
      },
      with: {
        label: 'With RFQ AutoPilot',
        time: '6 min',
        text: 'The Alibaba notification email itself is detected as an RFQ. AI extracts product details, matches products, converts to BRL, applies FOB pricing, generates quotation draft. Sarah reviews and sends from email, also replies on Alibaba for platform continuity.',
      },
      impact: 'Platform inquiry response time drops from 50 minutes to 6 minutes.',
    },
  ];

  const comparisonData = [
    { metric: 'RFQs received', without: '34', with: '34', highlight: false },
    { metric: 'RFQs processed same day', without: '14 (41%)', with: '34 (100%)', highlight: true },
    { metric: 'RFQs carried to next day', without: '20', with: '0', highlight: true },
    { metric: 'Average response time', without: '4.5 hours', with: '22 minutes', highlight: true },
    { metric: 'Multi-language RFQs', without: 'Requires translation', with: 'Processed by AI', highlight: true },
    { metric: 'Currency conversions', without: 'Manual lookup', with: 'Automatic', highlight: false },
    { metric: 'Missed deadlines', without: '3 buyer deadlines', with: '0 deadlines', highlight: true },
    { metric: 'Total active quoting time', without: '7+ hours', with: '2.5 hours', highlight: true },
    { metric: 'Time for strategic work', without: 'Almost none', with: '4.5 hours freed', highlight: true },
  ];

  const sc = scenarios[activeScenario];
  const colorMap: Record<string, string> = {
    blue: darkMode ? 'text-blue-400 bg-blue-900/30 border-blue-500/30' : 'text-blue-700 bg-blue-50 border-blue-200',
    red: darkMode ? 'text-red-400 bg-red-900/30 border-red-500/30' : 'text-red-700 bg-red-50 border-red-200',
    green: darkMode ? 'text-emerald-400 bg-emerald-900/30 border-emerald-500/30' : 'text-emerald-700 bg-emerald-50 border-emerald-200',
    indigo: darkMode ? 'text-indigo-400 bg-indigo-900/30 border-indigo-500/30' : 'text-indigo-700 bg-indigo-50 border-indigo-200',
    orange: darkMode ? 'text-orange-400 bg-orange-900/30 border-orange-500/30' : 'text-orange-700 bg-orange-50 border-orange-200',
  };

  return (
    <section
      id="use-cases"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full ${darkMode ? 'bg-blue-900/10' : 'bg-blue-100/50'} blur-3xl`} />
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full ${darkMode ? 'bg-indigo-900/10' : 'bg-indigo-100/50'} blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="slide-up inline-flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-700'
            }`}>
              Real-World Use Cases
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            A Day in the Life —{' '}
            <span className="gradient-text">How Export Managers Use RFQ AutoPilot</span>
          </h2>
          <p className={`slide-up delay-200 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Meet Sarah, an export manager at a mid-size trading company exporting industrial equipment to 35 countries. See how our{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ automation software
            </a>{' '}
            transforms her day — and discover why it's the leading{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ software for distributors
            </a>{' '}
            and trading companies worldwide.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="slide-up mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveScenario(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeScenario === i
                    ? 'gradient-brand text-white shadow-lg shadow-blue-500/25'
                    : darkMode
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/10'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{s.emoji}</span>
                <span>{s.time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Scenario */}
        <div className="slide-up">
          <div className={`rounded-3xl border overflow-hidden ${
            darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'
          }`}>
            {/* Header */}
            <div className={`px-8 py-6 border-b flex items-center gap-4 ${
              darkMode ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50'
            }`}>
              <span className="text-3xl">{sc.emoji}</span>
              <div>
                <div className={`text-sm font-semibold uppercase tracking-wide mb-1 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{sc.time} — {sc.subtitle}</div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {sc.title}
                </h3>
              </div>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
              {/* Without */}
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-semibold ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                    ✗ {sc.without.label}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                    darkMode ? 'bg-red-900/40 text-red-300' : 'bg-red-200 text-red-700'
                  }`}>
                    {sc.without.time}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {sc.without.text}
                </p>
              </div>

              {/* With */}
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    ✓ {sc.with.label}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                    darkMode ? 'bg-emerald-900/40 text-emerald-300' : 'bg-emerald-200 text-emerald-700'
                  }`}>
                    {sc.with.time}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {sc.with.text}
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className={`mx-8 mb-8 p-4 rounded-xl border flex items-start gap-3 ${colorMap[sc.color]}`}>
              <span className="text-xl">⚡</span>
              <p className="text-sm font-semibold">{sc.impact}</p>
            </div>
          </div>
        </div>

        {/* Daily Comparison Table */}
        <div className={`slide-up mt-12 rounded-3xl border overflow-hidden ${
          darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className={`px-8 py-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              📊 Daily Comparison: Sarah's Full Day
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              100% RFQ clearance rate. Zero overnight backlog. Whether you're a{' '}
              <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                manufacturer
              </a>,{' '}
              <a href="https://rfqautopilot.com/rfq-software-small-business" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                small business
              </a>, or large export house — results are the same.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-xs uppercase tracking-wider ${darkMode ? 'bg-white/5 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                  <th className="px-6 py-3 text-left font-semibold">Metric</th>
                  <th className="px-6 py-3 text-left font-semibold text-red-500">Without AutoPilot</th>
                  <th className="px-6 py-3 text-left font-semibold text-emerald-500">With AutoPilot</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-white/5' : 'divide-gray-100'}`}>
                {comparisonData.map((row) => (
                  <tr key={row.metric} className={`transition-colors ${
                    row.highlight
                      ? darkMode ? 'bg-blue-950/20' : 'bg-blue-50/50'
                      : darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                  }`}>
                    <td className={`px-6 py-3.5 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {row.metric}
                    </td>
                    <td className={`px-6 py-3.5 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                      {row.without}
                    </td>
                    <td className={`px-6 py-3.5 text-sm font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {row.with}
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

export default UseCases;
