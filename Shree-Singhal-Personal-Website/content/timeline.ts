export type TimelineEntry = {
  id: string;
  label: string;
  start: number; // year, inclusive
  end: number;   // year, inclusive
  experienceId?: string; // matches an `id` in content/experience.ts (omit for non-link rows like education)
};

export const TIMELINE_RANGE = { start: 2022, end: 2026 } as const;

// Entries with `experienceId` will scroll to the matching Experience card when clicked.
// Entries without `experienceId` render as non-link rows (e.g., education, projects).
export const timeline: TimelineEntry[] = [
  {
    id: 'tl-edu',
    label: 'B.S. CompE + CS, Northeastern University',
    start: 2022,
    end: 2026,
  },
  {
    id: 'tl-ta',
    label: 'Khoury TA — Fundamentals of CS',
    start: 2023,
    end: 2023,
    experienceId: 'khoury-ta',
  },
  {
    id: 'tl-asmpt',
    label: 'ASMPT SEMI — SWE Co-op',
    start: 2024,
    end: 2024,
    experienceId: 'asmpt',
  },
  {
    id: 'tl-mitre',
    label: 'MITRE — ML & Embedded Co-op',
    start: 2025,
    end: 2025,
    experienceId: 'mitre',
  },
  {
    id: 'tl-renu',
    label: 'ReNU - Wind Turbine Software + Electrical Lead',
    start: 2024,
    end: 2026,
  },
  {
    id: 'tl-mitosis',
    label: 'NURobotics — Project Mitosis (Delta 3D Printer)',
    start: 2024,
    end: 2026,
  },
  {
    id: 'tl-peak',
    label: 'PEAK Grant — Ambient Backscatter Research',
    start: 2025,
    end: 2026,
  },
  {
    id: 'tl-capstone',
    label: 'Capstone — Drone Tracking Laser Charging',
    start: 2025,
    end: 2025,
  },
];
