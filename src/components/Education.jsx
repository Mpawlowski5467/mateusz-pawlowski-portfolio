import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="education"
      className="max-w-3xl mx-auto my-8 p-6 bg-cambridge-blue text-black rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-plum">
        {t('education.title')}
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        {t('education.items').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
