import { useEffect, useState } from 'react'
import { Navbar } from './Navbar.jsx'

const zones = [
  { city: 'Chicago', tz: 'America/Chicago' },
  { city: 'Krak\u00f3w', tz: 'Europe/Warsaw' },
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

export function TopRow() {
  const [times, setTimes] = useState(() => zones.map((z) => ({ ...z, time: formatTime(z.tz) })))

  useEffect(() => {
    const id = setInterval(() => {
      setTimes(zones.map((z) => ({ ...z, time: formatTime(z.tz) })))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="top-row">
      {times.slice(0, 2).map((tz) => (
        <Clock key={tz.tz} city={tz.city} time={tz.time} />
      ))}
      <Navbar />
      {times.slice(2).map((tz) => (
        <Clock key={tz.tz} city={tz.city} time={tz.time} />
      ))}
    </header>
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

