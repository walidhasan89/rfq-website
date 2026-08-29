import { useState, useEffect } from 'react';

interface SocialProofProps {
  darkMode: boolean;
}

const notifications = [
  { city: 'Austin, TX', count: 12, time: '4 minutes ago' },
  { city: 'London, UK', count: 8, time: '7 minutes ago' },
  { city: 'Singapore', count: 15, time: '2 minutes ago' },
  { city: 'New York, NY', count: 22, time: '1 minute ago' },
  { city: 'Sydney, AU', count: 9, time: '6 minutes ago' },
  { city: 'Toronto, CA', count: 18, time: '3 minutes ago' },
];

export default function SocialProof({ darkMode }: SocialProofProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 5s
    const firstTimer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setVisible(true);
    }, 9000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [visible, currentIndex]);

  const notif = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 z-50 transition-all duration-500 max-w-xs ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border ${
        darkMode
          ? 'bg-slate-800/90 border-slate-700/60 backdrop-blur-xl'
          : 'bg-white border-slate-200 backdrop-blur-xl shadow-slate-200/60'
      }`}>
        <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-base flex-shrink-0">
          🚀
        </div>
        <div>
          <p className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            A sales team in {notif.city}
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            processed {notif.count} RFQs in their first hour — {notif.time}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className={`flex-shrink-0 text-xs ml-1 ${darkMode ? 'text-slate-600 hover:text-slate-400' : 'text-slate-300 hover:text-slate-500'}`}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
