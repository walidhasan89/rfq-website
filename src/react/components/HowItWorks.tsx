import { useRef, useEffect } from 'react';
import { Download, Wand2, Send, ArrowRight, Chrome } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Open the Incoming RFQ',
    time: 'Step 1',
    desc: 'Start from the buyer request in your Gmail or Outlook workflow, including the email body and relevant RFQ attachments.',
    details: ['Review buyer email content', 'Include PDFs and attachments', 'Keep the original RFQ available'],
    color: 'blue',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'Review and Build the Quote',
    time: 'Step 2',
    desc: 'Review extracted buyer, product, quantity, date, and commercial information, then add pricing, terms, branding, and reusable company details.',
    details: ['Structured RFQ details', 'Editable line items and terms', 'Company branding controls'],
    color: 'violet',
  },
  {
    number: '03',
    icon: Send,
    title: 'Generate the PDF and Reply',
    time: 'Step 3',
    desc: 'Preview the completed quotation, generate a professional branded PDF, prepare the buyer response email, and review everything before sending.',
    details: ['Professional PDF quotation', 'Editable email preview', 'Human approval before sending'],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; light: string; glow: string }> = {
  blue:    { bg: 'bg-blue-500',    border: 'border-blue-400',    text: 'text-blue-500',    light: 'bg-blue-50 dark:bg-blue-500/10',    glow: 'shadow-blue-500/20' },
  violet:  { bg: 'bg-violet-500',  border: 'border-violet-400',  text: 'text-violet-500',  light: 'bg-violet-50 dark:bg-violet-500/10', glow: 'shadow-violet-500/20' },
  emerald: { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-500', light: 'bg-emerald-50 dark:bg-emerald-500/10', glow: 'shadow-emerald-500/20' },
};

export default function HowItWorks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Chrome size={14} />
            How It Works
          </div>
          <h2
            className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Get Started in{' '}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A clear three-step RFQ-to-quote workflow that supports your team without removing human review or pricing approval.
          </p>
        </div>

        {/* Steps — 3-column grid with connector arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

          {/* Connector line (desktop) */}
          <div className={`hidden md:block absolute top-[3.25rem] left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px ${
            isDark ? 'bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-emerald-500/40' : 'bg-gradient-to-r from-blue-300/60 via-violet-300/60 to-emerald-300/60'
          }`} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const c = colorMap[step.color];
            return (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Step icon circle — sits on the connector line */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${c.glow} transition-transform duration-300 group-hover:-translate-y-1 ${
                  isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                }`}>
                  {/* Glow ring on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${c.bg} blur-xl`} style={{ zIndex: -1 }} />
                  <Icon size={28} className={c.text} />
                  {/* Step number badge */}
                  <span className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center text-white shadow-md ${c.bg}`}>
                    {i + 1}
                  </span>
                </div>

                {/* Card */}
                <div className={`w-full flex flex-col flex-1 p-6 rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-600 shadow-xl shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-300/40'
                }`}>

                  {/* Time badge */}
                  <div className={`inline-flex items-center self-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${c.light} ${c.text}`}>
                    {step.time}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {step.desc}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-2 text-left mt-auto">
                    {step.details.map(d => (
                      <li key={d} className={`flex items-center gap-2.5 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${c.bg}`}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile arrow between steps */}
                {i < steps.length - 1 && (
                  <div className={`md:hidden mt-4 w-8 h-8 rounded-full flex items-center justify-center rotate-90 ${
                    isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200 shadow-sm'
                  }`}>
                    <ArrowRight size={14} className={isDark ? 'text-slate-400' : 'text-slate-400'} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total time callout */}
        <div className={`reveal mt-16 p-7 rounded-2xl border text-center ${
          isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Total setup time
              </p>
              <p className="text-3xl font-black gradient-text">Three Clear Steps</p>
            </div>
            <div className={`hidden sm:block w-px h-12 ${isDark ? 'bg-blue-500/20' : 'bg-blue-200'}`} />
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Existing manual workflow
              </p>
              <p className={`text-3xl font-black ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>Many Hand-offs</p>
            </div>
          </div>
        </div>

        {/* Platform compatibility chips */}
        <div className="reveal mt-10">
          <p className={`text-center text-sm font-semibold mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Supports the tools used in quotation workflows
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { label: 'Gmail', href: '/gmail-rfq-extension', external: false },
              { label: 'Outlook', href: '/outlook-rfq-workflow', external: false },
              { label: 'RFQ Emails', href: '/rfq-email-automation', external: false },
              { label: 'PDF Attachments', href: '/rfq-pdf-data-extraction', external: false },
              { label: 'Quotation Builder', href: '/quotation-builder', external: false },
              { label: 'Manufacturers', href: '/rfq-software-for-manufacturers', external: false },
              { label: 'Distributors', href: '/rfq-software-for-distributors', external: false },
              { label: 'Chrome Extension', href: 'https://developer.chrome.com/docs/extensions', external: true },
            ].map(chip => (
              <a
                key={chip.label}
                href={chip.href}
                target={chip.external ? '_blank' : undefined}
                rel={chip.external ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 shadow-sm'
                }`}
              >
                {chip.label}
                {chip.external && <span className="ml-1 opacity-50 text-[10px]">↗</span>}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-2xl shadow-blue-500/30 relative z-10"
          >
            <Chrome size={20} className="relative z-10" />
            <span className="relative z-10">Add to Chrome — It's Free</span>
          </a>
        </div>

      </div>
    </section>
  );
}
