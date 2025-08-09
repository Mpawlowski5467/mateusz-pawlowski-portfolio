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
    <button
      className="fixed bottom-5 right-5 bg-blue-900 text-white w-10 h-10 rounded-full text-lg shadow hover:bg-purple-700"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

