import { useEffect, useRef, useState } from 'react';

interface FAQProps {
  darkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const faqs = [
    {
      q: 'How does RFQ AutoPilot handle RFQs in languages my team does not speak?',
      a: 'The AI processes RFQs in 40+ languages natively. It extracts product requirements, quantities, specifications, and delivery terms regardless of the source language. Extracted data is presented to your team in your preferred language (typically English) with the original text available for reference. This means a Chinese-language RFQ produces the same structured output as an English one — product names matched to your catalog, quantities validated, pricing applied. Your team does not need to speak the buyer\'s language to process their RFQ accurately.',
    },
    {
      q: 'Can the export RFQ tool generate quotation replies in the buyer\'s language?',
      a: 'Yes. You can configure quotation templates in multiple languages. When the AI detects a buyer\'s language preference from their email, it selects the appropriate language template for the quotation reply. You can also create bilingual quotes — for example, English and Arabic side by side — which is common in Middle Eastern trade. The greeting, product descriptions, terms, and closing are all translated to match the buyer\'s language while maintaining your intended meaning and tone.',
    },
    {
      q: 'How accurate are the automatic currency conversions?',
      a: 'Exchange rates are sourced from reliable financial data providers and updated multiple times daily. Conversion accuracy is within 0.1% of live market rates. For quotation purposes, you can choose to apply a currency buffer (for example, adding 1-2% to protect against rate fluctuations during the quote validity period). You can also lock exchange rates at the time of quoting, ensuring the price remains consistent if the buyer accepts within the validity window. All conversions are transparent — the quote shows the exchange rate used and the date it was applied.',
    },
    {
      q: 'Does the system understand international trade terms like Incoterms?',
      a: 'Yes. RFQ AutoPilot recognizes all current Incoterms (EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP) and applies them correctly in quotation calculations. When a buyer specifies "CIF Lagos" or "FOB Shanghai," the system adjusts pricing to include or exclude freight, insurance, and handling costs based on the specified term. If no incoterm is specified, you can set a default per customer or per region. The AI also understands legacy terms and informal shipping references like "delivered to our warehouse" and maps them to the closest formal incoterm. See the official ICC Incoterms 2020 rules at iccwbo.org for full definitions.',
    },
    {
      q: 'Can RFQ AutoPilot handle RFQs from B2B marketplaces like Alibaba or Global Sources?',
      a: 'Yes. When B2B marketplace platforms send email notifications about buyer inquiries, RFQ AutoPilot detects these notification emails as RFQs. The AI extracts the buyer\'s product requirements, quantities, and specifications from the notification content. A quotation draft is generated that you can send via email or adapt for the marketplace platform. This works with Alibaba, Global Sources, IndiaMART, TradeIndia, Made-in-China, EC21, and other major international B2B platforms that send email-based inquiry alerts.',
    },
    {
      q: 'How does the import export quote software handle products with country-specific compliance requirements?',
      a: 'You can configure compliance and certification databases within RFQ AutoPilot. When the AI detects a buyer\'s country, it cross-references your compliance database and includes relevant certification references in the quotation. For example, exports to Saudi Arabia automatically include SASO certification notes. Exports to the EU include CE marking references. Exports to the US include FDA or UL references where applicable. You maintain the compliance database, and the AI applies it automatically per destination country.',
    },
    {
      q: 'Can I set different pricing for different export markets?',
      a: 'Yes. The RFQ tool for trading companies supports market-specific pricing strategies. You can configure different price lists by region, country, or individual customer. For example, you might offer one price structure for Middle Eastern markets, another for European markets, and a third for African markets. Within each region, customer-specific pricing overrides are also supported. The AI identifies the buyer\'s market from their email domain, location, or your customer database and applies the correct regional pricing automatically.',
    },
    {
      q: 'How does the system handle RFQs that arrive outside business hours?',
      a: 'RFQ detection runs 24/7 regardless of your business hours. When an RFQ arrives at 3 AM your time, the system detects it, extracts all data, matches products, applies pricing, and prepares a draft quotation. When your team opens their inbox in the morning, the draft is ready for review and sending. For high-priority customers, you can configure auto-send rules that dispatch quotations automatically without waiting for human review — ensuring overseas buyers receive responses within minutes even when your office is closed.',
    },
    {
      q: 'We export to 50+ countries. Can the system handle that volume of international complexity?',
      a: 'Absolutely. RFQ AutoPilot is designed for exactly this level of global complexity. There is no limit on the number of countries, currencies, languages, or customer accounts you configure. Trading companies exporting to 50, 80, or 100+ countries use the system with full country-specific pricing, compliance, and template configurations. The AI\'s performance does not degrade with geographic complexity — a 50-country setup processes just as quickly as a 5-country setup.',
    },
    {
      q: 'Does international RFQ management work for import companies too?',
      a: 'Yes. While our messaging emphasizes exports, import companies benefit equally. If you source products internationally and receive quotes from overseas suppliers, RFQ AutoPilot helps you process incoming supplier quotations, compare pricing across suppliers in different currencies, normalize quotes to a common currency for comparison, and manage your procurement RFQ workflow. The multi-language and multi-currency capabilities work in both directions — sending RFQs to international suppliers or receiving RFQs from international buyers.',
    },
    {
      q: 'Can I use this tool if my company uses both Gmail and Outlook across different offices?',
      a: 'Yes. RFQ AutoPilot supports both Gmail and Outlook simultaneously within the same organization. Your London office can use Outlook while your Dubai office uses Gmail — both connected to the same product catalog, pricing database, and analytics dashboard. Customer data and quote history sync across platforms so any team member can see the full picture regardless of which email client they use.',
    },
    {
      q: 'How does the RFQ automation for exporters handle payment term complexities in international trade?',
      a: 'International payment terms are more complex than domestic ones. RFQ AutoPilot supports all common international payment methods including Telegraphic Transfer (TT) with advance/balance splits, Letter of Credit (LC) at sight and deferred, Documents Against Payment (DP), Documents Against Acceptance (DA), Open Account with net terms, and Escrow through trade platforms. You configure acceptable payment terms per customer, region, or order value. The AI includes the appropriate terms in each quotation and can adjust pricing based on payment method — for example, offering a 2% discount for TT advance versus LC at sight.',
    },
  ];

  return (
    <section
      id="faq"
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full ${
            darkMode ? 'bg-indigo-900/10' : 'bg-indigo-100/50'
          } blur-3xl`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — animated once on enter */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                darkMode
                  ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              FAQ
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to know about our{' '}
            <a
              href="https://rfqautopilot.com/ai-rfq-processing-tool"
              className={`font-semibold underline underline-offset-2 ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              AI RFQ processing tool
            </a>{' '}
            and{' '}
            <a
              href="https://rfqautopilot.com/rfq-data-extraction-from-pdf"
              className={`font-semibold underline underline-offset-2 ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              RFQ data extraction from PDF
            </a>
            .
          </p>
        </div>

        {/* FAQ Items — always visible, no scroll-triggered opacity */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={i}
                className={`rounded-2xl transition-colors duration-200 ${
                  darkMode
                    ? isOpen
                      ? 'bg-gray-900/80 border border-blue-500/30'
                      : 'bg-gray-900/40 border border-white/10 hover:border-white/20'
                    : isOpen
                    ? 'bg-white border border-blue-300 shadow-md'
                    : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleItem(i)}
                  className="w-full flex items-start gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : darkMode
                        ? 'bg-white/10 text-gray-400'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <span
                    className={`font-semibold text-base leading-snug flex-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {faq.q}
                  </span>
                </button>

                {/* Answer — rendered via max-height, always in DOM, never opacity:0 */}
                <div
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <div
                    className={`px-6 pb-5 pl-16 text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Link */}
        <div
          className={`mt-10 text-center p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-900/60 border-white/10' : 'bg-white border-gray-200'
          }`}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            className={`inline-flex items-center gap-2 mt-2 text-sm font-semibold ${
              darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-700'
            } transition-colors`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            support@rfqautopilot.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
