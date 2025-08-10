import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Projects grid with responsive cards
export function Projects() {
  const { t } = useContext(LanguageContext)
  const items = t('projects.items')
  const borderColors = ['border-plum', 'border-violet-jtc', 'border-cambridge-blue']

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-plum text-center mb-8">
        {t('projects.title')}
      </h2>

      {/* Responsive grid: 1 col on mobile, 2 on small screens, 3 on large */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((proj, idx) => (
          <article
            key={idx}
            tabIndex="0"
            // Cycle borders through the palette; glassy card with good contrast
            className={`p-4 rounded-lg bg-violet-jtc/20 text-dutch-white border-2 ${borderColors[idx % borderColors.length]} shadow backdrop-blur-sm focus:outline-none focus-visible:ring-2 ring-cambridge-blue`}
          >
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cambridge-blue underline focus:outline-none focus-visible:ring-2 ring-plum rounded"
              >
                {t('projects.github')}
              </a>
            )}

            <h3 className="mt-2 text-lg sm:text-xl font-semibold">
              {proj.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed">
              {proj.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

