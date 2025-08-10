// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
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
