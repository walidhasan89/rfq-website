import { useState, useEffect } from 'react';

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function StickyBar({ darkMode }: Props) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 600 && !dismissed) {
        setShow(true);
      } else if (window.scrollY <= 600) {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border animate-slide-down
        ${darkMode
          ? 'bg-slate-900/95 border-white/[0.1] shadow-black/40 backdrop-blur-xl'
          : 'bg-white/95 border-slate-200/80 shadow-slate-300/40 backdrop-blur-xl'
        }`}
      style={{ maxWidth: '90vw' }}
    >
      <span className={`text-sm font-medium hidden sm:block ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        🚀 Start automating your RFQ processing today
      </span>
      <a
        href={CHROME_EXTENSION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 13.5 12 13.5 8.5 11.93 8.5 10 10.07 6.5 12 6.5zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
        </svg>
        Add to Chrome — Free
      </a>
      <button
        onClick={() => { setShow(false); setDismissed(true); }}
        className={`w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer transition-colors
          ${darkMode ? 'text-slate-500 hover:text-white hover:bg-white/10' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'}`}
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
