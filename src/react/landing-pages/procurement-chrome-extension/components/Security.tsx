import { Shield, Lock, Eye, Award, FileCheck, Server } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const securityItems = [
  {
    icon: Shield,
    title: 'Minimal Permissions',
    description: 'Only requests permissions needed to function inside Gmail and Outlook. No access to browsing history, personal data, or activity on other websites.',
    link: null,
    linkLabel: null,
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Encrypted in transit with TLS 1.3 and at rest with AES-256. Your commercially sensitive procurement data stays protected at every step.',
    link: null,
    linkLabel: null,
  },
  {
    icon: Eye,
    title: 'No AI Training on Your Data',
    description: 'Your data is never used to train public AI models. All AI processing occurs through secure, isolated infrastructure.',
    link: null,
    linkLabel: null,
  },
  {
    icon: Award,
    title: 'SOC 2 Type II Certified',
    description: 'Our infrastructure and processes are audited annually for security, availability, and confidentiality by independent auditors per AICPA standards.',
    link: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2',
    linkLabel: 'Learn about SOC 2',
  },
  {
    icon: FileCheck,
    title: 'GDPR Compliant',
    description: 'Full data subject rights, EU data residency options, and transparent data processing agreements available on request.',
    link: 'https://gdpr.eu/',
    linkLabel: 'GDPR compliance details',
  },
  {
    icon: Server,
    title: 'Enterprise Security Docs',
    description: 'For teams requiring additional security reviews, we provide a detailed security questionnaire, DPA, and architecture documentation.',
    link: null,
    linkLabel: null,
  },
];

export default function Security({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      id="security"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04),transparent_60%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)',
              color: darkMode ? '#34d399' : '#059669',
              border: '1px solid rgba(16,185,129,0.2)'
            }}
          >
            <Shield size={11} />
            Security & Privacy
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Your Data. Your Control.{' '}
            <span className="gradient-text">Full Transparency.</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            We understand that procurement data is commercially sensitive.
            Here's exactly how RFQ AutoPilot handles your information — with full{' '}
            <a
              href="https://gdpr.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              GDPR
            </a>{' '}
            and{' '}
            <a
              href="https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              SOC 2 Type II
            </a>{' '}
            compliance.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {securityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`card-3d p-6 rounded-2xl reveal reveal-delay-${Math.min(i + 1, 4)} ${
                  darkMode
                    ? 'bg-slate-900/80 border border-white/6 hover:border-emerald-500/20'
                    : 'bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg'
                } transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`font-bold text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold transition-colors ${
                      darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                    }`}
                  >
                    {item.linkLabel} ↗
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Compliance badges */}
        <div className={`reveal p-6 sm:p-8 rounded-2xl border ${
          darkMode
            ? 'bg-slate-900/60 border-white/5'
            : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'SOC 2 Type II', icon: '🔒', desc: 'Annually Audited', href: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2' },
              { label: 'GDPR Compliant', icon: '🇪🇺', desc: 'EU Data Residency', href: 'https://gdpr.eu/' },
              { label: 'TLS 1.3', icon: '🛡️', desc: 'Transit Encryption', href: null },
              { label: 'AES-256', icon: '🔐', desc: 'At-Rest Encryption', href: null },
              { label: 'Zero Data Training', icon: '🧠', desc: 'No AI Training', href: null },
            ].map((badge, i) => {
              const inner = (
                <div key={i} className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all ${
                  darkMode ? 'bg-slate-800/60 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
                }`}>
                  <span className="text-xl">{badge.icon}</span>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      {badge.label}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {badge.desc}
                    </div>
                  </div>
                </div>
              );
              return badge.href ? (
                <a key={i} href={badge.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
