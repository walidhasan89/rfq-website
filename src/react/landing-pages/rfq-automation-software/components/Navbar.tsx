import LandingNavbar from '../../shared/LandingNavbar';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return <LandingNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} links={navLinks} />;
}
