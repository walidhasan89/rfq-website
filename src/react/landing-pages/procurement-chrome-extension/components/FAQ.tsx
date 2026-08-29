import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

type FaqItem = {
  q: string;
  a: string | React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    q: 'Does RFQ AutoPilot work with Outlook?',
    a: (
      <>
        Yes. RFQ AutoPilot works natively inside both Gmail (web) and{' '}
        <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
          Outlook (web/OWA)
        </a>
        . If you access your email through a Chrome or Edge browser, AutoPilot will work. The extension is also
        compatible with Microsoft Edge since Edge is built on the Chromium engine and supports all Chrome extension features.
      </>
    ),
  },
  {
    q: 'Can multiple team members use RFQ AutoPilot?',
    a: 'Absolutely. Every team member can install the extension with their own account. On team plans, extracted RFQ data and quote comparisons are shared across the team automatically, so everyone stays aligned without forwarding spreadsheets.',
  },
  {
    q: 'What email data does the extension access?',
    a: (
      <>
        RFQ AutoPilot only accesses the content of emails that it identifies as RFQ-related, along with their attachments.
        It does not scan, store, or process personal emails, contacts, or browsing activity. All permissions are clearly
        disclosed in the Chrome Web Store listing before you install — built to follow{' '}
        <a
          href="https://developer.chrome.com/docs/extensions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          Chrome extension developer guidelines
        </a>
        .
      </>
    ),
  },
  {
    q: 'Is RFQ AutoPilot free?',
    a: (
      <>
        Yes — RFQ AutoPilot offers a free tier that lets you process a set number of RFQs per month.
        See the full{' '}
        <a href="#pricing" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
          pricing plans
        </a>{' '}
        for details. Paid plans unlock higher volume processing, team collaboration features, advanced AI extraction,
        and priority support. There are no long-term contracts — upgrade or cancel anytime.
      </>
    ),
  },
  {
    q: 'What file types can the extension extract data from?',
    a: (
      <>
        RFQ AutoPilot can extract data from PDF, Excel (.xlsx, .xls), CSV, and Word (.docx) attachments, as well as
        from email body text. Learn more about our{' '}
        <a
          href="https://rfqautopilot.com/rfq-data-extraction-from-pdf"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          RFQ data extraction from PDF
        </a>{' '}
        capabilities. Our AI extraction engine handles tables, multi-page documents, and varied formatting.
      </>
    ),
  },
  {
    q: 'Does it integrate with my ERP or procurement system?',
    a: (
      <>
        RFQ AutoPilot supports one-click data export to CSV and Excel, which can be imported into virtually any ERP
        or P2P system. Direct API integrations with popular platforms are available on Business and Enterprise plans.
        Explore our full{' '}
        <a
          href="https://rfqautopilot.com/rfq-automation-software"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          RFQ automation software
        </a>{' '}
        capabilities.
      </>
    ),
  },
  {
    q: 'Is my data secure?',
    a: (
      <>
        Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are{' '}
        <a
          href="https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          SOC 2 Type II
        </a>{' '}
        compliant and{' '}
        <a
          href="https://gdpr.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          GDPR
        </a>{' '}
        compliant. Your data is never used to train public AI models. We offer a detailed security questionnaire
        and data processing agreement for enterprise customers.
      </>
    ),
  },
  {
    q: 'How is RFQ AutoPilot different from a full procurement platform?',
    a: (
      <>
        Full procurement platforms are designed as all-in-one systems that manage the entire procure-to-pay lifecycle.
        RFQ AutoPilot is purpose-built for one thing: making the{' '}
        <a
          href="https://rfqautopilot.com/ai-rfq-processing-tool"
          className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          AI-powered RFQ detection, data extraction, and quote response
        </a>{' '}
        process faster. It works inside your inbox and complements your existing tools rather than replacing them.
        Think of it as the fast, agile front-end to your procurement workflow.
      </>
    ),
  },
];

function FAQItem({ faq, darkMode }: { faq: FaqItem; darkMode: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b transition-all ${
      darkMode ? 'border-white/6' : 'border-slate-100'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-base leading-snug transition-colors ${
          open
            ? 'text-brand-500'
            : darkMode ? 'text-white group-hover:text-brand-400' : 'text-slate-900 group-hover:text-brand-600'
        }`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 transition-transform duration-300 mt-0.5 ${
            open ? 'rotate-180 text-brand-500' : darkMode ? 'text-slate-400' : 'text-slate-400'
          }`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
                color: darkMode ? '#60a5fa' : '#2563eb',
                border: '1px solid rgba(59,130,246,0.2)'
              }}
            >
              <HelpCircle size={11} />
              FAQ
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Everything you need to know about RFQ AutoPilot. Still have questions?{' '}
              <a href="mailto:support@rfqautopilot.com" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
                Contact support
              </a>
              .
            </p>
          </div>

          {/* FAQ Items */}
          <div className={`reveal rounded-2xl overflow-hidden border ${
            darkMode ? 'bg-slate-900/60 border-white/6' : 'bg-white border-slate-200'
          } p-2 sm:p-6`}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} darkMode={darkMode} />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center reveal">
            <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Looking for{' '}
              <a
                href="https://rfqautopilot.com/gmail-chrome-extension-for-sales"
                className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
              >
                Gmail RFQ automation
              </a>
              {' '}or an{' '}
              <a
                href="https://rfqautopilot.com/outlook-add-in-for-rfq"
                className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
              >
                Outlook add-in for RFQ
              </a>
              ? RFQ AutoPilot does both.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
