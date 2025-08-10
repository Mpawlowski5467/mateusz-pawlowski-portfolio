import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Projects() {
  const { t } = useContext(LanguageContext)

  return (
    <section id="projects" className="max-w-6xl mx-auto my-20 px-6">
      <div className="text-center mb-16">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-6">
          <div className="bg-background rounded-xl px-6 py-2">
            <span className="text-sm font-medium text-neutral">🚀 Featured Work</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-neutral max-w-2xl mx-auto">
          Here are some of the projects I've built with passion and dedication
        </p>
      </div>

      {/* Project cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t('projects.items').map((proj, idx) => (
          <div
            key={idx}
            className="group relative bg-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-neutral/10 hover:border-primary/30 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-2xl motion-safe:transition-all duration-300"
          >
            {/* Project number badge */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background font-bold text-sm">
              {(idx + 1).toString().padStart(2, '0')}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {proj.name}
              </h3>
              <p className="text-neutral leading-relaxed">
                {proj.desc}
              </p>
            </div>

            {/* Technologies used - you could extend this */}
            <div className="flex flex-wrap gap-2 mb-6">
              {idx === 0 && (
                <>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">React</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">CSS</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">UI/UX</span>
                </>
              )}
              {idx === 1 && (
                <>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">JavaScript</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">Node.js</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">MongoDB</span>
                </>
              )}
              {idx === 2 && (
                <>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">Full Stack</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">API</span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg">Database</span>
                </>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 motion-safe:transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-primary/50"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  {t('projects.github')}
                </a>
              )}
              <button className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary font-medium rounded-lg hover:bg-primary/10 motion-safe:transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-primary/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
