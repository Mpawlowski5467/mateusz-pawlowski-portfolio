import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function SocialLink({ href, label, children, colorClass }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={`w-8 h-8 flex items-center justify-center no-underline motion-safe:hover:scale-110 motion-safe:transition-all duration-200 focus:outline-none focus-visible:ring-2 ring-naples-yellow rounded-lg hover:bg-foreground/10 ${colorClass}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export function Footer() {
  const { t } = useContext(LanguageContext)
  const gh = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
  const li = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.1V24h-4z" />
    </svg>
  )
  const mail = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" />
      <path d="m22 4-10 7L2 4" />
    </svg>
  )

  return (
    // Footer at the bottom of the page using relative positioning
    <footer className="mt-auto w-full z-30 h-[var(--footer-h)] bg-charcoal/95 backdrop-blur-md border-t border-naples-yellow/20 text-foreground flex items-center justify-between px-8 text-sm">
      <div className="flex items-center gap-4">
        <span className="text-neutral/70 text-xs">© 2025</span>
        <span className="text-mint-cream font-medium">{t('footer.name')}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <SocialLink href="https://github.com/Mpawlowski5467" label={t('about.github')} colorClass="text-mint-cream hover:text-naples-yellow">
          {gh}
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/mateusz-pawlowski-823849302/" label={t('about.linkText')} colorClass="text-naples-yellow hover:text-red-crayola">
          {li}
        </SocialLink>
        <SocialLink href="mailto:mpawlowski5467@gmail.com" label={t('about.email')} colorClass="text-red-crayola hover:text-mint-cream">
          {mail}
        </SocialLink>
      </div>
      
      <div className="text-xs text-neutral/60">
        {t('footer.updated')} {new Date().toLocaleDateString()}
      </div>
    </footer>
  )
}