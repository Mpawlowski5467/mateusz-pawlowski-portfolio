/*
  Main application layout. Fixed UI elements (dock navbar, footer)
  rely on CSS variables declared in index.css: --dock-h and --footer-h.
  Adjust those variables to tweak global spacing.
*/
import { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Education } from './components/Education.jsx'
import { Skills } from './components/Skills.jsx'
import { BackToTopButton } from './components/BackToTopButton.jsx'
import { Footer } from './components/Footer.jsx'
import { Navbar } from './components/Navbar.jsx'
import { CodeBackground } from './components/CodeBackground.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import { translations } from './i18n.js'

export function App() {
  const [lang, setLang] = useState('en')
  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], translations[lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <CodeBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        <main className="flex-1 space-y-16 pb-16">
          <PersonalInfo />
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
