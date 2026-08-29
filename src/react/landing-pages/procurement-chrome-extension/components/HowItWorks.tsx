import { Download, Mail, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Install the Chrome Extension',
    description: 'Head to the Chrome Web Store and add RFQ AutoPilot with one click. No account creation required to get started. No software to download. No IT department approval needed. The extension icon appears in your browser toolbar, ready to go. Built using the latest Chrome Extension APIs per the Chrome developer documentation.',
    detail: 'One-click install · No signup required · 30 seconds total',
    color: 'from-brand-500 to-brand-700',
  },
  {
    number: '02',
    icon: Mail,
    title: 'Open Any RFQ Email — AutoPilot Detects It',
    description: 'Open Gmail or Outlook in your browser as you normally would. When you open an email containing an RFQ, quote request, or supplier response, RFQ AutoPilot automatically activates. It highlights key data points — product names, quantities, pricing, specs, deadlines — and organizes them in a clean sidebar panel.',
    detail: 'Auto-detection · AI parsing · Instant sidebar overlay',
    color: 'from-violet-500 to-violet-700',
  },
  {
    number: '03',
    icon: Send,
    title: 'Review Data & Generate Your Quote Response',
    description: 'Review the structured data the extension has pulled from the email and any attachments. Edit or confirm details. Then generate a standardized quote reply with one click, or export the data to your preferred procurement tool. Send your response directly from your inbox.',
    detail: 'One-click generation · Export to ERP · Send from inbox',
    color: 'from-emerald-500 to-emerald-700',
  },
];

export default function HowItWorks({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.07),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_60%)]'
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
            How It Works
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            From Install to First RFQ —{' '}
            <span className="gradient-text">In Under 2 Minutes</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            No training. No onboarding calls. No 47-page user manual.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-px"
            style={{
              background: darkMode
                ? 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(59,130,246,0.3), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(59,130,246,0.2), transparent)'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`relative reveal reveal-delay-${i + 1}`}
                >
                  {/* Step card */}
                  <div className={`card-3d group p-8 rounded-2xl h-full ${
                    darkMode
                      ? 'bg-slate-800/60 border border-white/6 hover:border-brand-500/30'
                      : 'bg-slate-50 border border-slate-200 hover:border-brand-200 hover:shadow-xl'
                  } transition-all duration-300`}>
                    {/* Number + Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                        <Icon size={24} className="text-white" />
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black
                          ${darkMode ? 'bg-slate-900 text-brand-400 border border-white/10' : 'bg-white text-brand-700 border border-slate-200 shadow'}`}>
                          {i + 1}
                        </div>
                      </div>
                      <span className={`text-5xl font-black opacity-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {step.number}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {step.description}
                    </p>

                    {/* Detail pills */}
                    <div className="flex flex-wrap gap-2">
                      {step.detail.split(' · ').map((d, j) => (
                        <span key={j} className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          darkMode
                            ? 'bg-brand-900/40 text-brand-300 border border-brand-800/40'
                            : 'bg-brand-50 text-brand-700 border border-brand-100'
                        }`}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-12 text-center reveal`}>
          <p className={`text-base ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            That's it. No training. No onboarding calls. No 47-page user manual.{' '}
            Built on the{' '}
            <a
              href="https://developer.chrome.com/docs/extensions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 transition-colors"
            >
              Chrome Extensions platform
            </a>
            {' '}for maximum compatibility and security.
          </p>
          <p className={`text-sm mt-3 ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            Explore the{' '}
            <a href="https://rfqautopilot.com/ai-rfq-generator" className="text-brand-500 hover:text-brand-600 transition-colors font-medium">
              AI RFQ generator
            </a>
            {' '}→
          </p>
        </div>
      </div>
    </section>
  );
}
