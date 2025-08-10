// Main application assembling clock bar, floating dock, content, and footer.
// Offsets for fixed elements are defined as CSS variables in `index.css`.
import { ClockBar } from './components/ClockBar.jsx'
import { Dock } from './components/Dock.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import { Footer } from './components/Footer.jsx'

export function App() {
  return (
    <>
      <ClockBar />
      <Dock />
      <main className="space-y-24">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
