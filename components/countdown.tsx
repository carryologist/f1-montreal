'use client'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = (): TimeLeft => {
      // F1 Race starts May 21, 2026 at 2:00 PM EDT (Montreal time)
      const raceDate = new Date('2026-05-21T14:00:00-04:00')
      const now = new Date()
      const difference = raceDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
          ⏱️ Countdown: 313 days, 12 hours, 46 minutes
        </div>
      </div>
    )
  }

  const isRaceTime = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isRaceTime) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-bold animate-pulse">
          🏎️ LIGHTS OUT! The Canadian Grand Prix is happening now! 🏎️
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
        ⏱️ Countdown: {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
      </div>
    </div>
  )
}