import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Skill } from '@/data/skills';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: Skill;
  index?: number;
}

export default function SkillBar({ skill, index = 0 }: SkillBarProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans text-sm text-ink-700">{skill.name}</span>
        <span className="font-sans text-xs text-ink-400">{skill.level}%</span>
      </div>
      <div className="h-1 bg-cream-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-ochre-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}
