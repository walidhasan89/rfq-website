import { useEffect, useRef } from 'react';

interface IntegrationProps {
  darkMode: boolean;
}

const comparisonRows = [
  { feature: 'Where you work', upload: 'Separate web app', autopilot: 'Inside Gmail/Outlook' },
  { feature: 'File upload required', upload: 'Yes, manually', autopilot: 'No, automatic' },
  { feature: 'Context preserved', upload: 'No, loses email context', autopilot: 'Yes, full email thread' },
  { feature: 'Quote reply creation', upload: 'Separate step', autopilot: 'Automatic draft in inbox' },
  { feature: 'Team collaboration', upload: 'External sharing', autopilot: 'Native email forwarding' },
  { feature: 'Learning curve', upload: 'New platform to learn', autopilot: 'Works in familiar inbox' },
];

export default function Integration({ darkMode }: IntegrationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Bg glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-50/60'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            🔗 INTEGRATIONS
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Works Inside <span className="gradient-text">Gmail & Outlook</span>
            <br />— No Separate Software Needed
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot's PDF extraction happens where your RFQs actually arrive — inside your email inbox. No uploading to external platforms. No switching between applications.
            The perfect{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className="text-blue-500 hover:underline font-medium">Gmail Chrome extension for sales</a>{' '}
            teams and a powerful{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-blue-500 hover:underline font-medium">Outlook add-in for RFQ</a>{' '}
            processing.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Gmail */}
          <div className={`reveal-left group rounded-3xl p-8 transition-all duration-300 card-3d border ${
            darkMode
              ? 'bg-slate-900 border-white/8 hover:border-blue-500/30'
              : 'bg-white border-slate-200 hover:border-blue-300/60 shadow-lg shadow-slate-900/5'
          }`}>
            {/* Gmail icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-xl shadow-red-500/20">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Gmail Integration</h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Extract RFQ Data from PDF in Gmail</p>
              </div>
            </div>

            <ol className="space-y-3 mb-6">
              {[
                'Install RFQ AutoPilot Chrome extension',
                'PDF attachments in Gmail automatically detected',
                'Extraction panel appears alongside your email',
                'Extracted data displayed in structured format',
                'One-click quote draft generated in Gmail compose',
                'All activity stays within your Gmail workspace',
              ].map((step, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span className={`w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className={`rounded-2xl p-4 ${darkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <p className={`text-xs font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Gmail-specific features:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Google Workspace compatibility',
                  'Gmail label-based RFQ organization',
                  'Google Sheets data export',
                  'Google Drive PDF archive',
                  'Works with Gmail search & filters',
                ].map((f) => (
                  <div key={f} className={`flex items-center gap-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <span className="text-green-500">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outlook */}
          <div className={`reveal-right group rounded-3xl p-8 transition-all duration-300 card-3d border ${
            darkMode
              ? 'bg-slate-900 border-white/8 hover:border-blue-500/30'
              : 'bg-white border-slate-200 hover:border-blue-300/60 shadow-lg shadow-slate-900/5'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-500/20">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Outlook Integration</h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Extract RFQ Data from PDF in Outlook</p>
              </div>
            </div>

            <ol className="space-y-3 mb-6">
              {[
                'Install RFQ AutoPilot Outlook add-in',
                'PDF attachments detected in Outlook reading pane',
                'Extraction results shown in sidebar panel',
                'Quote draft created as Outlook reply',
                'Compatible with Outlook desktop, web, and mobile',
              ].map((step, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className={`rounded-2xl p-4 ${darkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
              <p className={`text-xs font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Outlook-specific features:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Microsoft 365 integration',
                  'Outlook categories for RFQ tracking',
                  'Excel export for extracted data',
                  'OneDrive PDF archive',
                  'Works with Outlook rules & folders',
                ].map((f) => (
                  <div key={f} className={`flex items-center gap-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <span className="text-green-500">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className={`reveal rounded-3xl overflow-hidden ${
          darkMode ? 'bg-slate-900 border border-white/8' : 'bg-white border border-slate-200 shadow-xl shadow-slate-900/5'
        }`}>
          <div className={`px-6 py-5 border-b ${darkMode ? 'border-white/8 bg-slate-950/50' : 'border-slate-100 bg-slate-50'}`}>
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              What Makes Inbox-Native Different
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`${darkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                  <th className={`text-left px-6 py-4 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Feature</th>
                  <th className={`text-left px-6 py-4 font-semibold text-slate-400`}>Upload-Based PDF Tools</th>
                  <th className={`text-left px-6 py-4 font-semibold text-blue-500`}>RFQ AutoPilot (Inbox-Native)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className={`border-t transition-colors ${
                    darkMode ? 'border-white/5 hover:bg-white/3' : 'border-slate-100 hover:bg-slate-50/80'
                  }`}>
                    <td className={`px-6 py-4 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{row.feature}</td>
                    <td className={`px-6 py-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="flex items-center gap-2">
                        <span className="text-red-400">✗</span>
                        {row.upload}
                      </span>
                    </td>
                    <td className={`px-6 py-4 font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      <span className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        {row.autopilot}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
