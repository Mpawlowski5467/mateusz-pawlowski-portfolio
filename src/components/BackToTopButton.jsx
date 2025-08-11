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
      className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-red-crayola to-naples-yellow text-background border-2 border-mint-cream/20 shadow-xl flex items-center justify-center hover:from-naples-yellow hover:to-red-crayola hover:scale-110 hover:shadow-2xl hover:shadow-red-crayola/30 motion-safe:transition-all duration-300 focus:outline-none focus-visible:ring-2 ring-naples-yellow backdrop-blur-sm z-40"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg className="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}
