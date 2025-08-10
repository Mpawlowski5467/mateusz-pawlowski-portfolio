import { useContext, useRef } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Simple SVG icon components so we avoid extra dependencies.
function AboutIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}
function ProjectsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 4H2v16h20V6H12l-2-2z" />
    </svg>
  )
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" {...props}>
      <rect x="2" y="4" width="20" height="16" fill="none" strokeWidth="2" />
      <path d="m22 4-10 7L2 4" fill="none" strokeWidth="2" />
    </svg>
  )
}

export function Navbar() {
  const { t } = useContext(LanguageContext)
  const iconRefs = useRef([])
  const prefersReduced =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const items = [
    { href: '#about', key: 'about', icon: AboutIcon },
    { href: '#projects', key: 'projects', icon: ProjectsIcon },
    { href: '#contact', key: 'contact', icon: MailIcon },
  ]

  // Scale icons based on cursor X distance, producing a dock magnification effect.
  const scaleIcons = (x) => {
    iconRefs.current.forEach((el) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const distance = Math.abs(x - center)
      // Max scale 2 at center, tapering off with distance.
      const scale = Math.max(1, 2 - distance / 100)
      el.style.transform = `scale(${scale})`
    })
  }

  const handleMouseMove = (e) => {
    if (prefersReduced) return
    scaleIcons(e.clientX)
  }
  const reset = () => {
    iconRefs.current.forEach((el) => el && (el.style.transform = 'scale(1)'))
  }
  const handleFocus = (idx) => {
    if (prefersReduced) return
    const rect = iconRefs.current[idx].getBoundingClientRect()
    scaleIcons(rect.left + rect.width / 2)
  }

  return (
    <nav
      className="fixed z-40 left-1/2 -translate-x-1/2"
      style={{ top: 'calc(var(--clock-bar-height) + var(--dock-gap))' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      aria-label="Primary"
    >
      {/* Glassy container with rounded corners and subtle border */}
      <ul className="flex items-end gap-4 px-4 py-2 bg-plum/40 backdrop-blur-md rounded-2xl shadow-lg border border-plum/50">
        {items.map((item, idx) => {
          const label = t(`nav.${item.key}`) || item.key
          return (
            <li key={item.key}>
              <a
                ref={(el) => (iconRefs.current[idx] = el)}
                href={item.href}
                className="block p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-dutch-white transition-transform duration-150"
                onFocus={() => handleFocus(idx)}
                onBlur={reset}
                title={label}
              >
                <item.icon className="w-8 h-8 text-dutch-white" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
