import LandingNavbar from '../../shared/LandingNavbar';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#compatibility' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return <LandingNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} links={navLinks} />;
}
