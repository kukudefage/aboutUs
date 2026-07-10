import { Briefcase, GraduationCap } from 'lucide-react';
import type { Experience } from '@/data/experience';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream-300 md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;
  const Icon = experience.type === 'work' ? Briefcase : GraduationCap;

  return (
    <div
      ref={ref}
      className={`reveal relative md:flex items-start ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="hidden md:block md:w-1/2" />

      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cream-100 border-2 border-ochre-500 flex items-center justify-center z-10">
        <Icon className="w-3.5 h-3.5 text-ochre-500" strokeWidth={2} />
      </div>

      <div
        className={`md:w-1/2 pl-14 md:pl-0 ${
          isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
        }`}
      >
        <span className="font-sans text-xs tracking-wider text-ochre-500 uppercase">
          {experience.year}
        </span>
        <h4 className="font-display text-xl font-medium text-ink-900 mt-2 mb-1">
          {experience.title}
        </h4>
        <p className="font-sans text-sm text-ink-500 mb-3">
          {experience.organization}
        </p>
        <p className="text-ink-600 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
