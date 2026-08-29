import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const faqs = [
  {
    q: 'How does the AI extract data from RFQ email content?',
    a: 'RFQ AutoPilot uses natural language processing (NLP) and named entity recognition (NER) to analyze email text. The AI identifies product names and descriptions, quantities and units of measure, delivery dates and locations, special requirements and conditions, and contact information. The system is trained on millions of procurement documents and understands industry-specific terminology, abbreviations, and formats.',
  },
  {
    q: 'What makes your AI PDF data extraction different from OCR tools?',
    a: 'Traditional OCR only converts images to text. Our AI goes further with context awareness (understands table structures, headers, and data relationships), layout intelligence (handles complex formats, multi-column layouts, and merged cells), data validation (checks extracted data against expected patterns and flags anomalies), learning capability (improves accuracy with each document processed), and semantic understanding.',
  },
  {
    q: 'How accurate is the AI quotation generator?',
    a: 'Our AI achieves 98.7% field extraction accuracy for standard RFQ formats, 96.2% accuracy for complex or non-standard documents, and 99.1% pricing calculation accuracy when product matches are confirmed. All AI-generated quotes are presented for human review before sending. The system flags low-confidence extractions for verification. Accuracy improves over time as the AI learns your specific catalog and customer patterns.',
  },
  {
    q: 'Can the AI handle handwritten RFQs or scanned documents?',
    a: 'Yes. Our OCR engine processes scanned paper RFQs, photos of documents, handwritten quantities and notes (print writing), faxed documents, and low-quality images. Handwriting recognition works best with clear print writing. Cursive or unclear handwriting may require manual review, which the system will flag automatically.',
  },
  {
    q: 'Does RFQ AutoPilot integrate with our existing systems?',
    a: 'RFQ AutoPilot works directly within your email inbox and offers Email platform integration (Gmail, Outlook, Office 365, IMAP) — see our dedicated Outlook add-in for RFQ and Gmail Chrome extension for sales. Integrations include CRM (Salesforce, HubSpot, Zoho, Pipedrive), ERP (SAP, Oracle, Microsoft Dynamics, NetSuite), Quote/CPQ tools via API, and custom webhooks to push extracted data to any system.',
  },
  {
    q: 'How does intelligent RFQ parsing handle different languages?',
    a: 'The AI supports 40+ languages including English, Spanish, French, German, Italian, Portuguese, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Hindi, Russian, and industry-specific technical terminology across languages. The system auto-detects language and processes multilingual RFQs where customers mix languages (common in international trade).',
  },
  {
    q: 'What happens if the AI can\'t extract certain data?',
    a: 'RFQ AutoPilot uses a confidence scoring system: High confidence (>95%) — data extracted and populated automatically; Medium confidence (80-95%) — data extracted but flagged for quick review; Low confidence (<80%) — field left blank with original text highlighted for manual entry. You always maintain control. The AI speeds up processing but doesn\'t force incorrect data into your quotes.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Typical implementation: Day 1 — email integration and initial setup (30 minutes); Days 2-3 — product catalog import and field mapping; Week 1 — AI training on your historical RFQs; Week 2 — testing and accuracy validation; Week 3 — full deployment. Most teams are processing live RFQs with AI assistance within 7-10 days.',
  },
  {
    q: 'Do you store our RFQ data? What about customer privacy?',
    a: 'Data processed within your email environment when possible. Temporary storage: extracted data cached only during active processing session. You control data retention policies. Your RFQs are NEVER used to train our AI models. All data encrypted at rest and in transit. We are SOC 2 Type II certified and GDPR compliant. Customer data privacy is contractually guaranteed.',
  },
  {
    q: 'Can we customize which fields the AI extracts?',
    a: 'Yes, fully customizable. You can define custom fields specific to your industry, map customer terminology to your product codes, set extraction rules and validation criteria, create templates for repeat customers, and configure auto-responses for certain RFQ types. The AI learns your specific requirements and improves extraction accuracy for your unique use case.',
  },
  {
    q: 'What file size limits exist for PDF processing?',
    a: 'Current limits: Single PDF up to 50MB or 500 pages; email attachments up to 100MB total per email; batch processing with no limit on number of RFQs per day. Large documents are processed in segments. Enterprise plans offer increased limits if you regularly receive larger files.',
  },
  {
    q: 'How does AI RFQ automation handle pricing rules?',
    a: 'The AI quotation generator applies customer-specific pricing (volume discounts, contract prices, relationship tiers), product rules (minimum quantities, bundle pricing, promotional rates), dynamic pricing (cost-plus margins, competitive pricing algorithms), conditional logic (if/then rules based on order characteristics), and approval workflows for quotes exceeding authority limits.',
  },
];

function FAQItem({ faq, darkMode, index }: { faq: typeof faqs[0], darkMode: boolean, index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''} border rounded-xl overflow-hidden transition-all duration-200
        ${darkMode
          ? `border-white/[0.07] ${open ? 'bg-slate-900/80' : 'bg-slate-900/40'}`
          : `border-slate-200/80 ${open ? 'bg-white shadow-sm' : 'bg-white'}`
        }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left cursor-pointer transition-colors
          ${darkMode ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-50/80'}`}
      >
        <span className={`font-semibold text-base pr-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          {faq.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
          ${open ? 'bg-blue-500 text-white rotate-45' : darkMode ? 'bg-white/10 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className={`px-5 lg:px-6 pb-5 lg:pb-6 animate-slide-down text-sm leading-relaxed
          ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <div className={`border-t pt-4 ${darkMode ? 'border-white/[0.06]' : 'border-slate-100'}`}>
            {faq.a}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section id="faq" className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#050912]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '400px', height: '400px',
          bottom: '0', right: '-100px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            ❓ Technical FAQ
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Technical Questions About{' '}
            <span className="gradient-text">AI RFQ Processing</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about our{' '}
            <a href="https://rfqautopilot.com/ai-rfq-processing-tool" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              AI-powered RFQ automation
            </a>{' '}
            platform. For deeper reading, see{' '}
            <a href="https://www.gartner.com/en/documents/intelligent-document-processing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              Gartner's intelligent document processing report
            </a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} darkMode={darkMode} index={i} />
          ))}
        </div>

        {/* Support CTA */}
        <div className={`mt-12 text-center p-8 rounded-2xl border
          ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-slate-50 border-slate-200/80'}`}>
          <p className={`text-base font-medium mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Still have questions? We're here to help.
          </p>
          <a href="mailto:support@rfqautopilot.com"
            className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-6 py-3 rounded-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
