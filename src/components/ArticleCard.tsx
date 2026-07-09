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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="py-6 border-b border-cream-300/60 group-hover:border-ochre-500/30 transition-colors duration-500">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-sans text-xs tracking-wider text-ink-400 uppercase">
                {article.date}
              </span>
              <span className="font-sans text-xs text-ochre-500/80 bg-ochre-50 px-2.5 py-0.5 rounded-full">
                {article.category}
              </span>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-medium text-ink-900 group-hover:text-ochre-600 transition-colors duration-300 mb-2 leading-snug">
              {article.title}
            </h3>

            <p className="text-ink-500 text-base leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>

            <div className="mt-4 flex items-center gap-2 font-sans text-sm text-ink-400">
              <span>{article.readTime}阅读</span>
              <span className="flex items-center gap-1 text-ochre-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                阅读全文
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
