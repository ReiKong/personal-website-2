import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary1: 'rgb(var(--color-text1) / <alpha-value>)',
      secondary2: 'rgb(var(--color-text2) / <alpha-value>)',
      secondary3: 'rgb(var(--color-text3) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
    },
    fontFamily: {
      'sans': ['"Acumin Pro"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Meno Banner Condensed"', 'ui-serif'],
    },
  },
  plugins: [],
}
export default config
