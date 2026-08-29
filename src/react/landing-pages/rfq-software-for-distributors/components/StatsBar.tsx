import { useEffect, useRef } from 'react';

interface Props { dark: boolean; }

const STATS = [
  { value: '11x', label: 'Faster Quote Response' },
  { value: '5x', label: 'More RFQs Per Day' },
  { value: '98.9%', label: 'Extraction Accuracy' },
  { value: '31%', label: 'Higher Win Rate' },
  { value: '264+', label: 'Hours Saved Monthly' },
  { value: '2,000x', label: 'ROI vs. Cost' },
];

export default function StatsBar({ dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative py-12 border-y ${
        dark
          ? 'bg-slate-900 border-slate-800'
          : 'bg-slate-50 border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal delay-${i * 100}`}>
              <div className={`text-2xl lg:text-3xl font-extrabold gradient-text`}>{s.value}</div>
              <div className={`text-xs mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
