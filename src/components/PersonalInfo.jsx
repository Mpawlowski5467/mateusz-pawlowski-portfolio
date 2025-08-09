import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function PersonalInfo() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.p1')}</p>
      <p>{t('about.location')}</p>
      <p>
        <a href="mailto:mpawlowski5467@gmail.com">{t('about.email')}</a> •{' '}
        <a href="https://www.linkedin.com/in/mateusz-pawlowski-823849302/">{t('about.linkText')}</a>
      </p>
    </section>
  )
}

