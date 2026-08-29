import LandingNavbar from '../../shared/LandingNavbar';

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  return <LandingNavbar darkMode={darkMode} toggleDarkMode={toggleDark} links={navLinks} />;
}
