import { useEffect, useRef } from 'react';

interface ComparisonProps {
  darkMode: boolean;
}

const tableRows = [
  { factor: 'Where you work', standalone: 'Separate web application', autopilot: 'Inside Gmail — your existing workspace', highlight: true },
  { factor: 'Setup time', standalone: '2-4 weeks implementation', autopilot: '30 seconds Chrome install', highlight: true },
  { factor: 'Learning curve', standalone: 'New platform, new interface', autopilot: 'Gmail interface your team already knows', highlight: false },
  { factor: 'Email forwarding', standalone: 'Yes — forward RFQs to the platform', autopilot: 'No — processes emails where they arrive', highlight: true },
  { factor: 'Context switching', standalone: 'Constant tab switching', autopilot: 'Zero — everything in one tab', highlight: false },
  { factor: 'Email continuity', standalone: 'Broken — replies from external system', autopilot: 'Preserved — quotes sent as Gmail replies', highlight: false },
  { factor: 'Team adoption rate', standalone: '40-60%', autopilot: '90%+', highlight: true },
  { factor: 'Monthly cost', standalone: '$200-$500+/user/month', autopilot: 'Free plan · $14.99–$29.99/month', highlight: true },
  { factor: 'IT involvement', standalone: 'Usually required', autopilot: 'Self-service installation', highlight: false },
  { factor: 'Data security', standalone: 'Data stored on third-party servers', autopilot: 'Processes within Gmail environment', highlight: false },
];

const problems = [
  {
    icon: '📧',
    title: 'The Forwarding Friction',
    description: 'Standalone tools require you to forward every RFQ email to their platform. This adds a manual step that gets forgotten during busy days. Missed forwards mean missed quotes. RFQ AutoPilot eliminates this entirely.',
  },
  {
    icon: '🔍',
    title: 'The Context Gap',
    description: 'When you process an RFQ in a separate platform, you lose the email conversation context — previous exchanges, communication style, related threads. RFQ AutoPilot keeps everything within the Gmail thread.',
  },
  {
    icon: '🧱',
    title: 'The Adoption Wall',
    description: 'Sales teams resist learning new platforms. They already have CRM, ERP, email, and multiple tools. Adding another standalone application faces pushback. A Gmail Chrome extension adds capability to a tool they already use.',
  },
  {
    icon: '✉️',
    title: 'The Reply Disconnect',
    description: 'Standalone platforms send quotes from system-generated email addresses. Customers receive emails from unfamiliar addresses, reducing trust. RFQ AutoPilot sends quotes from your personal Gmail address.',
  },
];

export default function Comparison({ darkMode }: ComparisonProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.slide-up, .fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              ⚖️ COMPARISON
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Standalone RFQ Software vs.{' '}
            <span className="gradient-text">In-Inbox Chrome Extension</span>
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Why location matters — the best tool is the one that works where your deals happen.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`slide-up rounded-3xl overflow-hidden border mb-16 ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          {/* Table Header */}
          <div className={`grid grid-cols-3 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className={`px-5 py-4 text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Factor</div>
            <div className="px-5 py-4 text-center">
              <span className={`text-sm font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>Standalone Software</span>
            </div>
            <div className="px-5 py-4 text-center gradient-brand">
              <span className="text-sm font-bold text-white">🚀 RFQ AutoPilot</span>
            </div>
          </div>

          {tableRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              } ${row.highlight ? (darkMode ? 'bg-blue-950/10' : 'bg-blue-50/50') : ''}`}
            >
              <div className={`px-5 py-4 text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {row.factor}
              </div>
              <div className={`px-5 py-4 text-sm text-center flex items-center justify-center gap-2 ${darkMode ? 'text-red-400/80' : 'text-red-600/80'}`}>
                <span className="flex-shrink-0">❌</span>
                <span>{row.standalone}</span>
              </div>
              <div className={`px-5 py-4 text-sm text-center flex items-center justify-center gap-2 font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                <span className="flex-shrink-0">✅</span>
                <span>{row.autopilot}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why teams abandon */}
        <div className="mb-8">
          <h3 className={`slide-up text-2xl sm:text-3xl font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Why Sales Teams Abandon Standalone Platforms
          </h3>
          <p className={`slide-up delay-100 text-center text-sm mb-10 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Four fundamental problems with tools that take you out of your inbox
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`slide-up delay-${(i + 1) * 100} rounded-2xl p-6 border card-hover ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-3xl mb-3">{problem.icon}</div>
                <h4 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{problem.title}</h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Callout */}
        <div className={`slide-up rounded-3xl p-8 text-center border ${
          darkMode ? 'bg-blue-950/30 border-blue-900/50' : 'bg-blue-50 border-blue-100'
        }`}>
          <div className="text-4xl mb-4">💡</div>
          <blockquote className={`text-base sm:text-lg font-medium italic max-w-2xl mx-auto mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            "The best sales technology is invisible. It enhances what reps already do rather than forcing them into new workflows. In-inbox tools consistently show 2-3x higher adoption rates than standalone platforms."
          </blockquote>
          <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            — <a href="https://www.gartner.com/en/sales/topics/sales-technology" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 transition-colors ${darkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'}`}>Sales Technology Research, Gartner</a>
          </p>
        </div>

        {/* Related Resources */}
        <div className={`slide-up mt-10 rounded-2xl p-6 border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Related Resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'RFQ Automation Software', href: 'https://rfqautopilot.com/rfq-automation-software' },
              { label: 'RFQ Software for Manufacturers', href: 'https://rfqautopilot.com/rfq-software-for-manufacturers' },
              { label: 'RFQ Software for Distributors', href: 'https://rfqautopilot.com/rfq-software-for-distributors' },
              { label: 'RFQ Management for Export Companies', href: 'https://rfqautopilot.com/rfq-management-for-export-companies' },
              { label: 'Procurement Chrome Extension', href: 'https://rfqautopilot.com/procurement-chrome-extension' },
              { label: 'Outlook Add-in for RFQ', href: 'https://rfqautopilot.com/outlook-add-in-for-rfq' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-slate-700 text-slate-400 hover:border-blue-700 hover:text-blue-400 bg-slate-800/50'
                    : 'border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600 bg-white'
                }`}
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
