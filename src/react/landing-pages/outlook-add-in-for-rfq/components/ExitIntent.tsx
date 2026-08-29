import { useEffect, useState } from 'react';
import { X, Play, Mail, ArrowRight } from 'lucide-react';

interface Props { darkMode: boolean; }

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function ExitIntent({ darkMode }: Props) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered && !dismissed) {
        triggered = true;
        setVisible(true);
      }
    };

    // Also show after 60 seconds of page view
    const timer = setTimeout(() => {
      if (!triggered && !dismissed) {
        triggered = true;
        setVisible(true);
      }
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 popup-overlay" onClick={dismiss}>
      <div
        className={`relative max-w-lg w-full rounded-3xl p-8 shadow-2xl transition-all duration-300 ${
          darkMode
            ? 'bg-slate-900 border border-slate-700'
            : 'bg-white border border-slate-200'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
      >
        <button
          onClick={dismiss}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl btn-gradient flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
            <Play size={24} fill="white" className="text-white ml-1" />
          </div>
          <h2 className={`text-2xl font-extrabold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            See RFQ AutoPilot Working Inside Outlook
          </h2>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Watch a 90-second demo showing an RFQ email processed from detection to quotation reply — entirely within the Outlook interface.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className={`flex items-center gap-2 p-1 rounded-xl border ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className={`flex-shrink-0 pl-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                <Mail size={16} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className={`flex-1 bg-transparent px-2 py-2.5 text-sm outline-none ${
                  darkMode ? 'text-white placeholder-slate-600' : 'text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 btn-gradient px-4 py-2.5 rounded-lg text-sm font-bold text-white flex-shrink-0"
              >
                Watch Demo
                <ArrowRight size={14} />
              </button>
            </div>
            <p className={`text-xs text-center ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
              We'll send the demo link to your email. No spam, ever.
            </p>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">🎉</div>
            <p className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Demo link sent!</p>
            <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Check your inbox for the Outlook demo video.</p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gradient px-6 py-3 rounded-xl text-sm font-bold text-white"
              onClick={dismiss}
            >
              Install Free Now
              <ArrowRight size={14} />
            </a>
          </div>
        )}

        <div className={`mt-6 pt-5 border-t flex items-center justify-center gap-6 text-xs ${
          darkMode ? 'border-slate-800 text-slate-600' : 'border-slate-100 text-slate-400'
        }`}>
          <span>✅ No credit card needed</span>
          <span>⭐ 4.8/5 rating</span>
          <span>🔒 SOC 2 Type II</span>
        </div>
      </div>
    </div>
  );
}
