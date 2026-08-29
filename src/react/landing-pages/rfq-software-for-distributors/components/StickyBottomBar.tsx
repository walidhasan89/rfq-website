import { useEffect, useState } from 'react';

interface Props { dark: boolean; }

const CHROME_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function StickyBottomBar({ dark }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-bottom ${visible ? 'visible' : ''} lg:hidden`}>
      <div className={`border-t px-4 py-3 flex items-center justify-between gap-3 ${
        dark
          ? 'bg-slate-900/95 backdrop-blur-xl border-slate-800'
          : 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-lg'
      }`}>
        <p className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
          Built for distributors — Try free
        </p>
        <a
          href={CHROME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-bold flex-shrink-0"
        >
          <span>Install →</span>
        </a>
      </div>
    </div>
  );
}
