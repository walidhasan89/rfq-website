import { useEffect, useState } from 'react';
import { X, Building2 } from 'lucide-react';

interface Props { darkMode: boolean; }

const notifications = [
  { users: 12, time: '2 minutes ago' },
  { users: 28, time: '7 minutes ago' },
  { users: 45, time: '15 minutes ago' },
  { users: 8, time: '23 minutes ago' },
  { users: 63, time: '31 minutes ago' },
];

export default function SocialProof({ darkMode }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [notifIndex, setNotifIndex] = useState(0);

  useEffect(() => {
    // Show first notification after 5 seconds
    const firstTimer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 5000);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
      // Show next one after a gap
      if (!dismissed) {
        const nextTimer = setTimeout(() => {
          const next = (notifIndex + 1) % notifications.length;
          setNotifIndex(next);
          setVisible(true);
        }, 30000); // 30 second gap between notifications
        return () => clearTimeout(nextTimer);
      }
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible, notifIndex, dismissed]);

  if (dismissed) return null;

  const current = notifications[notifIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 z-50 max-w-xs transition-all duration-500 ${
        visible ? 'toast-enter' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`flex items-start gap-3 p-4 rounded-2xl shadow-2xl ${
        darkMode
          ? 'bg-slate-900 border border-slate-700 shadow-black/50'
          : 'bg-white border border-slate-200 shadow-slate-200/80'
      }`}>
        <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center flex-shrink-0">
          <Building2 size={16} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold leading-tight mb-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Enterprise team of <span className="text-blue-500">{current.users} users</span> just deployed
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            RFQ AutoPilot in Outlook · {current.time}
          </p>
        </div>
        <button
          onClick={() => { setVisible(false); setDismissed(true); }}
          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
            darkMode ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
