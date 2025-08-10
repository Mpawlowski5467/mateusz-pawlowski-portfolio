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
            className="p-4 rounded-lg bg-background text-foreground border border-neutral shadow transition-transform transform hover:-translate-y-1 focus:-translate-y-1"
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-2 px-2 py-1 text-sm bg-primary text-foreground rounded no-underline hover:bg-primary/80 focus:outline-none focus-visible:ring-2 ring-primary"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="mt-1 text-sm leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
