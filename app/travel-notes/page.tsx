'use client'
import { useState } from 'react'

export default function TravelNotes() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setSubmitting(true)
    setStatus(null)
    const res = await fetch('/api/travel-notes', {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) {
      setStatus('Something went wrong. Please try again.')
    } else {
      setStatus('Thanks! Your travel note has been recorded.')
      ;(document.getElementById('travel-notes-form') as HTMLFormElement)?.reset()
    }
    setSubmitting(false)
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mclaren-gradient-text mb-4">Travel Notes</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Share your travel plans so we can coordinate rides, arrivals, and maybe catch some practice sessions together!
        </p>
      </div>
      
      {/* Form Card */}
      <div className="max-w-2xl mx-auto">
        <div className="mclaren-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                ✈️
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Coordinate Your Trip</h2>
                <p className="text-gray-400">Help us plan together for the best F1 experience</p>
              </div>
            </div>
            
            <form id="travel-notes-form" action={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="name">
                    Name *
                  </label>
                  <input 
                    id="name" 
                    name="name" 
                    required 
                    className="mclaren-input w-full" 
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="origin_city">
                    Origin City *
                  </label>
                  <input 
                    id="origin_city" 
                    name="origin_city" 
                    required 
                    className="mclaren-input w-full" 
                    placeholder="Where are you traveling from?"
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
                  placeholder="State, province, or region"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="arrival_date">
                    Arrival Date *
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
                    Departure Date *
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
                  <option value="">Select your travel method</option>
                  <option value="Car">Car</option>
                  <option value="Plane">Plane</option>
                  <option value="Train">Train</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300" htmlFor="notes">
                  Notes (Optional)
                </label>
                <textarea 
                  id="notes" 
                  name="notes" 
                  className="mclaren-input w-full" 
                  rows={4} 
                  placeholder="Any F1 events you're most excited about? Interested in sharing rides to/from the circuit? Any other details to help coordinate our trip?"
                />
              </div>
              
              <div className="pt-4">
                <button 
                  disabled={submitting} 
                  className="mclaren-button w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    'Submit Travel Plans'
                  )}
                </button>
              </div>
              
              {status && (
                <div className={`p-4 rounded-lg border ${
                  status.includes('Thanks') 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {status.includes('Thanks') ? '✓' : '⚠️'}
                    </span>
                    <span className="text-sm font-medium">{status}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="mclaren-card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            🚕
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Ride Sharing</h3>
          <p className="text-gray-400 text-sm">Coordinate rides to and from the circuit with family members</p>
        </div>
        
        <div className="mclaren-card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            📅
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Schedule Sync</h3>
          <p className="text-gray-400 text-sm">Plan which F1 sessions to attend together as a group</p>
        </div>
        
        <div className="mclaren-card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            🎆
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Activities</h3>
          <p className="text-gray-400 text-sm">Share Montreal attractions and activities you&apos;d like to explore</p>
        </div>
      </div>
    </div>
  )
}