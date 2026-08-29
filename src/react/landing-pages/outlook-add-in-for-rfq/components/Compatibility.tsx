import { useEffect, useRef } from 'react';
import { Check, Monitor, Shield, Layers } from 'lucide-react';

interface Props { darkMode: boolean; }

const outlookVersions = [
  { version: 'Outlook for Windows (Desktop)', support: 'Full support', note: 'Classic and new Outlook' },
  { version: 'Outlook for Mac (Desktop)', support: 'Full support', note: 'macOS 12 and later' },
  { version: 'Outlook on the Web (OWA)', support: 'Full support', note: 'Any modern browser' },
  { version: 'Outlook for iOS', support: 'Core features', note: 'Detection and review' },
  { version: 'Outlook for Android', support: 'Core features', note: 'Detection and review' },
  { version: 'Outlook 2019 (Perpetual)', support: 'Full support', note: 'With Exchange connectivity' },
  { version: 'Outlook 2021 (Perpetual)', support: 'Full support', note: 'With Exchange connectivity' },
  { version: 'New Outlook for Windows', support: 'Full support', note: 'Latest Microsoft release' },
];

const m365Plans = [
  { plan: 'Microsoft 365 Business Basic', deployment: 'User self-install or admin deploy' },
  { plan: 'Microsoft 365 Business Standard', deployment: 'User self-install or admin deploy' },
  { plan: 'Microsoft 365 Business Premium', deployment: 'User self-install or admin deploy' },
  { plan: 'Microsoft 365 E3', deployment: 'Admin centralized deployment' },
  { plan: 'Microsoft 365 E5', deployment: 'Admin centralized deployment' },
  { plan: 'Microsoft 365 F1/F3 (Frontline)', deployment: 'Admin centralized deployment' },
  { plan: 'Office 365 E1/E3/E5', deployment: 'Admin centralized deployment' },
  { plan: 'Exchange Online (Standalone)', deployment: 'Admin or user install' },
];

const msIntegrations = [
  { name: 'Microsoft Teams', icon: '💬', items: ['RFQ notifications to Teams channels', 'Quote approval workflows in Teams', 'Bot integration for quick status checks'] },
  { name: 'Microsoft Excel', icon: '📊', items: ['One-click export to Excel', 'Pricing workbooks sync', 'Quote comparison spreadsheets auto-generated'] },
  { name: 'OneDrive / SharePoint', icon: '☁️', items: ['Quotes auto-saved to OneDrive', 'Shared quote library on SharePoint', 'Full version history for audit compliance'] },
  { name: 'Power Automate', icon: '⚡', items: ['Custom workflow triggers', 'Automated stakeholder notifications', 'Third-party connectors via Power Automate'] },
  { name: 'Dynamics 365', icon: '🔄', items: ['Quote data synced to Dynamics CRM', 'Customer records updated automatically', 'Pipeline visibility in Dynamics dashboards'] },
  { name: 'Power BI', icon: '📈', items: ['RFQ analytics for Power BI dashboards', 'Custom KPI visualizations', 'Executive reporting on team performance'] },
];

export default function Compatibility({ darkMode }: Props) {
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
    <section id="compatibility" ref={ref} className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'section-alt-dark' : 'section-alt-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Layers size={14} className="text-blue-500" />
              Microsoft 365 Ecosystem
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Built for{' '}
            <span className="gradient-text">Microsoft 365</span>
            {' '}— Fully Compatible
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Built on the{' '}
            <a
              href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/outlook-add-ins-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              Microsoft Office Add-in platform
            </a>
            , ensuring native compatibility with every version of{' '}
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-premium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              Microsoft 365
            </a>{' '}
            and seamless integration with the broader Microsoft ecosystem your enterprise already relies on.
          </p>
        </div>

        {/* Two tables side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Outlook Versions */}
          <div className="fade-up">
            <div className={`rounded-3xl overflow-hidden border h-full ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
              <div className={`px-6 py-5 flex items-center gap-3 border-b ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center">
                  <Monitor size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Outlook Version Compatibility</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Works everywhere Outlook works</p>
                </div>
              </div>
              <div className="overflow-x-auto table-scroll">
                <table className={`w-full text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                    {outlookVersions.map((row, i) => (
                      <tr key={i} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-blue-50/20'}`}>
                        <td className={`px-5 py-3.5 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{row.version}</td>
                        <td className="px-5 py-3.5">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                            row.support === 'Full support'
                              ? darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
                              : darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'
                          }`}>
                            <Check size={10} />
                            {row.support}
                          </span>
                        </td>
                        <td className={`px-5 py-3.5 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* M365 Plans */}
          <div className="fade-up stagger-2">
            <div className={`rounded-3xl overflow-hidden border h-full ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
              <div className={`px-6 py-5 flex items-center gap-3 border-b ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Microsoft 365 Plan Compatibility</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Every business and enterprise plan</p>
                </div>
              </div>
              <div className="overflow-x-auto table-scroll">
                <table className={`w-full text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                    {m365Plans.map((row, i) => (
                      <tr key={i} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-blue-50/20'}`}>
                        <td className={`px-5 py-3.5 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{row.plan}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-sm">✓</span>
                        </td>
                        <td className={`px-5 py-3.5 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.deployment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Microsoft Ecosystem Integration */}
        <div className="fade-up">
          <h3 className={`text-xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Connects with the <span className="gradient-text">Microsoft Tools</span> Your Team Already Uses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {msIntegrations.map((integration, i) => (
              <div key={i} className={`fade-up stagger-${(i % 3) + 1} card-3d p-6 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/5'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{integration.icon}</span>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{integration.name}</h4>
                </div>
                <ul className="space-y-2">
                  {integration.items.map((item, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Check size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Security Callout */}
        <div className={`mt-16 fade-up p-8 rounded-3xl border ${darkMode ? 'bg-blue-900/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl btn-gradient flex items-center justify-center flex-shrink-0">
              <Shield size={22} className="text-white" />
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Meets Microsoft's Own Security Standards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Microsoft AppSource certified',
                  'OAuth 2.0 via Microsoft identity',
                  'No password storage',
                  'Data residency compliant',
                  'Conditional Access compatible',
                  'Azure AD integration',
                  'DLP policy aware',
                  'SOC 2 Type II certified',
                  'GDPR compliant',
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check size={13} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
