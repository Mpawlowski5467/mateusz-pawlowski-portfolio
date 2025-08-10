import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="experience" className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-plum">{t('experience.title')}</h2>
      <div className="relative pl-10">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-plum to-violet-jtc" />
        <div className="relative mb-8 p-6 bg-cambridge-blue text-black rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQFz7AGAFLXN0A/company-logo_200_200/company-logo_200_200/0/1641580116422/reyes_holdings_logo?e=1757548800&v=beta&t=vwhRKm6AbE3K57Ehi5kVfCkeGYdDMh8RSut0N0lx9nM"
                alt="Reyes Holdings Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-semibold">{t('experience.role')}</h3>
            </div>
            <span className="text-sm text-violet-jtc">{t('experience.date')}</span>
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
