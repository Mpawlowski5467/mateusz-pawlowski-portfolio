import { useState, useEffect } from 'react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-foreground border-2 border-neutral shadow-lg flex items-center justify-center hover:bg-secondary hover:text-foreground transition focus:outline-none focus-visible:ring-2 ring-primary"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
