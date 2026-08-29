import { Search, FileText, BarChart3, FileEdit, Link2, Shield } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const features = [
  {
    icon: Search,
    emoji: '🔍',
    title: 'Auto-Detect Incoming RFQ & Supplier Quote Emails',
    description: 'The moment an RFQ or supplier quote email lands in your inbox, RFQ AutoPilot recognizes it. Using AI-powered natural language processing, the extension identifies RFQ-related language, flags the email, and highlights critical information — no manual tagging or sorting required.',
    tag: 'AI Detection',
    color: 'from-blue-500 to-blue-700',
    link: 'https://rfqautopilot.com/rfq-email-management-tool',
    linkLabel: 'RFQ email management',
  },
  {
    icon: FileText,
    emoji: '📄',
    title: 'Extract Product Data, Quantities & Specs from Emails and Attachments',
    description: 'Stop manually reading through multi-page PDFs and spreadsheets. RFQ AutoPilot uses intelligent data extraction to pull product names, part numbers, quantities, technical specifications, delivery requirements, and pricing from email body text and attached documents (PDF, Excel, CSV).',
    tag: 'Smart Extraction',
    color: 'from-violet-500 to-violet-700',
    link: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf',
    linkLabel: 'RFQ data extraction from PDF',
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Compare & Organize Quotes Without Leaving Your Browser',
    description: 'All extracted data is automatically structured into a clean, side-by-side comparison view. Filter by price, delivery time, supplier rating, or custom criteria. No more building comparison spreadsheets from scratch — the extension does it for you within your browser window.',
    tag: 'Smart Compare',
    color: 'from-cyan-500 to-cyan-700',
    link: 'https://rfqautopilot.com/rfq-automation-software',
    linkLabel: 'RFQ automation software',
  },
  {
    icon: FileEdit,
    emoji: '📝',
    title: 'Generate Standardized Quote Response Templates',
    description: 'Respond to RFQs in a fraction of the time. RFQ AutoPilot auto-generates professional, standardized quote response templates pre-filled with extracted data. Customize, review, and send — all within Gmail or Outlook. Maintain consistency across your team\'s communications.',
    tag: 'Auto-Generate',
    color: 'from-emerald-500 to-emerald-700',
    link: 'https://rfqautopilot.com/quotation-email-automation',
    linkLabel: 'quotation email automation',
  },
  {
    icon: Link2,
    emoji: '🔗',
    title: 'Seamless Procurement Workflow Integration',
    description: 'RFQ AutoPilot fits into your existing procurement approval workflows. Export extracted data to your ERP, P2P, or spreadsheet tools. It works alongside your current systems — not as a replacement, but as a productivity multiplier for procurement email automation.',
    tag: 'Integrations',
    color: 'from-orange-500 to-orange-700',
    link: 'https://rfqautopilot.com/ai-rfq-processing-tool',
    linkLabel: 'AI RFQ processing',
  },
  {
    icon: Shield,
    emoji: '🛡️',
    title: 'Enterprise-Grade Security & Privacy',
    description: 'SOC 2 Type II compliant and GDPR ready. All data encrypted in transit (TLS 1.3) and at rest (AES-256). Your data is never used to train public AI models. Minimal permissions — only what\'s needed to function inside Gmail and Outlook.',
    tag: 'SOC2 · GDPR',
    color: 'from-rose-500 to-rose-700',
    link: null,
    linkLabel: null,
  },
];

export default function Features({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]'
          : 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_70%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              color: darkMode ? '#60a5fa' : '#2563eb',
              border: '1px solid rgba(59,130,246,0.2)'
            }}
          >
            Key Features
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Everything You Need to Process RFQs Faster —{' '}
            <span className="gradient-text">Right in Your Browser</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Powerful{' '}
            <a
              href="https://rfqautopilot.com/ai-rfq-generator"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              AI-powered features
            </a>{' '}
            designed to eliminate the manual work from your procurement workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`card-3d group relative p-6 lg:p-7 rounded-2xl reveal reveal-delay-${Math.min(i + 1, 4)} ${
                  darkMode
                    ? 'bg-slate-900/80 border border-white/6 hover:border-brand-500/30'
                    : 'bg-white border border-slate-200 hover:border-brand-200 hover:shadow-xl'
                } transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient accent in corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.color}`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color}`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Tag */}
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-3 ${
                    darkMode ? 'bg-white/6 text-slate-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {feature.tag}
                  </span>

                  {/* Title */}
                  <h3 className={`font-bold text-base leading-snug mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.emoji} {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>

                  {/* Internal link */}
                  {feature.link && (
                    <a
                      href={feature.link}
                      className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold transition-colors ${
                        darkMode ? 'text-brand-400 hover:text-brand-300' : 'text-brand-600 hover:text-brand-700'
                      }`}
                    >
                      Learn more about {feature.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
