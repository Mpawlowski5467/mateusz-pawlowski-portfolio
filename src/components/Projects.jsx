import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Projects() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {t('projects.items').map((proj, idx) => (
          <div key={idx} className="project-card" tabIndex="0">
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {t('projects.github')}
              </a>
            )}
            <h3 className="project-title">{proj.name}</h3>
            <p className="project-desc">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
