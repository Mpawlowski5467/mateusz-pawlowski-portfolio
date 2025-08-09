import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useContext(LanguageContext)
  return <footer>{t('footer')}</footer>
}
