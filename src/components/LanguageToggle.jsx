import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'pl' : 'en')}
      className="font-mono text-sm text-neutral transition-colors hover:text-white"
      aria-label={`Switch to ${lang === 'en' ? 'Polish' : 'English'}`}
    >
      <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
      <span className="mx-1.5 text-white/30" aria-hidden="true">|</span>
      <span className={lang === 'pl' ? 'text-white' : ''}>PL</span>
    </button>
  )
}
