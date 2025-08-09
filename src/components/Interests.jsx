import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Interests() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="interests">
      <h2>{t('interests.title')}</h2>
      <ul className="interests-grid">
        {t('interests.items').map((item, idx) => (
          <li key={idx} className="interests-item">
            <span className="icon" role="img" aria-label={item.text}>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

