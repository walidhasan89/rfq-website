import { useState, useEffect } from 'react';

interface StickyBarProps {
  darkMode: boolean;
}

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function StickyBar({ darkMode }: StickyBarProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setShow(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
      darkMode ? 'bg-slate-900/95 border-t border-slate-800' : 'bg-white/95 border-t border-slate-200'
    } backdrop-blur-xl`}>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>RFQ AutoPilot</p>
          <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Free plan available</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold"
          >
            <span>Add to Chrome — Free →</span>
          </a>
          <button
            onClick={() => { setDismissed(true); setShow(false); }}
            className={`p-2 rounded-lg text-xs ${darkMode ? 'text-slate-600 hover:text-slate-400' : 'text-slate-300 hover:text-slate-500'}`}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
