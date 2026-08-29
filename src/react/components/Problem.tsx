import { useRef, useEffect } from 'react';
import { AlertTriangle, Clock, Inbox, BarChart2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const problems = [
  {
    icon: Clock,
    title: 'Incoming RFQs are scattered across emails and files',
    desc: "Buyer requirements often arrive across email text, forwarded threads, PDFs, spreadsheets, and attachments. Important details are easy to miss when everything is reviewed manually.",
    stat: 'Email + PDF',
    statLabel: 'details scattered',
  },
  {
    icon: Inbox,
    title: 'Manual RFQ extraction slows every response',
    desc: "Sales teams repeatedly copy buyer names, line items, quantities, dates, delivery requirements, and commercial terms into separate quote documents.",
    stat: 'Manual',
    statLabel: 'data entry',
  },
  {
    icon: BarChart2,
    title: 'Quotation documents are rebuilt again and again',
    desc: "Formatting line items, totals, company details, terms, branding, PDF files, and response emails from scratch creates inconsistent output and avoidable delays.",
    stat: 'Repeat',
    statLabel: 'quote formatting',
  },
  {
    icon: Eye,
    title: 'Slow replies can cost valuable opportunities',
    desc: "When buyers are waiting for pricing, every extra handoff and manual step increases response time and makes the quotation process harder to manage consistently.",
    stat: 'Slow',
    statLabel: 'response cycles',
  },
];

export default function Problem() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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
      id="problem"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-red-50 border-red-200 text-red-600'
          }`}>
            <AlertTriangle size={14} />
            The Problem
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Still Managing RFQs With{' '}
            <span className={isDark ? 'text-red-400' : 'text-red-500'}>Email and Spreadsheets?</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            If your business receives RFQs through email and attachments, you already know how repetitive the quotation process can become.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`reveal card-hover p-7 rounded-2xl border relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-red-500/30'
                    : 'bg-white border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute top-5 right-5 px-3 py-1 rounded-lg text-xs font-bold ${
                  isDark ? 'bg-red-500/15 text-red-400' : 'bg-red-50 text-red-500'
                }`}>
                  {p.stat}{' '}
                  <span className={`font-normal ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{p.statLabel}</span>
                </div>

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-red-500/15' : 'bg-red-50'
                }`}>
                  <Icon size={22} className={isDark ? 'text-red-400' : 'text-red-500'} />
                </div>
                <h3 className={`text-lg font-bold mb-3 pr-24 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`reveal mt-12 p-8 rounded-2xl border text-center ${
          isDark
            ? 'bg-gradient-to-r from-red-950/50 to-orange-950/50 border-red-500/20'
            : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
        }`}>
          <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The result? Slower quote preparation, inconsistent documents, and buyers waiting longer for a professional response.
          </p>
          <p className={`text-base font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            There is a better way. &rarr;
          </p>
        </div>
      </div>
    </section>
  );
}
