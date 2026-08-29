import { useEffect, useRef, useState } from 'react';

interface UseCasesProps {
  darkMode: boolean;
}

const useCases = [
  {
    icon: '📋',
    title: 'Manufacturing BOM Extraction',
    subtitle: '200-Line Item Bill of Materials',
    scenario: 'A procurement manager emails a 22-page PDF containing 200+ line items with part numbers, quantities, material specs, and tolerance requirements for a custom manufacturing project.',
    manual: '2-3 hours of data entry, high error risk, multiple team members involved.',
    steps: [
      'PDF detected and processed in 45 seconds',
      'All 200 line items extracted with part numbers, quantities, and specs',
      '187 items automatically matched to product catalog',
      '13 items flagged for manual review (new or ambiguous parts)',
      'Quotation draft generated with pricing for matched items',
      'Total processing time: 8 minutes including human review',
    ],
    result: '95% time reduction, zero transcription errors on matched items.',
    color: 'blue',
  },
  {
    icon: '🏛️',
    title: 'Government Procurement Document Processing',
    subtitle: 'Scanned Government RFQ',
    scenario: 'A government agency sends a scanned 35-page RFQ document with formal procurement language, compliance requirements, detailed specifications, and strict submission formatting requirements.',
    manual: '3-4 hours to read, interpret, and extract relevant data from dense bureaucratic formatting.',
    steps: [
      'OCR processes all 35 scanned pages in 60 seconds',
      'AI identifies product requirements, quantities, and compliance criteria',
      'Delivery schedule and submission deadline extracted',
      'Required response format detected automatically',
      'Quote template formatted to match government specifications',
      'Compliance checklist auto-generated',
    ],
    result: 'Bid preparation time cut by 75%, all compliance requirements captured.',
    color: 'violet',
  },
  {
    icon: '📊',
    title: 'Distributor Price List Comparison',
    subtitle: 'Multi-Vendor Comparison RFQ',
    scenario: 'A buyer sends PDF RFQs to multiple vendors simultaneously using a standardized template with 50 products. Your team needs to fill in pricing and return the same PDF format.',
    manual: '1-2 hours of looking up prices and manually typing into the PDF form or recreating the table.',
    steps: [
      'PDF template structure recognized in 10 seconds',
      'All 50 products extracted and matched to catalog',
      'Pricing auto-filled based on customer tier',
      'Response formatted to match buyer\'s original template',
      'PDF or email reply generated automatically',
    ],
    result: 'Response time drops from next-day to same-hour, improving competitive positioning.',
    color: 'cyan',
  },
  {
    icon: '🌍',
    title: 'Cross-Border Procurement Document',
    subtitle: 'International RFQ with Mixed Languages',
    scenario: 'An international buyer sends a PDF RFQ in German with product descriptions in English, quantities in metric units, and delivery terms referencing European incoterms.',
    manual: 'Requires bilingual team member, 1-2 hours for translation and extraction.',
    steps: [
      'Language auto-detected as German/English mixed',
      'All fields extracted regardless of language',
      'Metric units recognized and maintained',
      'Incoterms identified and applied correctly',
      'Quote generated in buyer\'s preferred language',
      'Currency converted based on buyer\'s region',
    ],
    result: 'No language barrier delays, immediate processing regardless of source language.',
    color: 'emerald',
  },
  {
    icon: '🔄',
    title: 'Regular Customer Reorder Processing',
    subtitle: 'Recurring Monthly RFQ Updates',
    scenario: 'A key account sends a monthly PDF with updated quantities for 30 regular products. The format is identical each month, but quantities and occasional product additions change.',
    manual: '30-45 minutes comparing current PDF to previous month, noting changes.',
    steps: [
      'AI recognizes recurring customer and template format',
      'Current month quantities extracted in seconds',
      'Automatic comparison with previous month\'s order',
      'Changes highlighted (increases, decreases, new items)',
      'Updated quotation generated with current pricing',
      'Historical trend data available for account review',
    ],
    result: 'Monthly reorder processing drops from 45 minutes to 3 minutes, with built-in change tracking.',
    color: 'amber',
  },
];

const colorMap: Record<string, { gradient: string; badge: string; text: string; resultBg: string }> = {
  blue:    { gradient: 'from-blue-500 to-blue-700',    badge: 'bg-blue-500/10 text-blue-400',    text: 'text-blue-500',    resultBg: 'bg-blue-500/8' },
  violet:  { gradient: 'from-violet-500 to-violet-700', badge: 'bg-violet-500/10 text-violet-400', text: 'text-violet-500', resultBg: 'bg-violet-500/8' },
  cyan:    { gradient: 'from-cyan-500 to-blue-600',     badge: 'bg-cyan-500/10 text-cyan-400',     text: 'text-cyan-500',    resultBg: 'bg-cyan-500/8' },
  emerald: { gradient: 'from-emerald-500 to-teal-600',  badge: 'bg-emerald-500/10 text-emerald-400', text: 'text-emerald-500', resultBg: 'bg-emerald-500/8' },
  amber:   { gradient: 'from-amber-500 to-orange-600',  badge: 'bg-amber-500/10 text-amber-400',   text: 'text-amber-500',   resultBg: 'bg-amber-500/8' },
};

export default function UseCases({ darkMode }: UseCasesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = useCases[activeCase];
  const c = colorMap[active.color];

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-blue-900/15' : 'bg-blue-100/40'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            💼 USE CASES
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Real-World Use Cases —{' '}
            <span className="gradient-text">Complex PDF RFQs Solved</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            See how RFQ AutoPilot handles the most challenging PDF RFQ scenarios that consume hours of your team's time every week.
            Whether you need an{' '}
            <a href="https://rfqautopilot.com/rfq-email-management-tool" className="text-blue-500 hover:underline font-medium">RFQ email management tool</a>,{' '}
            a <a href="https://rfqautopilot.com/procurement-chrome-extension" className="text-blue-500 hover:underline font-medium">procurement Chrome extension</a>, or{' '}
            <a href="https://rfqautopilot.com/rfq-software-small-business" className="text-blue-500 hover:underline font-medium">RFQ software for small business</a> —
            we've got you covered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar tabs */}
          <div className="lg:w-72 flex-shrink-0 reveal">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {useCases.map((uc, idx) => {
                const cc = colorMap[uc.color];
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCase(idx)}
                    className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 border ${
                      activeCase === idx
                        ? darkMode
                          ? `bg-blue-950/50 border-blue-500/40 text-white`
                          : `bg-blue-50 border-blue-300 text-slate-900`
                        : darkMode
                          ? 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                          : 'border-transparent text-slate-600 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cc.gradient} flex items-center justify-center text-sm flex-shrink-0`}>
                      {uc.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">{uc.subtitle}</p>
                      <p className={`text-xs truncate ${activeCase === idx ? (darkMode ? 'text-slate-400' : 'text-slate-500') : (darkMode ? 'text-slate-600' : 'text-slate-400')}`}>
                        {uc.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content panel */}
          <div className={`flex-1 reveal rounded-3xl overflow-hidden ${
            darkMode ? 'bg-slate-900 border border-white/8' : 'bg-white border border-slate-200 shadow-xl shadow-slate-900/5'
          }`}>
            {/* Header */}
            <div className={`px-8 py-6 border-b ${darkMode ? 'border-white/8 bg-slate-950/40' : 'border-slate-100'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {active.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{active.subtitle}</span>
                  <h3 className={`text-xl font-bold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{active.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Scenario */}
              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Scenario</p>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{active.scenario}</p>
              </div>

              {/* Manual vs AI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className={`rounded-2xl p-4 border ${darkMode ? 'bg-red-950/20 border-red-900/30' : 'bg-red-50 border-red-200'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 text-red-400`}>Manual Approach</p>
                  <p className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-700'}`}>{active.manual}</p>
                </div>
                <div className={`rounded-2xl p-4 border ${darkMode ? 'bg-green-950/20 border-green-900/30' : 'bg-green-50 border-green-200'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 text-green-400`}>RFQ AutoPilot</p>
                  <ul className="space-y-1">
                    {active.steps.map((step, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                        <span className="flex-shrink-0 mt-0.5">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result */}
              <div className={`rounded-2xl px-5 py-4 flex items-center gap-3 ${
                darkMode ? `${c.resultBg} border border-white/8` : 'bg-slate-50 border border-slate-200'
              }`}>
                <span className="text-xl">🎯</span>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${c.text}`}>Result</p>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{active.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
