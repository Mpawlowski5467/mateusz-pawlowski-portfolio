import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="experience" className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">{t('experience.title')}</h2>
      <div className="relative pl-10">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
        <div className="relative mb-8 p-6 bg-secondary text-foreground rounded-xl shadow border border-neutral">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="/reyes-holdings-logo.svg"
                alt="Reyes Holdings Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-semibold">{t('experience.role')}</h3>
            </div>
            <span className="text-sm text-neutral">{t('experience.date')}</span>
          </div>
          <div className="flex gap-4 mb-4">
            <img
              src="https://cdn.brandfetch.io/idmJWF3N06/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1721803173482"
              alt="Anthropic Logo"
              className="w-8 h-8 object-contain"
            />
            <img
              src="https://cdn.brandfetch.io/idR3duQxYl/w/800/h/800/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1749527471692"
              alt="OpenAI Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {t('experience.bullets').map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
