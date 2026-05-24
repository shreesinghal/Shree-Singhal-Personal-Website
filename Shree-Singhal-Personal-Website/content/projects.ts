export type Project = {
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
};

// TODO: replace with real projects
export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'Short description of the project goes here.',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Short description of the project goes here.',
    tags: ['Tag A', 'Tag B'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'Short description of the project goes here.',
    tags: ['Tag A', 'Tag B', 'Tag C', 'Tag D'],
    codeUrl: '#',
    liveUrl: '#',
  },
];
