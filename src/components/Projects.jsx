import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Projects() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="projects">
      <h2>{t('projects.title')}</h2>
      <ul>
        {t('projects.items').map((proj, idx) => (
          <li key={idx}>
            <strong>{proj.name}:</strong> {proj.desc}
          </li>
        ))}
      </ul>
    </section>
  )
}

