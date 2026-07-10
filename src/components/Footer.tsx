import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-900/5 dark:border-white/5 bg-light-50 dark:bg-dark-950">
      <div className="container px-6 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-bold tracking-tight"
            >
              <span className="gradient-text-animated">智</span>
              <span className="text-dark-900/30 dark:text-white/30">.</span>
              <span className="gradient-text-animated">发</span>
            </Link>
            <p className="mt-3 text-dark-900/30 dark:text-white/30 font-sans text-sm max-w-xs">
              前端开发者的技术分享空间，记录成长，分享思考。
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kukudefage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:border-neon-cyan/30 hover:shadow-glow-sm transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/lzhf154822"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:border-neon-purple/30 hover:shadow-glow-purple transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:17151233210@163.com"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:border-neon-green/30 hover:shadow-glow-cyan transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

            <p className="text-dark-900/30 dark:text-white/30 font-mono text-xs">
              © {currentYear} 智发 · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
