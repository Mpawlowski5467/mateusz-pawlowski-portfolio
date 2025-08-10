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
        <div className="relative mb-8 p-6 bg-secondary text-foreground rounded-lg border-2 border-neutral shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.brandfetch.io/idHbgw3t_o/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750697988516"
                alt="Reyes Holdings Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-semibold">{t('experience.role')}</h3>
            </div>
            <span className="text-sm text-neutral">{t('experience.date')}</span>
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
