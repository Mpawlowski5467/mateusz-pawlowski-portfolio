
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
import { LanguageContext } from './context/LanguageContext.jsx'
import { translations } from './i18n.js'

export function App() {
  const [lang, setLang] = useState('en')
  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], translations[lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <ClockBar />
      <Navbar />
      <PersonalInfo />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <BackToTopButton />
      <Footer />
    </LanguageContext.Provider>
  )
}
