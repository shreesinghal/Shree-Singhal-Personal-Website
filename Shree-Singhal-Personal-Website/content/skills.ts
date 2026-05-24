export type SkillGroup = {
  title: string;
  skills: string[];
};

// TODO: replace with real skills.
// Suggested defaults for a CE+CS / embedded / HPC / AI student are listed in
// CLAUDE_CODE_PROMPT.md for reference.
export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Skill A', 'Skill B', 'Skill C', 'Skill D'],
  },
  {
    title: 'Systems',
    skills: ['Skill A', 'Skill B', 'Skill C', 'Skill D'],
  },
  {
    title: 'ML / AI',
    skills: ['Skill A', 'Skill B', 'Skill C', 'Skill D'],
  },
  {
    title: 'Tools',
    skills: ['Skill A', 'Skill B', 'Skill C', 'Skill D'],
  },
];
