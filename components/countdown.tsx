'use client'
import { useState, useEffect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const event = new Date("2026-05-21T00:00:00-04:00").getTime()
      const now = Date.now()
      const diff = Math.max(0, event - now)
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      
      return { days, hours, minutes, seconds }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-6 animate-fade-in">
      <div className="badge badge-white text-shadow">
        ⏰ Countdown: {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
      </div>
    </div>
  )
}

export default Countdown