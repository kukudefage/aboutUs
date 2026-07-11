import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSaveNavigationState, useRestoreWorksFilter, useRestoreScrollPosition } from '@/hooks/useNavigationHistory';
import { useArticles, ArticleFromDB } from '@/hooks/useArticles';

export default function Works() {
  const restoredFilter = useRestoreWorksFilter();
  const [activeCategory, setActiveCategory] = useState(restoredFilter);
  useSaveNavigationState(activeCategory);
  useRestoreScrollPosition();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  const { articles, categories, loading, error } = useArticles(activeCategory);

  const allCategories = ['全部', ...categories.map(c => c.name)];

  return (
    <div className="pt-32 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/8 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <section className="px-6 md:px-8 pb-16 md:pb-20 relative z-10">
        <div className="container">
          <div
            ref={headerRef}
            className="reveal max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase">
                技术文章
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-dark-900 dark:text-white">每周一篇</span>
              <span className="gradient-text-animated"> 技术 </span>
              <span className="text-dark-900 dark:text-white">分享</span>
            </h1>
            <p className="text-dark-900/40 dark:text-white/40 text-lg leading-relaxed">
              从 2023 年开始坚持每周更新一篇技术文章，
              涵盖前端开发、工程化、性能优化等领域。
              共 <span className="gradient-text-2 font-semibold">{articles.length}</span> 篇，持续更新中。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28 relative z-10">
        <div className="container">
          <div ref={listRef} className="reveal">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {loading ? (
                Array.from({ length: 13 }).map((_, i) => (
                  <button
                    key={i}
                    disabled
                    className="px-5 py-2 rounded-lg font-sans text-sm font-medium bg-dark-900/10 dark:bg-white/10 text-dark-900/30 dark:text-white/30"
                  >
                    ...
                  </button>
                ))
              ) : (
                allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-glow-sm'
                        : 'bg-dark-900/5 dark:bg-white/5 text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 border border-dark-900/10 dark:border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))
              )}
            </div>

            <div className="max-w-3xl mx-auto space-y-1">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-dark-900/5 dark:bg-white/5 border border-dark-900/10 dark:border-white/10 animate-pulse"
                  >
                    <div className="h-6 bg-dark-900/20 dark:bg-white/20 rounded w-3/4 mb-3" />
                    <div className="h-4 bg-dark-900/15 dark:bg-white/15 rounded w-full mb-4" />
                    <div className="flex items-center gap-4">
                      <div className="h-3 bg-dark-900/15 dark:bg-white/15 rounded w-24" />
                      <div className="h-3 bg-dark-900/15 dark:bg-white/15 rounded w-16" />
                      <div className="h-3 bg-dark-900/15 dark:bg-white/15 rounded w-20" />
                    </div>
                  </div>
                ))
              ) : (
                articles.map((article, index) => (
                  <ArticleCard key={article.id} article={article as unknown as ArticleFromDB} index={index} />
                ))
              )}
            </div>

            {!loading && articles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-dark-900/30 dark:text-white/30 font-sans">
                  该分类下暂无文章
                </p>
                {error && (
                  <p className="text-red-500 text-sm mt-4">
                    错误: {error.message}
                  </p>
                )}
              </div>
            )}

            {!loading && articles.length > 0 && (
              <p className="text-center font-mono text-sm text-dark-900/30 dark:text-white/30 mt-10">
                共 {articles.length} 篇文章
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
