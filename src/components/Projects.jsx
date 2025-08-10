import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Project grid styled with Tailwind utilities.
export function Projects() {
  const { t } = useContext(LanguageContext)
  const items = t('projects.items') || []
  return (
    <section id="projects" className="py-10" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-center text-3xl font-bold text-plum mb-8">
        {t('projects.title')}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-xl border-2 border-cambridge-blue bg-violet-jtc/40 p-4 text-dutch-white transition-shadow hover:shadow-lg focus-within:shadow-lg"
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cambridge-blue underline mb-2 inline-block"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-sm leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
