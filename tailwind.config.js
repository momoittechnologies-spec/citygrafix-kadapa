/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        print: {
          cyan: '#0284c7',
          magenta: '#e11d48',
          yellow: '#f59e0b',
          blue: '#2563eb',
          purple: '#9333ea',
          emerald: '#059669',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        anek: ['Anek Telugu', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'color-cyan': '0 10px 25px -5px rgba(2, 132, 199, 0.25)',
        'color-magenta': '0 10px 25px -5px rgba(225, 29, 72, 0.25)',
        'color-amber': '0 10px 25px -5px rgba(245, 158, 11, 0.25)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 35px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        'atelier-sm': '0 2px 8px -1px rgba(24, 24, 27, 0.04), 0 1px 3px -1px rgba(24, 24, 27, 0.02)',
        'atelier-md': '0 12px 28px -6px rgba(24, 24, 27, 0.06), 0 4px 12px -2px rgba(24, 24, 27, 0.03)',
        'atelier-lg': '0 25px 50px -12px rgba(24, 24, 27, 0.1), 0 8px 24px -4px rgba(24, 24, 27, 0.04)',
        'glow-rose': '0 0 40px -10px rgba(225, 29, 72, 0.35)',
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'cmyk-strip': 'linear-gradient(90deg, #00A3E0 0%, #00A3E0 25%, #EC008C 25%, #EC008C 50%, #FFD100 50%, #FFD100 75%, #231F20 75%, #231F20 100%)',
        'cmyk-gradient': 'linear-gradient(135deg, #0284c7 0%, #e11d48 50%, #f59e0b 100%)',
        'mesh-light': 'radial-gradient(at 0% 0%, rgba(2, 132, 199, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(225, 29, 72, 0.08) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(245, 158, 11, 0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
