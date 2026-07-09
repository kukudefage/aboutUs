import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import ProjectCard from '@/components/ProjectCard';
import { articles } from '@/data/articles';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const articlesRef = useScrollReveal<HTMLDivElement>();
  const worksRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8">
        <div
          ref={heroRef}
          className="reveal text-center max-w-3xl mx-auto"
        >
          <p className="font-sans text-sm tracking-[0.3em] text-ochre-500 uppercase mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            设计 · 写作 · 思考
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-ink-900 leading-[1.1] mb-8 text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            在留白处，
            <br />
            <span className="font-display-italic text-ochre-500">遇见设计</span>
          </h1>
          <p
            className="text-lg md:text-xl text-ink-500 leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            我是墨白，一名独立设计师与开发者。
            以极简之笔，探寻设计的本质与温度。
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/works" className="btn-primary">
              查看作品
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
                  思考与记录
                </h2>
              </div>
              <Link
                to="#"
                className="hidden md:flex items-center gap-2 font-sans text-sm text-ink-500 hover:text-ochre-500 transition-colors duration-300 link-underline"
              >
                查看全部
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-2">
              {articles.slice(0, 4).map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 bg-cream-50">
        <div className="container">
          <div ref={worksRef} className="reveal">
            <div className="text-center mb-16">
              <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
                精选作品
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-900 mt-3">
                用心打磨的项目
              </h2>
              <p className="text-ink-500 mt-4 max-w-lg mx-auto">
                每一个项目都是一次探索，
                在限制中寻找自由，在简约中追求丰富。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/works" className="btn-outline">
                查看全部作品
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
              有项目想法？
              <br />
              <span className="font-display-italic text-ochre-500">让我们聊聊</span>
            </h2>
            <p className="text-ink-500 text-lg mb-10">
              无论是合作、咨询，还是单纯想打个招呼，
              我都很乐意收到你的消息。
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
