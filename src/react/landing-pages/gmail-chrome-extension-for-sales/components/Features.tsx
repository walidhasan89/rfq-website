import { useEffect, useRef } from 'react';

interface FeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    icon: '📡',
    title: 'Auto-Detect RFQ Emails',
    headline: 'Never Miss a Quote Request Again',
    description: "The moment an email lands in your Gmail inbox, RFQ AutoPilot's AI scans the subject line, body, and attachments to determine if it contains a request for quotation. A visual indicator appears on detected RFQ emails so your sales team can prioritize them instantly.",
    bullets: [
      { icon: '🟢', text: 'Green badge on emails identified as RFQs' },
      { icon: '⚡', text: 'Priority flag on urgent quote requests' },
      { icon: '📊', text: 'RFQ summary panel with key requirements' },
      { icon: '🔔', text: 'Desktop notification for high-value RFQs' },
      { icon: '📁', text: 'Automatic Gmail label for RFQ organization' },
    ],
    impact: 'Reps respond to RFQs 4x faster',
    color: 'from-green-500 to-emerald-600',
    bgLight: 'from-green-50 to-emerald-50',
    bgDark: 'from-green-950/30 to-emerald-950/30',
    borderLight: 'border-green-200/60',
    borderDark: 'border-green-800/30',
  },
  {
    icon: '🔍',
    title: 'One-Click Data Extraction',
    headline: 'Extract Buyer Requirements Without Typing a Single Word',
    description: 'Click the RFQ AutoPilot icon on any detected email and watch AI extract every detail — product names, quantities, specifications, delivery dates, and special instructions — from both the email body and attached PDFs, Excel files, and images.',
    bullets: [
      { icon: '📋', text: 'Structured data panel with all extracted line items' },
      { icon: '🏷️', text: 'Products matched to your catalog with SKU numbers' },
      { icon: '🔢', text: 'Quantities and units validated and highlighted' },
      { icon: '📅', text: 'Delivery dates parsed and displayed clearly' },
      { icon: '✅', text: 'Confidence score for each extracted field' },
    ],
    impact: 'Data entry time drops from 25 minutes to zero',
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'from-blue-50 to-indigo-50',
    bgDark: 'from-blue-950/30 to-indigo-950/30',
    borderLight: 'border-blue-200/60',
    borderDark: 'border-blue-800/30',
  },
  {
    icon: '✨',
    title: 'Instant Quote Generation',
    headline: 'Generate Professional Quotation Replies in Gmail',
    description: 'With extracted data ready, one click generates a complete quotation email draft in your Gmail compose window. Your pricing rules, customer-specific discounts, terms and conditions, and branded formatting are applied automatically.',
    bullets: [
      { icon: '📝', text: 'Pre-filled quotation draft in Gmail reply compose' },
      { icon: '💲', text: 'Pricing auto-calculated with discounts and totals' },
      { icon: '📄', text: 'Professional formatting with company branding' },
      { icon: '📋', text: 'Terms and conditions appended automatically' },
      { icon: '🚀', text: 'One click to send the finished quote' },
    ],
    impact: 'Quote generation drops from 45 minutes to 3 minutes',
    color: 'from-purple-500 to-violet-600',
    bgLight: 'from-purple-50 to-violet-50',
    bgDark: 'from-purple-950/30 to-violet-950/30',
    borderLight: 'border-purple-200/60',
    borderDark: 'border-purple-800/30',
  },
  {
    icon: '📈',
    title: 'Quote Tracking Dashboard',
    headline: 'Track Every Quote Without Leaving Gmail',
    description: 'A built-in analytics dashboard accessible from the Chrome extension sidebar shows your complete quoting activity. See which quotes are pending, opened, responded to, or expired. Set follow-up reminders that trigger directly in Gmail.',
    bullets: [
      { icon: '📊', text: 'Quote status overview (sent, opened, responded, won, lost)' },
      { icon: '👁️', text: 'Email open tracking for sent quotations' },
      { icon: '⏰', text: 'Follow-up reminders as Gmail notifications' },
      { icon: '📈', text: 'Personal quoting metrics (volume, speed, win rate)' },
      { icon: '📅', text: 'Pipeline view of pending quotes by deadline' },
    ],
    impact: '28% improvement in follow-up rates',
    color: 'from-orange-500 to-amber-600',
    bgLight: 'from-orange-50 to-amber-50',
    bgDark: 'from-orange-950/30 to-amber-950/30',
    borderLight: 'border-orange-200/60',
    borderDark: 'border-orange-800/30',
  },
  {
    icon: '📚',
    title: 'Smart Template Library',
    headline: 'Access Your Best Quote Templates in One Click',
    description: 'Build a library of quotation templates for different products, customer segments, and scenarios. The Chrome extension automatically selects the best template based on the RFQ content. Your team sends consistent, professional quotes every time.',
    bullets: [
      { icon: '📂', text: 'Template selector dropdown in the extension panel' },
      { icon: '🤖', text: 'AI-recommended template based on RFQ content' },
      { icon: '🎨', text: 'Branded templates with your logo, colors, and formatting' },
      { icon: '⚡', text: 'Quick-swap between templates without losing extracted data' },
      { icon: '✏️', text: 'Personal template creation for individual rep preferences' },
    ],
    impact: 'New reps perform like your top performer from day one',
    color: 'from-pink-500 to-rose-600',
    bgLight: 'from-pink-50 to-rose-50',
    bgDark: 'from-pink-950/30 to-rose-950/30',
    borderLight: 'border-pink-200/60',
    borderDark: 'border-pink-800/30',
  },
];

export default function Features({ darkMode }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.slide-up, .fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`py-24 lg:py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              ⚡ FEATURES
            </span>
          </div>
          <h2 className={`slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Built for Sales Teams —{' '}
            <span className="gradient-text">Every Feature Lives Inside Gmail</span>
          </h2>
          <p className={`slide-up delay-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            RFQ AutoPilot is not another standalone platform your sales team needs to learn. It adds intelligent RFQ processing capabilities directly into the Gmail interface.
          </p>
        </div>

        {/* Internal resource links */}
        <div className={`slide-up delay-300 flex flex-wrap justify-center gap-3 mb-12`}>
          {[
            { label: 'Gmail Chrome Extension for Sales', href: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales' },
            { label: 'RFQ Email Management Tool', href: 'https://rfqautopilot.com/rfq-email-management-tool' },
            { label: 'AI RFQ Processing Tool', href: 'https://rfqautopilot.com/ai-rfq-processing-tool' },
            { label: 'RFQ Data Extraction from PDF', href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf' },
            { label: 'Quotation Email Automation', href: 'https://rfqautopilot.com/quotation-email-automation' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                darkMode
                  ? 'border-slate-700 text-slate-400 hover:border-blue-700 hover:text-blue-400 bg-slate-900/50'
                  : 'border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600 bg-white'
              }`}
            >
              <span>→</span> {link.label}
            </a>
          ))}
        </div>

        {/* Features Grid */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`slide-up delay-${(i % 4 + 1) * 100} group relative rounded-3xl overflow-hidden border transition-all duration-500 card-hover ${
                darkMode
                  ? `bg-gradient-to-br ${feature.bgDark} ${feature.borderDark} border`
                  : `bg-gradient-to-br ${feature.bgLight} ${feature.borderLight} border`
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode ? 'bg-gradient-to-br from-white/3 to-transparent' : 'bg-gradient-to-br from-white/80 to-transparent'
              }`} />

              <div className="relative p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: Content */}
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-5 bg-gradient-to-br ${feature.color} shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {feature.title}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {feature.headline}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold ${
                    darkMode ? 'bg-white/5 text-slate-300' : 'bg-white/80 text-slate-700'
                  }`}>
                    <span className="text-green-500">📊</span>
                    <span><strong>Sales impact:</strong> {feature.impact}</span>
                  </div>
                </div>

                {/* Right: Bullets */}
                <div className="grid grid-cols-1 gap-2.5">
                  {feature.bullets.map((bullet, j) => (
                    <div
                      key={j}
                      className={`flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 hover:translate-x-1 ${
                        darkMode
                          ? 'bg-white/5 hover:bg-white/8 border border-white/5'
                          : 'bg-white hover:bg-white/90 border border-white/60 shadow-sm'
                      }`}
                    >
                      <span className="text-lg flex-shrink-0">{bullet.icon}</span>
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {bullet.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
