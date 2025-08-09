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
  <li key={skill.name} className="skill-item">
    {skill.icon ? (
      <img src={skill.icon} alt={skill.name} />
    ) : (
      <span role="img" aria-label={skill.name}>{skill.emoji}</span>
    )}
    <span>{skill.name}</span>
    <div className="skill-bar"><span style={{ width: `${skill.level}%` }}></span></div>
  </li>
)

export default function Skills() {
  const { t } = useContext(LanguageContext)
  return (
    <section id="skills">
      <h2>{t('skills.title')}</h2>

      <h3>{t('skills.backend')}</h3>
      <ul className="skills-list">
        {backend.map(renderSkill)}
      </ul>

      <h3>{t('skills.frontend')}</h3>
      <ul className="skills-list">
        {frontend.map(renderSkill)}
      </ul>

      <h3>{t('skills.databases')}</h3>
      <ul className="skills-list">
        {databases.map(renderSkill)}
      </ul>

      <h3>{t('skills.platforms')}</h3>
      <ul className="skills-list">
        {platforms.map(renderSkill)}
      </ul>

      <h3>{t('skills.other')}</h3>
      <ul className="skills-list">
        {other.map(renderSkill)}
      </ul>
    </section>
  )
}
