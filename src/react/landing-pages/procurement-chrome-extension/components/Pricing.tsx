import { useState } from 'react';
import { Check, Chrome } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for trying out RFQ AutoPilot',
    tag: null,
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic Email Detection',
      'Standard Templates',
      'Analytics Dashboard',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Solo',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    description: 'For individual procurement professionals',
    tag: 'Most Popular',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 Exports',
      'Email & Chat Support',
      'Custom Template',
      '5 Quote Templates / month',
    ],
    cta: 'Start Solo Plan',
    highlight: true,
  },
  {
    name: 'Pro',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    description: 'For teams and high-volume procurement',
    tag: 'Best Value',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited Exports',
      'Priority Support',
      'Unlimited Quote Templates',
      'Advanced Analytics Dashboard',
    ],
    cta: 'Start Pro Plan',
    highlight: false,
  },
];

export default function Pricing({ darkMode }: Props) {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useReveal();

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]'
          : 'bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_60%)]'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              color: darkMode ? '#60a5fa' : '#2563eb',
              border: '1px solid rgba(59,130,246,0.2)'
            }}
          >
            Pricing
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Simple, Transparent Pricing.{' '}
            <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Start free. Upgrade when you need more. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className={`inline-flex items-center gap-3 p-1.5 rounded-2xl ${
            darkMode ? 'bg-slate-800' : 'bg-slate-100'
          }`}>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                !isYearly
                  ? 'btn-brand text-white shadow-lg relative overflow-hidden z-10'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {!isYearly && <span className="relative z-10">Monthly</span>}
              {isYearly && 'Monthly'}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isYearly
                  ? 'btn-brand text-white shadow-lg relative overflow-hidden z-10'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {isYearly && (
                <>
                  <span className="relative z-10">Yearly</span>
                  <span className="relative z-10 text-xs bg-white/20 px-2 py-0.5 rounded-full">Save ~17%</span>
                </>
              )}
              {!isYearly && (
                <>
                  Yearly
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                  }`}>Save ~17%</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyEquiv = isYearly && plan.yearlyPrice > 0
              ? (plan.yearlyPrice / 12).toFixed(2)
              : null;

            return (
              <div
                key={i}
                className={`relative reveal reveal-delay-${i + 1} ${
                  plan.highlight ? 'md:-mt-4 md:mb-[-16px]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -inset-px rounded-2xl z-0"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af)', padding: '1px' }}>
                    <div className={`w-full h-full rounded-2xl ${darkMode ? 'bg-slate-900' : 'bg-white'}`} />
                  </div>
                )}

                <div className={`relative z-10 card-3d p-7 rounded-2xl h-full flex flex-col ${
                  plan.highlight
                    ? darkMode
                      ? 'bg-slate-900 border border-brand-500/30'
                      : 'bg-white border border-brand-200 shadow-2xl shadow-brand-500/10'
                    : darkMode
                      ? 'bg-slate-800/60 border border-white/6 hover:border-white/12'
                      : 'bg-white border border-slate-200 hover:shadow-lg'
                } transition-all duration-300`}>

                  {/* Tag */}
                  {plan.tag && (
                    <div className="mb-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        plan.highlight
                          ? 'bg-brand-500 text-white'
                          : darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {plan.tag}
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h3 className={`text-xl font-extrabold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {price === 0 ? 'Free' : `$${price}`}
                      </span>
                      {price > 0 && (
                        <span className={`text-sm mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          /{isYearly ? 'yr' : 'mo'}
                        </span>
                      )}
                    </div>
                    {monthlyEquiv && (
                      <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        ~${monthlyEquiv}/month when billed yearly
                      </p>
                    )}
                    {!isYearly && plan.yearlyPrice > 0 && (
                      <p className={`text-xs mt-1 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        Save ${(plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0)}/yr with annual billing
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <Check size={15} className="text-brand-500 flex-shrink-0" />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? 'btn-brand text-white relative overflow-hidden z-10'
                        : darkMode
                          ? 'bg-slate-700 text-white hover:bg-slate-600 border border-white/8'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {plan.highlight && <Chrome size={15} className="relative z-10" />}
                    <span className={plan.highlight ? 'relative z-10' : ''}>{plan.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className={`text-center text-sm mt-10 reveal ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          No long-term contracts · Upgrade or cancel anytime · No credit card required for free plan
        </p>
      </div>
    </section>
  );
}
