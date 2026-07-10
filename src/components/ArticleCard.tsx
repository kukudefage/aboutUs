import { ArrowRight } from 'lucide-react';
import type { Article } from '@/data/articles';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className="reveal group cursor-pointer"
      style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
    >
      <div className="py-5 px-4 -mx-4 rounded-xl border-b border-white/5 group-hover:border-transparent group-hover:bg-white/[0.03] transition-all duration-300">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs tracking-wider text-white/30">
                {article.date}
              </span>
              <span className="font-mono text-xs text-neon-cyan/80 bg-neon-cyan/10 px-2.5 py-0.5 rounded-full border border-neon-cyan/20">
                {article.category}
              </span>
            </div>

            <h3 className="font-display text-lg md:text-xl font-semibold text-white/90 group-hover:text-white group-hover:gradient-text transition-all duration-300 mb-2 leading-snug">
              {article.title}
            </h3>

            <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>

            <div className="mt-3 flex items-center gap-2 font-mono text-xs text-white/30">
              <span>{article.readTime}阅读</span>
              <span className="flex items-center gap-1 text-neon-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                阅读全文
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
