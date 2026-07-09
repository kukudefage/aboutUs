import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['全部', 'Web 设计', '移动应用', '品牌网站', '内容平台', '品牌设计'];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  const filteredProjects =
    activeCategory === '全部'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32">
      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="container">
          <div
            ref={headerRef}
            className="reveal max-w-3xl mx-auto text-center"
          >
            <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
              作品集
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink-900 mt-4 mb-6 text-balance">
              用心打磨的
              <span className="font-display-italic text-ochre-500"> 每一个 </span>
              项目
            </h1>
            <p className="text-ink-500 text-lg leading-relaxed">
              从品牌设计到网站开发，从移动应用到内容平台——
              每一个项目都是一次与客户共同的探索之旅。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28">
        <div className="container">
          <div ref={gridRef} className="reveal">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 font-sans text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-ink-900 text-cream-100'
                      : 'bg-transparent text-ink-500 hover:text-ink-900 border border-cream-300 hover:border-ink-900/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-ink-400 font-sans">
                  该分类下暂无作品
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
