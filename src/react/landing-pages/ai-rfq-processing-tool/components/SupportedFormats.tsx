import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const formats = [
  {
    icon: '✉️',
    title: 'Direct Email Requests',
    badge: 'Email RFQs',
    types: ['Plain text email RFQs', 'HTML formatted inquiries', 'Inline tables and lists', 'Forwarded chains with RFQ history', 'Email templates from procurement systems'],
    aiNote: 'Natural language processing extracts requirements even from conversational email threads.',
    color: '#3b82f6',
  },
  {
    icon: '📄',
    title: 'PDF Documents',
    badge: 'PDF Attachments',
    types: ['Standard RFQ forms and templates', 'Scanned paper documents (OCR)', 'Multi-page bills of materials', 'Engineering drawings with part lists', 'Fillable PDF forms', 'Password-protected PDFs (with permission)'],
    aiNote: 'Advanced AI PDF data extraction handles tables, checkboxes, handwriting, and complex layouts.',
    color: '#06b6d4',
  },
  {
    icon: '📊',
    title: 'Excel and CSV Files',
    badge: 'Spreadsheets',
    types: ['.xlsx and .xls workbooks', 'CSV files', 'Multi-sheet BOMs', 'Formatted pricing tables', 'Macro-enabled workbooks'],
    aiNote: 'Intelligent parsing recognizes headers, calculates quantities, and maps columns automatically.',
    color: '#10b981',
  },
  {
    icon: '📋',
    title: 'Additional Formats',
    badge: 'Other Documents',
    types: ['Microsoft Word documents (.doc, .docx)', 'Images (JPG, PNG) with text', 'ERP system exports', 'XML and JSON procurement files', 'EDI documents (850 Purchase Orders)'],
    aiNote: 'Cross-format intelligence ensures consistent data extraction regardless of source.',
    color: '#8b5cf6',
  },
];

export default function SupportedFormats({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#060b18]' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '400px', height: '400px',
          top: '30%', right: '-100px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            📁 Supported Formats
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Process Any RFQ Format —{' '}
            <span className="gradient-text">Emails, PDFs, Excel, and More</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot's AI works with every format your customers use to send requests for quotation. No manual reformatting required. Powered by{' '}
            <a href="https://www.gartner.com/en/documents/intelligent-document-processing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              intelligent document processing
            </a>{' '}
            technology — including full{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              Outlook add-in for RFQ
            </a>{' '}
            and{' '}
            <a href="https://rfqautopilot.com/procurement-chrome-extension" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              procurement Chrome extension
            </a>{' '}
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formats.map((fmt, i) => (
            <FormatCard key={i} fmt={fmt} darkMode={darkMode} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FormatCard({ fmt, darkMode, index }: { fmt: typeof formats[0], darkMode: boolean, index: number }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''} group relative rounded-2xl p-7 border card-3d transition-all duration-300
        ${darkMode
          ? 'bg-slate-900/60 border-white/[0.07] hover:border-white/15'
          : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md'
        }`}
    >
      {/* Accent corner */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ background: fmt.color }}
      />

      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${fmt.color}18`, border: `1px solid ${fmt.color}30` }}
        >
          {fmt.icon}
        </div>
        <div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
            style={{ background: `${fmt.color}18`, color: fmt.color, border: `1px solid ${fmt.color}25` }}
          >
            {fmt.badge}
          </span>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{fmt.title}</h3>
        </div>
      </div>

      <ul className="space-y-2 mb-5">
        {fmt.types.map((t, j) => (
          <li key={j} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: fmt.color }} />
            <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t}</span>
          </li>
        ))}
      </ul>

      <div
        className="rounded-xl p-3.5 text-sm"
        style={{ background: `${fmt.color}0d`, border: `1px solid ${fmt.color}20` }}
      >
        <span className="font-semibold" style={{ color: fmt.color }}>🤖 AI Capability: </span>
        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{fmt.aiNote}</span>
      </div>
    </div>
  );
}
