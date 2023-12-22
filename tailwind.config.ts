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
        "primary": 'var(--primary)',
        "secondary1": 'var(--secondary1)',
        "secondary2": 'var(--secondary2)',
        "secondary3": 'var(--secondary3)',
        "accent": 'var(--accent)',
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
