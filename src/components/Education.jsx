import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  const educationItems = t('education.items')
  const highlights = t('education.highlights')
  
  return (
    <section id="education" className="max-w-5xl mx-auto my-20 px-4 sm:px-6">
      <div className="window-frame">
        <div className="window-titlebar">
          <div className="window-controls">
            <div className="window-control"></div>
            <div className="window-control"></div>
            <div className="window-control"></div>
          </div>
          <span className="terminal-prompt">~/{t('terminalPaths.education')}$</span>
        </div>
        <div className="p-4 sm:p-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block p-1 rounded-2xl bg-white/5 mb-6">
              <div className="bg-background rounded-xl px-6 py-2">
                <span className="text-sm font-medium text-neutral">{t('education.tagline')}</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('education.title')}
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              {t('education.subtitle')}
            </p>
          </div>

      <div className="relative bg-foreground/5 backdrop-blur-lg rounded-2xl p-5 sm:p-8 border border-neutral/10 shadow-2xl">
        <div className="space-y-6">
          {Array.isArray(educationItems) && educationItems.map((item, idx) => (
            <div key={item.school} className="group flex items-start gap-4">
              <div className={`flex-shrink-0 w-10 h-10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-200 mt-1 shadow-lg ${
                idx % 2 === 0 ? 'bg-white/10 text-white group-hover:bg-white/15 group-hover:shadow-white/10' :
                'bg-white/15 text-gray-100 group-hover:bg-white/20 group-hover:shadow-white/10'
              }`}>
                <span className="font-bold text-sm">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-200">
                <h3 className="text-xl font-semibold text-white mb-1">{item.school}</h3>
                <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {item.degree}
                </p>
                <div className="flex items-center gap-2 mt-1 text-sm text-neutral">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic achievements highlight */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="backdrop-blur-sm rounded-xl p-4 bg-white/5 border border-white/20">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-200">{t('education.highlightsTitle')}</span>
              {Array.isArray(highlights) && highlights.map((highlight, idx) => (
                <span
                  key={highlight}
                  className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-200 ${
                    idx % 3 === 0 ? 'bg-white/20 text-gray-200 border-white/20 hover:bg-white/30' :
                    idx % 3 === 1 ? 'bg-white/25 text-gray-100 border-white/25 hover:bg-white/35' :
                    'bg-white/30 text-white border-white/30 hover:bg-white/40'
                  }`}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}
