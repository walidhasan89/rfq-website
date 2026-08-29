import React, { useState, useEffect } from 'react';

interface MobileBarProps {
  darkMode: boolean;
}

const MobileBar: React.FC<MobileBarProps> = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className={`px-4 py-3 flex items-center justify-between gap-3 border-t ${
        darkMode
          ? 'bg-gray-950/95 border-white/10 backdrop-blur-md'
          : 'bg-white/95 border-gray-200 backdrop-blur-md shadow-xl'
      }`}>
        <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          🌍 Built for global trade
        </p>
        <a
          href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2.5 px-5 flex-shrink-0"
        >
          <span className="flex items-center gap-1.5">
            Try free →
          </span>
        </a>
      </div>
    </div>
  );
};

export default MobileBar;
