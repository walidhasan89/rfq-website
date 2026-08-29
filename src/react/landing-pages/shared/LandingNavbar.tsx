import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Moon, Sun, X, Zap } from 'lucide-react';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export interface LandingNavLink {
  label: string;
  href: string;
}

interface LandingNavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  links: LandingNavLink[];
}

function ChromeMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
      <path d="M21.17 8H12M3.95 6.06 8.54 14M10.88 21.94 15.46 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function LandingNavbar({ darkMode, toggleDarkMode, links }: LandingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themePulse, setThemePulse] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncScroll = () => setScrolled(window.scrollY > 72);
    syncScroll();
    window.addEventListener('scroll', syncScroll, { passive: true });
    return () => window.removeEventListener('scroll', syncScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleThemeToggle = () => {
    setThemePulse(true);
    toggleDarkMode();
    window.setTimeout(() => setThemePulse(false), 520);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (!href.startsWith('#')) return;

    event.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isDark = darkMode;

  return (
    <div ref={menuRef}>
      <header className={`rfq-island-header ${scrolled ? 'is-compact' : ''} ${isDark ? 'is-dark' : 'is-light'}`}>
        <div className="rfq-island-bar">
          <a href="/" className="rfq-island-brand" aria-label="RFQ AutoPilot home">
            <span className="rfq-island-logo-wrap">
              <img src="/logo.png" alt="" className="rfq-island-logo" />
            </span>
            <span className="rfq-island-brand-copy">
              RFQ <strong>AutoPilot</strong>
            </span>
          </a>

          <nav className="rfq-island-links" aria-label="Landing page navigation">
            {links.map((link) => (
              <a key={`${link.label}-${link.href}`} href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="rfq-island-actions">
            <button
              type="button"
              onClick={handleThemeToggle}
              className={`rfq-island-theme ${themePulse ? 'is-switching' : ''}`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Sun className="rfq-theme-sun" size={17} />
              <Moon className="rfq-theme-moon" size={17} />
            </button>

            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="rfq-island-cta">
              <ChromeMark />
              <span>Add to Chrome</span>
              <ArrowRight size={15} className="rfq-island-cta-arrow" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={`rfq-island-menu-toggle ${mobileOpen ? 'is-open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="rfq-mobile-landing-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`rfq-mobile-overlay ${mobileOpen ? 'is-open' : ''} ${isDark ? 'is-dark' : 'is-light'}`} aria-hidden={!mobileOpen}>
        <button type="button" className="rfq-mobile-backdrop" aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} />

        <aside id="rfq-mobile-landing-navigation" className="rfq-mobile-panel" aria-label="Mobile landing navigation">
          <div className="rfq-mobile-head">
            <a href="/" className="rfq-mobile-brand">
              <img src="/logo.png" alt="" />
              <span>RFQ <strong>AutoPilot</strong></span>
            </a>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
              <X size={20} />
            </button>
          </div>

          <nav className="rfq-mobile-links" aria-label="Mobile landing navigation links">
            {links.map((link, index) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                style={{ '--item-delay': `${index * 45 + 110}ms` } as React.CSSProperties}
              >
                <span>{link.label}</span>
                <ChevronRight size={15} />
              </a>
            ))}
          </nav>

          <button type="button" onClick={handleThemeToggle} className="rfq-mobile-theme">
            <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="rfq-mobile-footer">
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="rfq-mobile-cta">
              <ChromeMark size={19} />
              <span>Add to Chrome - Free</span>
              <Zap size={16} />
            </a>
            <p>Free forever - No credit card required</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
