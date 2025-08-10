/**
 * Tailwind configuration mapping custom CSS variables to theme colors.
 * These variables are declared in src/index.css so that designers can
 * tweak the palette in one place while still using Tailwind utilities
 * like text-plum or bg-violet-jtc.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Each key here mirrors a CSS variable defined in index.css.
        // Using the variable keeps colors in sync across Tailwind and plain CSS.
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
