import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        ink: {
          DEFAULT: '#1F1B16',
          muted: '#5A5048',
        },
        accent: {
          DEFAULT: '#C2683C',
          soft: '#E8D3C2',
        },
        rule: '#E7DFD3',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Spectral', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
