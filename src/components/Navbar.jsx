import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const langs = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'pl', flag: '🇵🇱', label: 'Polski' }
  ]

  const links = ['about', 'experience', 'projects', 'education', 'skills']

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {links.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className={`nav-link ${active === key ? 'active' : ''}`}
          >
            {t(`nav.${key}`)}
          </a>
        ))}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="lang-btn"
          >
            {lang === 'en' ? '🇺🇸' : '🇵🇱'}
          </button>
          {open && (
            <ul className="lang-menu">
              {langs.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => {
                      setLang(l.code)
                      setOpen(false)
                    }}
                    className="lang-option"
                  >
                    <span className="text-xl">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}
