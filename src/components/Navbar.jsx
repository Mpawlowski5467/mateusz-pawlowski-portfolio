import { useRef, useState } from 'react'

// Icons for sections; using emojis keeps the bundle small
const items = [
  { href: '#about', label: 'About', icon: '👤' },
  { href: '#experience', label: 'Experience', icon: '💼' },
  { href: '#projects', label: 'Projects', icon: '📁' },
  { href: '#skills', label: 'Skills', icon: '🛠️' }
]

export function Navbar() {
  const iconRefs = useRef([])
  const [mouseX, setMouseX] = useState(null)

  // Track mouse position to scale icons based on proximity
  const handleMove = (e) => setMouseX(e.clientX)
  const handleLeave = () => setMouseX(null)

  // Compute scale for a given icon index using distance from cursor
  const scaleFor = (idx) => {
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
    // Floating container centered at top, below the clock bar
    <div
      className="fixed top-[calc(var(--clock-bar-h)+var(--dock-gap)+0.5rem)] left-1/2 -translate-x-1/2 z-40"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <nav
        aria-label="Primary"
        className="flex gap-4 rounded-3xl bg-foreground/40 backdrop-blur-md shadow-lg border border-white/20 px-4 py-2"
      >
        {items.map((item, i) => (
          <a
            key={item.href}
            ref={(el) => (iconRefs.current[i] = el)}
            href={item.href}
            aria-label={item.label}
            // Scale via inline style so neighbours react to cursor proximity
            style={{ transform: `scale(${scaleFor(i)})` }}
            className="group relative w-8 h-8 flex items-center justify-center text-2xl transition-transform duration-150 ease-out focus:outline-none focus-visible:ring-2 ring-primary rounded-md"
            onFocus={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setMouseX(rect.left + rect.width / 2)
            }}
            onBlur={handleLeave}
          >
            <span role="img" aria-hidden="true">
              {item.icon}
            </span>
            <span className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap px-2 py-1 rounded bg-secondary text-foreground text-xs opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  )
}
