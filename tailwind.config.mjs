/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0a0e1a',
        'warm-ivory': '#faf6f1',
        'soft-sage': '#c8d5b9',
        'burnt-copper': '#b87333',
        'deep-sage': '#8faa7c',
        'charcoal': '#1a1a1a',
        slate: {
          DEFAULT: '#6b7280',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#6b7280',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gold: {
          500: '#D4A843',
          400: '#E4BC6A',
          300: '#F0D49A',
        },
        teal: {
          500: '#06B6D4',
          400: '#22D3EE',
        },
        navy: {
          900: '#0B1D3A',
          800: '#12284B',
        },
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounceSlow 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 0.8s ease-in-out forwards',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
