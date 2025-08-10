import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Projects() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="projects" className="max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-sunglow">{t('projects.title')}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {t('projects.items').map((proj, idx) => (
          <div
            key={idx}
            className="relative p-4 bg-midnight_green border-2 border-teal-700 rounded-lg shadow hover:shadow-lg transition-shadow text-jet-900"
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 text-sm bg-poppy text-jet px-2 py-1 rounded hover:bg-sunglow hover:text-midnight_green"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="text-xl font-semibold mb-2 text-poppy">{proj.name}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
