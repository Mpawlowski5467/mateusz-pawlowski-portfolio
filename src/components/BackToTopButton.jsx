import { useState, useEffect } from 'react'

export default function BackToTopButton() {
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
    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  )
}

