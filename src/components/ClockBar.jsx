import { useEffect, useState } from 'react'

// Four world clocks rendered in a slim bar at the top of the page.
// Times update every second using setInterval and Intl.DateTimeFormat, which
// respects locale formatting and daylight-saving changes.
const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Kraków', tz: 'Europe/Warsaw' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
  { city: 'Sydney', tz: 'Australia/Sydney' }
]

function format(zone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false
  }).format(new Date())
}

export function ClockBar() {
  const [times, setTimes] = useState(() => zones.map((z) => ({ ...z, time: format(z.tz) })))

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, time: format(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[var(--clock-bar-height)] bg-violet-jtc text-dutch-white flex items-center px-4 text-xs md:text-sm z-50"
      role="group"
      aria-label="World clocks"
    >
      {/* First two timezones left aligned */}
      <div className="flex gap-4">
        {times.slice(0, 2).map((t) => (
          <Clock key={t.tz} city={t.city} time={t.time} />
        ))}
      </div>
      {/* Last two timezones right aligned using margin-left auto */}
      <div className="ml-auto flex gap-4">
        {times.slice(2).map((t) => (
          <Clock key={t.tz} city={t.city} time={t.time} />
        ))}
      </div>
    </div>
  )
}

function Clock({ city, time }) {
  return (
    <div className="flex flex-col items-center font-mono" aria-label={city}>
      <span className="text-plum text-[0.65rem] md:text-xs">{city}</span>
      <span>{time}</span>
    </div>
  )
}
