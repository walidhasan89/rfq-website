import { useEffect, useRef, useState } from 'react';

interface PricingProps {
  darkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in, .slide-up, .scale-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for solo exporters getting started',
      badge: null,
      popular: false,
      cta: 'Start Free',
      ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      features: [
        '30 RFQs per month',
        '10 AI Credits',
        'Basic email detection',
        'Standard templates',
        'Analytics dashboard',
        'Gmail & Outlook support',
      ],
      nonFeatures: ['Custom templates', 'Priority support', 'Unlimited exports'],
    },
    {
      name: 'Solo',
      monthlyPrice: 14.99,
      yearlyPrice: 149,
      description: 'For individual export managers handling multiple markets',
      badge: 'Most Popular',
      popular: true,
      cta: 'Start 14-Day Free Trial',
      ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      features: [
        '300 RFQs per month',
        '100 AI Credits',
        '200 exports',
        'Email & chat support',
        'Custom templates',
        '5 quote templates',
        'Analytics dashboard',
        'Multi-currency support',
        '40+ language processing',
      ],
      nonFeatures: ['Unlimited exports', 'Priority support'],
    },
    {
      name: 'Pro',
      monthlyPrice: 29.99,
      yearlyPrice: 299,
      description: 'For trading companies with high RFQ volume',
      badge: null,
      popular: false,
      cta: 'Start 14-Day Free Trial',
      ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      features: [
        'Unlimited RFQs',
        '300 AI Credits',
        'Unlimited exports',
        'Priority support',
        'Unlimited quote templates',
        'Analytics dashboard',
        'Multi-currency support',
        '40+ language processing',
        'Advanced incoterms support',
        'Global performance reports',
      ],
      nonFeatures: [],
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* BG Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full ${
          darkMode ? 'bg-blue-900/10' : 'bg-blue-50'
        } blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="slide-up inline-flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'bg-blue-900/40 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-700'
            }`}>
              Pricing
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Simple, Transparent Pricing —{' '}
            <span className="gradient-text">Start Free</span>
          </h2>
          <p className={`slide-up delay-200 text-lg max-w-xl mx-auto mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            All paid plans include a 14-day free trial. No credit card required for the free plan. Works as a{' '}
            <a href="https://rfqautopilot.com/procurement-chrome-extension" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              procurement Chrome extension
            </a>{' '}
            and a full{' '}
            <a href="https://rfqautopilot.com/quotation-email-automation" className={`font-semibold underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              quotation email automation
            </a>{' '}
            platform.
          </p>

          {/* Toggle */}
          <div className="slide-up delay-300 inline-flex items-center gap-3 p-1 rounded-full border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly
                  ? 'gradient-brand text-white shadow-md'
                  : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isYearly
                  ? 'gradient-brand text-white shadow-md'
                  : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                isYearly
                  ? 'bg-white/20 text-white'
                  : darkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`slide-up relative flex flex-col rounded-3xl ${
                plan.popular
                  ? 'pricing-card-popular'
                  : ''
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className={`flex flex-col flex-1 p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? darkMode
                      ? 'bg-gray-900 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                      : 'bg-white border-blue-400 shadow-2xl shadow-blue-500/20'
                    : darkMode
                      ? 'bg-gray-900/60 border-white/10 hover:border-white/20'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Plan Badge */}
                {plan.badge && (
                  <div className="flex justify-center mb-4">
                    <span className="gradient-brand text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.monthlyPrice === 0 ? (
                    <div>
                      <span className={`text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Free
                      </span>
                      <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Forever — No credit card required
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-end gap-2">
                        <span className="gradient-text text-5xl font-black">
                          ${isYearly
                            ? (plan.yearlyPrice / 12).toFixed(2)
                            : plan.monthlyPrice.toFixed(2)}
                        </span>
                        <span className={`text-base mb-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          /month
                        </span>
                      </div>
                      {isYearly && (
                        <p className={`text-sm mt-1 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          Billed ${plan.yearlyPrice}/year — Save ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toFixed(0)}
                        </p>
                      )}
                      <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        14-day free trial, no credit card required
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'btn-primary justify-center'
                      : darkMode
                        ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                  } inline-flex items-center`}
                >
                  {plan.popular && (
                    <svg className="w-4 h-4 mr-2 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  )}
                  <span className={plan.popular ? 'relative z-10' : ''}>{plan.cta}</span>
                </a>

                {/* Divider */}
                <div className={`border-t mb-6 ${darkMode ? 'border-white/10' : 'border-gray-200'}`} />

                {/* Features */}
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                    {plan.nonFeatures.map((feat) => (
                      <li key={feat} className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className={`slide-up mt-12 p-8 rounded-3xl border text-center max-w-3xl mx-auto ${
          darkMode ? 'bg-blue-950/30 border-blue-500/20' : 'bg-blue-50 border-blue-200'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-3xl">🛡️</span>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Global Response Guarantee
            </h3>
          </div>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            "If RFQ AutoPilot does not reduce your average international quote response time by at least <strong>60% within the first 30 days</strong>, our team will provide a dedicated setup session customized for your export markets, languages, and currencies — completely free."
          </p>
        </div>

        {/* Trust elements */}
        <div className={`slide-up mt-8 flex flex-wrap items-center justify-center gap-6 text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {[
            { icon: '⭐', text: '4.8/5 average rating' },
            { icon: '🌍', text: 'Used by exporters in 45+ countries' },
            { icon: '💳', text: 'No credit card for free plan' },
            { icon: '✅', text: 'Gmail & Outlook compatible' },
            { icon: '🔒', text: 'Enterprise-grade security' },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-1.5">
              <span>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
