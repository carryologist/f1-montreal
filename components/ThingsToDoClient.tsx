'use client'

import { useState, useEffect } from 'react'
import ActivitySuggestionForm from "./ActivitySuggestionForm";

interface ActivitySuggestion {
  id: string;
  name: string;
  activity_name: string;
  description: string;
  location: string;
  website: string;
  category: string;
  notes: string;
  created_at: string;
}

interface Activity {
  id?: string;
  name: string;
  description: string;
  location: string;
  website?: string;
  image?: string;
  highlights?: string[];
  isUserSubmitted?: boolean;
  submittedBy?: string;
  notes?: string;
  category?: string;
}

interface CategoryGroup {
  category: string;
  icon: string;
  activities: Activity[];
}

// Client component for activity cards
function ActivityCard({ 
  activity, 
  categoryIcon, 
  categoryIndex, 
  activityIndex,
  onDelete 
}: { 
  activity: Activity
  categoryIcon: string
  categoryIndex: number
  activityIndex: number
  onDelete?: (activityId: string) => void
}) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!activity.id || !onDelete) return
    
    if (confirm(`Are you sure you want to delete "${activity.name}"? This action cannot be undone.`)) {
      setIsDeleting(true)
      try {
        await onDelete(activity.id)
      } catch (error) {
        console.error('Delete failed:', error)
        alert('Failed to delete activity. Please try again.')
      } finally {
        setIsDeleting(false)
      }
    }
  }

  return (
    <div 
      className={`card hover:scale-[1.02] transition-transform duration-300 ${
        activity.isUserSubmitted 
          ? 'border-2 border-orange-400 bg-gradient-to-r from-orange-50/50 to-transparent' 
          : ''
      }`}
      style={{ animationDelay: `${(categoryIndex * 2 + activityIndex) * 0.1}s` }}
    >
      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Activity Image */}
        <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-lg overflow-hidden">
          {activity.image ? (
            <img 
              src={activity.image} 
              alt={activity.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`w-full h-full flex items-center justify-center ${
            activity.image ? 'hidden' : ''
          } bg-gradient-to-br from-orange-100 to-orange-200`}>
            <span className="text-4xl">{categoryIcon}</span>
          </div>
        </div>
        
        {/* Activity Content */}
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-xl font-semibold leading-tight">
                {activity.name}
              </h3>
              {activity.isUserSubmitted && onDelete && (
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="ml-2 text-red-500 hover:text-red-700 transition-colors p-1"
                  title="Delete this suggestion"
                >
                  {isDeleting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                  ) : (
                    '🗑️'
                  )}
                </button>
              )}
            </div>
            
            <p className="opacity-75 mb-4 leading-relaxed">
              {activity.description}
            </p>
            
            {activity.highlights && activity.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activity.highlights.map((highlight, index) => (
                  <span 
                    key={index}
                    className="badge badge-primary text-xs"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
            
            {activity.notes && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                <p className="text-sm opacity-75">
                  <strong>💡 Tip:</strong> {activity.notes}
                </p>
              </div>
            )}
          </div>
          
          {/* Activity Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4 text-sm opacity-75">
              {activity.location && (
                <span className="flex items-center gap-1">
                  📍 {activity.location}
                </span>
              )}
              {activity.isUserSubmitted && activity.submittedBy && (
                <span className="flex items-center gap-1">
                  👤 Suggested by {activity.submittedBy}
                </span>
              )}
            </div>
            
            {activity.website && (
              <a
                href={activity.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-sm"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThingsToDoClient({ 
  initialActivities,
  initialUserSuggestions 
}: {
  initialActivities: CategoryGroup[]
  initialUserSuggestions: ActivitySuggestion[]
}) {
  const [activities, setActivities] = useState<CategoryGroup[]>(initialActivities)
  const [showSuggestionForm, setShowSuggestionForm] = useState(false)

  // Load user suggestions from localStorage and merge with initial activities
  useEffect(() => {
    const storedSuggestions = localStorage.getItem('f1-activity-suggestions');
    const userSuggestions: ActivitySuggestion[] = storedSuggestions ? JSON.parse(storedSuggestions) : [];
    
    if (userSuggestions.length > 0) {
      const updatedActivities = [...initialActivities];
      
      // Get existing categories
      const existingCategories = updatedActivities.map(group => group.category);
      
      // Add user suggestions to existing categories
      userSuggestions.forEach(suggestion => {
        const categoryIndex = updatedActivities.findIndex(group => group.category === suggestion.category);
        
        const userActivity: Activity = {
          id: suggestion.id,
          name: suggestion.activity_name,
          description: suggestion.description,
          location: suggestion.location,
          website: suggestion.website || undefined,
          isUserSubmitted: true,
          submittedBy: suggestion.name,
          notes: suggestion.notes || undefined,
          category: suggestion.category
        };
        
        if (categoryIndex >= 0) {
          // Add to existing category
          updatedActivities[categoryIndex].activities.push(userActivity);
        } else {
          // Create new category
          const getCategoryIcon = (category: string) => {
            const iconMap: { [key: string]: string } = {
              "F1 & Racing": "🏁",
              "Food & Drink": "🍽️",
              "Montreal Attractions": "🍁",
              "Entertainment": "🎭",
              "Shopping": "🛍️",
              "Day Trips": "🚗",
              "Family-Friendly": "👨‍👩‍👧‍👦",
              "Other": "✨"
            };
            return iconMap[category] || "✨";
          };
          
          updatedActivities.push({
            category: suggestion.category,
            icon: getCategoryIcon(suggestion.category),
            activities: [userActivity]
          });
        }
      });
      
      setActivities(updatedActivities);
    }
  }, [initialActivities]);

  const handleDeleteActivity = async (activityId: string) => {
    // Remove from localStorage
    const storedSuggestions = localStorage.getItem('f1-activity-suggestions');
    const userSuggestions: ActivitySuggestion[] = storedSuggestions ? JSON.parse(storedSuggestions) : [];
    const filteredSuggestions = userSuggestions.filter(s => s.id !== activityId);
    localStorage.setItem('f1-activity-suggestions', JSON.stringify(filteredSuggestions));
    
    // Update state
    const updatedActivities = activities.map(category => ({
      ...category,
      activities: category.activities.filter(activity => activity.id !== activityId)
    })).filter(category => category.activities.length > 0);
    
    setActivities(updatedActivities);
  };

  return (
    <div className="container space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="badge badge-primary mb-4">🎆 Things to Do</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Montreal F1 <span className="text-gradient">Adventures</span>
        </h1>
        <p className="text-lg opacity-75 max-w-2xl mx-auto mb-8">
          Discover the best of Montreal during your F1 weekend - from iconic attractions to racing experiences.
        </p>
        
        {/* Suggestion Form Toggle */}
        <button
          onClick={() => setShowSuggestionForm(!showSuggestionForm)}
          className="btn btn-primary"
        >
          {showSuggestionForm ? '❌ Close Form' : '💡 Suggest an Activity'}
        </button>
      </div>
      
      {/* Activity Suggestion Form */}
      {showSuggestionForm && (
        <div className="animate-fade-in">
          <ActivitySuggestionForm />
        </div>
      )}
      
      {/* Activities by Category */}
      <div className="space-y-16">
        {activities.map((categoryGroup, categoryIndex) => (
          <section key={categoryGroup.category} className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                {categoryGroup.category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
            </div>
            
            <div className="space-y-8">
              {categoryGroup.activities.map((activity, activityIndex) => (
                <ActivityCard
                  key={activity.id || `${categoryGroup.category}-${activityIndex}`}
                  activity={activity}
                  categoryIcon={categoryGroup.icon}
                  categoryIndex={categoryIndex}
                  activityIndex={activityIndex}
                  onDelete={activity.isUserSubmitted ? handleDeleteActivity : undefined}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}