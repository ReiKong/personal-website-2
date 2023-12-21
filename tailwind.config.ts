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
        "th-primary": 'var(--primary)',
        "th-secondary1": 'var(--secondary1)',
        "th-secondary2": 'var(--secondary2)',
        "th-secondary3": 'var(--secondary3)',
        "th-accent": 'var(--accent)',
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
