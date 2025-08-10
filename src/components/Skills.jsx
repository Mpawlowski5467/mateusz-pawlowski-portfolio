import { useContext, useEffect, useRef, useState } from 'react'
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
  // Heads-up: this OpenAI devicon sometimes 404s. Swap to a local asset if needed.
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

const skills = [...backend, ...frontend, ...databases, ...platforms, ...other]

export function Skills() {
  const { t } = useContext(LanguageContext)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-4xl mx-auto my-20 p-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-poppy">{t('skills.title')}</h2>
      <div className="relative w-[28rem] h-[28rem] mx-auto flex flex-wrap content-center justify-center gap-4 rounded-full bg-jet border-4 border-teal-700 overflow-hidden">
        {skills.map((skill) => (
          <div key={skill.name} className="relative group w-16 h-16 flex items-center justify-center">
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 transition-transform group-hover:scale-110"
                loading="lazy"
                width="48"
                height="48"
              />
            ) : (
              <span
                role="img"
                aria-label={skill.name}
                className="text-4xl transition-transform group-hover:scale-110"
              >
                {skill.emoji}
              </span>
            )}
            <span className="absolute top-full mt-1 px-2 py-1 rounded bg-poppy text-jet text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
