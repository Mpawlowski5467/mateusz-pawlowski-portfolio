import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { Section } from './Section.jsx'

export function Experience() {
  const { t } = useContext(LanguageContext)
  const roles = t('experience.roles')

  return (
    <Section id="experience" index={2} title={t('nav.experience')}>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-2xl font-semibold text-white">{t('experience.company')}</h3>
          <span className="font-mono text-sm text-neutral">{t('experience.location')}</span>
        </div>

        {/* Roles at the company, newest first */}
        <ol className="relative ml-1.5 space-y-8 border-l border-white/15">
          {Array.isArray(roles) && roles.map((role) => (
            <li key={role.title} className="relative pl-7">
              <span
                className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ${
                  role.current ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]' : 'border border-white/40 bg-black'
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                {role.current && (
                  <span className="rounded border border-white/30 px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-white">
                    {t('experience.current')}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-sm text-neutral">
                {role.type} · {role.date}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
