import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  const experienceBullets = t('experience.bullets')
  
  return (
    <section id="experience" className="max-w-5xl mx-auto my-20 px-6">
      <div className="window-frame">
        <div className="window-titlebar">
          <div className="window-controls">
            <div className="window-control"></div>
            <div className="window-control"></div>
            <div className="window-control"></div>
          </div>
          <span className="terminal-prompt">~/{t('terminalPaths.experience')}$</span>
        </div>
        <div className="p-8">
          <div className="text-center mb-16">
            <div className="inline-block p-1 rounded-2xl bg-white/5 mb-6">
              <div className="bg-background rounded-xl px-6 py-2">
                <span className="text-sm font-medium text-neutral">💼 Professional Journey</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
            <div className="w-16 h-16 rounded-xl bg-white/10 p-3 border border-white/20 backdrop-blur-sm">
              <img
                src="https://cdn.brandfetch.io/idHbgw3t_o/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750697988516"
                alt="Reyes Holdings Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
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
            <div className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm font-medium backdrop-blur-sm">
              Current Position
            </div>
          </div>
        </div>

        {/* Achievements list without individual boxes */}
        <div className="space-y-4">
          {Array.isArray(experienceBullets) && experienceBullets.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group hover:bg-foreground/5 rounded-xl p-4 -mx-4 transition-all duration-200">
              <div className={`flex-shrink-0 w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200 mt-1 shadow-lg ${
                idx % 4 === 0 ? 'bg-white/5 text-white group-hover:bg-white/10 group-hover:shadow-white/10' :
                idx % 4 === 1 ? 'bg-white/10 text-gray-100 group-hover:bg-white/15 group-hover:shadow-white/10' :
                idx % 4 === 2 ? 'bg-white/15 text-gray-100 group-hover:bg-white/20 group-hover:shadow-white/10' :
                'bg-white/8 text-gray-200 group-hover:bg-white/12 group-hover:shadow-white/10'
              }`}>
                <span className="font-bold text-sm">
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
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="backdrop-blur-sm rounded-xl p-4 bg-white/5 border border-white/20">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-200 mb-3 w-full">🚀 Key Technologies & Skills:</span>
              {['OneReach.ai', 'Retrieval-Augmented Generation', 'Frontend Development', 'CSS Design Systems', 'Document Processing', 'Chatbot Development'].map((skill, idx) => (
                <span
                  key={skill}
                  className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm hover:scale-105 transition-all duration-200 cursor-default ${
                    idx % 3 === 0 ? 'bg-white/20 text-gray-200 border-white/20 hover:bg-white/30' :
                    idx % 3 === 1 ? 'bg-white/25 text-gray-100 border-white/25 hover:bg-white/35' :
                    'bg-white/30 text-white border-white/30 hover:bg-white/40'
                  }`}
                >
                  {skill}
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
