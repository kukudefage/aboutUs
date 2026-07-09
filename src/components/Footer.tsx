import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300 bg-cream-50">
      <div className="container px-6 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-medium text-ink-900 tracking-tight"
            >
              墨<span className="text-ochre-500">.</span>白
            </Link>
            <p className="mt-3 text-ink-400 font-sans text-sm max-w-xs">
              以极简之笔，书写有温度的设计。
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

            <p className="text-ink-400 font-sans text-xs">
              © {currentYear} 墨白设计工作室. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
