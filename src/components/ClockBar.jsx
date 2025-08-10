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
    // Floating pill slightly below the top edge
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex gap-6 px-4 py-1 rounded-full bg-secondary/90 text-foreground font-mono text-[0.65rem] sm:text-xs shadow-lg">
      {times.map((tz) => (
        <Clock key={tz.tz} city={tz.city} time={tz.time} />
      ))}
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
