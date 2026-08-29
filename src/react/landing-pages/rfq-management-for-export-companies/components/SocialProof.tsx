import React, { useState, useEffect } from 'react';

interface SocialProofProps {
  darkMode: boolean;
}

const notifications = [
  { city: 'Hamburg', country: 'Japan', time: '2 minutes ago', minutes: 4 },
  { city: 'Dubai', country: 'Germany', time: '5 minutes ago', minutes: 7 },
  { city: 'Singapore', country: 'Brazil', time: '8 minutes ago', minutes: 3 },
  { city: 'Chicago', country: 'Saudi Arabia', time: '12 minutes ago', minutes: 5 },
  { city: 'Mumbai', country: 'UAE', time: '15 minutes ago', minutes: 6 },
  { city: 'Seoul', country: 'Nigeria', time: '3 minutes ago', minutes: 4 },
  { city: 'London', country: 'China', time: '7 minutes ago', minutes: 8 },
  { city: 'Toronto', country: 'India', time: '11 minutes ago', minutes: 5 },
];

const SocialProof: React.FC<SocialProofProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
      setShown(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!shown) return;

    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(cycleTimer);
  }, [shown]);

  const n = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 transition-all duration-500 max-w-xs hidden sm:block ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className={`flex items-start gap-3 p-3.5 rounded-2xl border shadow-lg backdrop-blur-md ${
        darkMode
          ? 'bg-gray-900/90 border-blue-500/30 shadow-blue-500/10'
          : 'bg-white/90 border-gray-200 shadow-gray-300/50'
      }`}>
        <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-sm font-bold">✓</span>
        </div>
        <div>
          <p className={`text-xs font-semibold leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            An exporter in <span className="gradient-text">{n.city}</span> just quoted a buyer in{' '}
            <span className="gradient-text">{n.country}</span> in {n.minutes} minutes
          </p>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {n.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
