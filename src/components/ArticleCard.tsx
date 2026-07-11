import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArticleFromDB } from '@/hooks/useArticles';

interface ArticleCardProps {
  article: ArticleFromDB;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <Link
      to={`/article/${article.id}`}
      className="block"
    >
      <article
        ref={ref}
        className="reveal group"
        style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
      >
        <div className="py-5 px-4 -mx-4 rounded-xl border-b border-dark-900/5 dark:border-white/5 group-hover:border-transparent group-hover:bg-dark-900/3 dark:group-hover:bg-white/[0.03] transition-all duration-300">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs tracking-wider text-dark-900/40 dark:text-white/30">
                  {formatDate(article.published_at)}
                </span>
                <span className="font-mono text-xs text-neon-cyan/80 bg-neon-cyan/10 px-2.5 py-0.5 rounded-full border border-neon-cyan/20">
                  {article.category?.name || article.category_id}
                </span>
              </div>

              <h3 className="font-display text-lg md:text-xl font-semibold text-dark-900/90 dark:text-white/90 group-hover:text-dark-900 dark:group-hover:text-white group-hover:gradient-text transition-all duration-300 mb-2 leading-snug">
                {article.title}
              </h3>

              <p className="text-dark-900/50 dark:text-white/40 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>

              <div className="mt-3 flex items-center gap-2 font-mono text-xs text-dark-900/40 dark:text-white/30">
                <span>{article.read_time}分钟阅读</span>
                <span className="flex items-center gap-1 text-neon-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  阅读全文
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
