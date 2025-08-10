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

 q0edgz-codex/add-top-navbar-with-language-option
    return (
      <nav className="fixed left-1/2 top-4 -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-[var(--honeydew)]/80 backdrop-blur px-6 py-3 rounded-2xl shadow-lg text-[var(--rich-black)]">

  return (
    <nav className="fixed left-1/2 top-4 -translate-x-1/2 z-50">
      <div className="flex items-center space-x-4 bg-white/80 backdrop-blur px-6 py-3 rounded-2xl shadow-lg">
 main
        {links.map((key) => (
          <a
            key={key}
            href={`#${key}`}
 q0edgz-codex/add-top-navbar-with-language-option
              className={`px-3 py-2 rounded-md transition transform hover:scale-110 ${
                active === key ? 'bg-[var(--naples-yellow)] text-[var(--rich-black)]' : ''
              }`}

            className={`px-3 py-2 rounded-md transition transform hover:scale-110 ${
              active === key ? 'bg-gray-200' : ''
            }`}
 main
          >
            {t(`nav.${key}`)}
          </a>
        ))}
 q0edgz-codex/add-top-navbar-with-language-option
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-12 h-12 rounded-full bg-[var(--naples-yellow)] text-[var(--rich-black)] shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              {lang === 'en' ? '🇺🇸' : '🇵🇱'}
            </button>
            {open && (
              <ul className="absolute right-0 mt-2 bg-[var(--honeydew)] rounded-md shadow-lg overflow-hidden text-[var(--rich-black)]">
                {langs.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => {
                        setLang(l.code)
                        setOpen(false)
                      }}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-[var(--naples-yellow)] w-full"
                    >
                      <span className="text-xl">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            {lang === 'en' ? '🇺🇸' : '🇵🇱'}
          </button>
          {open && (
            <ul className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden">
              {langs.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => {
                      setLang(l.code)
                      setOpen(false)
                    }}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 w-full"
                  >
                    <span className="text-xl">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
main
      </div>
    </nav>
  )
}
