import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext)

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'pl' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-9 p-0 min-h-0 min-w-0 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 ease-out hover:bg-white/30 focus:outline-none focus-visible:ring-2 ring-white active:scale-95 touch-manipulation"
      aria-label={`Switch to ${lang === 'en' ? 'Polish' : 'English'}`}
    >
      <div
        className={`absolute top-0.5 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ease-out shadow-lg ${
          lang === 'en' ? 'translate-x-0.5' : 'translate-x-7'
        }`}
      >
        <span className="text-sm font-semibold text-background">
          {lang === 'en' ? '🇺🇸' : '🇵🇱'}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-gray-200">
        <span className={`transition-opacity duration-200 ${lang === 'en' ? 'opacity-0' : 'opacity-100'}`}>
          EN
        </span>
        <span className={`transition-opacity duration-200 ${lang === 'pl' ? 'opacity-0' : 'opacity-100'}`}>
          PL
        </span>
      </div>
    </button>
  )
}