import { useRef, useEffect } from 'react';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <MessageSquare size={14} />
            Get in Touch
          </div>
          <h2 className={`font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            We are Here to{' '}
            <span className="gradient-text">Help You</span>
          </h2>
          <p className={`text-lg mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have questions about RFQ AutoPilot? Need help with your account? Our team is ready to assist you.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email card */}
          <a
            href="mailto:support@rfqautopilot.com"
            className={`card-hover group p-7 rounded-2xl border text-left transition-all duration-300 ${
              isDark
                ? 'bg-slate-800 border-slate-700 hover:border-blue-500/40'
                : 'bg-slate-50 border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/8'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
              <Mail size={22} className="text-white" />
            </div>
            <h3 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Email Support</h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Get help from our team. We typically respond within 24 hours.
            </p>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              support@rfqautopilot.com
              <ExternalLink size={13} />
            </span>
          </a>

          {/* Chrome store card */}
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className={`card-hover group p-7 rounded-2xl border text-left transition-all duration-300 ${
              isDark
                ? 'bg-slate-800 border-slate-700 hover:border-blue-500/40'
                : 'bg-slate-50 border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/8'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg">
              <MessageSquare size={22} className="text-white" />
            </div>
            <h3 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Chrome Web Store</h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Leave a review, report an issue, or browse community Q&amp;A.
            </p>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              View on Chrome Store
              <ExternalLink size={13} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
