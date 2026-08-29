import { useEffect, useRef } from 'react';

interface HowItWorksProps {
  darkMode: boolean;
}

const timelineItems = [
  {
    time: '8:30 AM',
    title: 'Morning Inbox Review',
    without: 'Rep opens Gmail, scrolls through 47 unread emails, manually identifies 6 RFQs mixed among newsletters and internal threads. Flags them mentally.',
    with: 'Rep opens Gmail and immediately sees 6 emails marked with green RFQ badges. Priority flags highlight 2 urgent requests. RFQ summary panel shows key details instantly.',
    saved: '15 minutes',
    icon: '📬',
  },
  {
    time: '9:00 AM',
    title: 'Processing First RFQ',
    without: 'Rep opens a 12-page PDF, reads through product list, opens ERP in another tab, searches for each product, copies prices to a spreadsheet, calculates totals, then types the quotation email.',
    with: 'Rep clicks the RFQ AutoPilot icon. All 34 line items extracted from PDF in 10 seconds. Products matched. Pricing applied. Quotation draft generated in Gmail reply.',
    saved: '38 minutes',
    icon: '⚡',
  },
  {
    time: '10:30 AM',
    title: 'Handling Rush Request',
    without: 'An urgent email arrives from a key account. Rep scrambles, makes two pricing errors in the rush, sends the quote late at 12:20 PM.',
    with: 'Priority alert pops up for the urgent RFQ. One-click extraction and generation produces a draft in 90 seconds. Rep reviews and sends at 10:34 AM — nearly 2 hours ahead of deadline.',
    saved: '1 hr 46 min',
    icon: '🚀',
  },
  {
    time: '2:00 PM',
    title: 'Follow-Up Round',
    without: 'Rep searches Gmail for "quote" and "pricing." Finds some but misses others. Forgets about three pending quotes worth thousands.',
    with: 'Dashboard shows 8 outstanding quotes. 3 were opened but not responded to. Rep sends personalized follow-ups directly from the tracking panel.',
    saved: '20 minutes + recovered revenue',
    icon: '📊',
  },
  {
    time: '4:30 PM',
    title: 'End-of-Day Summary',
    without: 'Rep processed 7 RFQs, feels exhausted from data entry, unsure about accuracy of several quotes, no clear picture of pipeline.',
    with: 'Rep processed 22 RFQs, spent time on strategic pricing decisions, confident in accuracy, clear dashboard showing pipeline value.',
    saved: '3x more quotes processed',
    icon: '🏆',
  },
];

const integrations = [
  { category: 'CRM', icon: '🔗', tools: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Pipedrive'] },
  { category: 'Communication', icon: '💬', tools: ['Slack', 'Microsoft Teams', 'Google Chat'] },
  { category: 'Productivity', icon: '📋', tools: ['Google Sheets', 'Google Calendar', 'Google Drive'] },
  { category: 'ERP Systems', icon: '⚙️', tools: ['SAP', 'Oracle', 'NetSuite', 'Custom APIs'] },
];

export default function HowItWorks({ darkMode }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.slide-up, .fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`py-24 lg:py-32 section-bg-alt-${darkMode ? 'dark' : 'light'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              🔄 HOW IT WORKS
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Fits Into Your Existing Sales Workflow —{' '}
            <span className="gradient-text">No Disruption, Just Speed</span>
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            A day in the life of a sales rep using RFQ AutoPilot — real time savings at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical Line */}
          <div className={`absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} hidden sm:block`} style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={`slide-up delay-${(i % 5 + 1) * 100} relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Time Dot */}
                <div className="hidden sm:flex absolute left-1/2 top-6 w-12 h-12 -translate-x-1/2 items-center justify-center rounded-full z-10 shadow-lg text-xl btn-primary">
                  <span>{item.icon}</span>
                </div>

                {/* Card */}
                <div className={`sm:w-5/12 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  {/* Time badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    🕐 {item.time}
                  </div>
                  <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>

                  <div className={`rounded-2xl p-5 mb-3 border ${
                    darkMode ? 'bg-red-950/20 border-red-900/30' : 'bg-red-50 border-red-100'
                  }`}>
                    <div className={`text-xs font-bold mb-2 flex items-center gap-1 ${i % 2 === 0 ? 'sm:justify-end' : ''} ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                      ❌ Without RFQ AutoPilot
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.without}</p>
                  </div>

                  <div className={`rounded-2xl p-5 border ${
                    darkMode ? 'bg-green-950/20 border-green-900/30' : 'bg-green-50 border-green-100'
                  }`}>
                    <div className={`text-xs font-bold mb-2 flex items-center gap-1 ${i % 2 === 0 ? 'sm:justify-end' : ''} ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      ✅ With RFQ AutoPilot
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.with}</p>
                  </div>

                  <div className={`mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold ${
                    darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    ⏱️ Saved: {item.saved}
                  </div>
                </div>

                <div className="sm:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Daily Result Banner */}
        <div className={`slide-up rounded-3xl p-8 sm:p-10 mb-20 text-center gradient-brand relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="relative">
            <div className="text-4xl sm:text-5xl font-black text-white mb-3">3× More Quotes</div>
            <div className="text-blue-100 text-lg font-medium mb-6">Processed daily with higher accuracy and better follow-up</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span className="flex items-center gap-2"><span className="font-bold text-white">7 → 22</span> RFQs per day</span>
              <span className="flex items-center gap-2"><span className="font-bold text-white">45min → 3min</span> per quote</span>
              <span className="flex items-center gap-2"><span className="font-bold text-white">+28%</span> follow-up rate</span>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div id="use-cases">
          <div className="text-center mb-10">
            <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Connects to Tools Your Sales Team Already Uses
            </h3>
            <p className={`text-sm max-w-xl mx-auto mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              RFQ AutoPilot works seamlessly alongside tools already in your stack. Learn how it fits specific industries:{' '}
              <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>manufacturers</a>
              {', '}
              <a href="https://rfqautopilot.com/rfq-software-for-distributors" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>distributors</a>
              {', and '}
              <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>export companies</a>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {integrations.map((group, i) => (
              <div
                key={i}
                className={`slide-up delay-${(i + 1) * 100} rounded-2xl p-5 border card-hover ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-2xl mb-2">{group.icon}</div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {group.category}
                </div>
                <div className="flex flex-col gap-2">
                  {group.tools.map((tool) => (
                    <div key={tool} className={`flex items-center gap-2 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
