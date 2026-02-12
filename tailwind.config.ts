import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0D',
        surface: {
          DEFAULT: '#111113',
          2: '#151517',
          3: '#1A1A1E',
        },
        border: {
          DEFAULT: '#1E1E22',
          2: '#2A2A30',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#63636E',
        },
        brand: {
          DEFAULT: '#6C5CE7',
          light: '#C4B5FD',
          dim: '#7C6EF6',
        },
        success: '#34D399',
        warning: '#FBBF24',
        danger: '#F87171',
      },
      fontFamily: {
        heading: ['"Krona One"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
