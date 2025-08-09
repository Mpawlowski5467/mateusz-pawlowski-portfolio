import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Interests() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="interests"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('interests.title')}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {t('interests.items').map((item, idx) => (
          <li
            key={idx}
            className="bg-gray-50 p-4 rounded text-center shadow"
          >
            <span className="block text-3xl mb-2" role="img" aria-label={item.text}>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

