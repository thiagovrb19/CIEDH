/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ciedh: {
          blue: {
            DEFAULT: '#1685A5',
            dark: '#0e5f77',
            deep: '#093c4b',
            light: '#e6f6f9',
            border: '#bce1ea',
          },
          teal: {
            DEFAULT: '#56B69C',
            dark: '#3f9b83',
            light: '#e8f7f3',
            hover: '#46a68d',
          },
          dark: '#111111',
          gray: {
            light: '#F3F7F8',
            border: '#E1E8EB',
            text: '#555555',
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-opensans)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'ciedh-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'ciedh-md': '0 8px 24px rgba(22, 133, 165, 0.08)',
        'ciedh-lg': '0 16px 36px rgba(22, 133, 165, 0.14)',
        'ciedh-glow': '0 0 25px rgba(86, 182, 156, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
