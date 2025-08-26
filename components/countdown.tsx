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
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">Countdown to F1 Race</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">--</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">--</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">--</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Minutes</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">--</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      </div>
    )
  }

  const isRaceTime = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
        {isRaceTime ? '🏁 Race Time!' : 'Countdown to F1 Race'}
      </h2>
      {isRaceTime ? (
        <div className="text-center">
          <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">🏎️ LIGHTS OUT! 🏎️</div>
          <div className="text-red-600 dark:text-red-400">The Canadian Grand Prix is happening now!</div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.days}</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.hours}</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.minutes}</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Minutes</div>
          </div>
          <div className="bg-white dark:bg-red-900/40 rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.seconds}</div>
            <div className="text-xs text-red-600 dark:text-red-400 uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      )}
      <div className="text-center mt-4 text-sm text-red-600 dark:text-red-400">
        Canadian Grand Prix • May 21, 2026 • 2:00 PM EDT
      </div>
    </div>
  )
}