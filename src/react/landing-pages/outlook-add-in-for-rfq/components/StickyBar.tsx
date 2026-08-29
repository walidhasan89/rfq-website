import { useState, useEffect } from 'react';
import { Zap, X } from 'lucide-react';

interface Props { darkMode: boolean; }

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function StickyBar({ darkMode }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden sticky-bar ${visible ? 'visible' : ''}`}
    >
      <div className={`flex items-center gap-3 px-4 py-3 border-t ${
        darkMode
          ? 'bg-slate-900/95 border-slate-800'
          : 'bg-white/95 border-slate-200'
      }`}
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="flex-1">
          <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Works inside Outlook
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Free • No credit card</p>
        </div>
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-blue-500/30"
        >
          <Zap size={13} />
          Install free →
        </a>
        <button
          onClick={() => setDismissed(true)}
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
            darkMode ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
