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
        bg: '#080b16',
        surface: {
          DEFAULT: '#0f1225',
          2: '#141836',
          3: '#1a1f42',
        },
        border: {
          DEFAULT: '#1e2348',
          2: '#2a3060',
        },
        text: {
          primary: '#F0F0F8',
          secondary: '#9498b8',
          muted: '#5c6085',
        },
        brand: {
          DEFAULT: '#6C5CE7',
          light: '#a78bfa',
          dim: '#7C6EF6',
          dark: '#4f3cc9',
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
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
