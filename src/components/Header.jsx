import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { LanguageToggle } from './LanguageToggle.jsx'

const SECTIONS = ['about', 'experience', 'projects', 'education', 'skills']

// Sticky top bar: shell-prompt logo, plain text section links, EN|PL toggle.
// On small screens the links move into a menu.
export function Header() {
  const { t } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  // Mark the section that's currently in the middle of the viewport (none while on the hero)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id === 'top' ? null : entry.target.id)
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['top', ...SECTIONS].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = SECTIONS.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'location' : undefined}
      className={`font-mono text-sm transition-colors ${active === id ? 'text-white' : 'text-neutral hover:text-white'}`}
    >
      {/* Always rendered so the links don't shift when the marker moves */}
      <span className={active === id ? '' : 'invisible'} aria-hidden="true">&gt; </span>
      {t(`nav.${id}`)}
    </a>
  ))

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm text-white" aria-label={t('hero.name')}>
          <span className="hidden sm:inline">mateusz@portfolio</span>
          <span className="sm:hidden">mp</span>
          <span className="text-neutral">:~$</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-5 md:flex">
          {links}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            type="button"
            className="font-mono text-sm text-neutral transition-colors hover:text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            [ {open ? t('nav.close') : t('nav.menu')} ]
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
          {links}
        </nav>
      )}
    </header>
  )
}
