import { useState, useRef, useEffect } from 'react';
import { Check, Zap, Chrome, Mail, Sparkles, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const plans = [
  {
    id: 'free',
    name: 'Free',
    icon: Chrome,
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect for trying out RFQ AutoPilot with no commitment.',
    color: 'slate',
    popular: false,
    features: [
      { text: '30 RFQ captures per month', highlight: false },
      { text: '10 AI Credits', highlight: false },
      { text: 'Basic email and attachment extraction', highlight: false },
      { text: 'Standard quotation templates', highlight: false },
      { text: 'Standard PDF quotation export', highlight: false },
      { text: 'Chrome extension access', highlight: false },
      { text: 'Quote builder access', highlight: false },
    ],
    cta: 'Add to Chrome — Free',
    ctaLink: CHROME_STORE_URL,
    note: 'No credit card required',
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Sparkles,
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    desc: 'For growing suppliers, distributors, and high-volume quote workflows.',
    color: 'gradient',
    popular: true,
    features: [
      { text: 'Unlimited RFQ captures', highlight: true },
      { text: '300 AI Credits', highlight: true },
      { text: 'Unlimited PDF exports', highlight: true },
      { text: 'Priority support', highlight: false },
      { text: 'Unlimited reusable templates', highlight: true },
      { text: 'Advanced branding controls', highlight: false },
      { text: 'Chrome extension access', highlight: false },
      { text: 'Email and attachment extraction', highlight: false },
      { text: 'Dynamic response email templates', highlight: false },
      { text: 'Professional quote PDF workflow', highlight: false },
    ],
    cta: 'Start Pro Plan',
    ctaLink: CHROME_STORE_URL,
    note: 'Review plan details before purchase',
  },
  {
    id: 'solo',
    name: 'Solo',
    icon: Zap,
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    desc: 'For individual salespeople and small quotation teams.',
    color: 'blue',
    popular: false,
    features: [
      { text: '300 RFQ captures per month', highlight: false },
      { text: '100 AI Credits', highlight: false },
      { text: '200 PDF exports', highlight: false },
      { text: 'Email & Chat support', highlight: false },
      { text: 'Company branding and colors', highlight: false },
      { text: 'Custom quote and email templates', highlight: false },
      { text: 'Chrome extension access', highlight: false },
      { text: 'Email and attachment extraction', highlight: false },
      { text: 'Professional PDF quote workflow', highlight: false },
    ],
    cta: 'Start Solo Plan',
    ctaLink: CHROME_STORE_URL,
    note: 'Cancel anytime',
  },
];

export default function Pricing() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Zap size={14} />
            Simple Pricing
          </div>
          <h2
            className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Start Free,{' '}
            <span className="gradient-text">Upgrade as Quote Volume Grows</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Choose a plan for your RFQ response volume. Confirm current limits and billing details inside the extension before upgrading.
          </p>

          {/* Billing toggle */}
          <div className={`inline-flex items-center gap-1 p-1.5 rounded-2xl border ${
            isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !isYearly
                  ? isDark ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-slate-900 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? isDark ? 'bg-slate-700 text-white shadow-lg' : 'bg-white text-slate-900 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Yearly
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Cards — Pro in center, elevated */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-center">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPro = plan.popular;
            const price = plan.monthlyPrice === 0
              ? 'Free'
              : isYearly
                ? `$${plan.yearlyPrice}`
                : `$${plan.monthlyPrice}`;
            const period = plan.monthlyPrice === 0
              ? null
              : isYearly ? '/year' : '/mo';
            const monthlyEquiv = isYearly && plan.monthlyPrice > 0
              ? `$${(plan.yearlyPrice / 12).toFixed(2)}/mo billed annually`
              : null;

            if (isPro) {
              /* ─────────── PRO CARD — premium elevated design ─────────── */
              return (
                <div
                  key={plan.id}
                  className="reveal-scale relative md:-my-6 md:z-10"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Glow layer */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 blur-2xl opacity-30 scale-95" />

                  {/* Card shell */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/25">

                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700" />

                    {/* Noise / shimmer overlay */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Highlight orbs inside card */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />

                    {/* Content */}
                    <div className="relative z-10 p-8">

                      {/* Most Popular badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          <Star size={12} className="text-yellow-300 fill-yellow-300" />
                          <span className="text-xs font-bold text-white tracking-wide">Most Popular</span>
                        </div>
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/20`}>
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>

                      {/* Plan name */}
                      <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">
                        {plan.name}
                      </div>

                      {/* Price */}
                      <div className="mb-1">
                        <div className="flex items-end gap-1">
                          <span className="text-5xl font-black text-white leading-none">{price}</span>
                          {period && (
                            <span className="text-blue-200 text-base mb-1.5">{period}</span>
                          )}
                        </div>
                        {monthlyEquiv && (
                          <p className="text-blue-300 text-xs mt-1">{monthlyEquiv}</p>
                        )}
                      </div>

                      <p className="text-blue-100 text-sm mt-3 mb-6 leading-relaxed">{plan.desc}</p>

                      {/* CTA button */}
                      <a
                        href={plan.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3.5 px-5 rounded-xl text-sm font-bold transition-all duration-300 bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5"
                      >
                        {plan.cta}
                      </a>
                      <p className="text-center text-blue-300 text-xs mt-2.5">{plan.note}</p>

                      {/* Divider */}
                      <div className="border-t border-white/20 mt-6 mb-5" />

                      {/* Features */}
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.text} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              feature.highlight ? 'bg-white/25' : 'bg-white/15'
                            }`}>
                              <Check size={11} className="text-white" strokeWidth={3} />
                            </div>
                            <span className={`text-sm ${feature.highlight ? 'text-white font-semibold' : 'text-blue-100'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }

            /* ─────────── FREE & SOLO CARDS ─────────── */
            return (
              <div
                key={plan.id}
                className="reveal-scale relative flex flex-col h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`flex flex-col flex-1 p-7 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700 hover:border-slate-500 hover:bg-slate-800 shadow-xl shadow-black/20'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40'
                }`}>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    isDark ? 'bg-slate-700' : 'bg-slate-200'
                  }`}>
                    <Icon size={22} className={isDark ? 'text-slate-300' : 'text-slate-600'} />
                  </div>

                  {/* Plan name */}
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    {plan.monthlyPrice === 0 ? (
                      <div className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Free</div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                        {period && (
                          <span className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{period}</span>
                        )}
                      </div>
                    )}
                    {monthlyEquiv && (
                      <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{monthlyEquiv}</p>
                    )}
                  </div>

                  <p className={`text-sm mt-2 mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{plan.desc}</p>

                  {/* CTA */}
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 px-5 rounded-xl text-sm font-bold transition-all duration-300 block mb-2 ${
                      isDark
                        ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-slate-500'
                        : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-300 shadow-sm hover:shadow-md hover:border-slate-400'
                    }`}
                  >
                    {plan.cta}
                  </a>
                  <p className={`text-center text-xs mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{plan.note}</p>

                  {/* Divider */}
                  <div className={`border-t mb-5 ${isDark ? 'border-slate-700' : 'border-slate-200'}`} />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                        }`}>
                          <Check size={11} className="text-blue-500" strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <div className={`reveal mt-12 p-6 rounded-2xl border text-center ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Need more than 5 users?{' '}
            <a
              href="mailto:support@rfqautopilot.com"
              className={`font-semibold inline-flex items-center gap-1.5 ${
                isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <Mail size={14} />
              Contact us about Enterprise plans &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
