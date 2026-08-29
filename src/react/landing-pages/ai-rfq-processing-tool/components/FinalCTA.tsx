import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function FinalCTA({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#060b18]' : 'bg-slate-50'}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb animate-float" style={{
          width: '700px', height: '700px',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          background: darkMode
            ? 'radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.05) 40%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${isVisible ? 'visible' : ''} relative rounded-3xl overflow-hidden`}
          style={{ background: 'var(--gradient-brand)' }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-15"
              style={{ background: 'radial-gradient(circle at 50% 0%, white 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
              style={{ background: 'radial-gradient(circle at 50% 100%, white 0%, transparent 70%)' }} />
            {/* Animated gradient pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h60v1H0zm0 59h60v1H0zm0-30h60v1H0zM0 0v60h1V0zm59 0v60h1V0zm-30 0v60h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
          </div>

          <div className="relative px-8 lg:px-16 py-16 lg:py-20 text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-2 text-blue-100 text-sm font-medium">4.8/5 from 200+ reviews</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Stop Copying Data from RFQ Emails.{' '}
              <span className="text-blue-100">Let AI Do It.</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              See how AI RFQ automation transforms your inbox into a quote-generating machine. Extract data from any format, generate accurate quotes, and respond in minutes instead of hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={CHROME_EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white text-blue-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.93 0 3.5 1.57 3.5 3.5S13.93 13.5 12 13.5 8.5 11.93 8.5 10 10.07 6.5 12 6.5zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                </svg>
                Start Free 14-Day Trial
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="mailto:support@rfqautopilot.com"
                className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/15 transition-all duration-300"
              >
                Contact Support →
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                SOC 2 certified & GDPR compliant
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                No credit card required for trial
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Setup in under 10 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                60-day money-back guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
