interface Props { dark: boolean; }

const PRODUCTS = [
  { name: 'Home', href: '#hero' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Blog', href: 'https://rfqautopilot.com/blog' },
  { name: 'Contact', href: 'mailto:support@rfqautopilot.com' },
];

const OUR_PRODUCTS = [
  {
    name: 'ReplyChief',
    desc: 'LinkedIn AI Co-pilot',
    href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    emoji: '💼',
    color: 'blue',
  },
  {
    name: 'AdminPalette',
    desc: 'Shopify Admin Tool',
    href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    emoji: '🎨',
    color: 'purple',
  },
  {
    name: 'RFQ AutoPilot',
    desc: 'RFQ Automation',
    href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    emoji: '⚡',
    color: 'green',
  },
];

const LEGAL = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
};

const colorMapLight: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  purple: 'bg-purple-50 text-purple-600 border-purple-200',
  green: 'bg-green-50 text-green-600 border-green-200',
};

export default function Footer({ dark }: Props) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={`relative border-t ${
      dark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="https://rfqautopilot.com/" className="flex items-center gap-2 mb-4">
              <img src="https://rfqautopilot.com/asset/logo.png" alt="RFQ AutoPilot" className="h-7 w-auto" />
              <span className={`font-bold text-base ${dark ? 'text-white' : 'text-slate-900'}`}>RFQ AutoPilot</span>
            </a>
            <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              RFQ automation software for distributors. Detect, extract, match, and quote — all inside Gmail & Outlook.
            </p>
          </div>

          {/* Product nav */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Product</p>
            <ul className="space-y-2.5">
              {PRODUCTS.map(p => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    onClick={p.href.startsWith('#') ? e => handleNav(e, p.href) : undefined}
                    className={`text-sm transition-colors duration-150 ${
                      dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                    target={p.href.startsWith('http') ? '_blank' : undefined}
                    rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-1">
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Our Products</p>
            <div className="space-y-3">
              {OUR_PRODUCTS.map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                    dark
                      ? `${colorMap[p.color]} hover:bg-opacity-20`
                      : `${colorMapLight[p.color]} hover:shadow-sm`
                  }`}
                >
                  <span className="text-lg">{p.emoji}</span>
                  <div>
                    <p className={`text-xs font-semibold ${dark ? 'text-slate-200' : 'text-slate-800'}`}>{p.name}</p>
                    <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{p.desc}</p>
                  </div>
                  <svg className={`w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${dark ? 'text-slate-400' : 'text-slate-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Legal</p>
            <ul className="space-y-2.5">
              {LEGAL.map(l => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className={`text-sm transition-colors duration-150 ${
                      dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Support</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`text-sm transition-colors duration-150 ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://rfqautopilot.com/walid-hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-150 ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-150 ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  About Inoviqa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          dark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-colors duration-150 ${dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Inoviqa
            </a>
          </p>
          <div className={`flex items-center gap-1.5 text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
