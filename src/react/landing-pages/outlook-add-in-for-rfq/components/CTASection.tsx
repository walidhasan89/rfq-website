import { useEffect, useRef } from 'react';
import { Zap, Calendar, ArrowRight, Check, Star, Shield, Radio, Search, FileText, BarChart3, Palette, Link2 } from 'lucide-react';

interface Props { darkMode: boolean; }

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const immediateFeatures = [
  { icon: Radio, text: 'Automatic RFQ detection in Outlook inbox and folders' },
  { icon: Search, text: 'AI data extraction from emails, PDFs, and Excel attachments' },
  { icon: FileText, text: 'One-click quote generation as Outlook reply drafts' },
  { icon: BarChart3, text: 'Quote tracking dashboard inside the Outlook sidebar' },
  { icon: Palette, text: 'Branded templates matching your company identity' },
  { icon: Link2, text: 'Microsoft 365 integration with Teams, Excel, OneDrive, and Dynamics' },
];

const trustElements = [
  { icon: Star, text: '4.8/5 average rating', subtext: '⭐⭐⭐⭐⭐' },
  { icon: Shield, text: 'Microsoft AppSource certified', subtext: '✅ Reviewed by Microsoft' },
  { icon: Zap, text: 'No credit card for free plan', subtext: '💳 Start instantly' },
  { icon: Check, text: 'SOC 2 Type II certified', subtext: '🔒 Enterprise security' },
];

export default function CTASection({ darkMode }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up, .fade-in').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'section-alt-dark' : 'section-alt-light'}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} />
        <div className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-300'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Zap size={14} className="text-blue-500" />
              Install in 60 Seconds
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Bring RFQ Automation to Your{' '}
            <span className="gradient-text">Outlook Inbox</span>
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Your team already opens Outlook first thing every morning. Now make Outlook work harder for them. RFQ AutoPilot transforms the email client your enterprise relies on into an intelligent{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              RFQ automation
            </a>{' '}
            engine — purpose-built for{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              distributors
            </a>{' '}
            and{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              export companies
            </a>.
          </p>
        </div>

        {/* What you get */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {immediateFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className={`fade-up stagger-${(idx % 3) + 1} flex items-center gap-3 p-4 rounded-2xl border ${
                darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-white" />
                </div>
                <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{f.text}</span>
              </div>
            );
          })}
        </div>

        {/* Main CTA Card */}
        <div className="fade-up">
          <div className={`relative rounded-3xl overflow-hidden p-10 lg:p-16 text-center ${
            darkMode
              ? 'bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-indigo-900/40 border border-blue-500/20'
              : 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800'
          }`}
            style={{ boxShadow: darkMode ? '0 0 80px rgba(59,130,246,0.15)' : '0 40px 80px rgba(59,130,246,0.3)' }}
          >
            {/* Bg orbs */}
            <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-400 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 bg-indigo-300 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
                Your Enterprise Runs on Outlook.{' '}
                <br className="hidden sm:block" />
                Your RFQ Automation Should Too.
              </h2>
              <p className={`text-base leading-relaxed max-w-2xl mx-auto mb-10 ${darkMode ? 'text-blue-200' : 'text-blue-100'}`}>
                Stop forcing your Outlook-based sales team to forward RFQs to external platforms. RFQ AutoPilot lives inside the Outlook environment — detecting RFQs, extracting buyer requirements, and generating professional quotation replies without ever leaving the inbox.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-10 py-4 rounded-2xl text-base font-bold bg-white text-blue-700 shadow-2xl hover:shadow-white/30 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto justify-center group"
                >
                  <Zap size={18} className="text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Install Outlook Add-in — Free</span>
                </a>
                <a
                  href="mailto:support@rfqautopilot.com?subject=Enterprise Demo Request"
                  className={`flex items-center gap-2 px-10 py-4 rounded-2xl text-base font-semibold border-2 transition-all duration-300 w-full sm:w-auto justify-center ${
                    darkMode
                      ? 'border-white/30 text-white hover:bg-white/10'
                      : 'border-white/40 text-white hover:bg-white/10'
                  }`}
                >
                  <Calendar size={16} />
                  Schedule Enterprise Demo
                </a>
                <button
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-medium transition-all duration-300 w-full sm:w-auto justify-center ${
                    darkMode ? 'text-blue-300 hover:text-white' : 'text-blue-100 hover:text-white'
                  }`}
                >
                  Compare All Plans
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Trust elements */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {trustElements.map((t, i) => (
                  <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                    darkMode ? 'bg-white/5 text-blue-200 border border-white/10' : 'bg-white/15 text-white'
                  }`}>
                    <span className="text-xs">{t.subtext}</span>
                    <span className="font-medium">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className={`mt-10 p-8 rounded-3xl border text-center fade-up ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Enterprise Satisfaction Guarantee
          </h3>
          <p className={`text-sm leading-relaxed max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deploy RFQ AutoPilot across your Outlook team. If your average quote processing time does not decrease by at least{' '}
            <strong className={darkMode ? 'text-white' : 'text-slate-900'}>50% within 30 days</strong>, our enterprise team will provide a dedicated optimization session for your specific workflow, catalog, and pricing structure —{' '}
            <strong className={darkMode ? 'text-white' : 'text-slate-900'}>completely free</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
