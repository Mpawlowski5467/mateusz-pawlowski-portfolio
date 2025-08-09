import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function PersonalInfo() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('about.title')}
      </h2>
      <p className="mb-2">{t('about.p1')}</p>
      <p className="mb-2">{t('about.location')}</p>
      <p>
        <a
          href="mailto:mpawlowski5467@gmail.com"
          className="text-blue-900 hover:text-purple-700"
        >
          {t('about.email')}
        </a>{' '}
        •{' '}
        <a
          href="https://www.linkedin.com/in/mateusz-pawlowski-823849302/"
          className="text-blue-900 hover:text-purple-700"
        >
          {t('about.linkText')}
        </a>
      </p>
    </section>
  )
}
