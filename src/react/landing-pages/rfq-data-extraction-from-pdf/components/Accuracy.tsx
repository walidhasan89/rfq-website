import { useEffect, useRef } from 'react';

interface AccuracyProps {
  darkMode: boolean;
}

const accuracyData = [
  { type: 'Clean digital PDF', accuracy: '99.2%', time: '5–10 seconds', pct: 99.2 },
  { type: 'Formatted RFQ template', accuracy: '98.9%', time: '8–15 seconds', pct: 98.9 },
  { type: 'Scanned document (high quality)', accuracy: '97.8%', time: '15–25 seconds', pct: 97.8 },
  { type: 'Scanned document (low quality)', accuracy: '94.3%', time: '20–35 seconds', pct: 94.3 },
  { type: 'Multi-page BOM (50+ lines)', accuracy: '98.1%', time: '30–60 seconds', pct: 98.1 },
  { type: 'Handwritten annotations', accuracy: '89.5%', time: '25–40 seconds', pct: 89.5 },
  { type: 'Mixed format (tables + text)', accuracy: '97.6%', time: '15–30 seconds', pct: 97.6 },
  { type: 'Multi-language document', accuracy: '96.4%', time: '15–30 seconds', pct: 96.4 },
];

const edgeCases = [
  {
    icon: '📷',
    title: 'Blurry, Skewed & Low-Resolution Scans',
    challenge: 'Customers scan paper RFQs using old scanners or phone cameras, resulting in blurry text, skewed pages, and shadows.',
    solutions: [
      'Image preprocessing applies de-skewing and contrast enhancement',
      'Multi-pass OCR attempts extraction at different processing levels',
      'Confidence scores drop for unclear sections, flagging for review',
      'AI fills gaps using contextual clues from surrounding text',
      'Original image displayed alongside extracted data for verification',
    ],
  },
  {
    icon: '📊',
    title: 'Merged Cells, Nested Tables & Split Tables',
    challenge: 'PDF RFQs frequently contain tables with merged header cells, nested sub-tables, tables spanning multiple pages, and inconsistent column widths.',
    solutions: [
      'Layout intelligence reconstructs table structure regardless of complexity',
      'Merged cell detection properly assigns data to correct columns',
      'Cross-page table continuation recognized and merged automatically',
      'Nested tables processed hierarchically',
      'Column header inference fills gaps on continuation pages',
    ],
  },
  {
    icon: '📑',
    title: 'Tables Mixed with Paragraphs, Images & Forms',
    challenge: 'Many PDF RFQs combine structured tables with unstructured text paragraphs, embedded images, form fields, and handwritten notes.',
    solutions: [
      'Content segmentation separates tables, text, images, and forms',
      'Each segment processed with the appropriate extraction method',
      'Cross-reference engine links related data across segments',
      'Image-embedded text extracted via specialized OCR',
      'Form field values captured with field label context',
    ],
  },
  {
    icon: '🔀',
    title: 'Unusual Formats, Custom Templates & Vertical Layouts',
    challenge: 'Every buyer organization has its own RFQ template with horizontal tables, vertical layouts, multi-column designs, or completely unstructured formats.',
    solutions: [
      'Template-agnostic extraction works without pre-configured layouts',
      'AI identifies data patterns regardless of visual arrangement',
      'Vertical and horizontal table reading supported',
      'Free-text RFQs parsed using NLP entity extraction',
      'System learns new formats after first exposure',
    ],
  },
  {
    icon: '🌐',
    title: 'Documents in Foreign Languages or Mixed Languages',
    challenge: 'International RFQs arrive in various languages or mix multiple languages within one document, such as English headers with Chinese product descriptions.',
    solutions: [
      'Automatic language detection at document and paragraph level',
      '40+ language support for OCR and NLP extraction',
      'Mixed-language processing within single documents',
      'Technical terminology databases across languages',
      'Translation assistance for English-speaking teams',
    ],
  },
];

export default function Accuracy({ darkMode }: AccuracyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-blue-900/15' : 'bg-blue-100/60'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            🎯 ACCURACY & RELIABILITY
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="gradient-text">98.7% Extraction Accuracy</span>
            <br />— Even on the Toughest PDF Formats
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            PDF RFQs come in every imaginable format. Clean digital documents, blurry scans, hand-annotated forms, multi-page spreadsheets. RFQ AutoPilot handles them all —
            powered by OCR technology comparable to{' '}
            <a href="https://www.abbyy.com/ocr-sdk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">ABBYY OCR SDK</a>{' '}
            and{' '}
            <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">Azure Document Intelligence</a>,
            optimized for procurement documents.
          </p>
        </div>

        {/* Accuracy table */}
        <div className={`reveal rounded-3xl overflow-hidden mb-16 ${
          darkMode ? 'bg-slate-900 border border-white/8' : 'bg-white border border-slate-200 shadow-xl shadow-slate-900/5'
        }`}>
          <div className={`px-6 py-5 border-b ${darkMode ? 'border-white/8 bg-slate-950/50' : 'border-slate-100 bg-slate-50/80'}`}>
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>Accuracy by Document Type</h3>
          </div>
          <div className="overflow-x-auto">
            <table className={`w-full accuracy-table text-sm`}>
              <thead>
                <tr className={`${darkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                  <th className={`text-left px-6 py-4 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Document Type</th>
                  <th className={`text-left px-6 py-4 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Accuracy</th>
                  <th className={`text-left px-6 py-4 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Accuracy Bar</th>
                  <th className={`text-left px-6 py-4 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Processing Time</th>
                </tr>
              </thead>
              <tbody>
                {accuracyData.map((row, idx) => (
                  <tr key={row.type} className={`border-t transition-colors duration-150 ${
                    darkMode ? 'border-white/5 hover:bg-white/3' : 'border-slate-100 hover:bg-slate-50/80'
                  }`}>
                    <td className={`px-6 py-4 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{row.type}</td>
                    <td className={`px-6 py-4 font-bold ${row.pct >= 97 ? 'text-green-500' : row.pct >= 93 ? 'text-amber-500' : 'text-orange-500'}`}>
                      {row.accuracy}
                    </td>
                    <td className="px-6 py-4 w-48">
                      <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-1000 delay-${idx * 100} ${
                            row.pct >= 97 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                            row.pct >= 93 ? 'bg-gradient-to-r from-amber-500 to-yellow-400' :
                            'bg-gradient-to-r from-orange-500 to-amber-400'
                          }`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edge cases */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-center mb-10 reveal ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Edge Case Handling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edgeCases.map((ec, idx) => (
              <div
                key={ec.title}
                className={`reveal group rounded-2xl p-6 transition-all duration-300 card-3d border ${
                  darkMode
                    ? 'bg-slate-900 border-white/8 hover:border-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-blue-300/60 shadow-sm hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                <div className="text-3xl mb-4">{ec.icon}</div>
                <h4 className={`font-bold text-base mb-3 leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {ec.title}
                </h4>
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Challenge:</span> {ec.challenge}
                </p>
                <ul className="space-y-2">
                  {ec.solutions.map((sol) => (
                    <li key={sol} className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-blue-500 mt-0.5 flex-shrink-0 font-bold">→</span>
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy guarantee */}
        <div className={`reveal rounded-3xl overflow-hidden relative ${
          darkMode ? 'bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-white border border-blue-200'
        }`}>
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-600 to-transparent" />
          <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-5xl flex-shrink-0">🛡️</div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Accuracy Guarantee
              </h3>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                If RFQ AutoPilot's PDF extraction accuracy falls below <strong>95%</strong> on your documents within the first 30 days,
                our team will personally optimize the AI for your specific document types — <strong>free of charge</strong>.
                Our intelligent document processing engine is built on research-grade OCR comparable to{' '}
                <a href="https://www.ibm.com/products/datacap" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">IBM Datacap</a>,
                purpose-tuned for <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className="text-blue-500 hover:underline font-medium">manufacturing</a> and procurement RFQ workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
