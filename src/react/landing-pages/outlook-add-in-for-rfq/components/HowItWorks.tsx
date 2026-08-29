import { useEffect, useRef } from 'react';
import { Download, Radio, Search, FileText, CheckCircle, Clock, ArrowDown } from 'lucide-react';

interface Props { darkMode: boolean; }

const steps = [
  {
    icon: Download,
    emoji: '⬇️',
    step: '01',
    title: 'Install the Outlook Add-in',
    subtitle: 'One-Click Installation from Microsoft AppSource',
    description: 'Open Microsoft Outlook, navigate to the Add-ins menu or visit Microsoft AppSource, search for "RFQ AutoPilot", click "Add" — and you\'re done. No .exe download. No restart needed. The add-in appears in your Outlook toolbar in under 60 seconds.',
    details: ['Works on Windows, Mac, Web, iOS & Android', 'Admin deployment for org-wide rollout', 'Compatible with Outlook 2019, 2021, and Microsoft 365', 'Permissions limited to email reading and draft creation'],
    link: { href: 'https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/outlook-add-ins-overview', text: 'Learn about Outlook add-ins →' },
    time: '60 seconds',
    where: 'Outlook Add-ins menu',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Radio,
    emoji: '📡',
    step: '02',
    title: 'AI Detects RFQ Emails Automatically',
    subtitle: 'Incoming Quote Requests Identified and Flagged in Your Inbox',
    description: 'RFQ AutoPilot monitors your Outlook inbox in real time. AI scans each incoming email\'s subject, body, and attachments — identifying RFQs instantly. Priority scoring ranks urgent requests. Non-RFQ emails are left completely untouched.',
    details: ['🟢 RFQ badge on detected emails', '⚡ Urgency indicator for time-sensitive requests', '📊 Quick preview of line items detected', '🔔 Desktop notifications for high-priority RFQs'],
    link: { href: 'https://rfqautopilot.com/ai-rfq-processing-tool', text: 'Explore AI detection →' },
    time: 'Automatic',
    where: 'Outlook inbox',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Search,
    emoji: '🔍',
    step: '03',
    title: 'Extract Data from Emails & Attachments',
    subtitle: 'One Click Extracts Every Detail from the RFQ',
    description: 'Open any detected RFQ email and click the RFQ AutoPilot icon. The sidebar opens with every product name, part number, quantity, specification, and delivery term extracted — from email body, PDFs, Excel files, Word docs, and even scanned images.',
    details: ['PDF, Excel, Word & image parsing', 'Product catalog matching with SKU numbers', 'Confidence scoring with manual verification flags', 'Multi-language support for 40+ languages'],
    link: { href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf', text: 'See PDF extraction →' },
    time: '10–30 seconds',
    where: 'Outlook sidebar panel',
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: FileText,
    emoji: '📝',
    step: '04',
    title: 'Generate Quotation Reply Inside Outlook',
    subtitle: 'Professional Quote Draft Created as an Outlook Reply',
    description: 'Review the extracted data, click "Generate Quote", and RFQ AutoPilot creates a complete draft reply in Outlook\'s compose window. Your pricing rules, customer discounts, branding, and signature are applied automatically. Edit any field, then hit Send.',
    details: ['Pricing rules & customer discounts applied', 'Company branding & signature included', 'Full edit control before sending', 'Sent from your Outlook address — no external branding'],
    link: { href: 'https://rfqautopilot.com/ai-rfq-generator', text: 'See quote generation →' },
    time: '5–15 seconds',
    where: 'Outlook compose window',
    color: 'from-blue-600 to-indigo-700',
  },
];

const workflowTable = [
  { step: '1', action: 'Install add-in', time: '60 seconds', where: 'Outlook Add-ins menu' },
  { step: '2', action: 'RFQ detected', time: 'Automatic', where: 'Outlook inbox' },
  { step: '3', action: 'Data extracted', time: '10–30 seconds', where: 'Outlook sidebar panel' },
  { step: '4', action: 'Quote generated', time: '5–15 seconds', where: 'Outlook compose window' },
  { step: '5', action: 'Review & send', time: '2–3 minutes', where: 'Outlook compose window' },
];

export default function HowItWorks({ darkMode }: Props) {
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
      id="how-it-works"
      ref={ref}
      className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'section-alt-dark' : 'section-alt-light'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 ${darkMode ? 'bg-gradient-to-b from-blue-500/40 to-transparent' : 'bg-gradient-to-b from-blue-400/30 to-transparent'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              <CheckCircle size={14} className="text-blue-500" />
              Step-by-Step Workflow
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How RFQ AutoPilot Works{' '}
            <span className="gradient-text">Inside Microsoft Outlook</span>
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot's{' '}
            <a
              href="https://rfqautopilot.com/outlook-add-in-for-rfq"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              Outlook add-in
            </a>
            {' '}integrates directly into the Outlook interface — appearing as a sidebar panel when you open RFQ emails. No external browser tabs. No separate windows. Everything happens within Outlook.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-px hidden sm:block ${
            darkMode
              ? 'bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent'
              : 'bg-gradient-to-b from-blue-400/40 via-blue-400/20 to-transparent'
          }`} />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`fade-up stagger-${idx + 1} relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Step number circle — center connector */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg bg-gradient-to-br ${step.color}`}
                      style={{ boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className={`card-3d p-8 rounded-3xl transition-all duration-300 ${
                      darkMode
                        ? 'glass-card-dark hover:border-blue-500/30'
                        : 'glass-card-light hover:border-blue-200 shadow-lg shadow-slate-200/80'
                    }`}>
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${step.color}`}>
                          <Icon size={22} className="text-white" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            Step {step.step}
                          </div>
                          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{step.subtitle}</p>
                      <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.description}</p>
                      <ul className={`space-y-2 mb-4 ${isEven ? 'lg:items-end' : ''}`}>
                        {step.details.map((d, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm ${isEven ? 'lg:flex-row-reverse' : ''} ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            <CheckCircle size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      {step.link && (
                        <a
                          href={step.link.href}
                          target={step.link.href.startsWith('http') ? '_blank' : undefined}
                          rel={step.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`inline-flex items-center text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors ${isEven ? 'lg:float-right' : ''}`}
                        >
                          {step.link.text}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Time & Where */}
                  <div className={`hidden lg:flex flex-col items-center justify-center w-32 gap-2 flex-shrink-0`}>
                    <div className={`text-center px-3 py-2 rounded-xl text-xs font-semibold ${
                      darkMode ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      <Clock size={12} className="mx-auto mb-1" />
                      {step.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total time callout */}
        <div className="mt-20 fade-up">
          <div className={`flex items-center justify-center gap-4 mb-8`}>
            <ArrowDown size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Complete Workflow — Under 5 Minutes</span>
            <ArrowDown size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
          </div>

          {/* Workflow Table */}
          <div className={`rounded-3xl overflow-hidden border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className={`px-6 py-4 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Complete Workflow Timeline</h3>
            </div>
            <div className="overflow-x-auto table-scroll">
              <table className={`w-full feature-table text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={darkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50/80 text-slate-500'}>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">Step</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wider">Where It Happens</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-200'}`}>
                  {workflowTable.map((row, i) => (
                    <tr key={i} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/50' : 'hover:bg-blue-50/30'}`}>
                      <td className="px-6 py-4">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold btn-gradient text-white inline-flex`}>{row.step}</span>
                      </td>
                      <td className={`px-6 py-4 font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>{row.action}</td>
                      <td className={`px-6 py-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{row.time}</td>
                      <td className="px-6 py-4">{row.where}</td>
                    </tr>
                  ))}
                  <tr className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Total</span>
                    </td>
                    <td className={`px-6 py-4 font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>RFQ to Quote</td>
                    <td className={`px-6 py-4 font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Under 5 minutes</td>
                    <td className={`px-6 py-4 font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Entirely inside Outlook</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
