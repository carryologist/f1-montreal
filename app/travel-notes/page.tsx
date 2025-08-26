'use client'
import { useState } from 'react'

export default function TravelNotes() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setSubmitting(true)
    setStatus(null)
    
    // Simulate form submission for static preview
    setTimeout(() => {
      setStatus('Thanks! Your travel note has been recorded. (Note: This is a preview - actual form submission will work when deployed with a database.)')
      ;(document.getElementById('travel-notes-form') as HTMLFormElement)?.reset()
      setSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold mclaren-gradient-text">Travel Notes</h1>
        <p className="text-lg text-gray-300">
          Share where you&apos;re coming from and when so we can coordinate rides, arrivals, and maybe catch some practice sessions together!
        </p>
      </div>
      
      <div className="mclaren-card">
        <form id="travel-notes-form" action={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="name">
                Name
              </label>
              <input 
                id="name" 
                name="name" 
                required 
                className="mclaren-input w-full" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="origin_city">
                Origin City
              </label>
              <input 
                id="origin_city" 
                name="origin_city" 
                required 
                className="mclaren-input w-full" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="origin_state">
              Origin State/Province
            </label>
            <input 
              id="origin_state" 
              name="origin_state" 
              className="mclaren-input w-full" 
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="arrival_date">
                Arrival Date
              </label>
              <input 
                id="arrival_date" 
                name="arrival_date" 
                type="date" 
                required 
                className="mclaren-input w-full" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="departure_date">
                Departure Date
              </label>
              <input 
                id="departure_date" 
                name="departure_date" 
                type="date" 
                required 
                className="mclaren-input w-full" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="travel_mode">
              Travel Mode
            </label>
            <select id="travel_mode" name="travel_mode" className="mclaren-input w-full">
              <option>Car</option>
              <option>Plane</option>
              <option>Train</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="notes">
              Notes (optional)
            </label>
            <textarea 
              id="notes" 
              name="notes" 
              className="mclaren-input w-full" 
              rows={4} 
              placeholder="Any F1 events you're most excited about? Interested in sharing rides to/from the circuit?"
            />
          </div>
          
          <button 
            disabled={submitting} 
            className="mclaren-button w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting…' : 'Submit'}
          </button>
          
          {status && (
            <div className={`p-4 rounded-lg border text-center ${
              status.includes('Thanks') 
                ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}>
              <p className="text-sm">{status}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}