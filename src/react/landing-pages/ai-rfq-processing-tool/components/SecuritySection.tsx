import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const securityFeatures = [
  {
    icon: '🔐',
    title: 'End-to-End Encryption',
    subtitle: 'Data Protection',
    items: ['AES-256 encryption at rest', 'TLS 1.3 for data in transit', 'Encrypted database storage', 'Secure API connections'],
    color: '#3b82f6',
  },
  {
    icon: '🏢',
    title: 'Industry Compliance',
    subtitle: 'Standards',
    items: ['SOC 2 Type II certified', 'GDPR compliant', 'ISO 27001 aligned', 'CCPA ready'],
    color: '#10b981',
  },
  {
    icon: '👤',
    title: 'Granular Access Control',
    subtitle: 'Permissions',
    items: ['Role-based access control (RBAC)', 'Multi-factor authentication', 'SSO integration available', 'Audit logs for all actions'],
    color: '#8b5cf6',
  },
  {
    icon: '🌍',
    title: 'Data Residency',
    subtitle: 'Your Location',
    items: ['Choose your data region', 'No cross-border transfers without consent', 'Customer data isolation', 'Right to delete and export'],
    color: '#f59e0b',
  },
  {
    icon: '🔍',
    title: 'Privacy Guarantee',
    subtitle: 'No Training on Your Data',
    items: ['Your RFQs never used to train AI models', 'No data sharing with third parties', 'Customer confidentiality maintained', 'Automatic data retention policies'],
    color: '#ef4444',
  },
];

const certBadges = [
  { name: 'SOC 2', sub: 'Type II', icon: '🛡️', color: '#3b82f6' },
  { name: 'GDPR', sub: 'Compliant', icon: '🇪🇺', color: '#10b981' },
  { name: 'ISO 27001', sub: 'Aligned', icon: '📋', color: '#8b5cf6' },
  { name: 'SSL', sub: '256-bit', icon: '🔒', color: '#f59e0b' },
];

export default function SecuritySection({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#050912]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '500px', height: '500px',
          top: '-100px', right: '-200px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            🔒 Enterprise Security
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Enterprise-Grade Security for{' '}
            <span className="gradient-text">Your RFQ Data</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Your customer RFQs contain sensitive commercial information. RFQ AutoPilot is built with bank-level security to protect your data and maintain customer confidentiality.
          </p>
        </div>

        {/* Security grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {securityFeatures.map((feat, i) => (
            <SecurityCard key={i} feat={feat} darkMode={darkMode} index={i} />
          ))}
        </div>

        {/* Trust statement */}
        <TrustStatement darkMode={darkMode} />

        {/* Cert badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {certBadges.map((badge, i) => (
            <div key={i}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border
                ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-white border-slate-200'}`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>{badge.name}</p>
                <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityCard({ feat, darkMode, index }: { feat: typeof securityFeatures[0], darkMode: boolean, index: number }) {
  const { ref, isVisible } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${(index % 5) + 1} ${isVisible ? 'visible' : ''} relative p-6 rounded-2xl border card-3d
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07] hover:border-white/12' : 'bg-slate-50 border-slate-200/80 hover:shadow-sm'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }} />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${feat.color}18` }}>
          {feat.icon}
        </div>
        <div>
          <p className="text-xs font-medium" style={{ color: feat.color }}>{feat.subtitle}</p>
          <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{feat.title}</p>
        </div>
      </div>
      <ul className="space-y-1.5">
        {feat.items.map((item, j) => (
          <li key={j} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: feat.color }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustStatement({ darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'visible' : ''} rounded-2xl p-8 lg:p-10 border text-center
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-slate-50 border-slate-200/80'}`}>
      <div className="text-4xl mb-4">🛡️</div>
      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Zero-Knowledge Architecture</h3>
      <p className={`text-base leading-relaxed max-w-3xl mx-auto italic ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        "RFQ AutoPilot processes your customer requests within your email environment with zero-knowledge architecture. We never access, store, or analyze your RFQ content for any purpose other than providing the service to you."
      </p>
    </div>
  );
}
