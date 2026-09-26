import { useCallback, useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { CONTACT } from '../links.js'
import { HomelabRack } from './HomelabRack.jsx'

// The hero "boots" like a shell session: each command types out, then its output appears.
// Outputs are always in the DOM (only faded), so screen readers and search engines get the
// real content. Plays once per browser session; click or any key skips it.
const COMMANDS = ['whoami', 'cat role.txt', 'cat location.txt']
const TICK_MS = 45 // per typed character
const PAUSE = 8 // ticks to wait after a command before typing the next one
const START_DELAY = 10 // ticks before the first command starts
const STORAGE_KEY = 'intro-played'

// Tick at which each command starts typing and finishes
const TIMELINE = COMMANDS.reduce((acc, cmd) => {
  const start = acc.length ? acc[acc.length - 1].end + PAUSE : 0
  return [...acc, { cmd, start, end: start + cmd.length }]
}, [])
const DONE = TIMELINE[TIMELINE.length - 1].end + PAUSE

function shouldAnimate() {
  if (typeof window === 'undefined') return false
  if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !window.sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return true
  }
}

function Cursor() {
  return <span className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] bg-white" aria-hidden="true" />
}

export function Hero() {
  const { t } = useContext(LanguageContext)
  const [progress, setProgress] = useState(() => (shouldAnimate() ? -START_DELAY : DONE))
  const done = progress >= DONE
  const skip = useCallback(() => setProgress(DONE), [])

  useEffect(() => {
    if (done) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {
        // Storage can be unavailable (private mode); the intro just plays again next time
      }
      return
    }
    const id = setInterval(() => setProgress((p) => Math.min(p + 1, DONE)), TICK_MS)
    window.addEventListener('keydown', skip)
    return () => {
      clearInterval(id)
      window.removeEventListener('keydown', skip)
    }
  }, [done, skip])

  const outputs = [
    <h1 key="name" className="mb-6 mt-1 text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl">
      {t('hero.name')}
    </h1>,
    <p key="role" className="mb-6 mt-1 text-xl text-foreground sm:text-2xl">
      {t('hero.role')} <span className="text-neutral">@</span> {t('hero.company')}
    </p>,
    <p key="location" className="mb-6 mt-1 flex items-center gap-2 font-mono text-sm text-neutral">
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      {t('hero.location')}
    </p>,
  ]

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_auto]">
        {/* Clicking anywhere in the intro skips the typing */}
        <div onClick={done ? undefined : skip}>
          {TIMELINE.map(({ cmd, start, end }, i) => {
            const typed = cmd.slice(0, Math.max(0, progress - start))
            const typing = !done && progress >= start && progress < end + PAUSE
            return (
              <div key={cmd}>
                <p className={`font-mono text-sm text-neutral ${progress >= start ? '' : 'invisible'}`} aria-hidden="true">
                  <span className="text-white/40">$</span> {typed}
                  {typing && <Cursor />}
                </p>
                <div className={`transition-opacity duration-300 ${progress >= end + 2 ? 'opacity-100' : 'opacity-0'}`}>
                  {outputs[i]}
                </div>
              </div>
            )
          })}

          {/* Final prompt; shows a skip hint while the intro is still typing */}
          <p className="font-mono text-sm text-neutral" aria-hidden="true">
            {done ? (
              <><span className="text-white/40">$</span> <Cursor /></>
            ) : (
              <span className="text-white/30">{t('hero.skip')}</span>
            )}
          </p>

          <div className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-500 ${done ? 'opacity-100' : 'invisible opacity-0'}`}>
            {['email', 'linkedin', 'github'].map((key) => (
              <a
                key={key}
                href={CONTACT[key]}
                target={key === 'email' ? undefined : '_blank'}
                rel={key === 'email' ? undefined : 'noopener noreferrer'}
                className="rounded border border-white/25 px-3 py-1.5 font-mono text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                {t(`contact.${key}`)}
              </a>
            ))}
          </div>
        </div>

        <HomelabRack caption={t('hero.rackCaption')} />
      </div>
    </section>
  )
}
