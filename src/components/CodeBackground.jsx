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
      className={`absolute font-mono text-xs transition-all ease-out text-primary/10 select-none pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDuration: `${duration}s`,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDuration: '2s'
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {lines.map((line) => (
          <CodeLine
            key={line.id}
            text={line.text}
            delay={line.delay}
            duration={line.duration}
          />
        ))}
      </div>
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(98, 146, 158, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(98, 146, 158, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}