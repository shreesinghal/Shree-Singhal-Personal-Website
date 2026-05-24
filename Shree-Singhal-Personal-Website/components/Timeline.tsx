import { timeline, TIMELINE_RANGE, type TimelineEntry } from '@/content/timeline';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

type Placed = { entry: TimelineEntry; lane: number };

function assignLanes(entries: TimelineEntry[]): { placed: Placed[]; laneCount: number } {
  const sorted = [...entries].sort((a, b) => a.start - b.start || a.end - b.end);
  const lanes: TimelineEntry[][] = [];
  const placed: Placed[] = [];

  for (const entry of sorted) {
    let lane = -1;
    for (let i = 0; i < lanes.length; i++) {
      const conflict = lanes[i].some(
        (e) => entry.start <= e.end && e.start <= entry.end,
      );
      if (!conflict) {
        lane = i;
        break;
      }
    }
    if (lane === -1) {
      lanes.push([entry]);
      lane = lanes.length - 1;
    } else {
      lanes[lane].push(entry);
    }
    placed.push({ entry, lane });
  }

  return { placed, laneCount: lanes.length };
}

function positionFor(entry: TimelineEntry, span: number) {
  const top = ((entry.start - TIMELINE_RANGE.start) / span) * 100;
  const rawHeight = ((entry.end - entry.start) / span) * 100;
  const height = Math.max(rawHeight, 6); // min visual height for single-year entries
  return { top, height };
}

function BarContent({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-1 rounded-md border-l-[3px] border-accent bg-accent-soft/80 px-3 py-2 text-left transition-colors group-hover:bg-accent-soft">
      <span className="font-serif text-[0.95rem] font-medium leading-snug text-ink">
        {entry.label}
      </span>
      <span className="text-[0.7rem] uppercase tracking-wider text-ink-muted">
        {entry.start}{entry.end !== entry.start ? `–${entry.end}` : ''}
      </span>
    </div>
  );
}

export default function Timeline() {
  const span = TIMELINE_RANGE.end - TIMELINE_RANGE.start; // e.g. 6
  const years = Array.from({ length: span + 1 }, (_, i) => TIMELINE_RANGE.start + i);
  const { placed, laneCount } = assignLanes(timeline);

  // Sort placed entries by start year for the mobile stacked list
  const stacked = [...placed].sort((a, b) => a.entry.start - b.entry.start);

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="scroll-mt-0 py-40 md:py-0"
    >
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading
          id="timeline-heading"
          eyebrow="★★★"
          title={`Timeline`}
        />

        <Reveal>
          {/* Desktop: vertical year column + positioned bars */}
          <div
            className="hidden md:grid"
            style={{ gridTemplateColumns: '72px 1fr' }}
          >
            {/* Year column */}
            <div className="relative" style={{ minHeight: '520px' }}>
              {years.map((y, i) => {
                const top = (i / span) * 100;
                return (
                  <div
                    key={y}
                    className="absolute left-0 right-2 -translate-y-1/2"
                    style={{ top: `${top}%` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-sm font-medium text-ink-muted">
                        {y}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-rule"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lanes container */}
            <div
              className="relative grid gap-3 pl-2"
              style={{
                gridTemplateColumns: `repeat(${Math.max(laneCount, 1)}, minmax(0, 1fr))`,
                minHeight: '520px',
              }}
            >
              {/* Subtle background gridlines at each year */}
              {years.map((y, i) => {
                const top = (i / span) * 100;
                return (
                  <div
                    key={y}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 right-0 h-px bg-rule/60"
                    style={{ top: `${top}%`, gridColumn: `1 / -1` }}
                  />
                );
              })}

              {placed.map(({ entry, lane }) => {
                const { top, height } = positionFor(entry, span);
                const style: React.CSSProperties = {
                  gridColumn: `${lane + 1} / span 1`,
                  position: 'absolute',
                  top: `${top}%`,
                  height: `${height}%`,
                  left: `calc(${(lane / Math.max(laneCount, 1)) * 100}% + 4px)`,
                  width: `calc(${100 / Math.max(laneCount, 1)}% - 8px)`,
                };

                const common = 'group block focus-visible:outline-none';

                if (entry.experienceId) {
                  return (
                    <a
                      key={entry.id}
                      href={`#${entry.experienceId}`}
                      aria-label={`${entry.label} — go to experience details`}
                      style={style}
                      className={common}
                    >
                      <BarContent entry={entry} />
                    </a>
                  );
                }
                return (
                  <div
                    key={entry.id}
                    aria-label={entry.label}
                    style={style}
                    className={common}
                  >
                    <BarContent entry={entry} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: stacked list */}
          <ul className="space-y-3 md:hidden">
            {stacked.map(({ entry }) => {
              const rangeLabel =
                entry.end === entry.start ? `${entry.start}` : `${entry.start}–${entry.end}`;
              const inner = (
                <div className="flex items-center justify-between gap-4 rounded-md border-l-[3px] border-accent bg-accent-soft/70 px-4 py-3">
                  <span className="font-serif text-base font-medium text-ink">
                    {entry.label}
                  </span>
                  <span className="shrink-0 text-xs uppercase tracking-wider text-ink-muted">
                    {rangeLabel}
                  </span>
                </div>
              );
              return (
                <li key={entry.id}>
                  {entry.experienceId ? (
                    <a
                      href={`#${entry.experienceId}`}
                      aria-label={`${entry.label} — go to experience details`}
                      className="block transition-colors hover:bg-accent-soft/80"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
