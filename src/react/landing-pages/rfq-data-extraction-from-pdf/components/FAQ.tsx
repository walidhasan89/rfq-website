import { useEffect, useRef, useState } from 'react';

interface FAQProps {
  darkMode: boolean;
}

const faqs = [
  {
    q: 'How does RFQ AutoPilot extract RFQ data from PDF files differently than copy-paste?',
    a: "Copy-paste from PDFs loses table structure, merges columns, scrambles data, and requires manual reformatting. RFQ AutoPilot's AI understands the visual layout of the PDF and extracts data in its proper structure — maintaining the relationship between product names, quantities, specifications, and other fields. The result is clean, organized data ready for quoting, not a block of jumbled text. Learn more about our full <a href='https://rfqautopilot.com/rfq-data-extraction-from-pdf' class='text-blue-500 hover:underline'>RFQ data extraction from PDF</a> capabilities.",
  },
  {
    q: 'Can the PDF RFQ parser handle PDFs created from different software?',
    a: "Yes. Our parser handles PDFs created from any source including Microsoft Word, Excel, Google Docs, SAP, Oracle, custom ERP systems, Adobe InDesign, scanned paper documents, and even screenshots saved as PDF. The extraction engine adapts to each format automatically without requiring format-specific configuration. This makes it an ideal <a href='https://rfqautopilot.com/ai-rfq-processing-tool' class='text-blue-500 hover:underline'>AI RFQ processing tool</a> for any procurement workflow.",
  },
  {
    q: 'What happens when a PDF contains both RFQ data and non-relevant content?',
    a: "The AI uses content classification to distinguish between RFQ-relevant data like product lists, quantities, and delivery terms versus non-relevant content such as company boilerplate, legal disclaimers, and marketing content. Only relevant procurement data is extracted and presented for quoting. You can review what was captured and what was excluded.",
  },
  {
    q: 'Can I auto-read RFQ PDF files that are password-protected?',
    a: "Yes, with the appropriate credentials. If you have the password to open the PDF, you can provide it to RFQ AutoPilot and the system will decrypt and process the document. For PDFs with print-only restrictions but no open password, the system can process them directly. We never store PDF passwords after the processing session ends.",
  },
  {
    q: 'How does the system handle PDF RFQs with images or engineering drawings?',
    a: "RFQ AutoPilot extracts text data from PDFs that contain embedded images. If an engineering drawing includes a parts list, title block, or BOM table, the AI extracts that textual data. Pure graphical content like CAD drawings without text annotations is identified but not converted to data. The system notifies you when drawings are detected so your engineering team can review them separately.",
  },
  {
    q: 'What if the same product appears differently in two different PDF RFQs?',
    a: 'Our fuzzy matching algorithm handles product name variations across different buyers. "Stainless Steel Hex Bolt M10x50" from one customer and "SS Hex M10-50mm" from another are both matched to the same SKU in your catalog. The system learns from your corrections and builds an expanding synonym dictionary specific to your products and customers.',
  },
  {
    q: 'Can I extract data from PDF attachments in bulk?',
    a: "Yes. If you receive multiple PDF RFQs at once or need to process a backlog, RFQ AutoPilot handles batch extraction. Select multiple emails with PDF attachments and process them simultaneously. Each PDF is extracted independently, and individual quotation drafts are created for each. Enterprise plans support unlimited daily batch processing. This feature is especially valuable for <a href='https://rfqautopilot.com/rfq-software-for-distributors' class='text-blue-500 hover:underline'>RFQ software for distributors</a> managing high volumes.",
  },
  {
    q: 'How does parse RFQ attachments work for PDFs with multiple pages?',
    a: "Multi-page PDF processing includes automatic page continuation detection. When a table starts on page 3 and continues on page 4, the AI recognizes this and merges the data into a single continuous table. Headers that appear only on the first page are applied to all subsequent pages. Page numbers, headers, and footers are filtered from the extracted data.",
  },
  {
    q: 'Does the extraction accuracy improve over time for my specific documents?',
    a: "Yes. RFQ AutoPilot uses active learning to improve accuracy for your specific document types. When you correct an extraction error, the AI learns from that correction and applies it to similar documents in the future. Over time, accuracy for your recurring customer formats approaches 99%+ as the system builds understanding of your unique document patterns.",
  },
  {
    q: 'Can I export extracted PDF data to Excel or my ERP system?',
    a: "Extracted data can be exported in multiple formats: Excel/CSV for one-click export of line items, JSON/XML for ERP system import, direct API push to SAP, Oracle, NetSuite, Microsoft Dynamics, automatic Google Sheets population for Google Workspace users, and pre-filled quotation documents in your format. Our <a href='https://rfqautopilot.com/rfq-automation-software' class='text-blue-500 hover:underline'>RFQ automation software</a> integrates seamlessly with your existing stack.",
  },
];

export default function FAQ({ darkMode }: FAQProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl ${darkMode ? 'bg-blue-900/15' : 'bg-blue-100/50'}`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            ❓ FAQ
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions About{' '}
            <span className="gradient-text">PDF RFQ Data Extraction</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about how RFQ AutoPilot extracts and processes PDF attachments.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-colors duration-200 border ${
                openIndex === idx
                  ? darkMode
                    ? 'bg-blue-950/30 border-blue-700/40'
                    : 'bg-blue-50 border-blue-200'
                  : darkMode
                    ? 'bg-slate-900 border-white/8 hover:border-white/15'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                aria-expanded={openIndex === idx}
              >
                <span className={`font-semibold text-base leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === idx
                    ? 'bg-blue-500 rotate-45'
                    : darkMode ? 'bg-white/10' : 'bg-slate-100'
                }`}>
                  <svg
                    className={`w-3 h-3 ${openIndex === idx ? 'text-white' : darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Answer panel — always in DOM, toggled via max-height */}
              <div
                style={{
                  maxHeight: openIndex === idx ? '600px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <div
                  className={`px-6 pb-6 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
