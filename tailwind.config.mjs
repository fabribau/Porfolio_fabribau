/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#F5F0E8',
          dark: '#0D0D0D',
          surface: {
            light: '#FFFFFF',
            dark: '#181818',
          },
        },
        fg: {
          light: '#0D0D0D',
          dark: '#F5F0E8',
          muted: {
            light: '#4B5563',
            dark: '#9CA3AF',
          },
        },
        accent: {
          yellow: '#FFE400',
          pink: '#FF3D8A',
          lime: '#B4FF39',
          cyan: '#00F0FF',
          orange: '#FF6B00',
          purple: '#8B5CF6',
        },
      },
      boxShadow: {
        'brutal-none': '0px 0px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-sm': '2px 2px 0px 0px var(--shadow-color, #0D0D0D)',
        brutal: '4px 4px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-md': '5px 5px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-lg': '6px 6px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-xl': '8px 8px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-yellow': '4px 4px 0px 0px #FFE400',
        'brutal-pink': '4px 4px 0px 0px #FF3D8A',
        'brutal-lime': '4px 4px 0px 0px #B4FF39',
        'brutal-cyan': '4px 4px 0px 0px #00F0FF',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Space Grotesk"',
          'Impact',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      keyframes: {
        'radar-pulse': {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'radar': 'radar-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
