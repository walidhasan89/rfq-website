import { CheckCircle2, XCircle, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const comparison = [
  { feature: 'Setup time', autopilot: '30 seconds', enterprise: '4–12 weeks' },
  { feature: 'Total cost', autopilot: 'Free to start', enterprise: '$10K–$100K+/year' },
  { feature: 'Learning curve', autopilot: 'None — works in your inbox', enterprise: 'Weeks of training' },
  { feature: 'Email integration', autopilot: 'Native (Gmail & Outlook)', enterprise: 'Bolt-on or manual forwarding' },
  { feature: 'IT approval needed', autopilot: 'No', enterprise: 'Yes — security reviews, SSO' },
  { feature: 'Deployment', autopilot: 'Individual install', enterprise: 'Organization-wide rollout' },
  { feature: 'Ideal team size', autopilot: '1–50 people', enterprise: '50–5,000+ people' },
];

export default function Solution({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="solution"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)]'
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
            <Zap size={11} />
            The Solution
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Meet RFQ AutoPilot —{' '}
            <span className="gradient-text">The Procurement Chrome Extension</span>{' '}
            That Works Where You Work
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A browser-based procurement tool that sits inside your inbox and does the heavy lifting for you.
            No new platform to learn. No enterprise deployment. Just install and start processing RFQs faster.
          </p>
        </div>

        {/* Differentiator highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '⚡', title: 'Works Where You Are', desc: 'RFQ AutoPilot brings procurement automation directly into Gmail and Outlook — the tools you already use every day.' },
            { icon: '🧠', title: 'AI-Powered Extraction', desc: 'Natural language processing detects RFQ language, flags emails, and extracts all critical data automatically.' },
            { icon: '🔌', title: 'Not a Replacement — An Accelerator', desc: 'Bridges the gap between your inbox and your existing procurement stack. Works alongside your ERP and P2P tools. Perfect for distributors, manufacturers, and export companies.' },
          ].map((item, i) => (
            <div
              key={i}
              className={`card-3d p-6 rounded-2xl reveal reveal-delay-${i + 1} ${
                darkMode
                  ? 'bg-slate-800/60 border border-white/6 hover:border-brand-500/30'
                  : 'bg-slate-50 border border-slate-200 hover:border-brand-200 hover:shadow-lg'
              } transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={`reveal rounded-2xl overflow-hidden border ${
          darkMode ? 'border-white/8' : 'border-slate-200'
        }`}>
          {/* Table Header */}
          <div className={`grid grid-cols-3 ${
            darkMode ? 'bg-slate-800/80' : 'bg-slate-50'
          }`}>
            <div className={`px-5 py-4 text-sm font-semibold ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>Feature</div>
            <div className="px-5 py-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold
                bg-gradient-to-r from-brand-600 to-brand-800 text-white">
                <img src="https://rfqautopilot.com/asset/logo.png" alt="" className="h-4 w-auto" />
                RFQ AutoPilot
              </div>
            </div>
            <div className={`px-5 py-4 text-sm font-semibold ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>Enterprise Procurement Software</div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t transition-all ${
                darkMode
                  ? 'border-white/5 hover:bg-white/2'
                  : 'border-slate-100 hover:bg-slate-50/50'
              }`}
            >
              <div className={`px-5 py-4 text-sm font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>{row.feature}</div>
              <div className="px-5 py-4 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-green-500 flex-shrink-0" />
                <span className={`text-sm font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  {row.autopilot}
                </span>
              </div>
              <div className="px-5 py-4 flex items-center gap-2">
                <XCircle size={15} className="text-red-400 flex-shrink-0" />
                <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {row.enterprise}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-sm mt-6 reveal ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          RFQ AutoPilot isn't a replacement for your ERP or P2P system. It's an accelerator that bridges the gap between your inbox and your existing procurement stack.
        </p>
      </div>
    </section>
  );
}
