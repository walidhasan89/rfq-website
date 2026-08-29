import { useState, useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const CHROME_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const PLANS = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for small distributors getting started',
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic email detection',
      'Standard templates',
      'Analytics dashboard',
    ],
    cta: 'Start Free',
    popular: false,
    badge: null,
  },
  {
    name: 'Solo',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    description: 'For growing distributors increasing quote volume',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 exports',
      'Email & chat support',
      'Custom templates',
      '5 quote templates',
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    monthlyPrice: 29.99,
    yearlyPrice: 300,
    description: 'For high-volume distributors scaling operations',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited exports',
      'Priority support',
      'Unlimited quote templates',
      'Analytics dashboard',
    ],
    cta: 'Start 14-Day Trial',
    popular: false,
    badge: 'Best Value',
  },
];

export default function Pricing({ dark }: Props) {
  const [yearly, setYearly] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`hero-glow w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2 ${dark ? 'bg-blue-600/10' : 'bg-blue-100/60'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal flex justify-center mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              dark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              💰 Pricing
            </span>
          </div>
          <h2 className={`reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className={`reveal delay-200 text-lg max-w-xl mx-auto mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Start free. Scale as you grow. All paid plans include a 14-day free trial — no credit card required.
          </p>

          {/* Toggle */}
          <div className="reveal delay-300 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? (dark ? 'text-white' : 'text-slate-900') : (dark ? 'text-slate-400' : 'text-slate-500')}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`toggle-track ${yearly ? 'on' : ''}`}
              style={{ background: yearly ? 'var(--gradient-brand)' : (dark ? '#334155' : '#cbd5e1') }}
              aria-label="Toggle billing period"
            >
              <div className="toggle-thumb" />
            </button>
            <span className={`text-sm font-medium ${yearly ? (dark ? 'text-white' : 'text-slate-900') : (dark ? 'text-slate-400' : 'text-slate-500')}`}>
              Yearly
              <span className="ml-2 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">Save ~17%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${(i + 1) * 100} relative rounded-2xl border transition-all duration-300 card-3d overflow-hidden ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                  : dark
                    ? 'border-slate-700/50 hover:border-blue-500/40'
                    : 'border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl'
              } ${dark ? 'bg-slate-800/50' : 'bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-brand)' }} />
              )}
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                  plan.popular
                    ? 'bg-blue-500 text-white'
                    : 'bg-green-500/10 text-green-500 border border-green-500/30'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className={`text-lg font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${dark ? 'text-white' : 'text-slate-900'}`}>
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.monthlyPrice === 0 ? '/forever' : yearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {yearly && plan.monthlyPrice > 0 && (
                    <p className={`text-xs mt-1 ${dark ? 'text-green-400' : 'text-green-600'}`}>
                      Billed annually — saves ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toFixed(0)}/year
                    </p>
                  )}
                </div>

                <a
                  href={CHROME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-6 ${
                    plan.popular
                      ? 'btn-gradient text-white shadow-lg shadow-blue-500/30'
                      : dark
                        ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{plan.cta}</span>
                </a>

                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className={`reveal flex flex-wrap items-center justify-center gap-6 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {[
            '💳 No credit card for free plan',
            '🔒 Enterprise-grade security',
            '✅ Cancel anytime',
            '📧 Gmail & Outlook compatible',
          ].map(t => (
            <span key={t} className={`flex items-center gap-1.5 ${dark ? '' : ''}`}>{t}</span>
          ))}
        </div>

        {/* Break-even note */}
        <div className={`reveal mt-10 rounded-2xl p-6 text-center ${
          dark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-slate-200 shadow-sm'
        }`}>
          <p className={`text-base font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
            💡 RFQ AutoPilot pays for itself on <span className="gradient-text font-extrabold">Day One</span>
          </p>
          <p className={`text-sm mt-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Each manual quote costs ~$24.50 in labor. RFQ AutoPilot reduces that to ~$2.50. 
            You save $22 on your very first automated quote — more than the entire monthly subscription.
          </p>
        </div>
      </div>
    </section>
  );
}
