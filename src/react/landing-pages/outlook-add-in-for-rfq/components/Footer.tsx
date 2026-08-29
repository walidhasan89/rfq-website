import { Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

interface Props { darkMode: boolean; }

const products = [
  {
    name: 'ReplyChief',
    tagline: 'LinkedIn AI Co-pilot',
    emoji: '💼',
    color: 'from-blue-500 to-cyan-500',
    url: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    description: 'AI-powered LinkedIn engagement for sales teams',
  },
  {
    name: 'AdminPalette',
    tagline: 'Shopify Admin Enhancer',
    emoji: '🎨',
    color: 'from-purple-500 to-pink-500',
    url: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    description: 'Supercharge your Shopify admin experience',
  },
  {
    name: 'RFQ AutoPilot',
    tagline: 'Outlook RFQ Automation',
    emoji: '⚡',
    color: 'from-blue-600 to-indigo-600',
    url: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    description: 'Automate RFQ processing inside Outlook',
    current: true,
  },
];

export default function Footer({ darkMode }: Props) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={`relative pt-20 pb-8 border-t ${darkMode ? 'bg-[#020817] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all">
                <img
                  src="https://rfqautopilot.com/asset/logo.png"
                  alt="RFQ AutoPilot"
                  className="w-full h-full object-contain"
                  onError={() => {}}
                />
              </div>
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Automate{' '}
              <a href="https://rfqautopilot.com/rfq-email-management-tool" className={`underline decoration-dashed transition-colors ${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}>
                RFQ email management
              </a>{' '}
              inside Microsoft Outlook. Detect, extract, and quote — all without leaving your inbox.
            </p>
            <a
              href="mailto:support@rfqautopilot.com"
              className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              <Mail size={14} />
              support@rfqautopilot.com
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '#', external: false },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com', external: true },
              ].map((item, i) => (
                <li key={i}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className={`text-sm flex items-center gap-1 transition-colors duration-200 ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.href)}
                      className={`text-sm flex items-center gap-1 transition-colors duration-200 text-left ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Our Products</h4>
            <div className="grid grid-cols-1 gap-3">
              {products.map((product, i) => (
                <a
                  key={i}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`product-card flex items-center gap-3 p-3 rounded-2xl border group transition-all duration-300 ${
                    product.current
                      ? darkMode
                        ? 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
                        : 'bg-blue-50 border-blue-200 hover:border-blue-300'
                      : darkMode
                        ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${product.color} shadow-lg`}>
                    <span className="text-lg">{product.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{product.name}</span>
                      {product.current && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-bold btn-gradient text-white">Current</span>
                      )}
                    </div>
                    <p className={`text-xs truncate ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{product.description}</p>
                  </div>
                  <ArrowUpRight size={14} className={`flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    darkMode ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-600'
                  }`} />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'RFQ Automation Software', href: 'https://rfqautopilot.com/rfq-automation-software' },
                { label: 'AI RFQ Processing Tool', href: 'https://rfqautopilot.com/ai-rfq-processing-tool' },
                { label: 'RFQ for Manufacturers', href: 'https://rfqautopilot.com/rfq-software-for-manufacturers' },
                { label: 'RFQ for Distributors', href: 'https://rfqautopilot.com/rfq-software-for-distributors' },
                { label: 'Gmail Chrome Extension', href: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales' },
                { label: 'Procurement Extension', href: 'https://rfqautopilot.com/procurement-chrome-extension' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors duration-200 ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Support */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Legal & Support</h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors duration-200 ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`text-sm transition-colors duration-200 flex items-center gap-1 ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  <Mail size={12} />
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 flex items-center gap-1 ${darkMode ? 'text-slate-500 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  <ExternalLink size={12} />
                  About Inoviqa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-colors duration-200 ${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-600 border border-green-100'}`}>
              🟢 All Systems Operational
            </span>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs transition-colors duration-200 flex items-center gap-1 ${darkMode ? 'text-slate-600 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'}`}
            >
              <ExternalLink size={11} />
              Chrome Web Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
