import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  const experienceBullets = t('experience.bullets')
  
  return (
    <section id="experience" className="max-w-5xl mx-auto my-20 px-6">
      <div className="text-center mb-16">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-6">
          <div className="bg-background rounded-xl px-6 py-2">
            <span className="text-sm font-medium text-neutral">💼 Professional Journey</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('experience.title')}
        </h2>
        <p className="text-lg text-neutral max-w-2xl mx-auto">
          Building the future with AI and intelligent systems
        </p>
      </div>

      <div className="relative bg-foreground/5 backdrop-blur-lg rounded-2xl p-8 border border-neutral/10 shadow-2xl">
        {/* Company header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 p-3 border border-primary/20 backdrop-blur-sm">
              <img
                src="https://cdn.brandfetch.io/idHbgw3t_o/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750697988516"
                alt="Reyes Holdings Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                {t('experience.role')}
              </h3>
              <div className="flex items-center gap-2 text-neutral">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{t('experience.date')}</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium backdrop-blur-sm">
              Current Position
            </div>
          </div>
        </div>

        {/* Achievements list without individual boxes */}
        <div className="space-y-4">
          {Array.isArray(experienceBullets) && experienceBullets.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all duration-200 mt-1">
                <span className="text-primary font-bold text-sm">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1 group-hover:text-foreground transition-colors duration-200 text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Skills highlighted from experience */}
        <div className="mt-8 pt-6 border-t border-neutral/20">
          <div className="backdrop-blur-sm rounded-xl p-4 bg-primary/5 border border-primary/10">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-primary mb-3 w-full">Key Technologies & Skills:</span>
              {['OneReach.ai', 'Retrieval-Augmented Generation', 'Frontend Development', 'CSS Design Systems', 'Document Processing', 'Chatbot Development'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm hover:bg-primary/30 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
