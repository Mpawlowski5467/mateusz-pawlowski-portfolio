import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  const educationItems = t('education.items')
  
  return (
    <section id="education" className="max-w-5xl mx-auto my-20 px-6">
      <div className="window-frame">
        <div className="window-titlebar">
          <div className="window-controls">
            <div className="window-control"></div>
            <div className="window-control"></div>
            <div className="window-control"></div>
          </div>
          <span className="terminal-prompt">~/{t('terminalPaths.education')}$</span>
        </div>
        <div className="p-8">
          <div className="text-center mb-16">
            <div className="inline-block p-1 rounded-2xl bg-white/5 mb-6">
              <div className="bg-background rounded-xl px-6 py-2">
                <span className="text-sm font-medium text-neutral">🎓 Academic Journey</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('education.title')}
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Building knowledge through continuous learning and academic excellence
            </p>
          </div>

      <div className="relative bg-foreground/5 backdrop-blur-lg rounded-2xl p-8 border border-neutral/10 shadow-2xl">
        <div className="space-y-6">
          {Array.isArray(educationItems) && educationItems.map((item, idx) => (
            <div key={idx} className="group flex items-start gap-4">
              <div className={`flex-shrink-0 w-10 h-10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-200 mt-1 shadow-lg ${
                idx % 2 === 0 ? 'bg-white/10 text-white group-hover:bg-white/15 group-hover:shadow-white/10' :
                'bg-white/15 text-gray-100 group-hover:bg-white/20 group-hover:shadow-white/10'
              }`}>
                <span className="font-bold text-sm">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-200">
                <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic achievements highlight */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="backdrop-blur-sm rounded-xl p-4 bg-white/5 border border-white/20">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-200">Academic Highlights:</span>
              <span className="px-3 py-1 text-xs font-medium bg-white/20 text-gray-200 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                GPA 3.67
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-white/25 text-gray-100 rounded-full border border-white/25 backdrop-blur-sm hover:bg-white/35 transition-all duration-200">
                Dean's List Fall 2023
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-white/30 text-white rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/40 transition-all duration-200">
                Information Technology Major
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}
