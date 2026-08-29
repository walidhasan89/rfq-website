import { useRef, useEffect } from 'react';
import { Building2, ShoppingBag, Package, Globe, Truck, Store } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const useCases = [
  {
    icon: Building2,
    title: 'B2B Suppliers',
    subtitle: 'Sales and Quotation Teams',
    desc: 'Turn incoming buyer RFQs into clear, consistent quotations without rebuilding the same document, PDF, and response email for every opportunity.',
    stat: 'RFQ-to-quote workflow',
    gradient: 'from-blue-500 to-indigo-600',
    link: '/rfq-response-software',
    linkLabel: 'Supplier Workflow →',
  },
  {
    icon: ShoppingBag,
    title: 'Distributors and Wholesalers',
    subtitle: 'High-Volume Quotations',
    desc: 'Capture buyer requirements, reuse company and commercial details, create branded quotation PDFs, and keep fast-moving quote work more consistent.',
    stat: 'Reusable quote process',
    gradient: 'from-emerald-500 to-teal-600',
    link: '/rfq-software-for-distributors',
    linkLabel: 'Distributor Workflow →',
  },
  {
    icon: Package,
    title: 'Manufacturers',
    subtitle: 'Technical RFQ Responses',
    desc: 'Organize incoming requirements, prepare line-item quotations, apply approved commercial terms, and create professional documents while keeping engineering review in the process.',
    stat: 'Human review retained',
    gradient: 'from-amber-500 to-orange-600',
    link: '/rfq-software-for-manufacturers',
    linkLabel: 'Manufacturer Workflow →',
  },
  {
    icon: Globe,
    title: 'Export Sales Teams',
    subtitle: 'Buyer Response Management',
    desc: 'Prepare consistent international buyer quotations with clear line items, currency, validity, delivery, lead time, payment terms, and branded PDF output.',
    stat: 'Professional buyer replies',
    gradient: 'from-violet-500 to-purple-600',
    link: '/rfq-response-software',
    linkLabel: 'Response Software →',
  },
  {
    icon: Truck,
    title: 'Industrial Sales Teams',
    subtitle: 'Complex RFQ Intake',
    desc: 'Reduce repeated copying from long email chains, product lists, PDFs, and attachments while preserving the review needed for technical and commercial accuracy.',
    stat: 'Structured RFQ intake',
    gradient: 'from-rose-500 to-pink-600',
    link: '/rfq-pdf-data-extraction',
    linkLabel: 'Attachment Workflow →',
  },
  {
    icon: Store,
    title: 'Small Quotation Teams',
    subtitle: 'Simple Browser Workflow',
    desc: 'Use a focused Chrome extension instead of implementing a large enterprise quoting system. Start with the free plan and upgrade as quote volume grows.',
    stat: 'Free plan available',
    gradient: 'from-cyan-500 to-blue-600',
    link: '/quotation-builder',
    linkLabel: 'Quotation Builder →',
  },
];

export default function UseCases() {
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
      id="use-cases"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Building2 size={14} />
            Who Uses It
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Built for{' '}
            <span className="gradient-text">Every Quotation Professional</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot is built for businesses that receive buyer RFQs and need to prepare accurate, professional quotations faster.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className={`reveal-scale card-hover group p-7 rounded-2xl border relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700 hover:border-blue-500/40 hover:bg-slate-800'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/8'
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Top bar gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${uc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${uc.gradient} shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Subtitle */}
                <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {uc.subtitle}
                </div>

                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {uc.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {uc.desc}
                </p>

                {/* Stat + link */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${
                    isDark ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-700'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {uc.stat}
                  </div>
                  <a
                    href={uc.link}
                    className={`text-xs font-semibold transition-colors opacity-0 group-hover:opacity-100 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                  >
                    {uc.linkLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
