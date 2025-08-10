import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

const backend = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
]

const frontend = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
]

const databases = [
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
]

const platforms = [
  { name: 'OneReach.ai', emoji: '⚙️' },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' },
  { name: 'Anthropic Claude', emoji: '🤖' },
  { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
]

const other = [
  { name: 'Workflow Documentation', emoji: '📝' },
  { name: 'API Integration', emoji: '🔗' },
  { name: 'Frontend Development', emoji: '🎨' }
]

const renderSkill = (skill) => (
  <li key={skill.name} className="flex items-center gap-2 p-3 border rounded-md bg-white shadow-sm">
    {skill.icon ? (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-6 h-6 filter brightness-0"
        loading="lazy"
        width="24"
        height="24"
      />
    ) : (
      <span role="img" aria-label={skill.name} className="text-xl">{skill.emoji}</span>
    )}
    <span className="text-sm">{skill.name}</span>
  </li>
)

export function Skills() {
  const { t } = useContext(LanguageContext)

  return (
    <section id="skills" className="max-w-4xl mx-auto my-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">{t('skills.title')}</h2>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t('skills.backend')}</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {backend.map(renderSkill)}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t('skills.frontend')}</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {frontend.map(renderSkill)}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t('skills.databases')}</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {databases.map(renderSkill)}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t('skills.platforms')}</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {platforms.map(renderSkill)}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{t('skills.other')}</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {other.map(renderSkill)}
        </ul>
      </div>
    </section>
  )
}
