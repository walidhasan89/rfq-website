import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const steps = [
  {
    num: '01',
    icon: '📬',
    title: 'Connect Your Inbox',
    description: 'Connect Gmail, Outlook, or any IMAP email account in 60 seconds. RFQ AutoPilot begins monitoring for incoming requests immediately — no complex configuration required.',
    color: '#3b82f6',
    detail: 'Works with Gmail, Outlook, and Office 365',
  },
  {
    num: '02',
    icon: '🗂️',
    title: 'AI Learns Your Catalog',
    description: 'Import your product list or connect your ERP system. The AI maps customer terminology to your SKUs and learns your unique pricing structure within hours.',
    color: '#8b5cf6',
    detail: 'Integrates with SAP, Oracle, NetSuite & more',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Process Your First RFQ',
    description: 'Forward an existing RFQ or wait for the next one to arrive. Watch AI extract data from emails and PDF attachments automatically and generate a draft quote.',
    color: '#10b981',
    detail: 'From inbox to quote in under 3 minutes',
  },
];

export default function HowItWorks({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section id="how-it-works" className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#050912]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '600px', height: '600px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-20 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            🚀 Get Started in Minutes
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Up and Running in{' '}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            From install to processing live RFQs — in under 10 minutes. No complex setup, no IT team required. Just install the{' '}
            <a
              href="https://rfqautopilot.com/rfq-automation-software"
              className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors"
            >
              RFQ automation software
            </a>{' '}
            and connect your inbox.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} darkMode={darkMode} index={i} />
            ))}
          </div>
        </div>

        {/* Platform logos row */}
        <div className={`mt-16 text-center`}>
          <p className={`text-sm font-medium mb-5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Works seamlessly with your existing tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Gmail', 'Outlook', 'Salesforce', 'HubSpot', 'SAP', 'NetSuite'].map((tool) => (
              <div
                key={tool}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200
                  ${darkMode
                    ? 'bg-slate-800/60 border-white/[0.07] text-slate-300 hover:border-white/15 hover:text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800 shadow-sm'
                  }`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Install CTA */}
        <InstallCTA darkMode={darkMode} />
      </div>
    </section>
  );
}

function StepCard({ step, darkMode, index }: { step: typeof steps[0], darkMode: boolean, index: number }) {
  const { ref, isVisible } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''} relative flex flex-col items-center text-center group`}
    >
      {/* Number bubble + Icon */}
      <div className="relative mb-6 z-10">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: darkMode
              ? `linear-gradient(135deg, ${step.color}25, ${step.color}10)`
              : `linear-gradient(135deg, ${step.color}18, ${step.color}06)`,
            border: `2px solid ${step.color}35`,
          }}
        >
          {step.icon}
        </div>
        <div
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg"
          style={{ background: step.color }}
        >
          {index + 1}
        </div>
      </div>

      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        {step.title}
      </h3>
      <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {step.description}
      </p>
      <div
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold`}
        style={{
          background: `${step.color}15`,
          color: step.color,
          border: `1px solid ${step.color}25`,
        }}
      >
        ✓ {step.detail}
      </div>
    </div>
  );
}

function InstallCTA({ darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'visible' : ''} mt-20 relative overflow-hidden rounded-3xl
        ${darkMode ? 'bg-slate-900/70 border border-white/[0.08]' : 'bg-slate-50 border border-slate-200'}`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="glow-orb"
          style={{
            width: '400px', height: '400px',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            background: darkMode
              ? 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative px-8 lg:px-16 py-14 lg:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          🎯 Start Processing RFQs with AI Today
        </div>

        <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Join Hundreds of Companies Using{' '}
          <span className="gradient-text">AI RFQ Automation</span>
        </h2>

        <p className={`text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Extract data from any format, generate accurate quotes, and respond in minutes instead of hours.
          Purpose-built as a{' '}
          <a
            href="https://rfqautopilot.com/gmail-chrome-extension-for-sales"
            className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors"
          >
            Gmail Chrome extension for sales teams
          </a>{' '}
          and Outlook users alike.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-gradient text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 hover:scale-[1.02] transition-transform duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 13.5 12 13.5 8.5 11.93 8.5 10 10.07 6.5 12 6.5zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
            </svg>
            Add to Chrome — It's Free
          </a>
          <a
            href="mailto:support@rfqautopilot.com"
            className={`inline-flex items-center gap-2.5 font-semibold text-base px-8 py-4 rounded-2xl border transition-all duration-300
              ${darkMode
                ? 'text-white border-white/15 hover:bg-white/[0.06] hover:border-white/25'
                : 'text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
          >
            Contact Support →
          </a>
        </div>

        <div className={`flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="flex items-center gap-1.5">
            <span className="text-blue-500 font-bold">✓</span>
            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Setup in under 10 minutes</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-blue-500 font-bold">✓</span>
            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>No credit card required</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-blue-500 font-bold">✓</span>
            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Cancel anytime</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-blue-500 font-bold">✓</span>
            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>60-day money-back guarantee</span>
          </span>
        </div>
      </div>
    </div>
  );
}
