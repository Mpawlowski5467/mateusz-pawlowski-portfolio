/*
  Main application layout. Fixed UI elements (clock bar, dock navbar, footer)
  rely on CSS variables declared in index.css: --clock-bar-h, --dock-h,
  --dock-gap and --footer-h. Adjust those variables to tweak global spacing.
*/
import { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Education } from './components/Education.jsx'
import { Skills } from './components/Skills.jsx'
import { BackToTopButton } from './components/BackToTopButton.jsx'
import { Footer } from './components/Footer.jsx'
import { ClockBar } from './components/ClockBar.jsx'
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
      <div className="relative z-10">
        <ClockBar />
        <Navbar />
        <main className="space-y-16">
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
