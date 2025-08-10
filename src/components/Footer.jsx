import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Footer() {
  const { t } = useContext(LanguageContext)
  const lastUpdated = new Date().toLocaleDateString()
    return (
      <footer className="text-center py-4 text-sm bg-[var(--rich-black)] text-[var(--honeydew)]">
        {t('footer.name')} — {t('footer.updated')}: {lastUpdated}
      </footer>
    )
  }
