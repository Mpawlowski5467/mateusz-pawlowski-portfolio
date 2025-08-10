import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function PersonalInfo() {
  const { t } = useContext(LanguageContext)

  // Expect interests.items to be an array of { icon, text }.
  // If your i18n isn’t set with returnObjects: true, this will gracefully fallback.
  const interests = t('interests.items', { returnObjects: true })
  const interestItems = Array.isArray(interests) ? interests : []

  return (
    <section id="about" className="pt-24 max-w-3xl mx-auto my-8 space-y-4 text-center">
      <h1 className="text-4xl font-bold">{t('header.name')}</h1>
      <p className="text-xl text-gray-600">{t('header.role')}</p>

      <h2 className="text-3xl font-bold mt-6">{t('about.title')}</h2>
      <p className="text-lg">{t('about.p1')}</p>
      <p className="text-gray-700">{t('about.location')}</p>

      <p className="space-x-2">
        <a href="mailto:mpawlowski5467@gmail.com" className="text-blue-600 underline">
          {t('about.email')}
        </a>
        <span aria-hidden>•</span>
        <a
          href="https://www.linkedin.com/in/mateusz-pawlowski-823849302/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('about.linkText')}
        </a>
      </p>

      <div className="mt-6">
        <h3 className="text-2l font-semibold text-2xl">{t('interests.title')}</h3>
        <ul className="flex flex-wrap justify-center gap-4 mt-2">
          {interestItems.map((item, idx) => (
            <li key={item?.text ?? idx} className="flex items-center space-x-2">
              {item?.icon && (
                <span className="text-2xl" role="img" aria-label={item?.text ?? 'interest'}>
                  {item.icon}
                </span>
              )}
              <span>{item?.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
