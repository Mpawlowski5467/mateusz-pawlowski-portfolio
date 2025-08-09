import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Header() {
  const { t } = useContext(LanguageContext)
  return (
    <header className="text-center py-8 bg-gradient-to-r from-blue-900 to-purple-700 text-white">
      <h1 className="text-4xl font-bold mb-2">{t('header.name')}</h1>
      <p>{t('header.role')}</p>
    </header>
  )
}
