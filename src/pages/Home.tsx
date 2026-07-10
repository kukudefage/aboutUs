import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Code2, Rocket, BarChart3, Shield, Terminal } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const latestArticles = [...articles].reverse().slice(0, 5);

const featuredCategories = [
  {
    icon: Code2,
    title: '前端框架',
    desc: 'React、Vue 深度实践',
    category: 'React',
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    icon: Rocket,
    title: '工程化',
    desc: 'Vite、Webpack、CI/CD',
    category: '工程化',
    color: 'from-neon-purple to-neon-pink',
  },
  {
    icon: BarChart3,
    title: '性能优化',
    desc: 'Core Web Vitals 实战',
    category: '性能优化',
    color: 'from-neon-green to-neon-cyan',
  },
  {
    icon: Shield,
    title: '安全',
    desc: '前端安全最佳实践',
    category: '安全',
    color: 'from-neon-orange to-neon-pink',
  },
];

export default function Home() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const articlesRef = useScrollReveal<HTMLDivElement>();
  const categoriesRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="relative">
      {/* 动态背景光效 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero 区域 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
        {/* 网格背景 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div
          ref={heroRef}
          className="reveal relative text-center max-w-4xl mx-auto z-10"
        >
          {/* 终端风格标签 */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <Terminal className="w-3.5 h-3.5 text-neon-green" strokeWidth={2} />
            <span className="font-mono text-xs text-white/60 tracking-wider">
              前端开发 · 技术分享 · 开源爱好者
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">用代码，</span>
            <br />
            <span className="gradient-text-animated text-glow-purple">记录成长</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            你好，我是智发，一名前端工程师。
            <br className="hidden sm:block" />
            坚持每周一篇技术分享，至今已发布{' '}
            <span className="gradient-text-2 font-semibold">{articles.length}</span>{' '}
            篇文章。
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <Link to="/works" className="btn-glow group">
              浏览文章
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
            <Link to="/contact" className="btn-neon-outline">
              联系我
            </Link>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <span className="font-mono text-xs tracking-widest">向下滚动</span>
          <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={1} />
        </div>
      </section>

      {/* 最新文章 */}
      <section className="section-padding px-6 md:px-8 relative z-10">
        <div className="container">
          <div ref={articlesRef} className="reveal">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-gradient-to-r from-neon-cyan to-transparent" />
                  <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase">
                    最新文章
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  最新技术分享
                </h2>
                <p className="font-sans text-sm text-white/40 mt-2">
                  每周一篇，持续更新中 · 共 {articles.length} 篇
                </p>
              </div>
              <Link
                to="/works"
                className="hidden md:flex items-center gap-2 font-sans text-sm text-white/50 hover:text-white transition-colors duration-300 link-underline"
              >
                查看全部
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-1">
              {latestArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 热门分类 */}
      <section className="section-padding px-6 md:px-8 relative z-10">
        <div className="container">
          <div ref={categoriesRef} className="reveal">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-neon-purple" />
                <span className="font-mono text-xs tracking-[0.2em] text-neon-purple uppercase">
                  热门分类
                </span>
                <span className="w-8 h-px bg-gradient-to-l from-transparent to-neon-purple" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                探索技术领域
              </h2>
              <p className="text-white/40 mt-4 max-w-lg mx-auto">
                覆盖前端开发全栈技术栈，
                从框架原理到工程实践，助你快速成长。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((cat, index) => (
                <Link
                  key={cat.title}
                  to="/works"
                  className="group gradient-border-card p-6 hover:scale-[1.03] transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/works" className="btn-neon-outline">
                查看全部分类
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="section-padding px-6 md:px-8 relative z-10">
        <div className="container">
          <div ref={ctaRef} className="reveal max-w-2xl mx-auto text-center">
            <div className="gradient-border-card p-12 md:p-16 relative overflow-hidden">
              {/* 内部光效 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-neon-purple/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase">
                    联系我
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                  有技术话题？
                  <br />
                  <span className="gradient-text-animated">一起聊聊</span>
                </h2>
                <p className="text-white/40 text-lg mb-10">
                  无论是技术交流、项目合作，还是单纯想探讨前端趋势，
                  我都很乐意和你交流。
                </p>
                <Link to="/contact" className="btn-glow text-base px-8 py-3.5">
                  开始对话
                  <ArrowRight className="w-5 h-5 ml-2" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
