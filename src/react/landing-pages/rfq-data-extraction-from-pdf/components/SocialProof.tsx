import { useState, useEffect } from 'react';

interface SocialProofProps {
  darkMode: boolean;
}

const notifications = [
  { company: 'Acme Manufacturing', items: 147, time: '12 seconds', ago: '2 min ago' },
  { company: 'Global Procurement Ltd', items: 83, time: '9 seconds', ago: '5 min ago' },
  { company: 'TechSupply Co', items: 210, time: '28 seconds', ago: '8 min ago' },
  { company: 'Precision Parts Inc', items: 56, time: '7 seconds', ago: '11 min ago' },
  { company: 'Industrial Buyers Group', items: 192, time: '22 seconds', ago: '15 min ago' },
];

export default function SocialProof({ darkMode }: SocialProofProps) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animClass, setAnimClass] = useState('toast-in');

  useEffect(() => {
    // First show after 5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
      setAnimClass('toast-in');
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setAnimClass('toast-out');
      setTimeout(() => {
        setVisible(false);
        // Show next notification after 8 seconds
        const nextTimer = setTimeout(() => {
          setCurrent((prev) => (prev + 1) % notifications.length);
          setVisible(true);
          setAnimClass('toast-in');
        }, 8000);
        return () => clearTimeout(nextTimer);
      }, 500);
    }, 4000);

    return () => clearTimeout(hideTimer);
  }, [visible, current]);

  if (!visible) return null;

  const notif = notifications[current];

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-xs ${animClass} md:bottom-6`}
    >
      <div className={`flex items-start gap-3 px-4 py-3.5 rounded-2xl shadow-2xl border ${
        darkMode
          ? 'bg-slate-900 border-white/12 shadow-black/40'
          : 'bg-white border-slate-200 shadow-slate-900/15'
      }`}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm">⚡</span>
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-semibold leading-snug ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            <span className="text-blue-500">{notif.company}</span> just extracted{' '}
            <strong>{notif.items} line items</strong> from a PDF RFQ in {notif.time}
          </p>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{notif.ago}</p>
        </div>
        <button
          onClick={() => { setAnimClass('toast-out'); setTimeout(() => setVisible(false), 500); }}
          className={`flex-shrink-0 ${darkMode ? 'text-slate-600 hover:text-slate-400' : 'text-slate-300 hover:text-slate-500'}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
