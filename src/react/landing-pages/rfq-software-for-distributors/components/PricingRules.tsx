import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const RULES = [
  {
    icon: '👥',
    title: 'Automatic Customer Classification and Tier Pricing',
    tag: 'Customer Tier Pricing',
    desc: 'Define customer tiers: Platinum, Gold, Silver, Standard, New. Each tier carries its own discount percentage or price list. When the AI identifies the customer from their email address, the correct tier pricing is applied automatically.',
    example: 'Customer A (Platinum tier) gets 22% off list price. Customer B (Silver tier) gets 12% off. Both receive accurate, tier-specific quotes without manual lookup.',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Quantity-Based Price Breaks Applied Automatically',
    tag: 'Volume Discounts',
    desc: 'Configure quantity breakpoints for each product or category. AI calculates the applicable price break based on requested quantities. Suggests next price break to encourage larger orders.',
    example: 'Product X is $10.00 for 1–99 units, $8.50 for 100–499, $7.25 for 500+. Buyer requests 350 units. AI applies $8.50/unit and notes "order 150 more to qualify for $7.25 pricing."',
    color: 'indigo',
  },
  {
    icon: '📝',
    title: 'Contract Rates and Negotiated Specials',
    tag: 'Contract & Special Pricing',
    desc: 'Upload contract pricing agreements per customer. Special pricing overrides standard tier rates for contracted items. Contract expiration dates tracked and flagged with renewal reminders.',
    example: 'Customer C has a 12-month contract with fixed pricing on 200 specific products. Even if list prices change, their contract rates are applied automatically until expiration.',
    color: 'purple',
  },
  {
    icon: '➕',
    title: 'Dynamic Cost-Plus Pricing for Variable-Cost Products',
    tag: 'Cost-Plus Markup',
    desc: 'Set markup percentages by product category, vendor, or customer. AI applies current cost plus configured markup. Margin protection floors prevent quoting below minimum margin.',
    example: 'Commodity products priced at cost + 18% markup. When your purchase cost changes, quoted prices adjust automatically while maintaining your target margin.',
    color: 'teal',
  },
  {
    icon: '🏷️',
    title: 'Time-Limited Promotions and Seasonal Rates',
    tag: 'Promotional Pricing',
    desc: 'Schedule promotional pricing with start and end dates. AI applies promotional rates automatically during active periods. Post-promotion pricing reverts automatically.',
    example: 'Q4 clearance pricing on 500 overstocked items. Any RFQ during October–December automatically receives clearance pricing with "limited time offer" messaging.',
    color: 'orange',
  },
];

const colorMap: Record<string, { tag: string; dot: string }> = {
  blue:   { tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20',   dot: 'bg-blue-500' },
  indigo: { tag: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', dot: 'bg-indigo-500' },
  purple: { tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20', dot: 'bg-purple-500' },
  teal:   { tag: 'bg-teal-500/10 text-teal-400 border-teal-500/20',   dot: 'bg-teal-500' },
  orange: { tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20', dot: 'bg-orange-500' },
};

const ACCURACY_TABLE = [
  { error: 'Wrong customer tier applied', manual: '8–12% of quotes', auto: '0%' },
  { error: 'Volume discount missed', manual: '15–20% of eligible orders', auto: '0%' },
  { error: 'Outdated pricing used', manual: '5–10% of quotes', auto: '0%' },
  { error: 'Contract price ignored', manual: '6–8% of contract quotes', auto: '0%' },
  { error: 'Calculation errors', manual: '3–5% of multi-line quotes', auto: '0%' },
];

export default function PricingRules({ dark }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing-rules"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[400px] h-[400px] bottom-0 right-0 ${dark ? 'bg-indigo-600/10' : 'bg-indigo-100/40'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
            }`}>
              💲 Smart Pricing Engine
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Your Pricing Rules,{' '}
            <span className="gradient-text">Applied Automatically</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Contract rates, volume tiers, customer categories, promotional pricing, cost-plus markups. Every automated quote applies the right price for the right customer.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {RULES.map((rule, i) => {
            const colors = colorMap[rule.color];
            return (
              <div
                key={rule.tag}
                className={`reveal delay-${(i % 3 + 1) * 100} rounded-2xl border p-5 lg:p-6 transition-all duration-300 card-3d ${
                  dark
                    ? 'bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/70'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg shadow-sm'
                } ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${colors.tag}`}>
                    <span className="text-base">{rule.icon}</span>
                    {rule.tag}
                  </span>
                </div>
                <h3 className={`text-sm font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{rule.title}</h3>
                <p className={`text-xs leading-relaxed mb-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{rule.desc}</p>
                <div className={`rounded-xl p-3 ${dark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs font-semibold mb-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Example:</p>
                  <p className={`text-xs leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{rule.example}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accuracy table */}
        <div className="reveal">
          <h3 className={`text-xl font-bold text-center mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Never Send the Wrong Price Again
          </h3>
          <div className={`rounded-2xl overflow-hidden border ${dark ? 'border-slate-700/50' : 'border-slate-200 shadow-sm'}`}>
            <div className="overflow-x-auto">
              <table className="w-full styled-table">
                <thead className={dark ? 'bg-slate-800' : 'bg-slate-50'}>
                  <tr>
                    <th className={dark ? 'text-slate-400' : 'text-slate-500'}>Error Type</th>
                    <th className="text-red-500">Manual Quoting</th>
                    <th className="text-green-500">RFQ AutoPilot</th>
                  </tr>
                </thead>
                <tbody>
                  {ACCURACY_TABLE.map(row => (
                    <tr key={row.error} className={`transition-colors ${dark ? 'hover:bg-slate-800/50' : 'hover:bg-blue-50/30'}`}>
                      <td className={`font-medium text-sm ${dark ? 'text-slate-200' : 'text-slate-800'}`}>{row.error}</td>
                      <td className="text-sm font-medium text-red-500">{row.manual}</td>
                      <td>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          dark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
                        }`}>✅ {row.auto}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={`text-sm text-center mt-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            💡 Pricing errors cost distributors an average of{' '}
            <strong className={dark ? 'text-white' : 'text-slate-800'}>2–4% of revenue annually</strong>{' '}
            through margin leakage and customer disputes. RFQ AutoPilot eliminates this loss.{' '}
            See how our{' '}
            <a href="/rfq-automation-software" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>distributor quotation software</a>{' '}
            handles{' '}
            <a href="https://www.gartner.com/en/supply-chain/topics/distribution-operations" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>complex distribution operations</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
