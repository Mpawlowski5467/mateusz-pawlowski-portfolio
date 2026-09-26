import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function BackToTopButton() {
  const { t } = useContext(LanguageContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded border border-white/25 bg-black/80 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-black"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('a11y.backToTop')}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}
