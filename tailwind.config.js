/* global tailwind */
/**
 * Tailwind configuration mapping custom CSS variables to theme colors.
 * This lets us use classes like `bg-plum` or `text-cambridge-blue`
 * in components while keeping the actual color values in CSS variables
 * for easy theming.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'dutch-white': 'var(--dutch-white)',
        plum: 'var(--plum)',
        'violet-jtc': 'var(--violet-jtc)',
        black: 'var(--black)',
        'cambridge-blue': 'var(--cambridge-blue)'
      }
    }
  }
}
