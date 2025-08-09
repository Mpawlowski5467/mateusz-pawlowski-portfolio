import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="experience">
      <h2>{t('experience.title')}</h2>
      <h3>
        {t('experience.role')}
        <img src="/reyes-holdings-logo.svg" alt="Reyes Holdings Logo" className="reyes-logo" />
      </h3>
      <p>{t('experience.date')}</p>
      <ul>
        {t('experience.bullets').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

