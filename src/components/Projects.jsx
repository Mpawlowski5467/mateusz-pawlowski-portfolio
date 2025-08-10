import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Projects() {
  const { t } = useContext(LanguageContext)

  return (
    <section id="projects" className="max-w-5xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">{t('projects.title')}</h2>
      {/* Responsive grid: 1 col on mobile, 2 on small screens, 3 on large */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t('projects.items').map((proj, idx) => (
          <div
            key={idx}
            tabIndex="0"
            className="p-4 rounded-lg bg-background text-foreground border border-neutral shadow"
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary underline focus:outline-none focus-visible:ring-2 ring-primary rounded"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="text-xl font-semibold mt-2">{proj.name}</h3>
            <p className="mt-1 text-sm leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
