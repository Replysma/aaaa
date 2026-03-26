import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD600',
          dark: '#F9A825',
          light: '#FFFDE7',
          soft: '#FFF9C4',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        yellow: '0 8px 40px rgba(255, 214, 0, 0.35)',
        'yellow-sm': '0 4px 20px rgba(255, 214, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
