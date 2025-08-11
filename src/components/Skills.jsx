import { useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { SkillIcon } from './SkillIcon.jsx'

const backend = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.brandfetch.io/id7JRtQEAa/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1748370798050' },
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
  { name: 'OneReach.ai', icon: 'https://avatars.githubusercontent.com/u/25886986?s=200&v=4' },
  { name: 'OpenAI', icon: 'https://cdn.brandfetch.io/idR3duQxYl/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1749527480180' },
  { name: 'Anthropic Claude', icon: 'https://cdn.brandfetch.io/idmJWF3N06/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1721803183866' },
  { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
]

// const other = [
//   { name: 'Workflow Documentation', emoji: '📝' },
//   { name: 'API Integration', emoji: '🔗' },
//   { name: 'Frontend Development', emoji: '🎨' }
// ]

// const skills = [...backend, ...frontend, ...databases, ...platforms]

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
      className={`max-w-6xl mx-auto my-20 px-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-16">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-6">
          <div className="bg-background rounded-xl px-6 py-2">
            <span className="text-sm font-medium text-neutral">🛠️ Tech Stack</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('skills.title')}
        </h2>
        <p className="text-lg text-neutral max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills in code-like pattern */}
      <div className="relative bg-foreground/5 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-neutral/10 shadow-2xl">
        {/* Code-like layout with staggered positioning */}
        <div className="relative min-h-[400px] sm:min-h-[500px] overflow-x-auto">
          {/* Simulate code indentation patterns */}
          <div className="space-y-2 sm:space-y-3 min-w-[600px] sm:min-w-0">
            {/* Line 1: Backend skills */}
            <div className="flex items-center gap-3 pl-0">
              <span className="text-charcoal/60 font-mono text-sm">01</span>
              <span className="text-red-crayola font-mono text-sm font-semibold">const</span>
              <span className="text-naples-yellow font-mono text-sm">backend = [</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 pl-4 sm:pl-8">
              {backend.map((skill, idx) => (
                <div key={skill.name} className="flex items-center gap-1">
                  <span className="text-mint-cream/80 font-mono text-xs sm:text-sm">"</span>
                  <div className="group relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-red-crayola/10 backdrop-blur-sm rounded-lg border border-red-crayola/20 hover:bg-red-crayola/20 hover:border-red-crayola/40 hover:shadow-lg hover:shadow-red-crayola/20 transition-all duration-200 touch-manipulation">
                    <SkillIcon skill={skill} />
                    <span className="text-xs sm:text-sm font-medium text-foreground/90">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-mint-cream/80 font-mono text-xs sm:text-sm">"</span>
                  {idx < backend.length - 1 && <span className="text-neutral/60 font-mono text-xs sm:text-sm">,</span>}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-0">
              <span className="text-charcoal/60 font-mono text-sm">02</span>
              <span className="text-mint-cream font-mono text-sm">];</span>
            </div>

            {/* Line 2: Frontend skills */}
            <div className="flex items-center gap-3 pl-0 mt-6">
              <span className="text-charcoal/60 font-mono text-sm">03</span>
              <span className="text-red-crayola font-mono text-sm font-semibold">const</span>
              <span className="text-naples-yellow font-mono text-sm">frontend = [</span>
            </div>
            <div className="flex flex-wrap gap-3 pl-8">
              {frontend.map((skill, ) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-2 px-3 py-2 bg-naples-yellow/10 backdrop-blur-sm rounded-lg border border-naples-yellow/20 hover:bg-naples-yellow/20 hover:border-naples-yellow/40 hover:shadow-lg hover:shadow-naples-yellow/20 transition-all duration-200 touch-manipulation"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="text-sm font-medium text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-0">
              <span className="text-charcoal/60 font-mono text-sm">04</span>
              <span className="text-mint-cream font-mono text-sm">];</span>
            </div>

            {/* Line 3: Databases - nested like an object */}
            <div className="flex items-center gap-3 pl-0 mt-6">
              <span className="text-charcoal/60 font-mono text-sm">05</span>
              <span className="text-red-crayola font-mono text-sm font-semibold">const</span>
              <span className="text-naples-yellow font-mono text-sm">databases = {`{`}</span>
            </div>
            <div className="flex flex-wrap gap-3 pl-8">
              {databases.map((skill, ) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-2 px-3 py-2 bg-charcoal/10 backdrop-blur-sm rounded-lg border border-charcoal/20 hover:bg-charcoal/20 hover:border-charcoal/40 hover:shadow-lg hover:shadow-mint-cream/10 transition-all duration-200 touch-manipulation"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="text-sm font-medium text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-0">
              <span className="text-charcoal/60 font-mono text-sm">06</span>
              <span className="text-mint-cream font-mono text-sm">{`};`}</span>
            </div>

            {/* Line 4: Platforms as function call */}
            <div className="flex items-center gap-3 pl-0 mt-6">
              <span className="text-charcoal/60 font-mono text-sm">07</span>
              <span className="text-red-crayola font-mono text-sm font-semibold">function</span>
              <span className="text-naples-yellow font-mono text-sm">getPlatforms() {`{`}</span>
            </div>
            <div className="flex items-center gap-3 pl-4">
              <span className="text-charcoal/60 font-mono text-sm">08</span>
              <span className="text-red-crayola font-mono text-sm font-semibold">return</span>
              <span className="text-naples-yellow font-mono text-sm">[</span>
            </div>
            <div className="flex flex-wrap gap-3 pl-12">
              {platforms.map((skill, ) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-2 px-3 py-2 bg-red-crayola/10 backdrop-blur-sm rounded-lg border border-red-crayola/20 hover:bg-red-crayola/20 hover:border-red-crayola/40 hover:shadow-lg hover:shadow-red-crayola/20 transition-all duration-200 touch-manipulation"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="text-sm font-medium text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-4">
              <span className="text-charcoal/60 font-mono text-sm">09</span>
              <span className="text-mint-cream font-mono text-sm">];</span>
            </div>
            <div className="flex items-center gap-3 pl-0">
              <span className="text-charcoal/60 font-mono text-sm">10</span>
              <span className="text-mint-cream font-mono text-sm">{`}`}</span>
            </div>

            {/* Closing comment */}
            <div className="flex items-center gap-3 pl-0 mt-6">
              <span className="text-charcoal/60 font-mono text-sm">11</span>
              <span className="text-charcoal/70 font-mono text-sm italic">// Ready to build amazing things! 🚀</span>
            </div>
          </div>

          {/* Code editor style decorations */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
