/**
 * Tailwind configuration mapping design tokens to semantic color roles.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',       // Yinmn Blue - deep blue for trust
        secondary: 'var(--secondary)',   // Celadon - soft green for growth
        background: 'var(--background)', // Russian Violet - rich creative depth
        foreground: 'var(--foreground)', // Tea Green - light green contrast
        neutral: 'var(--neutral)',       // Cool Gray - balanced subtle elements
        'tea-green': 'var(--tea-green)',
        'celadon': 'var(--celadon)',
        'cool-gray': 'var(--cool-gray)',
        'yinmn-blue': 'var(--yinmn-blue)',
        'russian-violet': 'var(--russian-violet)',
      },
    },
  },
  plugins: [],
}
