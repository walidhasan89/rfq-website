import { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const faqs: { q: string; a: string; link?: { href: string; label: string; external: boolean } }[] = [
  {
    q: 'What is RFQ AutoPilot?',
    a: 'RFQ AutoPilot is a Chrome extension for suppliers, distributors, manufacturers, wholesalers, and B2B sales teams that receive buyer RFQs. It helps structure incoming request details, build branded quotations, generate PDF quotes, and prepare response emails.',
    link: { href: '/rfq-response-software', label: 'Explore the RFQ response workflow →', external: false },
  },
  {
    q: 'What does RFQ stand for?',
    a: 'RFQ stands for Request for Quotation. A buyer sends an RFQ to request pricing, availability, lead time, delivery conditions, payment terms, and other commercial information for defined products or services.',
    link: { href: 'https://en.wikipedia.org/wiki/Request_for_quotation', label: 'Read more about RFQs →', external: true },
  },
  {
    q: 'How does the RFQ-to-quote workflow work?',
    a: 'Open the incoming RFQ, review structured information from the email and attachments, complete pricing and commercial terms, apply company branding, generate the PDF quotation, and preview the buyer response before sending.',
    link: { href: '/rfq-email-automation', label: 'See RFQ email automation →', external: false },
  },
  {
    q: 'Is RFQ AutoPilot free?',
    a: 'Yes. A free plan is available so you can review the core workflow before upgrading. The Solo plan is $14.99 per month and the Pro plan is $29.99 per month. Current limits should be confirmed inside the extension before purchase.',
  },
  {
    q: 'Who should use RFQ AutoPilot?',
    a: 'It is designed for businesses that receive quotation requests and need to respond professionally, including suppliers, distributors, wholesalers, manufacturers, industrial sales teams, export companies, and smaller B2B quotation teams.',
  },
  {
    q: 'Does it work with Gmail and Outlook?',
    a: 'RFQ AutoPilot is designed around Gmail and Outlook-oriented RFQ workflows. It supports working from buyer emails while keeping the quotation process close to your normal inbox workflow.',
    link: { href: '/gmail-rfq-extension', label: 'See the Gmail workflow →', external: false },
  },
  {
    q: 'Can it extract RFQ data from PDFs and attachments?',
    a: 'It is designed to help organize RFQ details from email content and common attachment workflows, including PDFs and related documents. Extracted information must be checked against the original buyer request.',
    link: { href: '/rfq-pdf-data-extraction', label: 'Learn about PDF extraction →', external: false },
  },
  {
    q: 'Can I customize the quotation design?',
    a: 'Yes. The quote workflow supports company information, branding colors, line items, totals, commercial terms, and PDF output. Review the available controls in your current extension plan.',
    link: { href: '/quotation-builder', label: 'Explore the quotation builder →', external: false },
  },
  {
    q: 'Does RFQ AutoPilot send quotes automatically?',
    a: 'The intended workflow keeps the user in control. Review extracted information, technical details, prices, totals, terms, the PDF, and the response email before sending anything to the buyer.',
  },
  {
    q: 'Can RFQ AutoPilot replace engineering or pricing review?',
    a: 'No. The extension supports document and response preparation. Your qualified team remains responsible for technical feasibility, costing, pricing approval, legal terms, compliance, and final quotation accuracy.',
  },
  {
    q: 'How is buyer and quotation data handled?',
    a: 'Data handling depends on the current extension architecture and enabled processors. Review the Privacy Policy for the latest description, and avoid including unnecessary sensitive information in any automated workflow.',
    link: { href: '/privacy', label: 'Read the Privacy Policy →', external: false },
  },
];

function FAQItem({ faq, isDark }: { faq: { q: string; a: string; link?: { href: string; label: string; external: boolean } }; isDark: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? isDark ? 'border-blue-500/40 bg-blue-500/5' : 'border-blue-200 bg-blue-50/50'
          : isDark ? 'border-slate-800 bg-slate-900 hover:border-slate-700' : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-blue-500 text-white rotate-180'
            : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
        }`}>
          <ChevronDown size={16} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-6 pb-5 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {faq.a}
          {faq.link && (
            <div className="mt-3">
              <a
                href={faq.link.href}
                target={faq.link.external ? '_blank' : undefined}
                rel={faq.link.external ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {faq.link.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
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
      id="faq"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <HelpCircle size={14} />
            Frequently Asked Questions
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Everything You Need to{' '}
            <span className="gradient-text">Know</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Answers to the most common questions about RFQ AutoPilot and RFQ automation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="reveal space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} isDark={isDark} />
          ))}
        </div>

        {/* Schema for FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}} />
      </div>
    </section>
  );
}
