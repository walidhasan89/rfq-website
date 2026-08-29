interface FooterProps {
  darkMode: boolean;
}

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const ourProducts = [
  {
    name: 'ReplyChief',
    description: 'LinkedIn AI Composer — Write smarter LinkedIn replies with AI assistance',
    url: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    icon: '💼',
    color: 'from-blue-500 to-cyan-500',
    tag: 'LinkedIn AI',
  },
  {
    name: 'AdminPalette',
    description: 'Shopify Admin Helper — Supercharge your Shopify store management',
    url: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    icon: '🎨',
    color: 'from-green-500 to-emerald-500',
    tag: 'Shopify',
  },
  {
    name: 'RFQ AutoPilot',
    description: 'Gmail RFQ Processor — Auto-detect, extract & quote inside Gmail',
    url: CHROME_STORE_URL,
    icon: '🤖',
    color: 'from-blue-600 to-indigo-600',
    tag: 'Gmail AI',
    current: true,
  },
];

export default function Footer({ darkMode }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid — brand + product + our-products (wider) + legal + support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand Column — 3 cols */}
          <div className="lg:col-span-3">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot"
                className="h-8 w-auto"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              The #1 Gmail Chrome Extension for sales teams handling RFQ emails. Auto-detect, extract, and quote — all inside Gmail.
            </p>
            <a
              href="mailto:support@rfqautopilot.com"
              className={`text-sm font-medium transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              support@rfqautopilot.com
            </a>
          </div>

          {/* Product Links — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'How It Works', action: () => scrollTo('how-it-works') },
                { label: 'Pricing', action: () => scrollTo('pricing') },
                { label: 'FAQs', action: () => scrollTo('faq') },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm transition-colors ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className={`text-sm transition-colors text-left ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products — 4 cols (wider) */}
          <div className="lg:col-span-4 sm:col-span-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Our Products
            </h4>
            <div className="space-y-3">
              {ourProducts.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    product.current
                      ? darkMode
                        ? 'bg-blue-950/40 border-blue-800/60 hover:border-blue-600/60'
                        : 'bg-blue-50 border-blue-200 hover:border-blue-300'
                      : darkMode
                        ? 'bg-slate-900/60 border-slate-800 hover:border-slate-600'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-lg flex-shrink-0 shadow-md mt-0.5`}>
                    {product.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {product.name}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded-full text-xs font-semibold ${
                        product.current
                          ? 'bg-blue-100 text-blue-600'
                          : darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {product.current ? "You're here" : product.tag}
                      </span>
                    </div>
                    <div className={`text-xs leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {product.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Support — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Legal
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`text-sm transition-colors ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="/walidhasan"
                  className={`text-sm transition-colors ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors ${darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  About Inoviqa →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-colors ${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-1.5 text-xs ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-semibold"
            >
              <span>Add to Chrome</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
