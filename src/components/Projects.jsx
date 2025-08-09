import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Projects() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('projects.title')}
      </h2>
      <ul className="space-y-2">
        {t('projects.items').map((proj, idx) => (
          <li key={idx}>
            <strong>{proj.name}:</strong> {proj.desc}
          </li>
        ))}
      </ul>
    </section>
  )
}

