import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { CONTACT } from '../links.js'

// Date of the last commit, injected at build time by vite.config.js (YYYY-MM-DD)
const LAST_UPDATED = import.meta.env.VITE_LAST_UPDATED

export function Footer() {
  const { lang, t } = useContext(LanguageContext)
  const lastUpdated = new Date(`${LAST_UPDATED}T00:00:00`).toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 font-mono text-xs text-neutral sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} {t('footer.name')}</span>
        <nav aria-label="Contact" className="flex gap-5">
          {['github', 'linkedin', 'email'].map((key) => (
            <a
              key={key}
              href={CONTACT[key]}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              className="transition-colors hover:text-white"
            >
              {t(`contact.${key}`)}
            </a>
          ))}
        </nav>
        <span>{t('footer.updated')} {lastUpdated}</span>
      </div>
    </footer>
  )
}
