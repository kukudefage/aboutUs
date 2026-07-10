import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Code2, Rocket, BarChart3, Shield, Terminal, Sparkles, Zap, Code, Cpu, Database, Globe } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import ParticleBackground from '@/components/ParticleBackground';
import CursorGlow from '@/components/CursorGlow';
import TiltCard from '@/components/TiltCard';
import GlowCard from '@/components/GlowCard';
import GlitchText from '@/components/GlitchText';
import CodeRain from '@/components/CodeRain';
import { articles } from '@/data/articles';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useCountUp } from '@/hooks/useCountUp';
import { useMagnetic } from '@/hooks/useMagnetic';

const latestArticles = [...articles].reverse().slice(0, 5);

const featuredCategories = [
  {
    icon: Code2,
    title: '前端框架',
    desc: 'React、Vue 深度实践',
    category: 'React',
    color: 'from-neon-cyan to-neon-blue',
    glow: 'shadow-[0_0_40px_rgba(34,211,238,0.2)]',
  },
  {
    icon: Rocket,
    title: '工程化',
    desc: 'Vite、Webpack、CI/CD',
    category: '工程化',
    color: 'from-neon-purple to-neon-pink',
    glow: 'shadow-[0_0_40px_rgba(168,85,247,0.2)]',
  },
  {
    icon: BarChart3,
    title: '性能优化',
    desc: 'Core Web Vitals 实战',
    category: '性能优化',
    color: 'from-neon-green to-neon-cyan',
    glow: 'shadow-[0_0_40px_rgba(52,211,153,0.2)]',
  },
  {
    icon: Shield,
    title: '安全',
    desc: '前端安全最佳实践',
    category: '安全',
    color: 'from-neon-orange to-neon-pink',
    glow: 'shadow-[0_0_40px_rgba(251,146,60,0.2)]',
  },
];

const techStack = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Cpu },
  { name: 'Vue', icon: Globe },
  { name: 'Node.js', icon: Database },
  { name: 'Vite', icon: Zap },
  { name: 'Webpack', icon: Rocket },
  { name: 'TailwindCSS', icon: Sparkles },
  { name: 'Git', icon: Code2 },
];

const stats = [
  { label: '技术文章', value: 184, suffix: '+', color: 'text-neon-cyan' },
  { label: '开源项目', value: 20, suffix: '+', color: 'text-neon-purple' },
  { label: '代码行数', value: 500000, suffix: '+', color: 'text-neon-green' },
];

export default function Home() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const articlesRef = useScrollReveal<HTMLDivElement>();
  const categoriesRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useScrollReveal<HTMLDivElement>();
  const techStackRef = useScrollReveal<HTMLDivElement>();

  const typewriterText = useTypewriter({
    words: ['前端开发', '技术分享', '开源爱好者', 'React / Vue', '性能优化', '工程化实践'],
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseTime: 2000,
    loop: true,
  });

  const articleCount = useCountUp({ end: articles.length, duration: 2500, delay: 500 });
  const projectCount = useCountUp({ end: 26, duration: 2000, delay: 800 });
  const codeCount = useCountUp({ end: 500, duration: 3000, delay: 1100 });

  const magneticBtn1 = useMagnetic({ strength: 15, scale: 1.03 });
  const magneticBtn2 = useMagnetic({ strength: 12, scale: 1.02 });
  const magneticCta = useMagnetic({ strength: 20, scale: 1.05 });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground count={60} />
      <CodeRain opacity={0.08} speed={0.8} />
      <CursorGlow />

      {/* Hero 区域 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
        {/* 网格背景 */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* 浮动装饰元素 */}
        <div className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-neon-cyan/5 blur-xl animate-float" />
        <div className="absolute top-1/3 right-[15%] w-32 h-32 rounded-full bg-neon-purple/5 blur-2xl animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-[20%] w-16 h-16 rounded-full bg-neon-pink/5 blur-xl animate-float" style={{ animationDelay: '2s' }} />

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
              前端开发 · {typewriterText}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">用代码，</span>
            <br />
            <GlitchText className="gradient-text-animated text-glow-rainbow">记录成长</GlitchText>
          </h1>

          <p
            className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            你好，我是智发，一名前端工程师。
            <br className="hidden sm:block" />
            坚持每周一篇技术分享，至今已发布{' '}
            <span ref={articleCount.ref} className="gradient-text-2 font-bold text-xl">
              {articleCount.count}
            </span>{' '}
            篇文章。
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <Link
              to="/works"
              ref={magneticBtn1.ref as React.RefObject<HTMLAnchorElement>}
              onMouseMove={magneticBtn1.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
              onMouseLeave={magneticBtn1.onMouseLeave as unknown as React.MouseEventHandler<HTMLAnchorElement>}
              className="btn-glow group inline-flex"
            >
              <Sparkles className="w-4 h-4 mr-2" strokeWidth={1.5} />
              浏览文章
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              ref={magneticBtn2.ref as React.RefObject<HTMLAnchorElement>}
              onMouseMove={magneticBtn2.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
              onMouseLeave={magneticBtn2.onMouseLeave as unknown as React.MouseEventHandler<HTMLAnchorElement>}
              className="btn-neon-outline group inline-flex"
            >
              <Zap className="w-4 h-4 mr-2" strokeWidth={1.5} />
              联系我
            </Link>
          </div>

          {/* 统计数据 */}
          <div
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <div ref={statsRef} className={`text-3xl md:text-4xl font-display font-bold ${stats[0].color}`}>
                <span ref={articleCount.ref}>{articleCount.count}</span>+
              </div>
              <div className="text-white/30 text-xs md:text-sm mt-1 font-mono">技术文章</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-display font-bold ${stats[1].color}`}>
                <span ref={projectCount.ref}>{projectCount.count}</span>+
              </div>
              <div className="text-white/30 text-xs md:text-sm mt-1 font-mono">开源项目</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-display font-bold ${stats[2].color}`}>
                <span ref={codeCount.ref}>{codeCount.count}</span>k+
              </div>
              <div className="text-white/30 text-xs md:text-sm mt-1 font-mono">代码行数</div>
            </div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          <span className="font-mono text-xs tracking-widest">向下滚动</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-neon-cyan/50 animate-bounce" />
          </div>
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

      {/* 技术栈跑马灯 */}
      <section className="py-16 relative z-10 overflow-hidden">
        <div ref={techStackRef} className="reveal">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase">
              技术栈
            </span>
          </div>
          <div className="marquee-container">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
            <div className="marquee-content">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl glass hover:glass-strong transition-all duration-300 hover:scale-105 group flex-shrink-0"
                >
                  <tech.icon className="w-5 h-5 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300 flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-mono text-sm text-white/60 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
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
                <TiltCard key={cat.title} max={12}>
                  <GlowCard className="h-full">
                    <Link
                      to="/works"
                      className="group gradient-border-card p-6 block h-full hover:scale-100 transition-all duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${cat.glow}`}>
                        <cat.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                        {cat.title}
                      </h3>
                      <p className="text-white/40 text-sm">
                        {cat.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-neon-cyan/0 group-hover:text-neon-cyan transition-all duration-300">
                        <span className="font-mono text-xs">查看更多</span>
                        <ArrowRight className="w-3.5 h-3.5 -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </GlowCard>
                </TiltCard>
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
          <div ref={ctaRef} className="reveal max-w-3xl mx-auto text-center">
            <GlowCard>
              <div className="gradient-border-card p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-purple/10 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-neon-cyan/5 blur-[80px]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase">
                      联系我
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                    有技术话题？
                    <br />
                    <GlitchText className="gradient-text-animated text-glow-rainbow">一起聊聊</GlitchText>
                  </h2>
                  <p className="text-white/40 text-lg mb-10">
                    无论是技术交流、项目合作，还是单纯想探讨前端趋势，
                    我都很乐意和你交流。
                  </p>
                  <Link
                    to="/contact"
                    ref={magneticCta.ref as React.RefObject<HTMLAnchorElement>}
                    onMouseMove={magneticCta.onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
                    onMouseLeave={magneticCta.onMouseLeave as unknown as React.MouseEventHandler<HTMLAnchorElement>}
                    className="btn-glow text-base px-8 py-3.5 inline-flex"
                  >
                    开始对话
                    <ArrowRight className="w-5 h-5 ml-2" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
