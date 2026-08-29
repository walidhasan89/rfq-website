import { useEffect, useRef } from 'react';
import { Building2, User, Settings, Handshake, Check, ShieldCheck } from 'lucide-react';

interface Props { darkMode: boolean; }

const deploymentMethods = [
  {
    icon: Building2,
    emoji: '🏛️',
    method: 'Centralized Deployment',
    subtitle: 'IT-Managed Rollout for Entire Organization',
    description: 'IT administrator deploys via Microsoft 365 Admin Center. Select scope: entire org, specific Azure AD groups, or individual users. Add-in appears ready-to-use in everyone\'s Outlook — no individual action required.',
    bestFor: 'Teams of 5–100 users',
    setup: '30 minutes',
    benefits: ['Central control over who has access', 'Group-based deployment via Azure AD', 'Automatic updates managed centrally', 'Deployment audit trail'],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: User,
    emoji: '👤',
    method: 'User Self-Service',
    subtitle: 'Individual Users Install from AppSource',
    description: 'User opens Outlook, clicks "Get Add-ins", searches for RFQ AutoPilot, clicks Add. Active immediately. Perfect for pilots, small teams, or individuals wanting to try the product before team rollout.',
    bestFor: '1–5 users / pilots',
    setup: '60 seconds',
    benefits: ['Zero IT involvement needed', 'Active immediately after install', 'Available from Outlook AppSource', 'No admin approval required'],
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Settings,
    emoji: '⚙️',
    method: 'Exchange Admin Deployment',
    subtitle: 'Exchange Server for On-Premises & Hybrid',
    description: 'Exchange administrator deploys via Exchange Admin Center. Supports on-premises Exchange Server 2016, 2019, and Subscription Edition, as well as hybrid Exchange deployments.',
    bestFor: 'On-prem / hybrid orgs',
    setup: '1–2 hours',
    benefits: ['On-premises Exchange compatible', 'Hybrid deployment support', 'Exchange-level governance control', 'Mandatory or optional deployment'],
    gradient: 'from-violet-500 to-violet-700',
  },
  {
    icon: Handshake,
    emoji: '🤝',
    method: 'Managed Enterprise Setup',
    subtitle: 'White-Glove Enterprise Setup Assistance',
    description: 'Our enterprise team works with your IT department on deployment planning, product catalog setup, pricing configuration, pilot testing, and full org rollout — with dedicated training and ongoing account management.',
    bestFor: '50+ users',
    setup: '1–3 weeks',
    benefits: ['Dedicated implementation specialist', 'Custom workflow configuration', 'Live user training sessions', 'Quarterly business review'],
    gradient: 'from-blue-600 to-indigo-800',
    featured: true,
  },
];

const comparisonData = [
  { aspect: 'Deployment control', self: 'User-level', admin: 'Admin-level', exchange: 'Admin-level', managed: 'Collaborative' },
  { aspect: 'Ideal team size', self: '1–5 users', admin: '5–100 users', exchange: '10–500 users', managed: '50+ users' },
  { aspect: 'IT involvement', self: 'None', admin: 'Moderate', exchange: 'High', managed: 'Shared' },
  { aspect: 'Setup time', self: '60 seconds', admin: '30 minutes', exchange: '1–2 hours', managed: '1–3 weeks' },
  { aspect: 'Custom configuration', self: 'Basic', admin: 'Moderate', exchange: 'Full', managed: 'Full + assisted' },
  { aspect: 'Training included', self: 'Self-service docs', admin: 'Admin guide', exchange: 'Admin guide', managed: 'Live sessions' },
  { aspect: 'Support level', self: 'Standard', admin: 'Standard', exchange: 'Priority', managed: 'Dedicated manager' },
];

const securityChecklist = [
  { allowed: true, item: 'Read email content (to detect and extract RFQ data)' },
  { allowed: true, item: 'Read email attachments (to parse PDF, Excel, and image files)' },
  { allowed: true, item: 'Create draft emails (to generate quotation replies)' },
  { allowed: true, item: 'Read user profile (to personalize signatures and settings)' },
  { allowed: false, item: 'Does NOT request access to contacts' },
  { allowed: false, item: 'Does NOT request calendar access' },
  { allowed: false, item: 'Does NOT modify or delete existing emails' },
  { allowed: false, item: 'Does NOT access other M365 services without explicit config' },
];

export default function Enterprise({ darkMode }: Props) {
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
    <section id="enterprise" ref={ref} className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#020817]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Building2 size={14} className="text-blue-500" />
              Enterprise Deployment
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Deploy Across Your Entire{' '}
            <span className="gradient-text">Sales Organization</span>
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Individual sales reps can install in 60 seconds. But for enterprise teams with 10, 50, or 500 users, IT administrators need{' '}
            <a
              href="https://learn.microsoft.com/en-us/microsoft-365/admin/manage/centralized-deployment-of-add-ins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              centralized deployment
            </a>
            , policy control, and security oversight. RFQ AutoPilot supports every enterprise deployment model Microsoft offers. Perfect for{' '}
            <a
              href="https://rfqautopilot.com/rfq-software-for-manufacturers"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              manufacturers
            </a>{' '}
            and{' '}
            <a
              href="https://rfqautopilot.com/procurement-chrome-extension"
              className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
            >
              procurement teams
            </a>{' '}
            of all sizes.
          </p>
        </div>

        {/* Deployment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {deploymentMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className={`fade-up stagger-${idx + 1} relative card-3d p-8 rounded-3xl border transition-all duration-300 ${
                  method.featured
                    ? darkMode
                      ? 'bg-blue-900/20 border-blue-500/40 hover:border-blue-500/60'
                      : 'bg-blue-50 border-blue-200 hover:border-blue-300 shadow-lg shadow-blue-500/10'
                    : darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/30'
                      : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {method.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="btn-gradient px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                      Most Popular for Enterprise
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${method.gradient}`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{method.method}</h3>
                    <p className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{method.subtitle}</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{method.description}</p>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold text-center ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    <div className={`text-xs mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Best for</div>
                    {method.bestFor}
                  </div>
                  <div className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold text-center ${darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                    <div className={`text-xs mb-0.5 ${darkMode ? 'text-blue-400/70' : 'text-blue-500/70'}`}>Setup time</div>
                    {method.setup}
                  </div>
                </div>
                <ul className="space-y-2">
                  {method.benefits.map((b, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Check size={13} className="text-blue-500 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="fade-up mb-16">
          <h3 className={`text-xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Deployment Method <span className="gradient-text">Comparison</span>
          </h3>
          <div className={`rounded-3xl overflow-hidden border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}>
            <div className="overflow-x-auto table-scroll">
              <table className={`w-full text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={darkMode ? 'bg-slate-800' : 'bg-slate-50'}>
                    <th className={`px-5 py-4 text-left text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Aspect</th>
                    {['Self-Service', 'Admin Center', 'Exchange Admin', 'Managed (Enterprise)'].map((h, i) => (
                      <th key={i} className={`px-5 py-4 text-center text-xs uppercase tracking-wider ${
                        i === 3
                          ? darkMode ? 'text-blue-400' : 'text-blue-600'
                          : darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={`transition-colors ${darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-blue-50/20'}`}>
                      <td className={`px-5 py-3.5 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{row.aspect}</td>
                      <td className={`px-5 py-3.5 text-center text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.self}</td>
                      <td className={`px-5 py-3.5 text-center text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.admin}</td>
                      <td className={`px-5 py-3.5 text-center text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.exchange}</td>
                      <td className={`px-5 py-3.5 text-center text-xs font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{row.managed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Security Checklist */}
        <div className={`fade-up p-8 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl btn-gradient flex items-center justify-center">
              <ShieldCheck size={22} className="text-white" />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Enterprise Security Checklist</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>What IT teams need to know before deployment</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {securityChecklist.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl text-sm ${
                item.allowed
                  ? darkMode ? 'bg-green-500/5 text-slate-300' : 'bg-green-50 text-slate-700'
                  : darkMode ? 'bg-red-500/5 text-slate-300' : 'bg-red-50 text-slate-700'
              }`}>
                <span className={`flex-shrink-0 text-sm ${item.allowed ? 'text-green-500' : 'text-red-400'}`}>
                  {item.allowed ? '✅' : '❌'}
                </span>
                <span>{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
