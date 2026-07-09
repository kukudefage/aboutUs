import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱',
      content: 'hello@mobai.design',
      link: 'mailto:hello@mobai.design',
    },
    {
      icon: MapPin,
      title: '位置',
      content: '中国 · 杭州',
      link: null,
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00 - 18:00',
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
              让我们
              <span className="font-display-italic text-ochre-500"> 一起 </span>
              创造点什么
            </h1>
            <p className="text-ink-500 text-lg leading-relaxed">
              无论是项目合作、设计咨询，还是单纯想聊聊设计与生活，
              我都很期待收到你的消息。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20 md:pb-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div ref={infoRef} className="reveal lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900 mb-6">
                  联系方式
                </h2>
                <p className="text-ink-500 leading-relaxed mb-8">
                  通常我会在 24 小时内回复邮件。
                  如果你有紧急的事情，也可以通过社交媒体找到我。
                </p>
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

              <div className="pt-8 border-t border-cream-300/60">
                <p className="font-sans text-xs text-ink-400 uppercase tracking-wider mb-4">
                  关注我
                </p>
                <div className="flex gap-4">
                  {['GitHub', 'Twitter', 'Instagram', 'Dribbble'].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-ink-500 hover:border-ochre-500 hover:text-ochre-500 transition-all duration-300"
                        aria-label={platform}
                      >
                        <span className="font-sans text-xs">
                          {platform.charAt(0)}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div ref={formRef} className="reveal lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-cream-50 border border-cream-300/50 p-10 md:p-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-ochre-50 flex items-center justify-center mx-auto mb-6">
                    <Check
                      className="w-8 h-8 text-ochre-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-ink-900 mb-4">
                    消息已发送
                  </h3>
                  <p className="text-ink-500 max-w-sm mx-auto">
                    感谢你的留言！我会尽快回复你，
                    期待我们的对话。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      label="姓名"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="你的名字"
                      required
                    />
                    <FormField
                      label="邮箱"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <FormField
                    label="主题"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="想聊点什么？"
                  />

                  <div>
                    <label className="block font-sans text-sm text-ink-700 mb-3">
                      留言
                      <span className="text-ochre-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="详细说说你的想法..."
                      required
                      className="w-full bg-transparent border-0 border-b border-cream-300 focus:border-ochre-500 outline-none transition-colors duration-300 py-3 text-ink-900 placeholder:text-ink-400 resize-none font-serif"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto px-10 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        发送中...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        发送消息
                        <Send
                          className="w-4 h-4"
                          strokeWidth={1.5}
                        />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-sans text-sm text-ink-700 mb-3">
        {label}
        {required && <span className="text-ochre-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-cream-300 focus:border-ochre-500 outline-none transition-colors duration-300 py-3 text-ink-900 placeholder:text-ink-400 font-serif"
      />
    </div>
  );
}
