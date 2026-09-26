/*
  Main application layout: sticky top bar, hero (terminal intro + ASCII homelab rack),
  then numbered sections. All wording comes from src/i18n.js via the language context.
*/
import { useEffect, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Education } from './components/Education.jsx'
import { Skills } from './components/Skills.jsx'
import { BackToTopButton } from './components/BackToTopButton.jsx'
import { Footer } from './components/Footer.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import { translations } from './i18n.js'

export function App() {
  const [lang, setLang] = useState('en')
  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], translations[lang])

  // Keep <html lang> in sync so screen readers and translators know the page language
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-black"
        >
          {t('a11y.skip')}
        </a>
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}
