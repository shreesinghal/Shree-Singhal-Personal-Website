import { projects } from '@/content/projects';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-0 py-20 md:py-10"
    >
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading id="projects-heading" eyebrow="★★★" title="Projects" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
