/**
 * Tailwind configuration mapping design tokens to semantic color roles.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',       // Blue Munsell
        secondary: 'var(--secondary)',   // Paynes Gray
        background: 'var(--background)', // Onyx
        foreground: 'var(--foreground)', // White
        neutral: 'var(--neutral)',       // Silver
      },
    },
  },
  plugins: [],
}
