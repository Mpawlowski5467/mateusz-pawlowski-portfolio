import { useEffect, useState } from 'react'

// Time zone definitions. Each entry uses the IANA time zone name so
// Intl.DateTimeFormat can handle DST automatically.
const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Kraków', tz: 'Europe/Warsaw' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
  { city: 'Sydney', tz: 'Australia/Sydney' }
]

// Format 24h time with a weekday label for the given zone.
function formatTime(zone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    weekday: 'short'
  }).format(new Date())
}

export function ClockBar() {
  // Keep an array of formatted times for rendering.
  const [times, setTimes] = useState(() =>
    zones.map((z) => ({ ...z, time: formatTime(z.tz) }))
  )

  useEffect(() => {
    // Update every second; setInterval is sufficient and cheaper than
    // requestAnimationFrame for once-per-second updates.
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, time: formatTime(z.tz) })))
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
        {times.slice(0, 2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
      <div className="flex gap-4">
        {times.slice(2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
    </div>
  )
}

function Clock({ city, time }) {
  return (
    <div className="flex flex-col items-center font-mono" aria-label={city}>
      <span className="text-cambridge-blue text-[0.65rem]">{city}</span>
      <span className="text-dutch-white">{time}</span>
    </div>
  )
}
