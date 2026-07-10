import { Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱',
      content: '17151233210@163.com',
      link: 'mailto:17151233210@163.com',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: MapPin,
      title: '位置',
      content: '河北 · 衡水',
      link: null,
      color: 'from-neon-purple to-neon-pink',
    },
  ];

  return (
    <div className="pt-32 relative">
      {/* 背景光效 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-cyan/8 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
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
                联系我
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-dark-900 dark:text-white">有技术话题？</span>
              <span className="gradient-text-animated"> 一起聊聊</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28 relative z-10">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div ref={infoRef} className="reveal">
              <div className="text-left mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-gradient-to-r from-neon-cyan to-transparent" />
                  <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase">
                    联系方式
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-dark-900 dark:text-white">
                  保持联系
                </h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group gradient-border-card p-5 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon
                        className="w-5 h-5 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-dark-900/40 dark:text-white/40 uppercase tracking-wider mb-1">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-dark-900 dark:text-white group-hover:gradient-text transition-all duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-dark-900 dark:text-white">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
