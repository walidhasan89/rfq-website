import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface AIFeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    icon: '🧠',
    badge: 'NLP Engine',
    title: 'Natural Language Processing for Email RFQs',
    learnMoreUrl: 'https://rfqautopilot.com/rfq-email-management-tool',
    learnMoreLabel: 'RFQ email management tool',
    description: 'Our AI extracts data from RFQ email content using advanced natural language processing. The system understands context, identifies key requirements, extracts quantities, specifications, delivery dates, and special instructions — even when formatted differently across suppliers.',
    capabilities: [
      'Understands 40+ languages and industry terminologies',
      'Identifies implicit requirements and buyer intent',
      'Extracts structured data from unstructured email text',
      'Recognizes product codes, part numbers, and technical specifications',
      'Detects urgency indicators and deadline mentions',
    ],
    iconBg: 'from-blue-500 to-violet-600',
    accent: '#3b82f6',
  },
  {
    icon: '📄',
    badge: 'PDF Extraction',
    title: 'Intelligent PDF Table Extraction',
    learnMoreUrl: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf',
    learnMoreLabel: 'RFQ data extraction from PDF',
    description: "Advanced AI PDF data extraction RFQ technology reads tables, forms, and complex layouts from PDF attachments. Whether it's a formatted RFQ template, scanned document, or multi-page bill of materials, RFQ AutoPilot extracts every line item with precision.",
    capabilities: [
      'OCR technology for scanned and image-based PDFs',
      'Table structure recognition across varied layouts',
      'Multi-page document processing',
      'Header and footer detection for context',
      'Handles merged cells, split tables, and complex formatting',
    ],
    iconBg: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
  },
  {
    icon: '🎯',
    badge: 'Smart Mapping',
    title: 'Automatic Data Categorization & Mapping',
    learnMoreUrl: 'https://rfqautopilot.com/quotation-email-automation',
    learnMoreLabel: 'quotation email automation',
    description: 'AI automatically maps extracted data to your quoting fields — no matter how the customer labels their requirements. The system learns your product catalog, pricing structure, and terminology to ensure accurate data placement.',
    capabilities: [
      'Auto-matches product descriptions to your SKUs',
      'Maps custom fields to standard quotation templates',
      'Learns from corrections to improve accuracy',
      'Handles industry-specific terminology',
      'Creates validation rules for data quality',
    ],
    iconBg: 'from-violet-500 to-purple-600',
    accent: '#8b5cf6',
  },
  {
    icon: '✨',
    badge: 'Quote Generator',
    title: 'Intelligent Quote Generation',
    learnMoreUrl: 'https://rfqautopilot.com/ai-rfq-generator',
    learnMoreLabel: 'AI RFQ generator',
    description: 'Beyond extraction, our AI quotation generator creates professional, accurate quotes based on your pricing rules, margins, and customer history. Draft responses are generated automatically and ready for your review.',
    capabilities: [
      'Applies customer-specific pricing and discounts',
      'Calculates totals, taxes, and shipping automatically',
      'Suggests upsell and alternative products',
      'Maintains brand voice and formatting standards',
      'Includes terms, conditions, and compliance notes',
    ],
    iconBg: 'from-emerald-500 to-teal-600',
    accent: '#10b981',
  },
];

export default function AIFeatures({ darkMode }: AIFeaturesProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="features"
      className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#060b18]' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb" style={{
          width: '400px', height: '400px',
          top: '20%', right: '-100px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            🤖 AI Technology Deep-Dive
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How AI Transforms{' '}
            <span className="gradient-text">RFQ Processing</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot combines{' '}
            <a href="https://www.ibm.com/topics/natural-language-processing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              natural language processing
            </a>
            , machine learning, and{' '}
            <a href="https://cloud.google.com/document-ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              optical character recognition
            </a>{' '}
            to intelligently extract RFQ data from any format — turning complex procurement documents into structured, actionable information. Learn how our{' '}
            <a href="https://rfqautopilot.com/ai-rfq-processing-tool" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              AI RFQ processing tool
            </a>{' '}
            works across every format.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <FeatureBlock key={i} feature={feature} darkMode={darkMode} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ feature, darkMode, index }: { feature: typeof features[0], darkMode: boolean, index: number }) {
  const { ref, isVisible } = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal reveal-delay-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}>
      <div className={`relative rounded-2xl overflow-hidden border card-3d transition-shadow duration-300
        ${darkMode
          ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/40 border-white/[0.07]'
          : 'bg-white border-slate-200/80 shadow-sm hover:shadow-lg'
        }`}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
        />

        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          <div className="flex-1 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center text-2xl shadow-lg`}>
                {feature.icon}
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border
                ${darkMode ? 'text-blue-400 border-blue-500/30 bg-blue-500/10' : 'text-blue-600 border-blue-200 bg-blue-50'}`}>
                {feature.badge}
              </span>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {feature.title}
            </h3>
            <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {feature.description}
            </p>
            {feature.learnMoreUrl && (
              <a
                href={feature.learnMoreUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: feature.accent }}
              >
                Explore our {feature.learnMoreLabel} →
              </a>
            )}
          </div>

          <div className={`flex-1 p-8 lg:p-10
            ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/80'}
            ${isEven ? 'lg:border-l border-t lg:border-t-0' : 'lg:border-r border-t lg:border-t-0'}
            ${darkMode ? 'border-white/[0.05]' : 'border-slate-200/60'}`}>
            <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Key Capabilities</p>
            <ul className="space-y-3">
              {feature.capabilities.map((cap, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `${feature.accent}20` }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={feature.accent} strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
