import { useRef, useState } from 'react'

// Navigation links represented as icons
const links = [
  {
    href: '#about',
    label: 'About',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-dutch-white" aria-hidden="true">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '#projects',
    label: 'Projects',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-dutch-white" aria-hidden="true">
        <path d="M4 4h7v7H4zm9 0h7v7h-7zm0 9h7v7h-7zm-9 0h7v7H4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: 'mailto:mpawlowski5467@gmail.com',
    label: 'Email',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-dutch-white" aria-hidden="true">
        <path d="M2 4h20v16H2z" fill="none" />
        <path d="M2 4h20v16H2z" stroke="currentColor" strokeWidth="2" />
        <path d="m22 4-10 7L2 4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export function Navbar() {
  const dockRef = useRef(null)
  const [scales, setScales] = useState(links.map(() => 1))
  const prefersReduced = typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Scale icons based on cursor proximity, similar to the macOS dock
  const handleMove = (e) => {
    if (prefersReduced || !dockRef.current) return
    const mouseX = e.clientX
    const newScales = Array.from(dockRef.current.children).map((el) => {
      const rect = el.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const distance = Math.abs(mouseX - center)
      const maxDist = 100 // px range where scaling occurs
      const scale = 1 + Math.max(0, (maxDist - distance) / maxDist) * 0.5
      return Math.min(scale, 1.5)
    })
    setScales(newScales)
  }

  const reset = () => setScales(links.map(() => 1))

  return (
    <nav
      className="fixed top-[calc(var(--clock-bar-height)+var(--dock-gap))] left-1/2 -translate-x-1/2 z-40"
      aria-label="Main navigation"
    >
      <ul
        ref={dockRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="flex gap-4 bg-plum/40 backdrop-blur-lg rounded-2xl px-4 py-2 shadow-lg ring-1 ring-dutch-white/20"
      >
        {links.map((link, i) => (
          <li key={link.href} style={{ transform: `scale(${scales[i]})` }} className="transition-transform">
            <a
              href={link.href}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cambridge-blue rounded-lg p-1"
            >
              <span className="sr-only">{link.label}</span>
              {link.svg}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
