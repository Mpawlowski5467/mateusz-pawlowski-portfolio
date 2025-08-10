/** @type {import('tailwindcss').Config} */
// Maps CSS variable color tokens into the Tailwind theme so utilities like
// `bg-plum` or `text-cambridge-blue` reference the design system variables.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dutch-white': 'var(--dutch-white)',
        plum: 'var(--plum)',
        'violet-jtc': 'var(--violet-jtc)',
        black: 'var(--black)',
        'cambridge-blue': 'var(--cambridge-blue)',
      },
    },
  },
  plugins: [],
}
