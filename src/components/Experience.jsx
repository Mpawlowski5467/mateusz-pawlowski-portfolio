import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-2xl font-bold text-center">{t('experience.title')}</h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <img
          src="/reyes-holdings-logo.svg"
          alt="Reyes Holdings Logo"
          className="w-16 h-16 object-contain"
        />
        <div>
          <p className="text-sm text-gray-600">{t('experience.date')}</p>
          <h3 className="text-xl font-semibold">{t('experience.role')}</h3>
        </div>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        {t('experience.bullets').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

