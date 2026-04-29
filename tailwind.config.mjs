/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-surface': '#F4F7EE',
        'brand-surface-alt': '#E6F0DD',
        'brand-surface-soft': '#D6E7C8',
        'brand-primary': '#2F6B3B',
        'brand-primary-deep': '#1E4D2B',
        'brand-primary-deeper': '#153720',
        'brand-text': '#1F3124',
        'brand-text-muted': '#56705C',
        'brand-border': '#A8C39D',
        'brand-accent': '#C58A2E',
        'brand-accent-soft': '#E4BE73',
        'deep-space': '#153720',
        'warm-ivory': '#F4F7EE',
        'soft-sage': '#A8C39D',
        'burnt-copper': '#C58A2E',
        'deep-sage': '#2F6B3B',
        'charcoal': '#1F3124',
        slate: {
          DEFAULT: '#56705C',
          50: '#F4F7EE',
          100: '#E6F0DD',
          200: '#D6E7C8',
          300: '#A8C39D',
          400: '#56705C',
          500: '#56705C',
          600: '#1F3124',
          700: '#1E4D2B',
          800: '#153720',
          900: '#153720',
        },
        gold: {
          500: '#C58A2E',
          400: '#E4BE73',
          300: '#D6E7C8',
        },
        teal: {
          500: '#D6E7C8',
          400: '#2F6B3B',
        },
        navy: {
          900: '#153720',
          800: '#1E4D2B',
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
