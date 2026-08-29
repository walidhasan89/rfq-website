import { useRef } from 'react';
import { Chrome, Star, CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const stats = [
  { icon: Zap, label: 'AI RFQ Extraction', sub: 'Email, PDF and web data' },
  { icon: Star, label: '5 PDF Themes', sub: 'Professional quote layouts' },
  { icon: TrendingUp, label: 'Branded Exports', sub: 'PDF, Excel and CSV' },
  { icon: Users, label: 'Free Plan Available', sub: 'Start without a card' },
];

const checks = [
  { text: 'Extract RFQ details from Gmail, Outlook, PDFs, and web pages', href: '/rfq-email-automation' },
  { text: 'Build accurate quotes with editable line items and totals', href: '/quotation-builder' },
  { text: 'Apply your logo, brand color, notes, and terms', href: '/quotation-builder' },
  { text: 'Export branded PDF, Excel, and CSV files', href: '/rfq-response-software' },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Background grid */}
      <div className={`absolute inset-0 ${isDark ? 'hero-grid-dark' : 'hero-grid-light'}`} />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className={`animate-fade-in inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8 border ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            AI-Powered RFQ to Quote Automation
          </div>

          {/* H1 */}
          <h1 className={`animate-fade-in delay-100 font-bold leading-[1.1] tracking-tight mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
          >
            Turn RFQ Emails Into{' '}
            <span className="gradient-text-animated">Professional Quotes</span>
          </h1>

          {/* Subtitle */}
          <p className={`animate-fade-in delay-200 text-lg sm:text-xl leading-relaxed max-w-3xl mb-8 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            RFQ AutoPilot helps suppliers and distributors extract RFQ details, build branded quotations, and export professional PDFs directly from the browser.
          </p>

          {/* Checks */}
          <div className="animate-fade-in delay-300 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-left">
            {checks.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-in delay-400 flex flex-col sm:flex-row items-center gap-4 mb-14">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-2xl shadow-blue-500/30 relative z-10"
            >
              <Chrome size={22} className="relative z-10" />
              <span className="relative z-10">Add to Chrome — It’s Free</span>
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`inline-flex items-center gap-3 font-semibold px-7 py-4 rounded-2xl text-base border-2 transition-all duration-300 ${
                isDark
                  ? 'text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                  : 'text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              How It Works
            </a>
          </div>

          {/* Stars */}
          <div className={`animate-fade-in delay-500 flex items-center gap-2 mb-10 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium">Built for suppliers, distributors, wholesalers, and manufacturers</span>
          </div>

          {/* Stats */}
          <div className="animate-fade-in delay-600 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {stats.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className={`card-hover p-5 rounded-2xl border text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-blue-500/30'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <Icon size={20} className="text-blue-500" />
                </div>
                <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</div>
                <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${
        isDark
          ? 'bg-gradient-to-t from-slate-950 to-transparent'
          : 'bg-gradient-to-t from-white to-transparent'
      }`} />
    </section>
  );
}
