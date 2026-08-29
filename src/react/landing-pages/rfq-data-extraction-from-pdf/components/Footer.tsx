interface FooterProps {
  darkMode: boolean;
}

const products = [
  {
    name: 'ReplyChief',
    desc: 'LinkedIn AI Copilot',
    href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    icon: '💬',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AdminPalette',
    desc: 'Shopify Admin Enhancement',
    href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'RFQ AutoPilot',
    desc: 'PDF RFQ Data Extraction',
    href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    icon: '📊',
    color: 'from-blue-500 to-blue-700',
    current: true,
  },
];

export default function Footer({ darkMode }: FooterProps) {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const headingClass = darkMode ? 'text-white' : 'text-slate-900';
  const bodyClass = darkMode ? 'text-slate-400' : 'text-slate-600';
  const mutedClass = darkMode ? 'text-slate-500' : 'text-slate-500';
  const linkClass = darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const productCardBase = darkMode
    ? 'border-transparent hover:bg-slate-800 hover:border-slate-700'
    : 'border-slate-200 bg-white hover:bg-blue-50/70 hover:border-blue-200 shadow-sm';
  const currentProductCard = darkMode
    ? 'bg-blue-950/50 border-blue-700/40 hover:border-blue-500/60'
    : 'bg-blue-50 border-blue-200 hover:border-blue-400 shadow-sm';

  return (
    <footer className={`relative pt-20 pb-8 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Bg decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-blue-900/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 mb-5">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot"
                className="h-8 w-auto"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className={`${headingClass} font-bold text-lg`}>RFQ <span className="gradient-text">AutoPilot</span></span>
            </a>
            <p className={`${bodyClass} text-sm leading-relaxed mb-6`}>
              AI-powered PDF RFQ data extraction. Works inside Gmail & Outlook. Extract every line item in seconds, not hours.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow-lg"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Add to Chrome
              </span>
            </a>
          </div>

          {/* Product links */}
          <div className="lg:col-span-1">
            <h3 className={`${headingClass} font-semibold text-sm uppercase tracking-widest mb-5`}>Product</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') || item.href === '#' ? (
                    <button
                      onClick={() => item.href !== '#' ? handleNav(item.href) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className={`${linkClass} text-sm transition-colors duration-200`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a href={item.href} className={`${linkClass} text-sm transition-colors duration-200`}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h3 className={`${headingClass} font-semibold text-sm uppercase tracking-widest mb-5`}>Our Products</h3>
            <div className="space-y-3">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 border ${
                    product.current
                      ? currentProductCard
                      : productCardBase
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    {product.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${product.current ? 'text-blue-500' : headingClass} group-hover:text-blue-500 transition-colors`}>
                      {product.name}
                      {product.current && <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold">Current</span>}
                    </p>
                    <p className={`text-xs ${mutedClass} transition-colors`}>{product.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Support */}
          <div className="lg:col-span-1">
            <h3 className={`${headingClass} font-semibold text-sm uppercase tracking-widest mb-5`}>Legal</h3>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`${linkClass} text-sm transition-colors duration-200`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className={`${headingClass} font-semibold text-sm uppercase tracking-widest mb-5`}>Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@rfqautopilot.com" className={`${linkClass} text-sm transition-colors duration-200 flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer" className={`${linkClass} text-sm transition-colors duration-200 flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  About Inoviqa
                </a>
              </li>
              <li>
                <a href="/walidhasan" className={`${linkClass} text-sm transition-colors duration-200 flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Author
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-white/8' : 'border-slate-200'}`}>
          <p className={`${mutedClass} text-sm`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
              darkMode ? 'border-green-700/40 bg-green-950/40 text-green-400' : 'border-green-700/40 bg-green-950/40 text-green-400'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
