import { useEffect, useRef } from 'react';

interface HowItWorksProps {
  darkMode: boolean;
}

const stages = [
  {
    number: '01',
    icon: '📎',
    title: 'Automatic PDF Attachment Recognition',
    subtitle: 'PDF Detection & Ingestion',
    description:
      'The moment an email with a PDF attachment arrives, RFQ AutoPilot identifies it as a potential RFQ document. The system analyzes the email subject line, sender context, and attachment filename to determine relevance.',
    details: [
      'Monitors inbox in real time for new attachments',
      'Identifies PDF, scanned PDF, and PDF portfolio formats',
      'Filters non-RFQ attachments like invoices and signatures',
      'Handles multiple PDF attachments per email',
      'Supports PDF files up to 50MB and 500 pages',
    ],
    color: 'from-blue-500 to-blue-700',
    glow: 'shadow-blue-500/20',
  },
  {
    number: '02',
    icon: '👁️',
    title: 'Optical Character Recognition & Layout Intelligence',
    subtitle: 'OCR & Document Analysis',
    description:
      'For scanned PDFs and image-based documents, our OCR engine converts visual content into machine-readable text. The AI analyzes the entire document layout — identifying headers, tables, columns, and rows.',
    details: [
      'Multi-engine OCR for maximum text recognition accuracy',
      'Layout analysis identifies tables, lists, and forms',
      'Handles rotated pages, skewed scans, low-resolution images',
      'Detects multi-column layouts in procurement documents',
      'Processes documents in 40+ languages simultaneously',
    ],
    color: 'from-violet-500 to-violet-700',
    glow: 'shadow-violet-500/20',
  },
  {
    number: '03',
    icon: '🧠',
    title: 'Intelligent Data Extraction Using Machine Learning',
    subtitle: 'AI Data Parsing & Extraction',
    description:
      'Our machine learning models are trained on millions of procurement documents and understand the semantic meaning of RFQ content. The AI does not just read text — it understands what each piece of data represents.',
    details: [
      'Named Entity Recognition for product names, part numbers',
      'Relationship mapping connects line items to specifications',
      'Context-aware extraction for multi-row headers',
      'Handles inconsistent formatting across buyer templates',
      'Confidence scoring flags uncertain extractions',
    ],
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    number: '04',
    icon: '📋',
    title: 'Structured Output Delivered to Your Quote Reply',
    subtitle: 'Data Structuring & Quote Pre-Fill',
    description:
      'Extracted data is organized into a clean, structured format and automatically populated into your quotation reply draft. Product names matched to your catalog, quantities validated, and pricing applied.',
    details: [
      'Extracted line items organized in tabular format',
      'Products matched to your SKU database automatically',
      'Quantities validated against units of measure',
      'Draft quotation created in Gmail or Outlook',
      'One-click review and send from your inbox',
    ],
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
  },
];

export default function HowItWorks({ darkMode }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right') || [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      {/* Background decoration */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-30' : 'opacity-20'}`}>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            ⚙️ EXTRACTION PROCESS
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How AI Extracts RFQ Data from{' '}
            <span className="gradient-text">PDF Attachments</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot combines Optical Character Recognition with advanced AI data parsing to transform static PDF documents into structured, quotable data — similar to enterprise platforms like{' '}
            <a href="https://cloud.google.com/document-ai/docs/overview" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">Google Document AI</a>{' '}
            and{' '}
            <a href="https://aws.amazon.com/textract" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">AWS Textract</a>,
            but built specifically for RFQ workflows inside Gmail and Outlook.
          </p>
        </div>

        {/* Problem statement — moved from hero for context */}
        <div className="mx-auto max-w-4xl mb-16 reveal">
          <div className={`relative rounded-3xl overflow-hidden ${darkMode ? 'bg-slate-900 border border-white/8' : 'bg-white border border-slate-200'}`}>
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" />
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start">
              {/* Icon column */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center text-2xl">
                  😩
                </div>
              </div>
              {/* Text column */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3 text-red-500">
                  The Problem
                </p>
                <p className={`text-base lg:text-lg leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  The process of handling an RFQ remains surprisingly archaic. It often starts with a frantic email carrying a PDF attachment — and what follows is a painful ritual of data entry. Opening the PDF, squinting at tables, copying line items one by one, formatting cells, and double-checking for errors.
                </p>
                <p className={`text-base lg:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  A single 15-page PDF RFQ can consume{' '}
                  <strong className={darkMode ? 'text-white' : 'text-slate-900'}>an hour of your sales team's day</strong>{' '}
                  before a single price is even quoted. RFQ AutoPilot does the extraction for you in{' '}
                  <strong className="text-blue-500">under 45 seconds</strong> — reading every attached PDF inside your Gmail or Outlook inbox, extracting structured data from tables, forms, and free-text layouts, and pre-filling your quotation reply automatically. No copying. No pasting. No errors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Speed callout */}
        <div className={`mx-auto max-w-2xl mb-16 reveal`}>
          <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-center justify-center ${
            darkMode
              ? 'bg-blue-950/30 border border-blue-700/30'
              : 'bg-blue-50 border border-blue-200'
          }`}>
            <span className="text-2xl">⚡</span>
            <p className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <strong>Average PDF processing time:</strong> 8–15 seconds for standard documents, 30–60 seconds for complex multi-page RFQs
            </p>
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-12 lg:space-y-6">
          {stages.map((stage, idx) => (
            <div
              key={stage.number}
              className={`reveal ${idx % 2 === 0 ? '' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={`group relative rounded-3xl overflow-hidden transition-all duration-300 card-3d ${
                darkMode
                  ? 'bg-slate-900 border border-white/8 hover:border-blue-500/30'
                  : 'bg-white border border-slate-200 hover:border-blue-300/60'
              }`}>
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex flex-col lg:flex-row gap-0">
                  {/* Left: Number + Icon */}
                  <div className={`lg:w-64 p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r text-center ${
                    darkMode ? 'border-white/8' : 'border-slate-100'
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-3xl mb-4 shadow-xl ${stage.glow}`}>
                      {stage.icon}
                    </div>
                    <div className={`text-6xl font-black opacity-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {stage.number}
                    </div>
                    <div className={`text-xs font-semibold uppercase tracking-widest mt-1 ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Stage {stage.number}
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 p-8">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                      {stage.subtitle}
                    </p>
                    <h3 className={`text-xl lg:text-2xl font-bold mb-4 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {stage.title}
                    </h3>
                    <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {stage.description}
                    </p>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.details.map((detail) => (
                        <div
                          key={detail}
                          className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector arrow */}
              {idx < stages.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className={`w-px h-8 bg-gradient-to-b from-blue-500/40 to-transparent`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
