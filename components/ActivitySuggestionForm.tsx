'use client'

import { useState } from 'react'

// URL formatting helper function
function formatUrl(input: string): string {
  if (!input || input.trim() === '') {
    return '';
  }
  
  const url = input.trim();
  
  // If it already has a protocol, return as-is
  if (url.match(/^https?:\/\//i)) {
    return url;
  }
  
  // If it starts with www., add https://
  if (url.match(/^www\./i)) {
    return `https://${url}`;
  }
  
  // If it looks like a domain (contains a dot and no spaces), add https://www.
  if (url.includes('.') && !url.includes(' ') && !url.includes('/')) {
    return `https://www.${url}`;
  }
  
  // If it starts with a domain but has a path, add https://
  if (url.includes('.') && !url.includes(' ')) {
    return `https://${url}`;
  }
  
  // Otherwise, return as-is
  return url;
}

export default function ActivitySuggestionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')
    
    try {
      const formData = new FormData(e.currentTarget)
      
      // Format the website URL if provided
      const websiteValue = formData.get('website');
      if (websiteValue && typeof websiteValue === 'string') {
        const formattedUrl = formatUrl(websiteValue);
        formData.set('website', formattedUrl);
      }
      
      // Validate required fields client-side
      const requiredFields = ['name', 'activity_name', 'description', 'category'];
      let hasErrors = false;
      
      for (const field of requiredFields) {
        const value = formData.get(field);
        if (!value || String(value).trim().length === 0) {
          hasErrors = true;
          break;
        }
      }
      
      if (hasErrors) {
        setSubmitStatus('error');
        setSubmitMessage('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
      }
      
      // Create activity suggestion object
      const activitySuggestion = {
        id: Date.now().toString(),
        name: String(formData.get('name')),
        activity_name: String(formData.get('activity_name')),
        description: String(formData.get('description')),
        location: String(formData.get('location') || ''),
        website: String(formData.get('website') || ''),
        category: String(formData.get('category')),
        notes: String(formData.get('notes') || ''),
        created_at: new Date().toISOString()
      };
      
      // Store in localStorage
      const existingSuggestions = localStorage.getItem('f1-activity-suggestions');
      const suggestions = existingSuggestions ? JSON.parse(existingSuggestions) : [];
      suggestions.push(activitySuggestion);
      localStorage.setItem('f1-activity-suggestions', JSON.stringify(suggestions));
      
      setSubmitStatus('success');
      setSubmitMessage('Thanks for your F1 Montreal activity suggestion! It will appear in the activities list.');
      
      // Reset form
      e.currentTarget.reset();
      
      // Refresh the page to show the new suggestion
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting activity suggestion:', error);
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card">
      <div className="text-center mb-6">
        <div className="card-icon card-icon-f1 mx-auto mb-4">
          💡
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">
          Suggest an F1 Montreal Activity
        </h3>
        <p className="opacity-75">
          Know a great restaurant, attraction, or F1 experience in Montreal? Share it with the family!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input w-full"
              placeholder="Who's making this suggestion?"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className="input w-full"
            >
              <option value="">Choose a category</option>
              <option value="F1 & Racing">🏁 F1 & Racing</option>
              <option value="Food & Drink">🍽️ Food & Drink</option>
              <option value="Montreal Attractions">🍁 Montreal Attractions</option>
              <option value="Entertainment">🎭 Entertainment</option>
              <option value="Shopping">🛍️ Shopping</option>
              <option value="Day Trips">🚗 Day Trips</option>
              <option value="Family-Friendly">👨‍👩‍👧‍👦 Family-Friendly</option>
              <option value="Other">✨ Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="activity_name" className="block text-sm font-medium mb-2">
            Activity Name *
          </label>
          <input
            type="text"
            id="activity_name"
            name="activity_name"
            required
            className="input w-full"
            placeholder="What's the name of this place or activity?"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={3}
            className="input w-full resize-none"
            placeholder="Tell us about this activity - what makes it special for our F1 weekend?"
          />
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="input w-full"
              placeholder="Montreal, QC or specific address"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="input w-full"
              placeholder="https://example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            className="input w-full resize-none"
            placeholder="Any special tips, best times to visit during F1 weekend, or other helpful info?"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            'Share F1 Activity Suggestion'
          )}
        </button>
      </form>
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <div className="flex items-center">
            <span className="text-lg mr-2">✅</span>
            <span>{submitMessage}</span>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <span className="text-lg mr-2">❌</span>
            <span>{submitMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}