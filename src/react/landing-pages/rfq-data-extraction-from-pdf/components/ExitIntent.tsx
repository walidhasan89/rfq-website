import { useState, useEffect, useRef } from 'react';

interface ExitIntentProps {
  darkMode: boolean;
}

export default function ExitIntent({ darkMode }: ExitIntentProps) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !triggered.current) {
        triggered.current = true;
        setShow(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 exit-overlay bg-black/60 backdrop-blur-sm">
      <div
        className={`exit-modal relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border ${
          darkMode
            ? 'bg-slate-900 border-white/10'
            : 'bg-white border-slate-200'
        }`}
      >
        {/* Top gradient */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" />

        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            darkMode ? 'text-slate-400 hover:bg-white/10' : 'text-slate-400 hover:bg-slate-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                See AI Extract Data from a Real PDF RFQ
              </h3>
              <p className={`text-base mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Upload a sample PDF or watch our 60-second demo showing <strong>200 line items extracted instantly</strong> — no manual data entry required.
              </p>

              {/* Demo visual */}
              <div className={`rounded-2xl p-4 mb-6 border ${
                darkMode ? 'bg-slate-800/60 border-white/8' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Live Extraction Demo</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>200 line items • 22 pages • 12 seconds</p>
                  </div>
                  <span className="ml-auto text-xs font-bold text-green-500 px-2 py-1 rounded-full bg-green-500/10">LIVE</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: 'Product names', val: '200 extracted' },
                    { label: 'Quantities', val: '200 matched' },
                    { label: 'Specifications', val: '187 matched' },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span>{row.label}:</span>
                      <span className="text-green-500 font-semibold">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className={`w-full px-4 py-3.5 rounded-xl text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    darkMode
                      ? 'bg-slate-800 border-white/10 text-white placeholder-slate-500'
                      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="btn-brand w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold shadow-lg"
                >
                  <span>Watch PDF Extraction Demo →</span>
                </button>
              </form>

              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShow(false)}
                  className={`text-sm text-blue-500 hover:text-blue-400 font-semibold transition-colors`}
                >
                  Or add to Chrome free →
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Check your inbox!
              </h3>
              <p className={`text-base mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We've sent the demo link to <strong>{email}</strong>. While you wait, try RFQ AutoPilot for free.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold shadow-lg"
              >
                <span>Add to Chrome Free →</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
