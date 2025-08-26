"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ItineraryCalendar from './ItineraryCalendar';
import EventModal from './EventModal';

interface ItineraryEvent {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  location?: string;
  url?: string;
  category: string;
  color: string;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

interface PrefilledEventData {
  title?: string;
  description?: string;
  location?: string;
  url?: string;
  category?: string;
}

export default function ItineraryPageClient() {
  const [events, setEvents] = useState<ItineraryEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ItineraryEvent | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{ date: string; time: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [prefilledData, setPrefilledData] = useState<PrefilledEventData | null>(null);
  
  const searchParams = useSearchParams();

  // Trip dates: May 21-24, 2026 (F1 Montreal)
  const tripStartDate = useMemo(() => new Date('2026-05-21'), []);
  const tripEndDate = useMemo(() => new Date('2026-05-24'), []);

  // Check for URL parameters to pre-fill event creation
  useEffect(() => {
    const shouldCreate = searchParams.get('create');
    if (shouldCreate === 'true') {
      const prefilled = {
        title: searchParams.get('title') || '',
        description: searchParams.get('description') || '',
        location: searchParams.get('location') || '',
        url: searchParams.get('url') || '',
        category: searchParams.get('category') || 'activity'
      };
      
      setPrefilledData(prefilled);
      setShowEventModal(true);
      
      // Clear URL parameters after extracting data
      window.history.replaceState({}, '', '/itinerary');
    }
  }, [searchParams]);

  // Fetch events from localStorage
  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const storedEvents = localStorage.getItem('f1-itinerary-events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      
      // Filter by date range
      const startDate = tripStartDate.toISOString();
      const endDate = new Date(tripEndDate.getTime() + 24 * 60 * 60 * 1000).toISOString();
      
      const filteredEvents = events.filter((event: ItineraryEvent) => {
        const eventDate = new Date(event.startTime);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return eventDate >= start && eventDate <= end;
      });
      
      setEvents(filteredEvents);
      setError(null);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  }, [tripStartDate, tripEndDate]);

  // Create new event
  const createEvent = async (eventData: Omit<ItineraryEvent, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newEvent = {
        id: Date.now().toString(),
        ...eventData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const storedEvents = localStorage.getItem('f1-itinerary-events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      events.push(newEvent);
      localStorage.setItem('f1-itinerary-events', JSON.stringify(events));
      
      await fetchEvents(); // Refresh events
      setShowEventModal(false);
      setSelectedEvent(null);
      setSelectedTimeSlot(null);
    } catch (err) {
      console.error('Error creating event:', err);
      setError('Failed to create event');
    }
  };

  // Update existing event
  const updateEvent = async (eventData: ItineraryEvent) => {
    try {
      const storedEvents = localStorage.getItem('f1-itinerary-events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      
      const eventIndex = events.findIndex((e: ItineraryEvent) => e.id === eventData.id);
      if (eventIndex === -1) {
        setError('Event not found');
        return;
      }
      
      events[eventIndex] = {
        ...eventData,
        updatedAt: new Date().toISOString()
      };
      
      localStorage.setItem('f1-itinerary-events', JSON.stringify(events));
      
      await fetchEvents(); // Refresh events
      setShowEventModal(false);
      setSelectedEvent(null);
      setSelectedTimeSlot(null);
    } catch (err) {
      console.error('Error updating event:', err);
      setError('Failed to update event');
    }
  };

  // Delete event
  const deleteEvent = async (eventId: string) => {
    try {
      const storedEvents = localStorage.getItem('f1-itinerary-events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      
      const filteredEvents = events.filter((e: ItineraryEvent) => e.id !== eventId);
      localStorage.setItem('f1-itinerary-events', JSON.stringify(filteredEvents));
      
      await fetchEvents(); // Refresh events
      setShowEventModal(false);
      setSelectedEvent(null);
      setSelectedTimeSlot(null);
    } catch (err) {
      console.error('Error deleting event:', err);
      setError('Failed to delete event');
    }
  };

  // Handle time slot click (for creating new events)
  const handleTimeSlotClick = (date: string, time: string) => {
    setSelectedTimeSlot({ date, time });
    setSelectedEvent(null);
    setShowEventModal(true);
  };

  // Handle event click (for editing existing events)
  const handleEventClick = (event: ItineraryEvent) => {
    setSelectedEvent(event);
    setSelectedTimeSlot(null);
    setShowEventModal(true);
  };

  // Handle event save (create or update)
  const handleEventSave = async (eventData: Omit<ItineraryEvent, 'id' | 'createdAt' | 'updatedAt'> | ItineraryEvent) => {
    if ('id' in eventData) {
      // Update existing event
      await updateEvent(eventData as ItineraryEvent);
    } else {
      // Create new event
      await createEvent(eventData as Omit<ItineraryEvent, 'id' | 'createdAt' | 'updatedAt'>);
    }
  };

  // Load events on component mount
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      {/* Trip Dates Info */}
      <div className="card card-travel p-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛬</span>
            <div>
              <p className="font-medium">Check-in</p>
              <p className="text-sm opacity-75">Saturday, July 5, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛫</span>
            <div>
              <p className="font-medium">Check-out</p>
              <p className="text-sm opacity-75">Saturday, July 12, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <p className="font-medium">{events.length} Events</p>
              <p className="text-sm opacity-75">Planned so far</p>
            </div>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="card border-red-200 bg-red-50 text-red-800 p-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <p className="font-medium">Error: {error}</p>
          </div>
          <button 
            onClick={() => setError(null)}
            className="mt-2 text-sm underline hover:no-underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="card p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="opacity-75">Loading your F1 itinerary...</p>
        </div>
      ) : (
        /* Calendar Component */
        <ItineraryCalendar
          events={events}
          startDate={tripStartDate}
          endDate={tripEndDate}
          onTimeSlotClick={handleTimeSlotClick}
          onEventClick={handleEventClick}
        />
      )}

      {/* Event Modal */}
      {showEventModal && (
        <EventModal
          event={selectedEvent}
          timeSlot={selectedTimeSlot}
          prefilledData={prefilledData}
          onSave={handleEventSave}
          onDelete={selectedEvent ? deleteEvent : undefined}
          onClose={() => {
            setShowEventModal(false);
            setSelectedEvent(null);
            setSelectedTimeSlot(null);
            setPrefilledData(null);
          }}
        />
      )}
    </>
  );
}