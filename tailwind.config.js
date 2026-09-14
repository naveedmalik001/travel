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
        pine: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#072b16',
        },
        kashmir: {
          deep: '#0B1E15',
          forest: '#133928',
          pine: '#1E533C',
          sage: '#417B60',
          light: '#EDF5F0',
          mist: '#F6FAF7',
          saffron: '#E27D18',
          saffronDark: '#C4640A',
          amber: '#F59E0B',
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
