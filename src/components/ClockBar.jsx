import { useEffect, useState } from 'react'

// Define the zones we want to display
const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Kraków', tz: 'Europe/Warsaw' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
  { city: 'Sydney', tz: 'Australia/Sydney' }
]

// Format time as 24h with weekday, e.g. "Tue 14:03"
function formatTime(zone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date())
}

export function ClockBar() {
  // Keep current times for each zone in state
  const [times, setTimes] = useState(() =>
    zones.map((z) => ({ ...z, time: formatTime(z.tz) }))
  )

  useEffect(() => {
    // Update every second; setInterval handles DST automatically via Intl
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, time: formatTime(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    // Slim bar fixed to the very top
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 h-[var(--clock-bar-h)] bg-secondary/90 text-foreground font-mono text-[0.65rem] sm:text-xs">
      {/* Left group: first two time zones */}
      <div className="flex gap-4 items-center">
        {times.slice(0, 2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
      {/* Right group: remaining time zones */}
      <div className="flex gap-4 items-center">
        {times.slice(2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
    </div>
  )
}

function Clock({ city, time }) {
  return (
    <div className="flex flex-col items-center" aria-label={city}>
      <span className="text-neutral">{city}</span>
      <span>{time}</span>
    </div>
  )
}
