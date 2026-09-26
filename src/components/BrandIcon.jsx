// Monochrome brand icons drawn inline (fill: currentColor), so they follow the text color
// and need no network requests. Most come from the `simple-icons` package.

// Renders a simple-icons style object ({ path, viewBox? }) or, when no icon exists, a short text mark
export function BrandIcon({ icon, mark, className = 'h-4 w-4' }) {
  if (icon) {
    return (
      <svg viewBox={icon.viewBox ?? '0 0 24 24'} className={`${className} flex-shrink-0 fill-current`} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    )
  }
  return (
    <span aria-hidden="true" className={`${className} inline-flex flex-shrink-0 items-center justify-center font-mono text-[9px] font-bold leading-none`}>
      {mark}
    </span>
  )
}
