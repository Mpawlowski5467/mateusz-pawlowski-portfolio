import { useEffect, useState } from 'react'

const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Kraków', tz: 'Europe/Warsaw' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
  { city: 'Sydney', tz: 'Australia/Sydney' }
]

function formatTime(zone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date())
}

export function ClockBar() {
  const [times, setTimes] = useState(() =>
    zones.map((z) => ({ ...z, time: formatTime(z.tz) }))
  )

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, time: formatTime(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="clock-bar" role="group" aria-label="World clocks">
      <div className="clock-group">
        {times.slice(0, 2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
      <div className="clock-group">
        {times.slice(2).map((tz) => (
          <Clock key={tz.tz} city={tz.city} time={tz.time} />
        ))}
      </div>
    </div>
  )
}

function Clock({ city, time }) {
  return (
    <div className="clock" aria-label={city}>
      <span className="clock-label">{city}</span>
      <span className="clock-time">{time}</span>
    </div>
  )
}

