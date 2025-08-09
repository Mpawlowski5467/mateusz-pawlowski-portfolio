import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

const backend = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
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
  {
    name: 'OpenAI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg'
  },
  { name: 'Anthropic Claude', emoji: '🤖' },
  {
    name: 'Google Gemini',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
  },
  {
    name: 'Google',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
  },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
]

const other = [
  { name: 'Workflow Documentation', emoji: '📝' },
  { name: 'API Integration', emoji: '🔗' },
  { name: 'Frontend Development', emoji: '🎨' }
]

const renderSkill = (skill) => (
  <div
    key={skill.name}
    className="flex flex-col items-center p-4 bg-gray-50 rounded shadow-sm"
  >
    {skill.icon ? (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-12 h-12 mb-2 filter brightness-0"
      />
    ) : (
      <span className="text-3xl mb-2">{skill.emoji}</span>
    )}
    <span className="text-sm text-center">{skill.name}</span>
  </div>
)

export default function Skills() {
  const { t } = useContext(LanguageContext)
  return (
    <section
      id="skills"
      className="max-w-3xl mx-auto my-6 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-1 mb-4">
        {t('skills.title')}
      </h2>

      <h3 className="mt-4 mb-2 font-semibold">{t('skills.backend')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {backend.map(renderSkill)}
      </div>

      <h3 className="mt-6 mb-2 font-semibold">{t('skills.frontend')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {frontend.map(renderSkill)}
      </div>

      <h3 className="mt-6 mb-2 font-semibold">{t('skills.databases')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {databases.map(renderSkill)}
      </div>

      <h3 className="mt-6 mb-2 font-semibold">{t('skills.platforms')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {platforms.map(renderSkill)}
      </div>

      <h3 className="mt-6 mb-2 font-semibold">{t('skills.other')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {other.map(renderSkill)}
      </div>
    </section>
  )
}
