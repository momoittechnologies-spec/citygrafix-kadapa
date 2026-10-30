/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070b14',
          card: '#0f172a',
          cyan: '#06b6d4',
          magenta: '#ec4899',
          yellow: '#f59e0b',
          accent: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-magenta': '0 0 25px -5px rgba(236, 72, 153, 0.4)',
        'glow-yellow': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cmyk-gradient': 'linear-gradient(135deg, #06b6d4 0%, #ec4899 50%, #f59e0b 100%)',
      }
    },
  },
  plugins: [],
}
