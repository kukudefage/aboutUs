import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

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
              智<span className="text-ochre-500">.</span>发
            </Link>
            <p className="mt-3 text-ink-400 font-sans text-sm max-w-xs">
              前端开发者的技术分享空间，记录成长，分享思考。
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/kukudefage"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/lzhf154822"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:17151233210@163.com"
                className="text-ink-500 hover:text-ochre-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
