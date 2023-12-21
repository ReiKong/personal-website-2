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
        primary: 'rgb(var(--color-primary) / 1)',
        secondary1: 'rgb(var(--color-secondary1) / 1)',
        secondary2: 'rgb(var(--color-secondary2) / 0.7)',
        secondary3: 'rgb(var(--color-secondary3) / 0.3)',
        accent: 'rgb(var(--color-accent) / 1)',
      },
      fontFamily: {
        'sans': ["Acumin Pro", "sans-serif"],
        'serif': ["Meno Banner Condensed", "serif"],
        'body': ["Acumin Pro", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
