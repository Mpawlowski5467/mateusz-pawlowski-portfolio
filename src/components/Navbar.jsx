import { useContext, useRef, useState } from 'react'
import { LanguageToggle } from './LanguageToggle.jsx'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Icons for sections; using emojis keeps the bundle small
const items = [
  { href: '#about', key: 'nav.about', icon: '👤' },
  { href: '#experience', key: 'nav.experience', icon: '💼' },
  { href: '#projects', key: 'nav.projects', icon: '📁' },
  { href: '#education', key: 'nav.education', icon: '🎓' },
  { href: '#skills', key: 'nav.skills', icon: '🛠️' }
]

export function Navbar() {
  const { t } = useContext(LanguageContext)
  const iconRefs = useRef([])
  const [mouseX, setMouseX] = useState(null)
  const reduceMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Track mouse position to scale icons based on proximity
  const handleMove = (e) => {
    if (reduceMotion) return
    setMouseX(e.clientX)
  }
  const handleLeave = () => setMouseX(null)

  // Compute scale for a given icon index using distance from cursor
  const scaleFor = (idx) => {
    if (reduceMotion) return 1
    const el = iconRefs.current[idx]
    if (!el || mouseX === null) return 1
    const rect = el.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const distance = Math.abs(mouseX - center)
    // Icons at cursor center scale to 1.5; neighbours shrink with distance
    const max = 1.5
    const min = 1
    const scale = max - Math.min(distance / 100, 1) * (max - min)
    return scale
  }

  return (
    // Floating container centered at top
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <nav
        aria-label="Primary"
        className="flex items-center gap-3 sm:gap-6 rounded-3xl bg-foreground/10 backdrop-blur-xl shadow-xl border border-white/20 px-3 sm:px-6 py-3 max-w-[calc(100vw-2rem)] overflow-hidden"
      >
        {/* Navigation items */}
        <div className="flex gap-1 sm:gap-3">
          {items.map((item, i) => (
            <div key={item.href} className="relative group">
              <a
                ref={(el) => (iconRefs.current[i] = el)}
                href={item.href}
                title={t(item.key)}
                aria-label={t(item.key)}
                // Scale via inline style so neighbours react to cursor proximity
                style={{ transform: `scale(${scaleFor(i)})` }}
                className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl no-underline motion-safe:transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 ring-naples-yellow rounded-xl hover:bg-red-crayola/20 active:scale-95 touch-manipulation shadow-lg hover:shadow-xl hover:shadow-red-crayola/30"
                onFocus={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setMouseX(rect.left + rect.width / 2)
                }}
                onBlur={handleLeave}
              >
                <span role="img" aria-hidden="true">
                  {item.icon}
                </span>
              </a>
              <span
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-neutral/20 z-50"
              >
                {t(item.key)}
              </span>
            </div>
          ))}
        </div>
        
        {/* Language toggle separator */}
        <div className="hidden sm:block h-8 w-px bg-white/20"></div>
        
        {/* Language toggle */}
        <div className="ml-auto sm:ml-0">
          <LanguageToggle />
        </div>
      </nav>
    </div>
  )
}
