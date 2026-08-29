import { useEffect, useRef, useState } from 'react';

interface Props { darkMode: boolean; }

const stats = [
  { value: 400, suffix: 'M+', label: 'Outlook Users Worldwide' },
  { value: 50, suffix: '%', label: 'Faster Quote Processing' },
  { value: 40, suffix: '+', label: 'Languages Supported' },
  { value: 5, suffix: ' min', label: 'RFQ to Quote Time' },
];

function Counter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar({ darkMode }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          entry.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`py-16 relative overflow-hidden ${darkMode ? 'bg-[#020817]' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20'
          : 'bg-gradient-to-r from-blue-50/60 via-transparent to-indigo-50/60'
      }`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} text-center`}>
              <div className={`text-4xl lg:text-5xl font-black mb-2 gradient-text`}>
                <Counter target={stat.value} suffix={stat.suffix} started={started} />
              </div>
              <div className={`text-sm font-medium ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
