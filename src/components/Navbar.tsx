import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/works', label: '文章' },
  { path: '/contact', label: '联系' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-cream-300/50 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container px-6 md:px-8">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-medium text-ink-900 tracking-tight hover:text-ochre-500 transition-colors duration-300"
          >
            智<span className="text-ochre-500">.</span>发
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`link-underline font-sans text-sm tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-ochre-500'
                      : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 -mr-2 text-ink-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="切换菜单"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-4 py-4 border-t border-cream-300/50">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 font-sans text-base transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-ochre-500'
                      : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
