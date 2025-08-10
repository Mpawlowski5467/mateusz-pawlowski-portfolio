import { useEffect, useState } from 'react'

// List of cities with IANA timezone identifiers
const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Kraków', tz: 'Europe/Warsaw' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
  { city: 'Sydney', tz: 'Australia/Sydney' },
]

// Format time as HH:mm and weekday (24h) respecting DST for each zone
function formatTime(tz) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false,
  }).formatToParts(new Date())
  const time = `${parts.find((p) => p.type === 'hour')?.value}:${parts.find((p) => p.type === 'minute')?.value}`
  const day = parts.find((p) => p.type === 'weekday')?.value
  return { time, day }
}

export function ClockBar() {
  const [times, setTimes] = useState(() => zones.map((z) => ({ ...z, ...formatTime(z.tz) })))

  useEffect(() => {
    // Update every second using setInterval. requestAnimationFrame is unnecessary for 1s ticks.
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, ...formatTime(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[var(--clock-bar-height)] bg-violet-jtc text-dutch-white flex items-center justify-between px-4 text-xs sm:text-sm z-50"
      role="group"
      aria-label="World clocks"
    >
      <div className="flex gap-4">
        {times.slice(0, 2).map(({ city, time, day }) => (
          <div key={city} className="flex flex-col items-start" aria-label={city}>
            <span className="text-cambridge-blue">{city}</span>
            <span className="font-mono tabular-nums">{time} {day}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {times.slice(2).map(({ city, time, day }) => (
          <div key={city} className="flex flex-col items-end" aria-label={city}>
            <span className="text-cambridge-blue">{city}</span>
            <span className="font-mono tabular-nums">{time} {day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
