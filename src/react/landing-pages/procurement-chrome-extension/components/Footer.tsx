import { Mail, ExternalLink, Chrome, CheckCircle2 } from 'lucide-react';

interface Props { darkMode: boolean; }

const products = [
  {
    name: 'ReplyChief',
    description: 'LinkedIn AI Co-pilot',
    emoji: '💼',
    url: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'AdminPalette',
    description: 'Shopify Admin Tool',
    emoji: '🎨',
    url: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'RFQ AutoPilot',
    description: 'Procurement Automation',
    emoji: '⚡',
    url: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    color: 'from-brand-500 to-brand-800',
  },
];

export default function Footer({ darkMode }: Props) {
  return (
    <footer className={`relative pt-16 pb-8 ${
      darkMode ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b"
          style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)' }}
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="https://rfqautopilot.com/" className="flex items-center gap-2 mb-3">
              <img src="https://rfqautopilot.com/asset/logo.png" alt="RFQ AutoPilot" className="h-8 w-auto" />
              <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                RFQ AutoPilot
              </span>
            </a>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              The Chrome extension that automates RFQ processing inside Gmail & Outlook. Built for procurement teams who value speed and simplicity.
            </p>
          </div>

          {/* Product links */}
          <div className="lg:col-span-1">
            <h4 className={`text-sm font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-1">
            <h4 className={`text-sm font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Products
            </h4>
            <div className="space-y-2">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2.5 rounded-xl group transition-all border ${
                    darkMode
                      ? 'border-white/5 hover:border-white/10 hover:bg-white/5'
                      : 'border-slate-200/60 hover:border-slate-300 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 bg-gradient-to-br ${product.color} shadow-sm`}>
                    {product.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-semibold leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {product.name}
                    </div>
                    <div className={`text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {product.description}
                    </div>
                  </div>
                  <ExternalLink size={11} className={`flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className={`text-sm font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h4 className={`text-sm font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Mail size={13} />
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <ExternalLink size={13} />
                  About Inoviqa
                </a>
              </li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Chrome size={13} />
                  Chrome Web Store
                </a>
              </li>

              {/* All Systems Operational */}
              <li className="pt-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  darkMode
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <CheckCircle2 size={8} className="relative inline-flex rounded-full text-emerald-500" />
                  </span>
                  All Systems Operational
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className={`text-xs text-center sm:text-left ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-400 transition-colors font-medium"
            >
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg transition-all
                ${darkMode ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/8' : 'text-slate-500 hover:text-slate-700 bg-slate-200/50 hover:bg-slate-200'}`}
            >
              <Chrome size={12} />
              Add to Chrome — Free
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
