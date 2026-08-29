import { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    quote: 'Capture buyer requirements from RFQ emails and attachments, then organize the information for review before quotation preparation begins.',
    name: 'RFQ Intake',
    title: 'Email and Attachment Workflow',
    company: 'Gmail, Outlook, PDFs and related files',
    stars: 5,
    initials: '01',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    quote: 'Build consistent quotations with line items, totals, commercial terms, company information, brand colors, and a professional PDF preview.',
    name: 'Quote Builder',
    title: 'Branded Quotation Workflow',
    company: 'Editable content with human review',
    stars: 5,
    initials: '02',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    quote: 'Prepare a reusable buyer response email, preview the final quotation, and keep the salesperson responsible for verification and sending.',
    name: 'Buyer Response',
    title: 'Email Preview and Compose',
    company: 'Professional response without blind sending',
    stars: 5,
    initials: '03',
    color: 'from-violet-500 to-purple-600',
  },
];

const platformStats = [
  { value: 'Free', label: 'Plan available' },
  { value: 'Gmail', label: 'RFQ email workflow' },
  { value: 'Outlook', label: 'RFQ response workflow' },
  { value: 'PDF', label: 'Branded quote export' },
];

export default function SocialProof() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
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
      id="testimonials"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Built for{' '}
            <span className="gradient-text">Professional RFQ Responses</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A focused browser workflow for suppliers, distributors, manufacturers, wholesalers, and B2B sales teams that respond to buyer RFQs.
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {platformStats.map((stat) => (
            <div key={stat.label} className={`text-center p-5 rounded-2xl border ${
              isDark
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="gradient-text text-3xl font-black mb-1">{stat.value}</div>
              <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal-scale card-hover p-7 rounded-2xl border relative overflow-hidden ${
                isDark
                  ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8'
              }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${t.color}`}>
                <Quote size={18} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${t.color} flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t.title}</div>
                  <div className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`text-center text-xs mt-8 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          Workflow examples shown above describe product capabilities and do not represent customer testimonials.
        </p>
      </div>
    </section>
  );
}
