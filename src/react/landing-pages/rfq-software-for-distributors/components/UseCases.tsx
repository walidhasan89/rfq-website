import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const EXTRACTION_TABLE = [
  { complexity: 'Quick quote', items: '1–5 items', manual: '10–15 min', auto: '30 sec', accuracy: '99.2%', accent: 'green' },
  { complexity: 'Standard RFQ', items: '6–25 items', manual: '25–45 min', auto: '45–90 sec', accuracy: '98.9%', accent: 'blue' },
  { complexity: 'Large RFQ', items: '26–100 items', manual: '1–2 hours', auto: '2–3 min', accuracy: '98.4%', accent: 'blue' },
  { complexity: 'Project BOM', items: '101–300 items', manual: '3–5 hours', auto: '5–8 min', accuracy: '97.8%', accent: 'indigo' },
  { complexity: 'Enterprise RFQ', items: '300–500+ items', manual: 'Full day', auto: '10–15 min', accuracy: '97.1%', accent: 'purple' },
];

const EXTRACTED_FIELDS = [
  'Product description — Full text as written by the buyer',
  'Part number / SKU — Buyer\'s reference number or your catalog number',
  'Manufacturer / Brand — When specified or identifiable',
  'Quantity — Number of units requested',
  'Unit of measure — Pieces, boxes, pallets, kg, meters, etc.',
  'Specifications — Size, material, grade, color, rating',
  'Delivery date — Per-item or overall delivery requirement',
  'Special instructions — Notes specific to that line item',
  'Priority level — Urgent items flagged separately',
];

const SCENARIOS = [
  {
    challenge: 'Abbreviated product descriptions',
    buyer: '10 pcs SS 304 FB 2 inch 150#',
    ai: '10 pieces, Stainless Steel 304, Flanged Ball Valve, 2 inch, 150 lb pressure rating',
  },
  {
    challenge: 'Mixed part number formats',
    buyer: '"ABC-1234," "abc1234," "ABC 1234," and "Part# ABC-1234"',
    ai: 'All four matched to the same catalog SKU',
  },
  {
    challenge: 'Quantities embedded in descriptions',
    buyer: '"We need twenty-five 4x8 plywood sheets and about a hundred 2x4 studs 8ft"',
    ai: 'Line 1: Plywood 4x8, Qty 25 | Line 2: 2x4 Studs 8ft, Qty 100',
  },
  {
    challenge: 'Multi-page tables with repeated headers',
    buyer: 'Table starts on page 2, continues on pages 3–7 with headers repeated',
    ai: 'Merges all pages into single continuous line item list, removes duplicate headers',
  },
];

export default function UseCases({ dark }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="use-cases"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[400px] h-[400px] top-0 left-1/2 ${dark ? 'bg-purple-600/8' : 'bg-purple-100/40'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Section 1: Extraction table ─── */}
        <div className="text-center mb-12">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-50 text-purple-600 border border-purple-200'
            }`}>
              📋 Multi-Line Item Power
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Handle 10, 100, or 500 Line Items —{' '}
            <span className="gradient-text">Extracted in Seconds</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Multi-line item RFQs are the daily reality for distributors. RFQ AutoPilot's{' '}
            <a href="/rfq-data-extraction-from-pdf" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>wholesale RFQ extraction tool</a>{' '}
            handles them effortlessly — from a quick 5-item quote to a 500-line project{' '}
            <a href="https://www.supplychaindigital.com/procurement" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>BOM per supply chain best practices</a>.
          </p>
        </div>

        {/* Extraction Table */}
        <div className={`reveal rounded-2xl overflow-hidden border mb-16 ${
          dark ? 'border-slate-700/50' : 'border-slate-200 shadow-sm'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full styled-table">
              <thead className={dark ? 'bg-slate-800' : 'bg-slate-50'}>
                <tr>
                  {['RFQ Complexity', 'Line Items', 'Manual Time', 'RFQ AutoPilot', 'Accuracy'].map(h => (
                    <th key={h} className={`${dark ? 'text-slate-400' : 'text-slate-500'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXTRACTION_TABLE.map((row, i) => (
                  <tr key={row.complexity} className={`transition-colors ${
                    dark ? 'hover:bg-slate-800/50' : 'hover:bg-blue-50/50'
                  } ${i % 2 === 0 ? (dark ? 'bg-slate-900/30' : '') : ''}`}>
                    <td className={`font-semibold ${dark ? 'text-white' : 'text-slate-800'}`}>{row.complexity}</td>
                    <td className={dark ? 'text-slate-300' : 'text-slate-600'}>{row.items}</td>
                    <td className={`font-medium ${dark ? 'text-red-400' : 'text-red-600'}`}>{row.manual}</td>
                    <td className={`font-bold ${dark ? 'text-green-400' : 'text-green-600'}`}>{row.auto}</td>
                    <td>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        dark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'
                      }`}>{row.accuracy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Extracted fields */}
          <div className="reveal-left">
            <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Complete Data Capture for Every Product
            </h3>
            <p className={`text-sm mb-6 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              For each line item in a multi-line RFQ, the AI captures:
            </p>
            <div className="space-y-2">
              {EXTRACTED_FIELDS.map(f => (
                <div key={f} className={`flex items-start gap-3 p-3 rounded-xl ${
                  dark ? 'bg-slate-800/40' : 'bg-slate-50'
                }`}>
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✅</span>
                  <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart extraction scenarios */}
          <div className="reveal-right">
            <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Smart Extraction for Messy Real-World RFQs
            </h3>
            <p className={`text-sm mb-6 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              How the AI handles common distributor line item challenges:
            </p>
            <div className="space-y-4">
              {SCENARIOS.map(s => (
                <div key={s.challenge} className={`rounded-xl border overflow-hidden ${
                  dark ? 'border-slate-700/50' : 'border-slate-200'
                }`}>
                  <div className={`px-4 py-2 text-xs font-semibold ${
                    dark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                  }`}>
                    Challenge: {s.challenge}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className="font-medium">Buyer writes:</span> {s.buyer}
                    </div>
                    <div className={`flex items-start gap-2 text-xs ${dark ? 'text-blue-300' : 'text-blue-700'}`}>
                      <span className="font-bold flex-shrink-0">AI →</span>
                      <span>{s.ai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real distributor example */}
        <div className={`reveal rounded-2xl overflow-hidden border ${
          dark ? 'border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-indigo-500/5' : 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50'
        }`}>
          <div className={`px-6 py-4 border-b flex items-center gap-3 ${dark ? 'border-blue-500/20' : 'border-blue-200'}`}>
            <span className="text-2xl">🏭</span>
            <div>
              <p className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>Real Distributor Example</p>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>87-Line Item Electrical Supply RFQ — Processed in 6 Minutes</p>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className={`text-sm font-bold mb-3 ${dark ? 'text-red-400' : 'text-red-600'}`}>❌ Manual Approach</p>
              <div className="space-y-1.5">
                {[
                  '15 min reading the PDF',
                  '2 min per item × 87 items = ~3 hours ERP lookup',
                  '45 min building the quotation email',
                  <span key="total" className="font-bold">Total: ~4 hours per RFQ</span>,
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <span className="text-red-500">→</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className={`text-sm font-bold mb-3 ${dark ? 'text-green-400' : 'text-green-600'}`}>✅ RFQ AutoPilot</p>
              <div className="space-y-1.5">
                {[
                  'PDF processed in 18 seconds',
                  '87 line items extracted with descriptions',
                  '79 items matched to catalog (91% auto-match)',
                  '8 items flagged for review',
                  'Pricing applied using contractor\'s volume tier',
                  'Rep resolves 8 flagged items in 4 minutes',
                  <span key="total" className="font-bold text-green-500">Total: 6 minutes — 3 hr 54 min saved</span>,
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <span className="text-green-500">→</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
