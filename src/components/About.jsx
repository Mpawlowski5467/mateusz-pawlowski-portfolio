import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { Section } from './Section.jsx'

export function About() {
  const { t } = useContext(LanguageContext)
  const interests = t('about.interests')

  return (
    <Section id="about" index={1} title={t('nav.about')}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>

        <div>
          <p className="mb-4 font-mono text-sm text-neutral">
            <span aria-hidden="true">$ ls ~/</span>{t('about.interestsTitle')}
          </p>
          <ul className="space-y-3">
            {Array.isArray(interests) && interests.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/30"
              >
                {/* Emoji rendered in grayscale to stay on the monochrome palette */}
                <span className="text-xl grayscale" aria-hidden="true">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
