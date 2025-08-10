import { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo.jsx'
import { Projects } from './components/Projects.jsx'
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
      {/* Fixed clock bar and floating dock navbar */}
      <ClockBar />
      <Navbar />

      {/* Main content spaced so fixed elements never overlap */}
      <main className="max-w-7xl mx-auto p-4 space-y-20">
        <PersonalInfo />
        <Projects />
      </main>

      <Footer />
    </LanguageContext.Provider>
  )
}
