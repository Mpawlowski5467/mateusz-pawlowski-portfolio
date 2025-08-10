import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Projects grid with responsive cards
export function Projects() {
  const { t } = useContext(LanguageContext)
  const items = t('projects.items')
  const borders = ['border-plum', 'border-violet-jtc', 'border-cambridge-blue']

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-plum mb-8">{t('projects.title')}</h2>
      {/* Grid adapts: 1 column on mobile, 2 on small screens, 3 on large */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((proj, idx) => (
          <article
            key={idx}
            // Cycle through palette colors for borders
            className={`rounded-lg p-4 bg-violet-jtc/20 backdrop-blur-sm border-2 ${borders[idx % borders.length]}`}
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-cambridge-blue text-sm"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="mt-2 font-semibold">{proj.name}</h3>
            <p className="mt-2 text-sm">{proj.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
