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
      <div className="mclaren-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mclaren-gradient-text mb-2">🏁 LIGHTS OUT IN</h2>
            <p className="text-gray-400 uppercase tracking-wider text-sm">Canadian Grand Prix • Circuit Gilles Villeneuve</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
              <div key={unit} className="text-center">
                <div className="mclaren-card bg-gradient-to-br from-gray-900 to-black border-orange-500/30 mb-3 pulse-orange">
                  <div className="text-4xl font-bold text-orange-500 mb-1">--</div>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const isRaceTime = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div className="mclaren-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10"></div>
      <div className="relative z-10">
        {isRaceTime ? (
          <div className="text-center py-12">
            <div className="text-6xl font-bold mclaren-gradient-text mb-4">🏎️ LIGHTS OUT! 🏎️</div>
            <div className="text-2xl text-orange-500 font-semibold mb-2">AND AWAY WE GO!</div>
            <div className="text-gray-400">The Canadian Grand Prix is happening now!</div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mclaren-gradient-text mb-2">🏁 LIGHTS OUT IN</h2>
              <p className="text-gray-400 uppercase tracking-wider text-sm">Canadian Grand Prix • Circuit Gilles Villeneuve</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, unit: 'Days' },
                { value: timeLeft.hours, unit: 'Hours' },
                { value: timeLeft.minutes, unit: 'Minutes' },
                { value: timeLeft.seconds, unit: 'Seconds' }
              ].map(({ value, unit }) => (
                <div key={unit} className="text-center">
                  <div className="mclaren-card bg-gradient-to-br from-gray-900 to-black border-orange-500/30 mb-3 hover:border-orange-500/50 transition-all duration-300">
                    <div className="text-4xl font-bold text-orange-500 mb-1">{value.toString().padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{unit}</div>
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>📅 May 21, 2026</span>
            <span>•</span>
            <span>🕐 2:00 PM EDT</span>
            <span>•</span>
            <span>🏁 Race Day</span>
          </div>
        </div>
      </div>
    </div>
  )
}