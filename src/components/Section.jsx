// Page section with a numbered, terminal-style heading: "01 ── about ──────────"
export function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="mb-10 flex items-center gap-3 font-mono text-sm">
        <span className="text-neutral">{String(index).padStart(2, '0')}</span>
        <span className="h-px w-6 bg-white/30" aria-hidden="true" />
        <span className="text-lg font-semibold text-white">{title}</span>
        <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
      </h2>
      {children}
    </section>
  )
}
