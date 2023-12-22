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
        "primary": 'rgb(var(--primary) / 1)',
        "secondary1": 'rgb(var(--secondary1) / 1)',
        "secondary2": 'rgb(var(--secondary2) / 0.7)',
        "secondary3": 'rgb(var(--secondary3) / 0.3)',
        "accent": {
          500: 'rgb(var(--accent500) / 1)',
          600: 'rgb(var(--accent600) / 1)'
        }
      },
      fontFamily: {
        'sans': ["Acumin Pro", "sans-serif"],
        'serif': ["Meno Banner Extra Condensed", "serif"],
        'body': ["Acumin Pro", "sans-serif"],
      },
      transitionProperty: {
        'height': 'height',
      },
      animation: {
        rise: 'rise 1.3s ease',
        fall: 'fall 0.5s ease-in-out forwards'
        }
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translate(0%,150%) skewX(0deg)' },
          '100%': { transform: 'translate(0%,0%) skewX(0deg)' },
        },
        fall: {
          '0%': { transform: 'translate(0%,-150%) skewX(0deg) scaleY(0)' },
          '100%': { transform: 'translate(0%,0%) skewX(0deg) scaleY(1)' },
        }
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
