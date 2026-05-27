export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'Java', 'SystemVerilog', 'Verilog', 'MATLAB', 'Kotlin', 'Racket'],
  },
  {
    title: 'Embedded & Hardware',
    skills: [
      'RISC-V Design',
      'STM32CubeIDE',
      'Arduino',
      'KiCAD',
      'Altium',
      'LT SPICE',
      'Xilinx',
      'Quartus Prime Lite',
    ],
  },
  {
    title: 'HPC & Systems',
    skills: ['Slurm', 'CUDA', 'Linux / WSL', 'Git', 'Bootstrapping & Sensitivity Analysis'],
  },
  {
    title: 'Methods & ML',
    skills: [
      'Reinforcement Learning (DQN / Q-Learning)',
      'Computer Vision (GroundingDINO, CoTracker3)',
      'PID Control',
      'Object-Oriented Design',
      'Agile / SCRUM',
    ],
  },
];
