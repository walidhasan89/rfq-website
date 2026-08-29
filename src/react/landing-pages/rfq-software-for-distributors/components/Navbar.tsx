import LandingNavbar from '../../shared/LandingNavbar';

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ dark, onToggleDark }: NavbarProps) {
  return <LandingNavbar darkMode={dark} toggleDarkMode={onToggleDark} links={navLinks} />;
}
