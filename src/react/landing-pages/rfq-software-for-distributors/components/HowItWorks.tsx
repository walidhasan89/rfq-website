import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const STEPS = [
  {
    icon: '📡',
    step: '01',
    title: 'Automatic RFQ Detection',
    subtitle: 'AI Identifies Quote Requests the Moment They Arrive',
    features: [
      'Monitors Gmail or Outlook inbox in real time',
      'Recognizes distributor-specific phrases: "need pricing on," "attached our PO requirements"',
      'Flags RFQ emails with visual badges for instant recognition',
      'Prioritizes urgent requests with deadline indicators',
      'Handles shared inboxes like sales@company.com',
      'Filters out non-RFQ emails (invoices, shipping notices)',
    ],
    benefit: 'Your team stops scanning through 100+ daily emails trying to find the RFQs. They are identified, tagged, and prioritized automatically.',
  },
  {
    icon: '🔍',
    step: '02',
    title: 'Multi-Line Item Extraction',
    subtitle: 'Every Product, Quantity, and Spec Extracted Automatically',
    features: [
      'Reads email body content for inline product requests',
      'Parses PDF attachments including multi-page bills of materials',
      'Extracts Excel spreadsheets with product lists',
      'Captures: descriptions, part numbers, quantities, UoM, delivery requirements',
      'Handles 1-line quick quotes and 500-line project RFQs equally',
      'Processes scanned documents via OCR',
    ],
    benefit: 'Zero manual data entry. Whether the buyer sends a clean spreadsheet or a messy email thread, every line item is captured accurately.',
  },
  {
    icon: '🎯',
    step: '03',
    title: 'Intelligent Product Matching & Pricing',
    subtitle: 'Customer Descriptions Matched to Your SKUs with Correct Pricing',
    features: [
      'Fuzzy matching connects buyer descriptions to your catalog',
      'Handles abbreviations, alternate names, and competitor cross-references',
      'Applies customer-specific pricing tier automatically',
      'Calculates volume discounts based on requested quantities',
      'Checks inventory availability in real time (with ERP integration)',
      'Flags discontinued products and suggests alternatives',
    ],
    benefit: 'Your 50,000-SKU catalog becomes instantly searchable by AI. Products are matched and priced in seconds — even when the buyer uses completely different terminology.',
  },
  {
    icon: '📨',
    step: '04',
    title: 'Professional Quote Reply Generated',
    subtitle: 'Branded Quotation Email Ready to Review and Send',
    features: [
      'Complete quotation draft created as an email reply in your inbox',
      'Line items in clean, professional table format',
      'Pricing calculated with subtotals, discounts, taxes, and grand total',
      'Delivery timeline included based on stock availability',
      'Payment terms and conditions appended automatically',
      'PDF quote and Excel pricing sheet attachments generated',
    ],
    benefit: 'A polished, accurate quotation email is ready in your compose window within minutes. Review it, tweak if needed, and send. Your buyer sees a fast, professional response.',
  },
];

export default function HowItWorks({ dark }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[500px] h-[500px] -bottom-32 -left-32 ${dark ? 'bg-indigo-600/10' : 'bg-blue-100/50'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              ⚙️ How It Works
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            From Inbox to Quote in{' '}
            <span className="gradient-text">4 Steps</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            No process redesign. No change management. Just faster execution of the exact workflow your team already runs.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.step}
              className={`reveal delay-${(i + 1) * 100} group relative rounded-2xl overflow-hidden border transition-all duration-300 card-3d ${
                dark
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800/70'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl shadow-sm'
              }`}
            >
              {/* Step number bg */}
              <div className="absolute top-4 right-4 text-6xl font-extrabold opacity-5 select-none gradient-text">
                {step.step}
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${
                    dark ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                      Step {step.step}
                    </div>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                    <p className={`text-sm mt-0.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{step.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {step.features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`rounded-xl p-4 ${
                  dark ? 'bg-green-500/5 border border-green-500/20' : 'bg-green-50 border border-green-200'
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${dark ? 'text-green-400' : 'text-green-700'}`}>
                    Distributor Benefit
                  </p>
                  <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{step.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speed callout */}
        <div className={`reveal mt-12 flex items-center justify-center gap-4 p-6 rounded-2xl text-center ${
          dark
            ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600'
        }`}>
          <span className="text-3xl">⚡</span>
          <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-white'}`}>
            Complete workflow for a 30-line item RFQ:{' '}
            <span className={dark ? 'text-yellow-400' : 'text-yellow-300'}>3–5 minutes</span>{' '}
            (including human review) vs.{' '}
            <span className="line-through opacity-70">45–75 minutes manually</span>
          </p>
        </div>

        {/* Resource links */}
        <div className={`reveal mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
          <span>Learn more:</span>
          <a href="/rfq-email-management-tool" className={`transition-colors underline underline-offset-2 ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ Email Management</a>
          <a href="/ai-rfq-processing-tool" className={`transition-colors underline underline-offset-2 ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>AI RFQ Processing Tool</a>
          <a href="/rfq-data-extraction-from-pdf" className={`transition-colors underline underline-offset-2 ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ Data Extraction from PDF</a>
          <a href="/quotation-email-automation" className={`transition-colors underline underline-offset-2 ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Quotation Email Automation</a>
        </div>
      </div>
    </section>
  );
}
