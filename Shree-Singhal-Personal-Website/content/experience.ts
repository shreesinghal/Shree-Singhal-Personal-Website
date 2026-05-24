export type ExperienceSection = {
  heading: string;
  body: string;
};

export type ExperiencePhoto = {
  // Path under /public when provided (e.g., '/experience/exp-1/cover.jpg').
  // When omitted, the detail page renders a captioned placeholder tile.
  src?: string;
  alt: string;
  caption?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
  // Detail-page content — used by app/experience/[id]/page.tsx.
  summary?: string;
  sections?: ExperienceSection[];
  photos?: ExperiencePhoto[];
};

// TODO: replace with real experience entries.
// Keep `id` stable — it is referenced from content/timeline.ts so each timeline
// bar can scroll to its matching experience entry, and it is also used as the
// URL slug for the per-experience detail page at /experience/<id>/.
export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Role Title',
    company: 'Company A',
    dates: 'Date Range',
    location: 'City, ST',
    bullets: [
      'Placeholder bullet point about a meaningful contribution or outcome.',
      'Placeholder bullet point about a technical detail or impact.',
    ],
    summary:
      'A longer placeholder paragraph that sets up what this role was about — the team, the product, and the kind of problems being worked on day to day. Replace with a real overview.',
    sections: [
      {
        heading: 'What I worked on',
        body:
          'Placeholder section. Use this block to describe the main project or projects in detail — the goals, the constraints, and the approach you took.',
      },
      {
        heading: 'What I learned',
        body:
          'Placeholder section. Use this block to reflect on the most valuable technical or non-technical lessons from the role.',
      },
    ],
    photos: [
      { alt: 'Placeholder photo from Company A', caption: 'Photo caption goes here.' },
      { alt: 'Placeholder photo from Company A', caption: 'Another caption.' },
    ],
  },
  {
    id: 'exp-2',
    role: 'Role Title',
    company: 'Company B',
    dates: 'Date Range',
    location: 'City, ST',
    bullets: [
      'Placeholder bullet point about a meaningful contribution or outcome.',
      'Placeholder bullet point about a technical detail or impact.',
    ],
    summary:
      'A longer placeholder paragraph for Company B. Replace with a real overview of the role and what made it interesting.',
    sections: [
      {
        heading: 'What I worked on',
        body: 'Placeholder section. Replace with real detail.',
      },
    ],
    photos: [
      { alt: 'Placeholder photo from Company B', caption: 'Photo caption goes here.' },
    ],
  },
  {
    id: 'exp-3',
    role: 'Role Title',
    company: 'Company C',
    dates: 'Date Range',
    location: 'City, ST',
    bullets: [
      'Placeholder bullet point about a meaningful contribution or outcome.',
      'Placeholder bullet point about a technical detail or impact.',
    ],
    summary:
      'A longer placeholder paragraph for Company C. Replace with a real overview of the role and what made it interesting.',
    sections: [
      {
        heading: 'What I worked on',
        body: 'Placeholder section. Replace with real detail.',
      },
    ],
    photos: [
      { alt: 'Placeholder photo from Company C', caption: 'Photo caption goes here.' },
    ],
  },
];

export function getExperienceById(id: string): Experience | undefined {
  return experience.find((e) => e.id === id);
}
