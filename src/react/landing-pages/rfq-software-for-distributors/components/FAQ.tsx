import { useState, useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const FAQS = [
  {
    q: 'Is RFQ AutoPilot built specifically for distribution companies?',
    a: 'RFQ AutoPilot is designed for any business that receives RFQs via email, but distributors represent our largest and most successful user segment. The features most critical to distributors — multi-SKU catalog matching, customer tier pricing, high-volume line item extraction, and speed-to-quote optimization — are core capabilities of the platform. Whether you distribute industrial supplies, electrical products, building materials, food service equipment, or technology components, the system adapts to your catalog and pricing structure.',
  },
  {
    q: 'How does the system handle our catalog of 50,000+ SKUs?',
    a: 'RFQ AutoPilot is built to handle large catalogs efficiently. Your complete product database is indexed for instant AI matching. When a buyer mentions a product, the AI searches your entire catalog in milliseconds — not the minutes it takes a human to search manually. The system handles 500,000+ SKUs without performance degradation. Catalog updates can be synced automatically from your ERP system or uploaded via CSV at any time.',
  },
  {
    q: 'Can we load different price lists for different customer accounts?',
    a: 'Yes. The distributor quotation software supports unlimited pricing configurations including customer-specific price lists, tiered pricing by customer category, volume-based price breaks, contract pricing with expiration dates, cost-plus markup rules, and promotional pricing schedules. When the AI identifies the customer from their email, it pulls the correct pricing automatically. You can manage pricing through the extension settings or sync directly from your ERP pricing module.',
  },
  {
    q: 'What if a customer requests a product we do not carry?',
    a: "When the AI cannot match a requested product to your catalog, it flags that line item with a clear 'no match found' indicator. The system provides several options: suggest similar products from your catalog that might serve as alternatives, leave the line item blank for manual handling, or mark it as 'sourcing required' for your purchasing team. You control how unmatched items are handled in the quotation — include them with a note, exclude them, or hold the entire quote until sourcing is confirmed.",
  },
  {
    q: 'How does distributor RFQ management work for shared sales inboxes?',
    a: 'Many distributors use shared inboxes like sales@company.com or quotes@company.com. RFQ AutoPilot fully supports shared inboxes with intelligent distribution features. When an RFQ arrives in the shared inbox, the system can auto-assign it based on customer territory, product category, round-robin rotation, or team member availability. Assignment notifications go to the designated rep, preventing duplicate quoting. Managers can see all incoming RFQs and reassign as needed through the dashboard.',
  },
  {
    q: 'Can the wholesale RFQ tool handle RFQs that include competitor part numbers?',
    a: "Yes. Many distributors maintain cross-reference databases that map competitor part numbers to their own catalog. RFQ AutoPilot integrates with your cross-reference data. When a buyer requests a product using a competitor's part number, the AI identifies the cross-reference and matches it to your equivalent product. If no cross-reference exists, the item is flagged for your team to identify manually. You can add new cross-references that the system remembers for future RFQs.",
  },
  {
    q: 'Does the system check inventory before generating a quote?',
    a: "With ERP integration enabled, RFQ AutoPilot checks real-time inventory levels for each line item during quote generation. The quotation email includes availability status — in stock, limited stock, backordered, or special order. Lead times are calculated based on current inventory and expected replenishment dates. If an item is out of stock, the system can suggest alternative products or provide an estimated availability date. Without ERP integration, the system generates quotes based on pricing only and notes that availability should be confirmed.",
  },
  {
    q: 'How does pricing work for distributors with multiple warehouses or branches?',
    a: 'RFQ AutoPilot supports multi-location distributors with branch-specific configurations. Each branch can maintain its own product availability, regional pricing adjustments, and shipping calculations. When an RFQ is processed, the system can price from the nearest warehouse, the lowest-cost location, or the branch with available stock — depending on your configuration. Centralized pricing rules apply across all branches while allowing location-specific overrides.',
  },
  {
    q: 'Can we track which RFQs converted to orders?',
    a: 'Yes. The analytics dashboard tracks the complete lifecycle of each RFQ from receipt through quotation to order conversion. You can mark quotes as won, lost, or pending. Win/loss analysis shows your conversion rates by customer, product category, quote value, response time, and sales rep. This data helps identify patterns — which customers convert most often, which products win competitively, and how response speed correlates with win rates. CRM integration syncs this data automatically if you use Salesforce, HubSpot, or similar platforms.',
  },
  {
    q: 'Is RFQ AutoPilot suitable for small distributors with 5–10 daily RFQs?',
    a: 'Absolutely. The free plan supports 30 RFQs per month, which is perfect for small distributors processing 1–2 RFQs per day. Even at low volumes, the time savings are significant — each automated quote saves 30–40 minutes of manual work. As your business grows and RFQ volume increases, you upgrade to Solo or Pro plans seamlessly. Many of our most enthusiastic users started as small distributors who grew their capacity specifically because automation allowed them to handle more volume without hiring.',
  },
  {
    q: 'How quickly can our distribution sales team get started?',
    a: 'Most distributor teams are processing live RFQs within one business day. The setup process involves three steps. First, install the Chrome extension or Outlook add-in, which takes 30 seconds. Second, upload your product catalog via CSV or connect your ERP, which takes 15 minutes to 2 hours depending on catalog size. Third, process your first RFQ, which happens in under 5 minutes. No lengthy implementation project. No consultant engagement. No training weeks. Your team installs, uploads products, and starts quoting.',
  },
  {
    q: "What makes this different from our ERP's quoting module?",
    a: "ERP quoting modules require your team to log into the ERP, manually create a quote document, search for each product, enter quantities, and build the quote from scratch inside the ERP interface. The RFQ email still needs to be read separately, and data is re-entered manually. RFQ AutoPilot works in the opposite direction — it starts from the email where the RFQ arrives, extracts all data automatically, and pushes it into the quote. Your ERP remains the system of record, but the painful data entry step between email and ERP is eliminated. Many distributors use RFQ AutoPilot as the front-end that feeds their ERP quoting module.",
  },
];

export default function FAQ({ dark }: Props) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const headerAnimated = useRef(false);

  const toggle = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Animate header elements on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !headerAnimated.current) {
            sectionRef.current?.querySelectorAll('.faq-header-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
            headerAnimated.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[400px] h-[400px] top-1/2 left-0 ${dark ? 'bg-blue-600/8' : 'bg-blue-100/50'}`} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="faq-header-reveal flex justify-center mb-4"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              ❓ FAQ
            </span>
          </div>
          <h2
            className="faq-header-reveal"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <span className={`block text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </span>
          </h2>
          <p
            className="faq-header-reveal"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <span className={`block text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Everything distributors need to know about{' '}
              <a href="/rfq-automation-software" className={`underline underline-offset-2 font-medium transition-colors ${dark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                RFQ automation software
              </a>.
            </span>
          </p>
        </div>

        {/* FAQ List — NO reveal class on items to prevent visibility conflicts */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 ${
                  dark
                    ? `border-slate-700/50 ${isOpen ? 'bg-slate-800/70 border-blue-500/30' : 'bg-slate-800/30 hover:bg-slate-800/50'}`
                    : `border-slate-200 ${isOpen ? 'bg-white border-blue-300 shadow-md' : 'bg-white hover:border-blue-200 shadow-sm'}`
                }`}
                style={{ overflow: 'visible' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 p-5 lg:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-blue-500 text-white rotate-180'
                      : dark
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-slate-100 text-slate-500'
                  }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion body — using inline style for max-height animation */}
                <div
                  style={{
                    maxHeight: isOpen ? '800px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <div className={`px-5 lg:px-6 pb-5 lg:pb-6 text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className={`border-t pt-4 ${dark ? 'border-slate-700/50' : 'border-slate-100'}`}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Internal links section — naturally placed */}
        <div className={`mt-10 p-6 rounded-2xl border ${
          dark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <p className={`text-sm font-semibold mb-3 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
            Explore more RFQ automation resources:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'RFQ Automation Software', href: '/rfq-automation-software' },
              { label: 'RFQ Email Management', href: '/rfq-email-management-tool' },
              { label: 'For Manufacturers', href: '/rfq-software-for-manufacturers' },
              { label: 'AI RFQ Processing', href: '/ai-rfq-processing-tool' },
              { label: 'Quotation Email Automation', href: '/quotation-email-automation' },
              { label: 'RFQ Data Extraction from PDF', href: '/rfq-data-extraction-from-pdf' },
              { label: 'Gmail Chrome Extension', href: '/gmail-chrome-extension-for-sales' },
              { label: 'For Distributors', href: '/rfq-software-for-distributors' },
              { label: 'Export Companies', href: '/rfq-management-for-export-companies' },
              { label: 'Outlook Add-in', href: '/outlook-add-in-for-rfq' },
              { label: 'Procurement Extension', href: '/procurement-chrome-extension' },
              { label: 'Small Business RFQ', href: '/rfq-software-small-business' },
              { label: 'AI RFQ Generator', href: '/ai-rfq-generator' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-150 hover:-translate-y-0.5 ${
                  dark
                    ? 'border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 bg-slate-800/40'
                    : 'border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className={`mt-6 text-center p-6 rounded-2xl ${
          dark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-slate-200 shadow-sm'
        }`}>
          <p className={`text-base font-semibold mb-2 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
            Still have questions?
          </p>
          <p className={`text-sm mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Our support team is ready to help distributors get set up and running.
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              dark
                ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@rfqautopilot.com
          </a>
        </div>
      </div>
    </section>
  );
}
