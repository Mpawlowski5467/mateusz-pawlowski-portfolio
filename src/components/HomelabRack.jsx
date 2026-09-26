import { useEffect, useRef, useState } from 'react'

// Animated ASCII drawing of my homelab rack. Purely decorative: the LEDs, load bars and
// network sparkline are random, not live telemetry (the caption under it says so).
// Pure ASCII on purpose: box-drawing glyphs aren't in the web font and would misalign.

const SERVICES = [
  'pi-hole', 'caddy', 'tailscale', 'homarr', 'uptime-kuma', 'beszel', 'ntfy', 'speedtest',
  'immich', 'paperless-ngx', 'invoice-ninja', 'n8n', 'actual-budget', 'gitea', 'syncthing', 'pixel-strip',
]
const INNER = 32 // characters between "| " and " |"
const BAR = 18 // width of the cpu/mem bars
const NET = 24 // width of the network sparkline
const SPARK = '_.-~^' // sparkline levels, low to high
const VISIBLE_ROWS = 5
const TICK_MS = 300

const FRAME = 'text-white/35'
const LABEL = 'text-neutral'
const VALUE = 'text-white'

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n))
const walk = (n, step, lo, hi) => clamp(n + Math.round((Math.random() * 2 - 1) * step), lo, hi)

// A line is a list of [text, className] segments; `row` pads the content to the frame width
const border = () => [['+' + '-'.repeat(INNER + 2) + '+', FRAME]]
const width = (parts) => parts.reduce((n, [text]) => n + text.length, 0)
const row = (parts) => [['| ', FRAME], ...parts, [' '.repeat(Math.max(0, INNER - width(parts))), ''], [' |', FRAME]]
const spread = (left, right) => row([...left, [' '.repeat(Math.max(1, INNER - width(left) - width(right))), ''], ...right])
const bar = (label, filled) => row([
  [`${label} `, LABEL], ['[', FRAME], ['#'.repeat(filled), VALUE], ['.'.repeat(BAR - filled), FRAME], [']', FRAME],
])

function initialState() {
  return {
    tick: 0,
    leds: [true, true, true, false, true],
    cpu: 7,
    mem: 11,
    net: Array.from({ length: NET }, (_, i) => Math.round(2 + 2 * Math.sin(i / 2.5))),
    offset: 0,
    busy: 1,
  }
}

function step(s) {
  const tick = s.tick + 1
  return {
    tick,
    // LED 0 is the power light and stays on; the others flicker like disk/network activity
    leds: s.leds.map((on, i) => (i === 0 ? true : Math.random() < 0.18 ? !on : on)),
    cpu: tick % 3 === 0 ? walk(s.cpu, 3, 3, 15) : s.cpu,
    mem: tick % 5 === 0 ? walk(s.mem, 1, 9, 13) : s.mem,
    net: [...s.net.slice(1), walk(s.net[s.net.length - 1], 2, 0, SPARK.length - 1)],
    offset: tick % 7 === 0 ? (s.offset + 1) % SERVICES.length : s.offset,
    busy: Math.random() < 0.35 ? Math.floor(Math.random() * VISIBLE_ROWS) : -1,
  }
}

function frame(s) {
  const services = Array.from({ length: VISIBLE_ROWS }, (_, i) => SERVICES[(s.offset + i) % SERVICES.length])
  return [
    border(),
    spread([['rackmate t1', VALUE]], [['proxmox ve 9', LABEL]]),
    spread(
      s.leds.flatMap((on) => [['[', FRAME], [on ? '*' : ' ', VALUE], [']', FRAME]]),
      [['17 lxc', LABEL]],
    ),
    border(),
    bar('cpu', s.cpu),
    bar('mem', s.mem),
    row([['net ', LABEL], [s.net.map((level) => SPARK[level]).join(''), VALUE]]),
    border(),
    ...services.map((name, i) => {
      const dots = '.'.repeat(Math.max(1, INNER - 4 - name.length - 2 - 2))
      return row([
        ['[', FRAME], [i === s.busy ? '>' : '=', i === s.busy ? VALUE : LABEL], ['] ', FRAME],
        [name, VALUE], [` ${dots} `, FRAME], ['up', VALUE],
      ])
    }),
    border(),
    spread([['[#] ', FRAME], ['ugreen nas', VALUE]], [['2tb nfs', LABEL]]),
    border(),
  ]
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function HomelabRack({ caption }) {
  const [state, setState] = useState(initialState)
  const [onScreen, setOnScreen] = useState(true)
  const ref = useRef(null)

  // Pause the animation while the rack is scrolled out of view
  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!onScreen || prefersReducedMotion()) return
    const id = setInterval(() => setState(step), TICK_MS)
    return () => clearInterval(id)
  }, [onScreen])

  return (
    <figure className="w-fit">
      <pre
        ref={ref}
        aria-hidden="true"
        className="select-none font-mono text-[10.5px] leading-[1.35] sm:text-xs lg:text-[13px]"
      >
        {frame(state).map((line, i) => (
          <span key={i} className="block">
            {line.map(([text, cls], j) => <span key={j} className={cls}>{text}</span>)}
          </span>
        ))}
      </pre>
      <figcaption className="mt-3 font-mono text-[11px] text-white/40">{caption}</figcaption>
    </figure>
  )
}
