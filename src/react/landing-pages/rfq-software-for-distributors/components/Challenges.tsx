import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const CHALLENGES = [
  {
    icon: '📦',
    title: 'Thousands of Products, Endless Lookup Time',
    problem: 'Distributors typically carry 5,000 to 500,000+ SKUs across multiple product categories, brands, and suppliers. Multiply that by 30 line items per RFQ and 20 RFQs per day — and your team is spending more time looking up products than actually selling.',
    solution: 'AI-powered product matching connects customer descriptions to your SKU database instantly — regardless of how the buyer phrases it. "SS hex bolt M10x50," "stainless hex M10-50mm," and "A2-70 hex cap screw M10x50" all map to the same product in seconds, not minutes.',
    tag: 'Massive SKU Catalogs',
    color: 'blue',
  },
  {
    icon: '📈',
    title: 'Every Minute Spent Quoting Eats Into Profit',
    problem: 'Distribution margins typically range from 8% to 25%. When your sales rep spends 45 minutes processing a single RFQ manually, the labor cost alone can eat into the margin on smaller orders. For a $500 order at 15% margin, the $75 gross profit barely covers a rep spending nearly an hour on data entry.',
    solution: 'Reducing quote processing time from 45 minutes to 4 minutes means your cost-to-quote drops by over 90%. Your team handles more volume with the same headcount. Margins are protected because labor costs per quote plummet.',
    tag: 'High Volume, Thin Margins',
    color: 'indigo',
  },
  {
    icon: '📑',
    title: 'Every Customer Sends RFQs Differently',
    problem: 'One buyer sends a neat Excel spreadsheet. Another emails a paragraph. A third attaches a scanned PDF. A fourth forwards a chain of emails with requirements scattered across five replies. Your team has to decode every format, every time.',
    solution: 'The AI reads and extracts data from any format — email body text, PDF tables, Excel spreadsheets, scanned documents, and forwarded email chains. Your team sees clean, structured data regardless of how chaotically the buyer sent their request.',
    tag: 'Multi-Format RFQ Chaos',
    color: 'purple',
  },
  {
    icon: '💲',
    title: 'Different Prices for Every Customer, Every Product',
    problem: 'Distributors manage complex pricing structures — contract pricing, volume tiers, customer-specific discounts, promotional rates, cost-plus markups, and negotiated specials. One product might have 15 different prices depending on who is buying and when.',
    solution: 'Your complete pricing matrix is loaded into the system. When the AI identifies a customer, it automatically applies the correct price tier, discount level, and contract terms. No manual lookup. No pricing mistakes. The right price, every time.',
    tag: 'Customer-Specific Pricing',
    color: 'teal',
  },
  {
    icon: '⏱️',
    title: 'The First Quote Wins the Order',
    problem: 'Buyers often send the same RFQ to three, five, or ten distributors simultaneously. Industry data shows that the first distributor to respond wins the order 35-50% of the time. When your team takes 4 hours to reply while a competitor responds in 30 minutes, you are losing winnable business.',
    solution: 'RFQ automation cuts response time from hours to minutes. Your quote is in the buyer\'s inbox before competitors finish reading the RFQ. Speed becomes your competitive weapon — not your weakness.',
    tag: 'Speed-to-Quote Competition',
    color: 'orange',
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string }> = {
  blue:   { badge: 'bg-blue-500/10 text-blue-500 border-blue-500/20',   icon: 'bg-blue-500/10 text-blue-500',   border: 'border-blue-500/20 hover:border-blue-500/50' },
  indigo: { badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', icon: 'bg-indigo-500/10 text-indigo-400', border: 'border-indigo-500/20 hover:border-indigo-500/50' },
  purple: { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: 'bg-purple-500/10 text-purple-400', border: 'border-purple-500/20 hover:border-purple-500/50' },
  teal:   { badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',   icon: 'bg-teal-500/10 text-teal-400',   border: 'border-teal-500/20 hover:border-teal-500/50' },
  orange: { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', icon: 'bg-orange-500/10 text-orange-400', border: 'border-orange-500/20 hover:border-orange-500/50' },
};

export default function Challenges({ dark }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-950' : 'bg-white'}`}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[400px] h-[400px] top-0 right-0 ${dark ? 'bg-blue-600/10' : 'bg-blue-100/60'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-200'
            }`}>
              ⚠️ The Distributor Problem
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Why Generic Tools{' '}
            <span className="gradient-text">Fall Short</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Distribution quoting is fundamentally different from manufacturing or service quoting. According to{' '}
            <a href="https://www.naw.org/research-and-resources" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>NAW research</a>,{' '}
            you face unique challenges that generic quote management tools were never designed to handle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {CHALLENGES.map((c, i) => {
            const colors = colorMap[c.color];
            return (
              <div
                key={c.title}
                className={`reveal delay-${(i + 1) * 100} group relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 card-3d cursor-default ${
                  dark
                    ? `bg-slate-900/60 ${colors.border} hover:bg-slate-900`
                    : `bg-white ${colors.border} border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg`
                } ${i === 4 ? 'lg:col-span-2' : ''}`}
              >
                {/* Tag */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colors.badge}`}>
                  {c.tag}
                </div>

                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colors.icon}`}>
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{c.title}</h3>

                    <div className={`rounded-xl p-4 mb-4 ${dark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>The Problem</p>
                      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{c.problem}</p>
                    </div>

                    <div className={`rounded-xl p-4 border ${
                      dark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'
                    }`}>
                      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                        ✅ How RFQ AutoPilot Solves It
                      </p>
                      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{c.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className={`reveal mt-12 rounded-2xl p-6 lg:p-8 text-center ${
          dark
            ? 'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border border-blue-500/20'
            : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200'
        }`}>
          <p className={`text-lg sm:text-xl font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
            💡 The distributor quoting bottleneck is not about talent — your sales team is skilled. It is about process. Manual data entry, product lookup, and email typing consume{' '}
            <span className="gradient-text font-extrabold">60-70% of quoting time</span>. RFQ AutoPilot eliminates that overhead.
          </p>
          <p className={`mt-4 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Purpose-built for{' '}
            <a href="/rfq-software-for-distributors" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>distributors</a>,{' '}
            <a href="/rfq-software-for-manufacturers" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>manufacturers</a>, and{' '}
            <a href="/rfq-management-for-export-companies" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>export companies</a>.{' '}
            Works with{' '}
            <a href="/gmail-chrome-extension-for-sales" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Gmail</a>{' '}
            and{' '}
            <a href="/outlook-add-in-for-rfq" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Outlook</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
