import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

const backend = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 80 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 75 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 70 },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 60 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 65 },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 50 }
]

const frontend = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 85 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 80 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 70 },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 60 }
]

const databases = [
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 80 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 70 }
]

const platforms = [
  { name: 'OneReach.ai', emoji: '⚙️', level: 70 },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', level: 80 },
  { name: 'Anthropic Claude', emoji: '🤖', level: 70 },
  { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', level: 60 },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 75 }
]

const other = [
  { name: 'Workflow Documentation', emoji: '📝', level: 80 },
  { name: 'API Integration', emoji: '🔗', level: 75 },
  { name: 'Frontend Development', emoji: '🎨', level: 70 }
]

const renderSkill = (skill) => (
  <li
    key={skill.name}
    className="flex flex-col items-center justify-center p-4 border rounded-lg bg-white shadow-sm"
  >
    {skill.icon ? (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-12 h-12 mb-2 filter brightness-0"
      />
    ) : (
      <span role="img" aria-label={skill.name} className="text-4xl mb-2">
        {skill.emoji}
      </span>
    )}
    <span className="text-sm text-center">{skill.name}</span>
  </li>
)

export function Skills() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="skills" className="space-y-6">
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
