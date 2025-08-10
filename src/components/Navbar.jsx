import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

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

  return (
    <nav className="fixed left-1/2 top-4 -translate-x-1/2 z-50">
      <div className="flex items-center space-x-4 bg-teal-900/80 backdrop-blur px-6 py-3 rounded-2xl shadow-lg text-jet-100">
        {links.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className={`px-3 py-2 rounded-md transition transform hover:scale-110 ${
              active === key ? 'bg-sunglow text-jet' : ''
            }`}
          >
            {t(`nav.${key}`)}
          </a>
        ))}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 rounded-full bg-sunglow text-jet shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            {lang === 'en' ? '🇺🇸' : '🇵🇱'}
          </button>
          {open && (
            <ul className="absolute right-0 mt-2 bg-teal-900 rounded-md shadow-lg overflow-hidden text-jet-100">
              {langs.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => {
                      setLang(l.code)
                      setOpen(false)
                    }}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-sunglow w-full"
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
