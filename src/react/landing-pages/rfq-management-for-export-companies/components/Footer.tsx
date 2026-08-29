

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const products = [
    {
      name: 'ReplyChief',
      href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
      description: 'LinkedIn AI Copywriter',
      icon: '💬',
      color: darkMode ? 'from-blue-500/20 to-indigo-500/20 border-blue-500/30' : 'from-blue-50 to-indigo-50 border-blue-200',
    },
    {
      name: 'AdminPalette',
      href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
      description: 'Shopify Admin Enhancer',
      icon: '🎨',
      color: darkMode ? 'from-purple-500/20 to-pink-500/20 border-purple-500/30' : 'from-purple-50 to-pink-50 border-purple-200',
    },
    {
      name: 'RFQ AutoPilot',
      href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
      description: 'Export RFQ Management',
      icon: '🌍',
      color: darkMode ? 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/30' : 'from-emerald-50 to-cyan-50 border-emerald-200',
      current: true,
    },
  ];

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: 'https://rfqautopilot.com/blog' },
    { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative overflow-hidden ${
      darkMode ? 'bg-gray-950 border-t border-white/10' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      {/* Subtle BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full ${
          darkMode ? 'bg-blue-900/5' : 'bg-blue-100/30'
        } blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <a href="https://rfqautopilot.com/" className="flex items-center gap-2.5 mb-4">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot"
                className="w-8 h-8 object-contain"
              />
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              AI-powered RFQ management for export companies. Respond to global buyers faster in 40+ languages with multi-currency pricing.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-4 inline-flex"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Add to Chrome — Free
              </span>
            </a>
          </div>

          {/* Product Navigation */}
          <div className="lg:col-span-1">
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Product
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.href.startsWith('#') ? (e) => scrollTo(e, link.href) : undefined}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our Products
            </h4>
            <div className="space-y-3">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border bg-gradient-to-r transition-all duration-200 hover:scale-[1.02] ${product.color} ${
                    product.current ? (darkMode ? 'ring-1 ring-blue-500/30' : 'ring-1 ring-blue-300') : ''
                  }`}
                >
                  <span className="text-xl">{product.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm flex items-center gap-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.name}
                      {product.current && (
                        <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                          darkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}>
                          You're here
                        </span>
                      )}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {product.description}
                    </div>
                  </div>
                  <svg className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Support */}
          <div className="lg:col-span-1">
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Legal
            </h4>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`text-sm flex items-center gap-2 transition-colors ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm flex items-center gap-2 transition-colors ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  About Inoviqa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-6 ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © {currentYear} RFQ AutoPilot. A Product of{' '}
              <a
                href="https://inoviqa.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Inoviqa
              </a>
            </p>
            <div className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>for global exporters</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
