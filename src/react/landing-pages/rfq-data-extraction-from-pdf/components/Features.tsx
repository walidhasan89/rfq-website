import { useEffect, useRef } from 'react';

interface FeaturesProps {
  darkMode: boolean;
}

const dataCategories = [
  {
    icon: '🏷️',
    title: 'Product Names, Descriptions & Part Numbers',
    category: 'Product Information',
    fields: [
      'Product names and descriptions (full text)',
      'Part numbers, SKUs, and model numbers',
      'Manufacturer names and brand references',
      'Technical specifications and grades',
      'Material types and composition',
      'Color, size, and dimension details',
    ],
    ai: 'Fuzzy matching connects customer product descriptions to your catalog entries — even when they use different terminology or abbreviations.',
    color: 'blue',
  },
  {
    icon: '🔢',
    title: 'Quantities, Units of Measure & Packaging',
    category: 'Quantities & Units',
    fields: [
      'Order quantities per line item',
      'Units of measure (pieces, kg, meters, liters)',
      'Minimum order quantities mentioned',
      'Package size requirements',
      'Batch or lot size specifications',
      'Annual volume estimates',
    ],
    ai: 'Unit conversion intelligence normalizes different measurement systems and flags quantity anomalies like unusually large or small orders.',
    color: 'violet',
  },
  {
    icon: '📐',
    title: 'Technical Specs, Standards & Compliance',
    category: 'Specifications & Requirements',
    fields: [
      'Dimensional specifications (L, W, H, weight)',
      'Tolerance requirements',
      'Industry standards (ISO, ASTM, DIN, JIS)',
      'Certification requirements',
      'Testing and inspection criteria',
      'Environmental requirements',
    ],
    ai: 'Specification matching validates extracted requirements against your product capabilities and flags items needing engineering review.',
    color: 'cyan',
  },
  {
    icon: '🚚',
    title: 'Delivery Terms, Dates & Shipping Requirements',
    category: 'Delivery & Logistics',
    fields: [
      'Requested delivery dates and deadlines',
      'Delivery location and shipping address',
      'Incoterms (FOB, CIF, EXW, DDP)',
      'Shipping method preferences',
      'Partial shipment acceptance',
      'Packaging and labeling requirements',
    ],
    ai: 'Delivery date extraction understands relative dates like "within 4 weeks" or "Q3 delivery" and converts them to specific calendar dates.',
    color: 'emerald',
  },
  {
    icon: '💼',
    title: 'Pricing, Payment & Contract Terms',
    category: 'Commercial Terms',
    fields: [
      'Target pricing or budget ranges',
      'Payment terms requested',
      'Currency preferences',
      'Warranty requirements',
      'Contract duration',
      'Volume discount expectations',
    ],
    ai: 'Commercial term extraction helps your team understand buyer expectations before quoting, enabling more competitive responses.',
    color: 'amber',
  },
  {
    icon: '👤',
    title: 'Buyer Details & Document References',
    category: 'Contact & Reference Info',
    fields: [
      'Buyer name and title',
      'Company name and department',
      'Email address and phone number',
      'RFQ reference number',
      'Project name or number',
      'Bid submission deadline',
    ],
    ai: 'Contact information is cross-referenced with your CRM to identify existing customers, pull historical pricing, and apply relationship-specific terms.',
    color: 'rose',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  blue:    { bg: 'from-blue-500 to-blue-700',    border: 'border-blue-500/20',  text: 'text-blue-500',   badge: 'bg-blue-500/10 text-blue-400',   dot: 'bg-blue-500' },
  violet:  { bg: 'from-violet-500 to-violet-700', border: 'border-violet-500/20', text: 'text-violet-500', badge: 'bg-violet-500/10 text-violet-400', dot: 'bg-violet-500' },
  cyan:    { bg: 'from-cyan-500 to-blue-600',     border: 'border-cyan-500/20',  text: 'text-cyan-500',   badge: 'bg-cyan-500/10 text-cyan-400',    dot: 'bg-cyan-500' },
  emerald: { bg: 'from-emerald-500 to-teal-600',  border: 'border-emerald-500/20', text: 'text-emerald-500', badge: 'bg-emerald-500/10 text-emerald-400', dot: 'bg-emerald-500' },
  amber:   { bg: 'from-amber-500 to-orange-600',  border: 'border-amber-500/20', text: 'text-amber-500',   badge: 'bg-amber-500/10 text-amber-400',  dot: 'bg-amber-500' },
  rose:    { bg: 'from-rose-500 to-pink-700',     border: 'border-rose-500/20',  text: 'text-rose-500',   badge: 'bg-rose-500/10 text-rose-400',    dot: 'bg-rose-500' },
};

export default function Features({ darkMode }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-50/80'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            📦 EXTRACTED DATA
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Every Detail Captured —{' '}
            <span className="gradient-text">What RFQ AutoPilot Extracts</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Our <a href="https://rfqautopilot.com/rfq-data-extraction-from-pdf" className="text-blue-500 hover:underline font-medium">PDF RFQ parser</a> identifies and extracts every data point your sales team needs to generate an accurate quotation —
            purpose-built for{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className="text-blue-500 hover:underline font-medium">manufacturers</a>,{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className="text-blue-500 hover:underline font-medium">distributors</a>, and{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className="text-blue-500 hover:underline font-medium">export companies</a>.
          </p>
        </div>

        {/* Summary callout */}
        <div className="reveal mb-12">
          <div className={`flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl max-w-3xl mx-auto ${
            darkMode ? 'bg-blue-950/30 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'
          }`}>
            <span className="text-3xl">📊</span>
            <p className={`text-sm font-medium text-center sm:text-left ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <strong>RFQ AutoPilot extracts 50+ data fields from a single PDF RFQ</strong> — covering everything from product specifications to delivery requirements to commercial terms. All extracted data feeds directly into your quotation template.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCategories.map((cat, idx) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className={`reveal group gradient-border rounded-2xl overflow-hidden transition-all duration-300 card-3d ${
                  darkMode
                    ? 'bg-slate-900 border border-white/8 hover:border-transparent'
                    : 'bg-white border border-slate-200 hover:border-transparent'
                }`}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                <div className="p-6">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}>
                      {cat.category}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center text-xl shadow-lg`}>
                      {cat.icon}
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold mb-4 leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cat.title}
                  </h3>

                  {/* Fields list */}
                  <ul className="space-y-2 mb-5">
                    {cat.fields.map((field) => (
                      <li key={field} className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                        {field}
                      </li>
                    ))}
                  </ul>

                  {/* AI capability */}
                  <div className={`rounded-xl p-3.5 text-xs leading-relaxed border-l-2 ${
                    darkMode
                      ? `bg-slate-800/60 border-current ${c.text}`
                      : `bg-slate-50 border-current ${c.text}`
                  }`}>
                    <span className={`font-bold ${c.text}`}>🤖 AI Capability: </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{cat.ai}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
