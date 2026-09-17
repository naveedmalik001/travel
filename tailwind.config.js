/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f3',
          100: '#ddf1e3',
          200: '#bce4ca',
          300: '#8eccaa',
          400: '#5caf85',
          500: '#38804e', // Primary Brand Green (#38804e)
          600: '#2b693f',
          700: '#245434',
          800: '#1f432b',
          900: '#1a3724',
          950: '#0c1e14',
        },
        pine: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#38804e',
          600: '#2b693f',
          700: '#245434',
          800: '#1f432b',
          900: '#14532d',
          950: '#072b16',
        },
        kashmir: {
          deep: '#0B1E15',
          forest: '#133928',
          pine: '#1E533C',
          brand: '#38804e',
          sage: '#417B60',
          light: '#EDF5F0',
          mist: '#F6FAF7',
          snow: '#FAFCFA',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 30, 21, 0.08)',
        'card': '0 12px 32px -4px rgba(11, 30, 21, 0.12)',
        'elevated': '0 24px 48px -12px rgba(11, 30, 21, 0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
