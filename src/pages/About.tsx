import { useScrollReveal } from '@/hooks/useScrollReveal';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import { experiences } from '@/data/experience';
import { skills } from '@/data/skills';

export default function About() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const storyRef = useScrollReveal<HTMLDivElement>();
  const timelineRef = useScrollReveal<HTMLDivElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  const designSkills = skills.filter((s) => s.category === '设计');
  const devSkills = skills.filter((s) => s.category === '开发');
  const toolSkills = skills.filter((s) => s.category === '工具');

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
              在<span className="font-display-italic text-ochre-500">极简</span>中，
              <br />
              寻找设计的本质
            </h1>
            <p className="text-ink-500 text-lg leading-relaxed">
              你好，我是墨白。一名热爱设计与代码的独立创作者。
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
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20designer%20minimalist%20style%20warm%20lighting%20soft%20shadows%20cream%20background%20elegant&image_size=portrait_4_3"
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
                  从美术学院毕业后，我进入了互联网行业，成为了一名设计师。
                  起初，我热衷于繁复的效果和炫目的视觉冲击，以为那就是好设计。
                </p>
                <p>
                  直到后来我才慢慢明白，真正的设计不是加法，而是减法。
                  就像米开朗基罗说的那样——"我只是把多余的石头去掉"。
                  设计的本质，是在限制中寻找自由，在简约中追求丰富。
                </p>
                <p>
                  于是我开始学习代码，因为我相信，一个好的设计师应当懂得如何实现自己的设计。
                  从 Figma 到 VS Code，从像素到代码，我在设计与开发的交汇处，
                  找到了属于自己的表达方式。
                </p>
                <p>
                  如今，作为一名独立设计师与开发者，
                  我与志同道合的客户合作，共同打造有温度、有灵魂的数字产品。
                  我相信，好的设计应当像呼吸一样自然——
                  你甚至感觉不到它的存在，却又无处不在。
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    8+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    年设计经验
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    50+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    完成项目
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-medium text-ochre-500">
                    30+
                  </div>
                  <div className="font-sans text-sm text-ink-400 mt-1">
                    合作客户
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
                我的工具箱
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  设计
                </h3>
                <div className="space-y-5">
                  {designSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  开发
                </h3>
                <div className="space-y-5">
                  {devSkills.map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-ochre-500" />
                  工具
                </h3>
                <div className="space-y-5">
                  {toolSkills.map((skill, index) => (
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
