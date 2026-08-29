import { useRef, useEffect } from 'react';
import { Chrome, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
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
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          {/* Glow badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8 border animate-pulse-glow ${
            isDark
              ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
              : 'bg-blue-50 border-blue-300 text-blue-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Free to install &mdash; No credit card required
          </div>

          <h2 className={`font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}
          >
            Start Automating Your{' '}
            <span className="gradient-text-animated">RFQs Today</span>
          </h2>

          <p className={`text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Install the free plan and review the real RFQ-to-quote workflow for your supplier, distribution, manufacturing, or B2B sales process.
          </p>

          {/* Check points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            {[
              'Free plan available',
              'Gmail and Outlook workflows',
              'Branded PDF quotations',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
              </div>
            ))}
          </div>

          {/* Internal tool links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { label: 'RFQ Response Software', href: '/rfq-response-software' },
              { label: 'Email Automation', href: '/rfq-email-automation' },
              { label: 'Quotation Builder', href: '/quotation-builder' },
              { label: 'PDF Extraction', href: '/rfq-pdf-data-extraction' },
              { label: 'For Manufacturers', href: '/rfq-software-for-manufacturers' },
              { label: 'For Distributors', href: '/rfq-software-for-distributors' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all hover:scale-105 ${
                  isDark
                    ? 'border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400 bg-slate-800/50'
                    : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 bg-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-2xl shadow-blue-500/40 relative z-10"
            >
              <Chrome size={24} className="relative z-10" />
              <span className="relative z-10">Add to Chrome &mdash; It&apos;s Free</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`text-sm font-semibold transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'}`}
              >
                View Pricing &rarr;
              </a>
              <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>|</span>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`text-sm font-semibold transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'}`}
              >
                How It Works &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
