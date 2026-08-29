import { useState, useEffect } from 'react';

interface StickyBarProps {
  darkMode: boolean;
}

export default function StickyBar({ darkMode }: StickyBarProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setShow(true);
      } else if (window.scrollY <= 600) {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-30 md:hidden sticky-bar`}>
      <div className={`flex items-center justify-between px-4 py-3 border-t shadow-2xl ${
        darkMode
          ? 'bg-slate-900 border-white/10'
          : 'bg-white border-slate-200'
      }`}>
        <p className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
          Extract PDF RFQs automatically →
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand flex items-center px-4 py-2 rounded-xl text-white text-xs font-bold shadow-lg"
          >
            <span>Try Free</span>
          </a>
          <button
            onClick={() => { setDismissed(true); setShow(false); }}
            className={`w-7 h-7 flex items-center justify-center rounded-lg ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
