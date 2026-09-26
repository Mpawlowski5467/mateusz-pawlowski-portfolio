import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { Section } from './Section.jsx'

export function Projects() {
  const { t } = useContext(LanguageContext)
  const items = t('projects.items')

  return (
    <Section id="projects" index={3} title={t('nav.projects')}>
      <div className="space-y-8">
        {Array.isArray(items) && items.map((proj, idx) => (
          <article
            key={proj.name}
            className="group grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/30 md:grid-cols-2"
          >
            {/* Screenshot: grayscale until hovered, to stay on the monochrome palette */}
            <div className="overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">
              <img
                src={`${import.meta.env.BASE_URL}${proj.image}`}
                alt={proj.imageAlt}
                width="1280"
                height="720"
                loading="lazy"
                className="aspect-video h-full w-full object-cover object-left-top grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <p className="mb-2 font-mono text-xs text-neutral">
                {String(idx + 1).padStart(2, '0')} · {proj.tagline}
              </p>
              <h3 className="mb-3 text-2xl font-semibold text-white">{proj.name}</h3>
              <p className="mb-5 leading-relaxed text-foreground/80">{proj.desc}</p>

              <ul className="mb-6 flex flex-wrap gap-2" aria-label="Stack">
                {proj.tags?.map((tag) => (
                  <li key={tag} className="rounded border border-white/15 px-2 py-0.5 font-mono text-xs text-neutral">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-4 font-mono text-sm">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline-offset-4 hover:underline"
                >
                  [ {t('projects.repo')} -&gt; ]
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline-offset-4 hover:underline"
                  >
                    [ {t('projects.demo')} -&gt; ]
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
