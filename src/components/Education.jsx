import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Education() {
  const { t } = useContext(LanguageContext)
  const educationItems = t('education.items')
  
  return (
    <section id="education" className="max-w-5xl mx-auto my-20 px-6">
      <div className="text-center mb-16">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-6">
          <div className="bg-background rounded-xl px-6 py-2">
            <span className="text-sm font-medium text-neutral">🎓 Academic Journey</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
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
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-all duration-200 mt-1">
                <span className="text-primary font-bold text-sm">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 bg-primary/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10 group-hover:border-primary/20 transition-all duration-200">
                <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic achievements highlight */}
        <div className="mt-8 pt-6 border-t border-neutral/20">
          <div className="backdrop-blur-sm rounded-xl p-4 bg-secondary/5 border border-secondary/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-secondary">Academic Highlights:</span>
              <span className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full border border-secondary/30 backdrop-blur-sm">
                GPA 3.67
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full border border-secondary/30 backdrop-blur-sm">
                Dean's List Fall 2023
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full border border-secondary/30 backdrop-blur-sm">
                Information Technology Major
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
