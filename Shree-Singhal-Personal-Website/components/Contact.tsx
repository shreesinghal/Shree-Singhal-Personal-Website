import { site } from '@/content/site';

export default function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-rule bg-bg"
    >
      <div className="mx-auto max-w-page px-6 py-20 md:px-8 md:py-28">
        <h2
          id="contact-heading"
          className="font-serif text-4xl font-medium leading-tight text-ink md:text-5xl"
        >
          {site.contact.heading}
        </h2>
        <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-ink-muted">
          {site.contact.blurb}
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.socials.github}
              aria-label="GitHub profile"
              className="text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.socials.linkedin}
              aria-label="LinkedIn profile"
              className="text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-6 py-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-serif">
            {site.name} {new Date().getFullYear()}
          </p>
          <a
            href={site.sourceRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif transition-colors hover:text-accent"
          >
            View website source code on GitHub →
          </a>
        </div>
      </div>
    </footer>
  );
}
