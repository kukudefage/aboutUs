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
    },
    {
      icon: MapPin,
      title: '位置',
      content: '河北 · 衡水',
      link: null,
    },
  ];

  return (
    <div className="pt-32">
      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="container">
          <div
            ref={headerRef}
            className="reveal max-w-3xl mx-auto text-center"
          >
            <span className="font-sans text-xs tracking-[0.2em] text-ochre-500 uppercase">
              联系我
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink-900 mt-4 mb-6 text-balance">
              有技术话题？
              <span className="font-display-italic text-ochre-500"> 一起聊聊</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div ref={infoRef} className="reveal">
              <div className="text-left mb-12">
                <h2 className="font-display text-2xl font-medium text-ink-900 mb-6">
                  联系方式
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-ochre-50 flex items-center justify-center flex-shrink-0">
                      <item.icon
                        className="w-5 h-5 text-ochre-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-ink-400 uppercase tracking-wider mb-1">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-ink-900 hover:text-ochre-500 transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-ink-900">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-cream-300/60">
                <p className="font-sans text-xs text-ink-400 uppercase tracking-wider mb-4">
                  关注我
                </p>
                <div className="flex flex-wrap gap-3">
                  {['GitHub', 'Twitter', '掘金', '知乎', 'CSDN', 'SegmentFault'].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="px-4 py-2 border border-cream-300 text-sm text-ink-600 hover:border-ochre-500 hover:text-ochre-500 transition-all duration-300"
                        aria-label={platform}
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
