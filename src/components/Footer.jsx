import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useContext(LanguageContext)
  return (
    <footer className="text-center mt-8 p-4 text-sm text-gray-600">
      {t('footer')}
    </footer>
  )
}
