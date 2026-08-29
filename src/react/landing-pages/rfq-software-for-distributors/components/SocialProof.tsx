interface Props { dark: boolean; }

const TICKER_ITEMS = [
  '⚡ 11x Faster Response',
  '📦 50,000+ SKU Support',
  '✅ Gmail & Outlook',
  '🏆 31% Higher Win Rate',
  '💲 Auto Pricing',
  '🎯 99.2% Extraction Accuracy',
  '⏱️ 4-Min Avg. Quote Time',
  '📊 Real-Time Analytics',
  '🔒 Enterprise Security',
  '🚀 Start Free Today',
];

export default function SocialProof({ dark }: Props) {
  return (
    <div className={`py-3 overflow-hidden border-y ${
      dark
        ? 'bg-slate-900/80 border-slate-800'
        : 'bg-blue-600 border-blue-700'
    }`}>
      <div className="ticker-wrap">
        <div className="ticker-inner animate-ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className={`inline-flex items-center gap-6 mx-6 text-sm font-semibold ${
              dark ? 'text-slate-300' : 'text-white'
            }`}>
              {item}
              <span className={`w-1 h-1 rounded-full ${dark ? 'bg-slate-600' : 'bg-blue-400'}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
