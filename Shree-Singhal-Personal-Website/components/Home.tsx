import { site } from '@/content/site';

export default function Home() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-page grid-cols-1 gap-10 px-6 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 lg:grid-cols-[1fr_280px] lg:items-center lg:gap-14">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1
            id="home-heading"
            className="font-serif font-medium text-ink"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', lineHeight: 1.05 }}
          >
            {site.name}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            {site.tagline.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="/photos/shreepfp.jpg"
            alt="Shree Singhal"
            className="aspect-square w-full max-w-[280px] rounded-lg object-cover ring-1 ring-rule"
          />
        </div>
      </div>

      <div aria-hidden="true" className="mx-auto h-px max-w-page bg-rule" />
    </section>
  );
}
