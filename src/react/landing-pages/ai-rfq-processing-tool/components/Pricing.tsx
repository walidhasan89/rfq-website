import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: 'forever',
    description: 'Get started with AI RFQ processing at no cost.',
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic email detection',
      'Standard templates',
      'Analytics dashboard',
      'Gmail & Outlook support',
    ],
    cta: 'Add to Chrome — Free',
    popular: false,
    color: '#64748b',
    badge: null,
  },
  {
    name: 'Solo',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    period: '/month',
    yearlyPeriod: '/year',
    description: 'For solo sales reps and small teams ready to scale.',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 Exports per month',
      'Email & chat support',
      'Custom templates',
      '5 Quote templates / month',
      'Priority processing',
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: '#3b82f6',
    badge: null,
  },
  {
    name: 'Pro',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    period: '/month',
    yearlyPeriod: '/year',
    description: 'Full power for high-volume RFQ teams that compete on speed.',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited exports',
      'Priority support',
      'Unlimited quote templates',
      'Analytics dashboard',
      'CRM/ERP integrations',
      'Multi-language support (40+)',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: '#ffffff',
    badge: 'MOST POPULAR',
  },
];

export default function Pricing({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#060b18]' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '500px', height: '500px',
          top: '0', right: '0',
          background: darkMode
            ? 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }} />
        <div className="glow-orb" style={{
          width: '400px', height: '400px',
          bottom: '0', left: '0',
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            💳 Simple, Transparent Pricing
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Plans That{' '}
            <span className="gradient-text">Scale With You</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Start free. Upgrade when you're ready. No credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                isYearly ? 'bg-blue-500' : darkMode ? 'bg-slate-700' : 'bg-slate-200'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>
              Yearly
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                Save up to 17%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} darkMode={darkMode} index={i} isYearly={isYearly} />
          ))}
        </div>

        {/* Guarantee */}
        <GuaranteeBadge darkMode={darkMode} />
      </div>
    </section>
  );
}

function PricingCard({ plan, darkMode, index, isYearly }: { plan: typeof plans[0], darkMode: boolean, index: number, isYearly: boolean }) {
  const { ref, isVisible } = useReveal();
  const isPopular = plan.popular;
  const isFree = plan.monthlyPrice === 0;

  const displayPrice = isFree
    ? 'Free'
    : isYearly
      ? `$${plan.yearlyPrice}`
      : `$${plan.monthlyPrice}`;

  const displayPeriod = isFree
    ? 'forever'
    : isYearly
      ? '/year'
      : '/month';

  const savingsMonthly = !isFree && isYearly
    ? Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100)
    : 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''} relative flex flex-col rounded-2xl overflow-hidden
        ${isPopular
          ? ''
          : `border card-3d ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-white border-slate-200/80'}`
        }`}
      style={isPopular ? { background: 'var(--gradient-brand)' } : {}}
    >
      {/* Popular highlight */}
      {isPopular && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10"
            style={{ background: 'radial-gradient(circle at 50% 0%, white 0%, transparent 60%)' }} />
        </div>
      )}

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-px left-0 right-0 flex justify-center">
          <span className="bg-white text-blue-700 text-xs font-black px-4 py-1 rounded-b-lg shadow-lg tracking-wide">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className={`p-8 flex-1 flex flex-col ${isPopular ? 'pt-10' : ''}`}>

        {/* Plan name */}
        <div className="mb-6">
          <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isPopular ? 'text-blue-200' : darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {plan.name}
          </h3>

          {/* Price */}
          <div className="flex items-end gap-1 mb-1">
            <span className={`text-5xl font-black tracking-tight ${isPopular ? 'text-white' : darkMode ? 'text-white' : 'text-slate-900'}`}>
              {displayPrice}
            </span>
            {!isFree && (
              <span className={`text-sm pb-2 font-medium ${isPopular ? 'text-blue-200' : darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                {displayPeriod}
              </span>
            )}
            {isFree && (
              <span className={`text-sm pb-2 font-medium ${isPopular ? 'text-blue-200' : darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                &nbsp;{displayPeriod}
              </span>
            )}
          </div>

          {/* Savings badge */}
          {savingsMonthly > 0 && (
            <div className="mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                isPopular ? 'bg-white/20 text-white' : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
              }`}>
                Save {savingsMonthly}% with annual billing
              </span>
            </div>
          )}

          {/* Equivalent monthly note */}
          {!isFree && isYearly && (
            <p className={`text-xs ${isPopular ? 'text-blue-200' : darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Billed annually (≈ ${(plan.yearlyPrice / 12).toFixed(2)}/mo)
            </p>
          )}

          <p className={`text-sm mt-3 ${isPopular ? 'text-blue-100' : darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {plan.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0
                ${isPopular ? 'bg-white/20' : 'bg-blue-500/15'}`}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                  stroke={isPopular ? 'white' : '#3b82f6'} strokeWidth="3.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span className={`text-sm ${isPopular ? 'text-blue-50' : darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={CHROME_EXTENSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 text-center
            ${isPopular
              ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-xl'
              : isFree
                ? darkMode
                  ? 'bg-slate-700/80 text-slate-200 hover:bg-slate-600/80 border border-white/10'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                : 'btn-gradient text-white shadow-lg shadow-blue-500/20'
            }`}
        >
          {plan.cta} →
        </a>
      </div>
    </div>
  );
}

function GuaranteeBadge({ darkMode }: { darkMode: boolean }) {
  const { ref } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`mt-12 p-8 rounded-2xl border flex flex-col sm:flex-row items-center gap-6
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-white border-slate-200/80'}`}>
      <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-4xl shrink-0">
        🛡️
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          60-Day Money-Back Guarantee
        </h3>
        <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          If RFQ AutoPilot doesn't reduce your quote processing time by at least 50% in the first 60 days, we'll refund 100% of your subscription. No questions asked.
        </p>
      </div>
    </div>
  );
}
