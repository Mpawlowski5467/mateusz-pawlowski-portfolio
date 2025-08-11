/**
 * Tailwind configuration mapping design tokens to semantic color roles.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',       // Red Crayola - bold energy and passion
        secondary: 'var(--secondary)',   // Naples Yellow - vibrant creativity
        background: 'var(--background)', // Oxford Blue - professional depth
        foreground: 'var(--foreground)', // Mint Cream - fresh contrast
        neutral: 'var(--neutral)',       // Charcoal - sophisticated balance
        'red-crayola': 'var(--red-crayola)',
        'naples-yellow': 'var(--naples-yellow)',
        'mint-cream': 'var(--mint-cream)',
        'oxford-blue': 'var(--oxford-blue)',
        'charcoal': 'var(--charcoal)',
      },
    },
  },
  plugins: [],
}
