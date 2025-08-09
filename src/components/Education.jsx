import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Education() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="education"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('education.title')}
      </h2>
      <ul className="list-disc list-inside space-y-2">
        {t('education.items').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
