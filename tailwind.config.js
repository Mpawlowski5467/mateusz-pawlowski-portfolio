/**
 * Tailwind configuration mapping custom color tokens to CSS variables.
 * Allows utility classes like `bg-plum` or `text-cambridge-blue`.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette values defined in `src/index.css`
        'dutch-white': 'var(--dutch-white)',
        'plum': 'var(--plum)',
        'violet-jtc': 'var(--violet-jtc)',
        'black': 'var(--black)',
        'cambridge-blue': 'var(--cambridge-blue)',
      },
    },
  },
  plugins: [],
}
