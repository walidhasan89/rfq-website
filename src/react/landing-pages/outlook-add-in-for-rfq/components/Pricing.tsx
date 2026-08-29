import { useEffect, useRef, useState } from 'react';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';

interface Props { darkMode: boolean; }

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals exploring RFQ automation.',
    badge: null,
    gradient: 'from-slate-500 to-slate-700',
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic email detection',
      'Standard templates',
      'Analytics dashboard',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Solo',
    icon: Zap,
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    description: 'For individual sales professionals processing high volumes.',
    badge: null,
    gradient: 'from-blue-500 to-blue-700',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 exports',
      'Email & chat support',
      'Custom templates',
      '5 quote templates',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'gradient',
  },
  {
    name: 'Pro',
    icon: Crown,
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    description: 'For teams who need unlimited power and priority support.',
    badge: 'Most Popular',
    gradient: 'from-blue-500 to-indigo-700',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited exports',
      'Priority support',
      'Unlimited quote templates',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
  },
];

export default function Pricing({ darkMode }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(false);

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
    <section id="pricing" ref={ref} className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'section-alt-dark' : 'section-alt-light'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'}`} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <Zap size={14} className="text-blue-500" />
              Simple Pricing
            </span>
          </div>
          <h2 className={`fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Start Free.{' '}
            <span className="gradient-text">Scale as You Grow.</span>
          </h2>
          <p className={`fade-up stagger-2 text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            All paid plans include a 14-day free trial. No credit card required to start. Ideal for{' '}
            <a href="https://rfqautopilot.com/rfq-software-small-business" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              small businesses
            </a>
            {' '}and{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              distributors
            </a>
            {' '}alike.
          </p>

          {/* Toggle */}
          <div className="fade-up stagger-3 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isYearly ? 'bg-blue-600' : darkMode ? 'bg-slate-700' : 'bg-slate-300'}`}
              aria-label="Toggle billing period"
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300 ${isYearly ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}`}>
              Yearly
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/15 text-green-500">Save ~17%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPro = plan.name === 'Pro';
            return (
              <div
                key={idx}
                className={`fade-up stagger-${idx + 1} relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isPro
                    ? 'shadow-2xl shadow-blue-500/20 ' + (darkMode ? 'border-blue-500/40 bg-gradient-to-b from-blue-900/40 to-slate-900/80' : 'border-blue-300 bg-gradient-to-b from-blue-50 to-white')
                    : darkMode
                      ? 'border-slate-800 bg-slate-900/60 hover:border-blue-500/30'
                      : 'border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-200'
                }`}
                style={isPro ? { boxShadow: darkMode ? '0 0 60px rgba(59,130,246,0.2)' : '0 0 40px rgba(59,130,246,0.12)' } : {}}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="btn-gradient px-4 py-1 rounded-b-xl text-xs font-bold text-white">{plan.badge}</span>
                  </div>
                )}
                <div className={`p-7 flex-1 ${plan.badge ? 'pt-10' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${plan.gradient}`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    {price === 0 ? (
                      <div className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        $0 <span className={`text-base font-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ forever</span>
                      </div>
                    ) : (
                      <div>
                        <div className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          ${price}
                          <span className={`text-base font-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </div>
                        {isYearly && plan.monthlyPrice && (
                          <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                            ${((price as number) / 12).toFixed(2)}/month billed annually
                          </p>
                        )}
                      </div>
                    )}
                    <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{plan.description}</p>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className={`flex items-center gap-2.5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPro ? 'bg-blue-500' : darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                          <Check size={11} className={isPro ? 'text-white' : 'text-blue-500'} />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-7 pb-7">
                  {isPro ? (
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold btn-gradient text-white btn-glow shadow-lg shadow-blue-500/30 transition-all duration-300"
                    >
                      <Zap size={14} />
                      {plan.cta}
                    </a>
                  ) : plan.name === 'Solo' ? (
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold btn-gradient text-white shadow-lg shadow-blue-500/20 transition-all duration-300"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        darkMode
                          ? 'bg-slate-800 text-white hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <div className={`mt-8 p-6 rounded-2xl border text-center fade-up ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Need a custom plan for 50+ users?{' '}
            <a
              href="mailto:support@rfqautopilot.com?subject=Enterprise Pricing Inquiry"
              className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
            >
              Contact us for enterprise pricing →
            </a>
            {' '}Includes dedicated support, custom integrations, and SLA guarantees.
          </p>
        </div>

        {/* Trial info */}
        <div className="mt-8 text-center fade-up">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['14-day free trial on all paid plans', 'No credit card for free plan', 'Cancel anytime', 'Upgrade or downgrade at any time'].map((item, i) => (
              <div key={i} className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <Check size={13} className="text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
