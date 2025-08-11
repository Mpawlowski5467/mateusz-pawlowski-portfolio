import { useEffect, useRef, useState } from 'react'

const codeSnippets = [
  'const portfolio = { name: "Mateusz", skills: ["React", "AI"] }',
  'function createChatbot() { return "Hello world!"; }',
  'import { useState } from "react"',
  'const aiIntern = async () => await buildTheFuture()',
  'class Student { constructor() { this.university = "DePaul" } }',
  'const projects = ["Polish School", "E-commerce", "Ticketing"]',
  'if (passionate && dedicated) { return success(); }',
  'const languages = ["JavaScript", "Python", "PHP", "Java"]',
  'export default function Innovation() { return <Future />; }',
  'const location = "Chicago, IL"; const dream = "AI Developer"',
  '// Building intelligent systems that improve user experience',
  'const chatbot = new OneReach.AI({ purpose: "onboarding" })',
  'SELECT * FROM skills WHERE proficiency = "advanced"',
  'git commit -m "feat: another day of learning"',
  'npm install future-technologies --save-dev',
  'const reyes = { role: "AI Intern", impact: "Significant" }',
  'python -c "print(\'Machine Learning Magic\')"',
  'curl -X POST /api/dreams -d "{ code: true }"',
  'docker run --name innovation -p 3000:3000 portfolio',
  'mongoose.connect("mongodb://localhost/portfolio")'
]

function CodeLine({ text, delay, duration }) {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    
    // Random position
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`absolute font-mono text-xs transition-all ease-out select-none pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDuration: `${duration}s`,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDuration: '2s',
        color: ['var(--red-crayola)', 'var(--naples-yellow)', 'var(--mint-cream)', 'var(--charcoal)'][Math.floor(Math.random() * 4)],
        opacity: visible ? 0.4 : 0,
        textShadow: `0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor`,
        filter: 'blur(0.5px)'
      }}
    >
      {text}
    </div>
  )
}

export function CodeBackground() {
  const [lines, setLines] = useState([])
  const intervalRef = useRef()

  useEffect(() => {
    // Create initial lines
    const initialLines = codeSnippets.slice(0, 8).map((snippet, index) => ({
      id: Date.now() + index,
      text: snippet,
      delay: index * 800,
      duration: 15 + Math.random() * 10
    }))
    setLines(initialLines)

    // Add new lines periodically
    intervalRef.current = setInterval(() => {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      const newLine = {
        id: Date.now(),
        text: randomSnippet,
        delay: 0,
        duration: 15 + Math.random() * 10
      }

      setLines(prev => {
        // Keep only the most recent 12 lines to prevent memory issues
        const updated = [...prev, newLine].slice(-12)
        return updated
      })
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-oxford-blue to-charcoal/30">
        {lines.map((line) => (
          <CodeLine
            key={line.id}
            text={line.text}
            delay={line.delay}
            duration={line.duration}
          />
        ))}
      </div>
      {/* Enhanced grid pattern overlay with glow */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(var(--red-crayola) 1px, transparent 1px),
            linear-gradient(90deg, var(--naples-yellow) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          filter: 'drop-shadow(0 0 8px var(--red-crayola))'
        }}
      />
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              backgroundColor: ['var(--red-crayola)', 'var(--naples-yellow)', 'var(--mint-cream)'][i % 3],
              boxShadow: `0 0 15px ${['var(--red-crayola)', 'var(--naples-yellow)', 'var(--mint-cream)'][i % 3]}`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  )
}