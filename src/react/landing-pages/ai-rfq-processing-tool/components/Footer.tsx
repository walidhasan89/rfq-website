

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const products = [
  {
    name: 'ReplyChief',
    desc: 'LinkedIn AI Copilot',
    icon: '💼',
    url: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    color: '#0077b5',
  },
  {
    name: 'AdminPalette',
    desc: 'Shopify Admin Tool',
    icon: '🎨',
    url: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    color: '#96bf48',
  },
  {
    name: 'RFQ AutoPilot',
    desc: 'AI RFQ Processing',
    icon: '🤖',
    url: CHROME_EXTENSION_URL,
    color: '#3b82f6',
  },
];

export default function Footer({ darkMode }: Props) {
  const headingClass = darkMode ? 'text-white' : 'text-slate-900';
  const bodyClass = darkMode ? 'text-slate-400' : 'text-slate-600';
  const mutedClass = darkMode ? 'text-slate-500' : 'text-slate-500';
  const linkClass = darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const productCardClass = darkMode
    ? 'border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.12]'
    : 'border-slate-200 bg-white hover:bg-blue-50/60 hover:border-blue-200 shadow-sm';

  return (
    <footer className={`relative border-t ${
      darkMode ? 'bg-[#040810] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://rfqautopilot.com/asset/logo.png" alt="RFQ AutoPilot" className="h-8 w-8 rounded-lg" />
              <span className={`font-bold text-base ${headingClass}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </div>
            <p className={`${bodyClass} text-sm leading-relaxed mb-5`}>
              AI-powered RFQ processing that turns your inbox into an intelligent quote-generating machine.
            </p>
            <a href="mailto:support@rfqautopilot.com"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              support@rfqautopilot.com
            </a>
          </div>

          {/* Product links */}
          <div>
            <h4 className={`${headingClass} font-semibold text-sm mb-4`}>Product</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: 'https://rfqautopilot.com/blog' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className={`${linkClass} text-sm transition-colors duration-200`}
                    {...(link.href.startsWith('http') || link.href.startsWith('mailto') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h4 className={`${headingClass} font-semibold text-sm mb-4`}>Our Products</h4>
            <div className="space-y-3">
              {products.map((prod) => (
                <a
                  key={prod.name}
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${productCardClass}`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${prod.color}20` }}
                  >
                    {prod.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`${headingClass} text-sm font-semibold group-hover:text-blue-500 transition-colors`}>{prod.name}</p>
                    <p className={`${mutedClass} text-xs`}>{prod.desc}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" className="shrink-0 group-hover:stroke-blue-400 group-hover:translate-x-0.5 transition-all">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              ))}
              <p className={`${mutedClass} text-xs pt-1`}>Chrome extensions by Inoviqa</p>
            </div>
          </div>

          {/* Legal + Support */}
          <div>
            <h4 className={`${headingClass} font-semibold text-sm mb-4`}>Legal</h4>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: 'Privacy Policy', href: 'https://rfqautopilot.com/privacy' },
                { label: 'Terms of Use', href: 'https://rfqautopilot.com/terms' },
                { label: 'Disclaimer', href: 'https://rfqautopilot.com/disclaimer' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className={`${linkClass} text-sm transition-colors duration-200`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={`${headingClass} font-semibold text-sm mb-4`}>Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:support@rfqautopilot.com" className={`${linkClass} text-sm transition-colors duration-200`}>
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a href="https://rfqautopilot.com" target="_blank" rel="noopener noreferrer"
                  className={`${linkClass} text-sm transition-colors duration-200`}>
                  Author: walidhasan
                </a>
              </li>
              <li>
                <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer"
                  className={`${linkClass} text-sm transition-colors duration-200`}>
                  About Inoviqa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-white/[0.06]' : 'border-slate-200'}`}>
          <p className={`${mutedClass} text-sm`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={CHROME_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gradient text-white text-xs font-semibold px-4 py-2 rounded-lg"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 13.5 12 13.5 8.5 11.93 8.5 10 10.07 6.5 12 6.5zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
              </svg>
              Add to Chrome — Free
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
