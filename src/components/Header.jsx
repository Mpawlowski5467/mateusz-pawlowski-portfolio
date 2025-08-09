import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Header() {
  const { t } = useContext(LanguageContext)
  return (
    <header>
      <h1>{t('header.name')}</h1>
      <p>{t('header.role')}</p>
    </header>
  )
}
