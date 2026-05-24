import type { Project } from '@/content/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-rule bg-bg transition-colors hover:border-accent/40">
      <div
        aria-hidden="true"
        className="relative aspect-[4/3] w-full overflow-hidden bg-accent-soft/70"
      >
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center font-serif text-base italic text-ink-muted">
          {project.title}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-xl font-medium text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-rule bg-bg px-2.5 py-0.5 text-xs text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-5 border-t border-rule/60 pt-4 text-sm font-medium">
          <a
            href={project.codeUrl}
            aria-label={`${project.title} — source code`}
            className="text-ink hover:text-accent"
          >
            Code
            <span aria-hidden="true" className="ml-1">↗</span>
          </a>
          <a
            href={project.liveUrl}
            aria-label={`${project.title} — live demo`}
            className="text-ink hover:text-accent"
          >
            Live
            <span aria-hidden="true" className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
