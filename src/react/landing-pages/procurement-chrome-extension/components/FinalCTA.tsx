import { Chrome, Star, Users, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean; }

export default function FinalCTA({ darkMode }: Props) {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_70%)]'
        }`} />
        <div className="hero-glow w-[400px] h-[400px] -top-20 -left-20 bg-brand-500 opacity-10" />
        <div className="hero-glow w-[400px] h-[400px] -bottom-20 -right-20 bg-brand-700 opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center btn-brand relative overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 0 40px rgba(59,130,246,0.4)' }}>
              <Chrome size={32} className="text-white relative z-10" />
            </div>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Stop Wasting Hours on{' '}
            <span className="gradient-text">Manual RFQ Processing</span>
          </h2>

          <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Every RFQ email you process manually is time stolen from strategic sourcing.
            Install RFQ AutoPilot in 30 seconds and start extracting data, comparing quotes,
            and sending responses faster — right inside the inbox where your{' '}
            <a
              href="https://rfqautopilot.com/rfq-email-management-tool"
              className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
            >
              procurement email management
            </a>{' '}
            already happens.
          </p>

          {/* Single CTA */}
          <div className="flex items-center justify-center mb-10">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand flex items-center gap-3 text-white font-bold text-base px-10 py-4 rounded-2xl relative overflow-hidden z-10 shadow-xl"
              style={{ boxShadow: '0 0 30px rgba(59,130,246,0.4), 0 8px 30px rgba(29,78,216,0.3)' }}
            >
              <Chrome size={20} className="relative z-10" />
              <span className="relative z-10">Install Free on Chrome</span>
            </a>
          </div>

          {/* Social proof */}
          <div className={`flex flex-wrap items-center justify-center gap-6 pt-6 border-t ${
            darkMode ? 'border-white/8' : 'border-slate-100'
          }`}>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                5-star rated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={15} className="text-brand-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                500+ procurement teams
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-brand-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                5+ hours saved per week
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Chrome size={15} className="text-brand-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Works with Gmail & Outlook
              </span>
            </div>
          </div>

          {/* Social proof line */}
          <p className={`mt-6 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Join 500+ procurement teams saving 5+ hours per week with the{' '}
            <a href="https://rfqautopilot.com/procurement-chrome-extension" className="text-brand-500 hover:text-brand-600 transition-colors">
              procurement Chrome extension
            </a>{' '}
            built for speed, simplicity, and security.
          </p>
        </div>
      </div>
    </section>
  );
}
