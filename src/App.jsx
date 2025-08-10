import { useState } from 'react'
import { ClockBar } from './components/ClockBar.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import { Footer } from './components/Footer.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import { translations } from './i18n.js'

export function App() {
  const [lang, setLang] = useState('en')
  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], translations[lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {/* Slim top clock bar showing multiple time zones */}
      <ClockBar />
      {/* Floating dock-style navbar */}
      <Navbar />
      {/* Main content padded via CSS variables to avoid overlap */}
      <main className="space-y-24">
        <About />
        <Projects />
      </main>
      {/* Fixed footer */}
      <Footer />
    </LanguageContext.Provider>
  )
}
