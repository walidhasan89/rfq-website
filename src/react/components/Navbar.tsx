import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Chrome, ChevronRight, Moon, Sun, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const { theme, toggleTheme } = useTheme();
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
    toggleTheme();
    window.setTimeout(() => setThemePulse(false), 520);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      if (currentPath === '/') {
        event.preventDefault();
        document.querySelector(href.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
      return;
    }

    if (href === '/' && currentPath === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  if (currentPath === '/success') return null;

  const isDark = theme === 'dark';

  return (
    <div ref={menuRef}>
      <header
        className={`rfq-island-header ${scrolled ? 'is-compact' : ''} ${isDark ? 'is-dark' : 'is-light'}`}
      >
        <div className="rfq-island-bar">
          <a
            href="/"
            onClick={(event) => handleNavClick(event, '/')}
            className="rfq-island-brand"
            aria-label="RFQ AutoPilot home"
          >
            <span className="rfq-island-logo-wrap">
              <img src="/logo.png" alt="" className="rfq-island-logo" />
            </span>
            <span className="rfq-island-brand-copy">
              RFQ <strong>AutoPilot</strong>
            </span>
          </a>

          <nav className="rfq-island-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
              >
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

            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rfq-island-cta"
            >
              <Chrome size={15} />
              <span>Add to Chrome</span>
              <ArrowRight size={15} className="rfq-island-cta-arrow" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={`rfq-island-menu-toggle ${mobileOpen ? 'is-open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="rfq-mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`rfq-mobile-overlay ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="rfq-mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
        />

        <aside id="rfq-mobile-navigation" className="rfq-mobile-panel" aria-label="Mobile navigation">
          <div className="rfq-mobile-head">
            <a href="/" className="rfq-mobile-brand" onClick={(event) => handleNavClick(event, '/')}>
              <img src="/logo.png" alt="" />
              <span>RFQ <strong>AutoPilot</strong></span>
            </a>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
              <X size={20} />
            </button>
          </div>

          <nav className="rfq-mobile-links" aria-label="Mobile navigation links">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
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
              <Chrome size={19} />
              <span>Add to Chrome - It's Free</span>
              <Zap size={16} />
            </a>
            <p>Free forever - No credit card required</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
