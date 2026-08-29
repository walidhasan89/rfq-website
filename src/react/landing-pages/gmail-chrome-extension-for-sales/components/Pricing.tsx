import { useState, useEffect, useRef } from 'react';

interface PricingProps {
  darkMode: boolean;
}

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals getting started',
    badge: null,
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic email detection',
      'Standard templates',
      'Analytics dashboard',
    ],
    cta: 'Add to Chrome — Free',
    ctaStyle: 'secondary',
    note: 'Free forever — no credit card',
  },
  {
    name: 'Solo',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    description: 'For individual sales professionals',
    badge: 'Most Popular',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 exports per month',
      'Email & chat support',
      'Custom templates',
      '5 quote templates',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    note: '14-day free trial — no credit card',
  },
  {
    name: 'Pro',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    description: 'For growing sales teams',
    badge: 'Best Value',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited exports',
      'Priority support',
      'Unlimited quote templates',
      'Analytics dashboard',
      'Team management',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    note: '14-day free trial — no credit card',
  },
];

export default function Pricing({ darkMode }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('.slide-up, .fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              💰 PRICING
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-xl mx-auto mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="slide-up delay-300 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isYearly ? 'bg-blue-600' : darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}
            >
              <span
                className="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all duration-300"
                style={{ left: isYearly ? '30px' : '2px' }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>
              Yearly
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'}`}>
                Save 17%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isSolo = plan.name === 'Solo';

            return (
              <div
                key={i}
                className={`slide-up delay-${(i + 1) * 100} relative rounded-3xl overflow-hidden border transition-all duration-500 card-hover ${
                  isSolo
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                    : darkMode
                      ? 'border-slate-800'
                      : 'border-slate-200'
                } ${
                  isSolo
                    ? darkMode ? 'bg-gradient-to-br from-blue-950/60 to-slate-900' : 'bg-gradient-to-br from-blue-50 to-white'
                    : darkMode ? 'bg-slate-900' : 'bg-white'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className={`absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold ${
                    isSolo ? 'gradient-brand text-white' : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    ⭐ {plan.badge}
                  </div>
                )}

                <div className={`p-7 ${plan.badge ? 'pt-11' : ''}`}>
                  <div className={`text-sm font-bold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {plan.name}
                  </div>
                  <p className={`text-xs mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{plan.description}</p>

                  <div className="flex items-end gap-1 mb-1">
                    <span className={`text-4xl sm:text-5xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      ${price === 0 ? '0' : price}
                    </span>
                    {price > 0 && (
                      <span className={`text-sm mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {price === 0 && (
                    <p className={`text-sm font-semibold mb-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Free forever</p>
                  )}
                  {price > 0 && isYearly && (
                    <p className={`text-xs mb-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      ~${(price / 12).toFixed(2)}/month billed annually
                    </p>
                  )}
                  {price > 0 && !isYearly && <div className="mb-5" />}

                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-xl text-center text-sm font-bold mb-6 transition-all duration-300 ${
                      plan.ctaStyle === 'primary'
                        ? 'btn-primary text-white shadow-lg'
                        : darkMode
                          ? 'border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400'
                          : 'border border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-700'
                    }`}
                  >
                    <span>{plan.cta}</span>
                  </a>

                  <div className={`border-t pt-5 space-y-3 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className={`text-xs mt-4 text-center ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>{plan.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className={`slide-up rounded-3xl p-8 sm:p-10 text-center border animated-border ${
          darkMode ? 'bg-slate-900/50 border-blue-900/50' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
        }`}>
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Adoption Guarantee</h3>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            If your sales team does not actively use RFQ AutoPilot within 14 days of installation, our customer success team will provide a personalized onboarding session — <strong>free of charge</strong> — to ensure your team gets full value from the extension.
          </p>
        </div>
      </div>
    </section>
  );
}
