import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { Section } from './Section.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  const items = t('education.items')
  const highlights = t('education.highlights')

  return (
    <Section id="education" index={4} title={t('nav.education')}>
      <ol className="space-y-4">
        {Array.isArray(items) && items.map((item) => (
          <li
            key={item.school}
            className="grid gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/30 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{item.school}</h3>
              <p className="mt-1 text-foreground/80">{item.degree}</p>
            </div>
            <p className="font-mono text-sm text-neutral sm:text-right">{item.date}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-sm">
        <span className="mr-1 text-neutral">{t('education.highlightsTitle')}</span>
        {Array.isArray(highlights) && highlights.map((highlight) => (
          <span key={highlight} className="rounded border border-white/15 px-2 py-0.5 text-xs text-foreground/90">
            {highlight}
          </span>
        ))}
      </div>
    </Section>
  )
}
