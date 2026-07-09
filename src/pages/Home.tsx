import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Code2, Rocket, BarChart3, Shield } from 'lucide-react';
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
  },
  {
    icon: Rocket,
    title: '工程化',
    desc: 'Vite、Webpack、CI/CD',
    category: '工程化',
  },
  {
    icon: BarChart3,
    title: '性能优化',
    desc: 'Core Web Vitals 实战',
    category: '性能优化',
  },
  {
    icon: Shield,
    title: '安全',
    desc: '前端安全最佳实践',
    category: '安全',
  },
];

export default function Home() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const articlesRef = useScrollReveal<HTMLDivElement>();
  const categoriesRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8">
        <div
          ref={heroRef}
          className="reveal text-center max-w-3xl mx-auto"
        >
          <p className="font-sans text-sm tracking-[0.3em] text-ochre-500 uppercase mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            前端开发 · 技术分享 · 开源爱好者
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-ink-900 leading-[1.1] mb-8 text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            用代码，
            <br />
            <span className="font-display-italic text-ochre-500">记录成长</span>
          </h1>
          <p
            className="text-lg md:text-xl text-ink-500 leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            你好，我是码匠，一名前端工程师。
            坚持每周一篇技术分享，至今已发布 <span className="text-ochre-500 font-medium">{articles.length}</span> 篇文章。
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/works" className="btn-primary">
              浏览文章
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </Link>
            <Link to="/about" className="btn-outline">
              关于我
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <span className="font-sans text-xs tracking-widest">向下滚动</span>
          <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1} />
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="container">
          <div ref={articlesRef} className="reveal">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
                  最新文章
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-900 mt-3">
                  最新技术分享
                </h2>
                <p className="font-sans text-sm text-ink-400 mt-2">
                  每周一篇，持续更新中 · 共 {articles.length} 篇
                </p>
              </div>
              <Link
                to="/works"
                className="hidden md:flex items-center gap-2 font-sans text-sm text-ink-500 hover:text-ochre-500 transition-colors duration-300 link-underline"
              >
                查看全部
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-2">
              {latestArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 bg-cream-50">
        <div className="container">
          <div ref={categoriesRef} className="reveal">
            <div className="text-center mb-16">
              <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
                热门分类
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-900 mt-3">
                探索技术领域
              </h2>
              <p className="text-ink-500 mt-4 max-w-lg mx-auto">
                覆盖前端开发全栈技术栈，
                从框架原理到工程实践，助你快速成长。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((cat, index) => (
                <Link
                  key={cat.title}
                  to="/works"
                  className="group p-6 bg-cream-100 border border-cream-300/50 hover:border-ochre-500/30 hover:bg-white transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-ochre-50 flex items-center justify-center mb-4 group-hover:bg-ochre-500 group-hover:text-white transition-all duration-300">
                    <cat.icon className="w-6 h-6 text-ochre-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink-900 mb-2 group-hover:text-ochre-600 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-ink-500 text-sm">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/works" className="btn-outline">
                查看全部分类
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
              联系我
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-ink-900 mt-4 mb-6 text-balance">
              有技术话题？
              <br />
              <span className="font-display-italic text-ochre-500">一起聊聊</span>
            </h2>
            <p className="text-ink-500 text-lg mb-10">
              无论是技术交流、项目合作，还是单纯想探讨前端趋势，
              我都很乐意和你交流。
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-3.5">
              开始对话
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
