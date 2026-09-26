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
      },
      fontFamily: {
        // Self-hosted via @fontsource-variable (imported in src/main.jsx)
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
