import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#090909',
        primary: '#F5E6C8',
        'accent-red': '#C61F1F',
        'dark-red': '#8A0E0E',
        gold: '#C9A227',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2rem, 10vw, 12rem)', { lineHeight: '1' }],
        'display-lg': ['clamp(2rem, 6vw, 4rem)', { lineHeight: '1.1' }],
        'display-md': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(197, 31, 31, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(197, 31, 31, 0.8)' },
        },
      },
      backdropFilter: {
        'blur-xl': 'blur(24px)',
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
