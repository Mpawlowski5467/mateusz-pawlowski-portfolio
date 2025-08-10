import { useRef } from 'react'

// Simple icon list for the dock. Icons are inline SVG for portability.
const items = [
  {
    href: '#about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
    ),
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2zm0 13L1 10v11h22V10l-11 5z" />
      </svg>
    ),
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M2 4h20v16H2z" fill="none" />
        <path d="M2 4h20v16H2z" stroke="currentColor" strokeWidth="2" />
        <path d="m22 4-10 7L2 4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export function Dock() {
  const iconRefs = useRef([])
  // Check for `prefers-reduced-motion`; fallback to false in non-browser tests
  const reduceMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Mouse move scaling: scale peaks at hovered icon (1.8) and decreases for neighbors.
  const handleMove = (e) => {
    if (reduceMotion) return
    const mouseX = e.clientX
    iconRefs.current.forEach((el) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const distance = Math.abs(mouseX - center)
      // The divisor controls spread; smaller spreads the scaling to more neighbors.
      const scale = Math.max(1, 1.8 - distance / 100)
      el.style.setProperty('--scale', scale)
    })
  }

  const reset = () => {
    iconRefs.current.forEach((el) => el && el.style.setProperty('--scale', 1))
  }

  return (
    // Floating, glassy container that stays centered and clear of viewport edges
    <nav
      className="fixed top-[calc(var(--clock-bar-height)+var(--dock-gap))] left-1/2 -translate-x-1/2 z-40 flex gap-4 px-4 py-2 rounded-3xl bg-dutch-white/20 backdrop-blur-md shadow-lg border border-dutch-white/30"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {items.map((item, i) => (
        // Each icon link is focusable with a visible outline for keyboard users
        <a
          key={item.href}
          href={item.href}
          ref={(el) => (iconRefs.current[i] = el)}
          className="text-dutch-white focus:outline-none focus:ring-2 focus:ring-plum rounded-lg transition-transform duration-150"
          style={{ transform: 'scale(var(--scale,1))' }}
          aria-label={item.label}
          onFocus={() => iconRefs.current[i]?.style.setProperty('--scale', 1.4)}
          onBlur={() => iconRefs.current[i]?.style.setProperty('--scale', 1)}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  )
}
