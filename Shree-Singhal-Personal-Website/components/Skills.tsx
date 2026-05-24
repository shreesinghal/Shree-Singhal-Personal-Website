import { skills } from '@/content/skills';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-0 py-0 md:py-8"
    >
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading id="skills-heading" eyebrow="★★★" title="Skills" />
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-rule bg-bg px-3 py-1 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
