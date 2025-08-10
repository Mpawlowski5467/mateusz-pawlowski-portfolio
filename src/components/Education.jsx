import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  return (
      <section
        id="education"
        className="max-w-3xl mx-auto my-8 p-6 bg-midnight_green rounded-lg shadow border-l-4 border-poppy text-jet-900"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-sunglow">
          {t('education.title')}
        </h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-teal-400">
          {t('education.items').map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
  )
}

