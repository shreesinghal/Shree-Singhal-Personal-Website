import { experience } from '@/content/experience';
import SectionHeading from './SectionHeading';
import ExperienceItem from './ExperienceItem';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-0 py-20 md:py-10"
    >
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading id="experience-heading" eyebrow="★★★" title="Experience" />
        <Reveal>
          <ul className="border-t border-rule/60">
            {experience.map((entry) => (
              <ExperienceItem key={entry.id} entry={entry} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
