import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="education">
      <h2>{t('education.title')}</h2>
      <ul>
        {t('education.items').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

