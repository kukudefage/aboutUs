import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
          ? 'py-3 bg-light-50/80 dark:bg-dark-950/80 backdrop-blur-xl border-b border-dark-900/10 dark:border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-6 md:px-8">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
          >
            <span className="gradient-text-animated">智</span>
            <span className="text-dark-900/20 dark:text-white/30">.</span>
            <span className="gradient-text-animated">发</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path} className="group relative">
                <Link
                  to={link.path}
                  className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-dark-900 dark:text-white'
                      : 'text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
                )}
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 -mr-2 text-dark-900/80 dark:text-white/80 hover:text-dark-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="切换菜单"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-3 py-4 border-t border-dark-900/10 dark:border-white/10 bg-light-50/95 dark:bg-dark-950/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-4 rounded-lg font-sans text-base transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-dark-900 dark:text-white bg-dark-900/5 dark:bg-white/5'
                      : 'text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/5 dark:hover:bg-white/5'
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
