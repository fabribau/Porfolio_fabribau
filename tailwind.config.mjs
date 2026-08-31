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
        'brutal-sm': '2px 2px 0px 0px var(--shadow-color, #0D0D0D)',
        brutal: '4px 4px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-lg': '6px 6px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-xl': '8px 8px 0px 0px var(--shadow-color, #0D0D0D)',
        'brutal-accent': '4px 4px 0px 0px #FFE400',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      },
      fontFamily: {
        sans: [
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
    },
  },
  plugins: [],
};
