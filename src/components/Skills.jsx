import { useContext } from 'react'
import {
  siCss, siDocker, siFastapi, siGit, siHtml5, siJavascript, siLinux, siMongodb, siMysql, siNodedotjs, siOllama,
  siOpenjdk, siOpenrouter, siPhp, siPostgresql, siPostman, siProxmox, siPython, siReact, siSnowflake,
  siTailwindcss, siVuedotjs,
} from 'simple-icons'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { Section } from './Section.jsx'
import { BrandIcon } from './BrandIcon.jsx'
import { siOnereach } from '../customIcons.js'

// Rendered as a skills.json file. Keys stay in English (they're "code").
// Items without a simple-icons logo get a short text `mark` instead.
const skills = {
  languages: [
    { name: 'JavaScript', icon: siJavascript },
    { name: 'Python', icon: siPython },
    { name: 'Java', icon: siOpenjdk },
    { name: 'C#', mark: 'C#' },
    { name: 'PHP', icon: siPhp },
    { name: 'SQL', mark: 'SQL' },
  ],
  frontend: [
    { name: 'React', icon: siReact },
    { name: 'Vue', icon: siVuedotjs },
    { name: 'Tailwind CSS', icon: siTailwindcss },
    { name: 'HTML', icon: siHtml5 },
    { name: 'CSS', icon: siCss },
  ],
  backend: [
    { name: 'Node.js', icon: siNodedotjs },
    { name: 'FastAPI', icon: siFastapi },
  ],
  databases: [
    { name: 'PostgreSQL', icon: siPostgresql },
    { name: 'MySQL', icon: siMysql },
    { name: 'MongoDB', icon: siMongodb },
    { name: 'Snowflake', icon: siSnowflake },
  ],
  ai: [
    { name: 'OneReach.ai', icon: siOnereach },
    { name: 'Ollama', icon: siOllama },
    { name: 'OpenRouter', icon: siOpenrouter },
  ],
  infra: [
    { name: 'Docker', icon: siDocker },
    { name: 'Linux', icon: siLinux },
    { name: 'Proxmox', icon: siProxmox },
    { name: 'Azure', mark: 'Az' },
    { name: 'MSAL', mark: 'MS' },
    { name: 'Git', icon: siGit },
    { name: 'Postman', icon: siPostman },
  ],
}

export function Skills() {
  const { t } = useContext(LanguageContext)
  const groups = Object.entries(skills)

  return (
    <Section id="skills" index={5} title={t('nav.skills')}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        {/* File tab */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-xs text-neutral">
          <span className="text-white">skills.json</span>
          <span>{groups.reduce((n, [, items]) => n + items.length, 0)} items</span>
        </div>

        <div className="overflow-x-auto p-4 font-mono text-sm sm:p-6">
          <span className="text-neutral">{'{'}</span>
          {groups.map(([key, items], gi) => (
            <div key={key} className="py-1.5 pl-4 sm:pl-6">
              <span className="text-white">"{key}"</span>
              <span className="text-neutral">: [</span>
              <ul className="flex flex-wrap gap-2 py-2 pl-4 sm:pl-6">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 px-2.5 py-1.5 text-foreground/90 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <BrandIcon icon={skill.icon} mark={skill.mark} />
                    {skill.name}
                  </li>
                ))}
              </ul>
              <span className="text-neutral">]{gi < groups.length - 1 ? ',' : ''}</span>
            </div>
          ))}
          <span className="text-neutral">{'}'}</span>
        </div>
      </div>
    </Section>
  )
}
