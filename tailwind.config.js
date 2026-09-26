/**
 * Tailwind configuration mapping design tokens to semantic color roles.
 * Hex values (not CSS variables) so opacity modifiers like bg-foreground/5 work.
 * Keep them in sync with the palette in src/index.css.
 */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral, // true grays (Tailwind's default gray is blue-tinted) for the monochrome look
        background: '#000000', // --background (black)
        foreground: '#E5E5E5', // --foreground (gray-100)
        neutral: '#9A9A9A',    // --neutral (gray-300): secondary text, subtle borders
        charcoal: '#5A5A5A',   // --charcoal (gray-500)
      },
    },
  },
  plugins: [],
}
