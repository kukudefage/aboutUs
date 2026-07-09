import { useScrollReveal } from '@/hooks/useScrollReveal';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import { experiences } from '@/data/experience';
import { skills } from '@/data/skills';
import { articles } from '@/data/articles';

export default function About() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const storyRef = useScrollReveal<HTMLDivElement>();
  const timelineRef = useScrollReveal<HTMLDivElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  const frameworkSkills = skills.filter((s) => s.category === '前端框架');
  const langSkills = skills.filter((s) => s.category === '编程语言' || s.category === '基础技术');
  const otherSkills = skills.filter((s) => s.category === '工程化' || s.category === '服务端' || s.category === '工具' || s.category === '测试' || s.category === '数据库');

  return (
    <div className="pt-32">
      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div className="container">
          <div
            ref={introRef} className="reveal max-w-3xl mx-auto text-center">
            <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
              关于我
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink-900 mt-4 mb-8 text-balance">
              一个<span className="font-display-italic text-ochre-500">热爱代码</span>的
              <br />
              前端工程师
            </h1>
            <p className="text-ink-500 text-lg leading-relaxed">
              你好，我是码匠。一名专注于前端技术的工程师，
              也是一名坚持每周写作的技术博主。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            <div className="md:col-span-2">
              <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20male%20developer%20working%20at%20laptop%20modern%20minimal%20workspace%20warm%20lighting%20clean%20background&image_size=portrait_4_3"
                  alt="个人照片"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div ref={storyRef} className="reveal md:col-span-3 md:pt-8">
              <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900 mb-6">
                我的故事
              </h2>
              <div className="space-y-5 text-ink-600 leading-relaxed">
                <p className="first-letter:font-display first-letter:text-5xl first-letter:font-medium first-letter:text-ochre-500 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                  从大学时代第一次写出 Hello World 开始，
                  我就被前端开发的即时反馈和无限可能深深吸引。
                  一行代码就能在屏幕上看到变化，这种创造感让我欲罢不能。
                </p>
                <p>
                  七年来，我从小白成长为能够独立负责前端架构的工程师。
                  经历了 jQuery 到 React、Webpack 到 Vite、JavaScript 到 TypeScript 的演进，
                  每一次技术变革都让我更加敬畏这个快速发展的领域。
                </p>
                <p>
                  我相信，好的代码和好的文章一样——都需要清晰的结构、恰到好处的注释，
                  以及能让下一个人（或未来的自己）轻松理解的诚意。
                  这也是为什么我坚持写技术博客：分享不仅是输出，更是最好的学习方式。
                </p>
                <p>
                  除了工作，我也是一名开源爱好者，活跃于 GitHub 社区。
                  闲暇时喜欢研究新的前端技术、阅读源码，或者泡一杯茶写点什么。
                  如果你也对前端技术充满热情，欢迎随时找我交流！
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    7+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    年前端经验
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    {articles.length}+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    技术文章
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    2k+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    GitHub Stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8 bg-cream-50">
        <div className="container">
          <div ref={timelineRef} className="reveal">
            <div className="text-center mb-16">
              <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
                经历
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-900 mt-3">
                一路走来
              </h2>
            </div>
            <Timeline experiences={experiences} />
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-8">
        <div className="container">
          <div ref={skillsRef} className="reveal">
            <div className="text-center mb-16">
              <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
                技能
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-900 mt-3">
                我的技术栈
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  前端框架
                </h3>
                <div className="space-y-5">
                  {frameworkSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  语言与基础
                </h3>
                <div className="space-y-5">
                  {langSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  工程化与工具
                </h3>
                <div className="space-y-5">
                  {otherSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
