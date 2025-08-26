export default function StayInfo() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mclaren-gradient-text mb-4">Stay Info</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Accommodation details for our Montreal F1 Grand Prix weekend
        </p>
      </div>
      
      {/* Trip Dates */}
      <div className="mclaren-card text-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            📅
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Trip Dates</h2>
            <p className="text-gray-400">F1 Race Weekend</p>
          </div>
        </div>
        <p className="text-3xl font-bold mclaren-gradient-text">May 21–24, 2026</p>
        <p className="text-gray-300 mt-2">4 days, 3 nights in beautiful Montreal</p>
      </div>
      
      {/* Hotel Booking Status */}
      <div className="mclaren-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              🏨
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Hotel Booking Status</h2>
              <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
                ⚠️ Pending Booking
              </div>
              <p className="text-gray-300 leading-relaxed">
                We haven&apos;t finalized our hotel booking yet. Once we&apos;ve secured our accommodation, 
                all the details will be updated here including address, check-in procedures, and amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* What We'll Include */}
      <div className="mclaren-card">
        <h2 className="text-2xl font-bold mclaren-gradient-text mb-6">What We&apos;ll Include Once Booked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                🏨
              </div>
              <span className="text-gray-300">Hotel name and booking confirmation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                🗺️
              </div>
              <span className="text-gray-300">Address and directions from airport</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                🕐
              </div>
              <span className="text-gray-300">Check-in and check-out times</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                📶
              </div>
              <span className="text-gray-300">Wi-Fi network and password</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                🅿️
              </div>
              <span className="text-gray-300">Parking availability and costs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                ✨
              </div>
              <span className="text-gray-300">Hotel amenities and policies</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circuit Distance */}
      <div className="mclaren-card">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            🏁
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Circuit Gilles Villeneuve</h2>
            <p className="text-gray-400">Race Venue Location</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          The circuit is located on Île Notre-Dame in Montreal. We&apos;ll provide detailed 
          transportation options and directions to the track once our hotel is confirmed.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
            🚇 Metro Access
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
            🚕 Taxi/Uber Available
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">
            🚶 Walking Distance from Metro
          </span>
        </div>
      </div>
    </div>
  );
}