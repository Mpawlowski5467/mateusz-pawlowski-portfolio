import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Experience() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('experience.title')}
      </h2>
      <div className="flex items-center mb-4">
        <img
          src="/reyes-holdings-logo.svg"
          alt="Reyes Holdings Logo"
          className="w-16 h-16 mr-4"
        />
        <div>
          <p className="text-sm text-gray-500">{t('experience.date')}</p>
          <p className="font-semibold">{t('experience.company')}</p>
          <p className="italic">{t('experience.position')}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {t('experience.bullets').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

