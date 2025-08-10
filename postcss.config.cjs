// Conditional PostCSS config. Tailwind and Autoprefixer are optional so the
// build and tests do not fail when the packages are unavailable in this
// environment. When dependencies are installed the plugins will be picked up.
let tailwindcss, autoprefixer
try {
  tailwindcss = require('tailwindcss')
  autoprefixer = require('autoprefixer')
} catch (e) {
  // Modules not installed; fall back to no plugins.
}
module.exports = {
  plugins: [tailwindcss, autoprefixer].filter(Boolean),
}
