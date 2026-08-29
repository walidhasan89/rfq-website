import { useEffect, useRef, useState } from 'react';

interface PricingProps {
  darkMode: boolean;
}

const plans = {
  monthly: [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals getting started with PDF RFQ extraction.',
      features: [
        '30 RFQs per month',
        '10 AI Credits',
        'Basic email detection',
        'Standard templates',
        'Analytics dashboard',
      ],
      cta: 'Get Started Free',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: false,
      badge: null,
    },
    {
      name: 'Solo',
      price: '$14.99',
      period: '/month',
      description: 'For sales professionals who handle multiple PDF RFQs daily.',
      features: [
        '300 RFQs per month',
        '100 AI Credits',
        '200 exports',
        'Email & chat support',
        'Custom templates',
        '5 quote templates',
      ],
      cta: 'Start 14-Day Free Trial',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: false,
      badge: null,
    },
    {
      name: 'Pro',
      price: '$29.99',
      period: '/month',
      description: 'For teams that need unlimited PDF extraction and full automation.',
      features: [
        'Unlimited RFQs',
        '300 AI Credits',
        'Unlimited exports',
        'Priority support',
        'Unlimited quote templates',
        'Analytics dashboard',
      ],
      cta: 'Start 14-Day Free Trial',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: true,
      badge: 'Most Popular',
    },
  ],
  yearly: [
    {
      name: 'Free',
      price: '$0',
      period: '/year',
      description: 'Perfect for individuals getting started with PDF RFQ extraction.',
      features: [
        '30 RFQs per month',
        '10 AI Credits',
        'Basic email detection',
        'Standard templates',
        'Analytics dashboard',
      ],
      cta: 'Get Started Free',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: false,
      badge: null,
    },
    {
      name: 'Solo',
      price: '$149',
      period: '/year',
      description: 'For sales professionals who handle multiple PDF RFQs daily.',
      features: [
        '300 RFQs per month',
        '100 AI Credits',
        '200 exports',
        'Email & chat support',
        'Custom templates',
        '5 quote templates',
      ],
      cta: 'Start 14-Day Free Trial',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: false,
      badge: 'Save $30',
    },
    {
      name: 'Pro',
      price: '$299',
      period: '/year',
      description: 'For teams that need unlimited PDF extraction and full automation.',
      features: [
        'Unlimited RFQs',
        '300 AI Credits',
        'Unlimited exports',
        'Priority support',
        'Unlimited quote templates',
        'Analytics dashboard',
      ],
      cta: 'Start 14-Day Free Trial',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      highlighted: true,
      badge: 'Most Popular • Save $61',
    },
  ],
};

export default function Pricing({ darkMode }: PricingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentPlans = plans[billing];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-50/80'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border ${
            darkMode ? 'bg-blue-950/40 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            🚀 PRICING
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Start free. Scale as your team grows. All paid plans include a 14-day free trial — no credit card required.{' '}
            The most affordable <a href="https://rfqautopilot.com/rfq-automation-software" className="text-blue-500 hover:underline font-medium">RFQ automation software</a>{' '}
            for teams of any size.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12 reveal">
          <div className="toggle-switch">
            <button
              onClick={() => setBilling('monthly')}
              className={`toggle-option ${billing === 'monthly' ? 'toggle-active' : (darkMode ? 'text-slate-400' : 'text-slate-500')}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`toggle-option ${billing === 'yearly' ? 'toggle-active' : (darkMode ? 'text-slate-400' : 'text-slate-500')}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {currentPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`reveal relative rounded-3xl overflow-hidden transition-all duration-300 card-3d ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 border border-blue-400/30 shadow-2xl shadow-blue-500/25 scale-105'
                  : darkMode
                    ? 'bg-slate-900 border border-white/8 hover:border-blue-500/30'
                    : 'bg-white border border-slate-200 hover:border-blue-300/60 shadow-lg shadow-slate-900/5'
              }`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold ${
                  plan.highlighted ? 'bg-blue-500/40 text-white' : 'bg-amber-500/20 text-amber-500'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.badge ? 'pt-10' : ''}`}>
                {/* Plan name */}
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-200' : darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-black tracking-tight ${plan.highlighted ? 'text-white' : darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-base font-medium mb-2 ${plan.highlighted ? 'text-blue-200' : darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-3 text-sm ${plan.highlighted ? 'text-blue-100' : darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? 'bg-white/20' : 'bg-blue-500/15'
                      }`}>
                        <svg className={`w-2.5 h-2.5 ${plan.highlighted ? 'text-white' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                      : 'btn-brand text-white shadow-lg'
                  }`}
                >
                  <span>{plan.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10 reveal">
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            All paid plans include <strong className={darkMode ? 'text-slate-300' : 'text-slate-600'}>14-day free trial</strong> — No credit card required
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            {['🔒 Enterprise-grade encryption', '💳 No credit card for free plan', '✅ Cancel anytime'].map((item) => (
              <span key={item} className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
