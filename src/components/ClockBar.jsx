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
  // Initialize with current times for all zones
  const [times, setTimes] = useState(() =>
    zones.map((z) => ({ ...z, ...formatTime(z.tz) }))
  )

  useEffect(() => {
    // Update every second; Intl handles DST automatically
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, ...formatTime(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    // Slim bar fixed to the very top
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 h-[var(--clock-bar-h)] bg-violet-jtc text-dutch-white font-mono text-[0.65rem] sm:text-xs items-center"
      role="group"
      aria-label="World clocks"
    >
      {/* Left group: first two time zones */}
      <div className="flex gap-4 items-center">
        {times.slice(0, 2).map(({ city, time, day }) => (
          <Clock key={city} city={city} time={time} day={day} align="start" />
        ))}
      </div>
      {/* Right group: last two time zones */}
      <div className="flex gap-4 items-center">
        {times.slice(2).map(({ city, time, day }) => (
          <Clock key={city} city={city} time={time} day={day} align="end" />
        ))}
      </div>
    </div>
  )
}

function Clock({ city, time, day, align = 'center' }) {
  return (
    <div
      className={`flex flex-col items-${align}`}
      aria-label={`${city} time`}
    >
      <span className="text-cambridge-blue">{city}</span>
      <span className="tabular-nums">
        {time} {day}
      </span>
    </div>
  )
}
