export type TimelineEntry = {
  id: string;
  label: string;
  start: number; // year, inclusive
  end: number;   // year, inclusive
  experienceId?: string; // matches an `id` in content/experience.ts (omit for non-link rows like education)
};

export const TIMELINE_RANGE = { start: 2020, end: 2026 } as const;

// TODO: replace with real timeline entries.
// Entries with `experienceId` will scroll to the matching Experience card when clicked.
// Entries without `experienceId` render as non-link rows (e.g., education).
export const timeline: TimelineEntry[] = [
  {
    id: 'tl-edu',
    label: 'Education — placeholder',
    start: 2020,
    end: 2026,
  },
  {
    id: 'tl-exp-1',
    label: 'Experience One',
    start: 2021,
    end: 2022,
    experienceId: 'exp-1',
  },
  {
    id: 'tl-exp-2',
    label: 'Experience Two',
    start: 2022,
    end: 2024,
    experienceId: 'exp-2',
  },
  {
    id: 'tl-exp-3',
    label: 'Experience Three',
    start: 2024,
    end: 2026,
    experienceId: 'exp-3',
  },
];
