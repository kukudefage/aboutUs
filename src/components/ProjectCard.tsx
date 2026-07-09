import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal group cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-cream-200 aspect-[4/3] mb-5">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center justify-between">
            <span className="text-white/90 font-sans text-sm">
              {project.category} · {project.year}
            </span>
            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl font-medium text-ink-900 group-hover:text-ochre-600 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-ink-500 text-sm leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-sans text-xs text-ink-400 bg-cream-200/60 px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
