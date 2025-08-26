export default function StayInfo() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold mclaren-gradient-text">Stay Info</h1>
        <p className="text-lg text-gray-300">We&apos;re staying May 21–24, 2026 for the Montreal F1 Grand Prix.</p>
      </div>
      
      {/* Circuit Hero Image */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Circuit Gilles Villeneuve</h2>
            <p className="text-gray-200">Our F1 destination on Île Notre-Dame</p>
          </div>
        </div>
      </div>
      
      {/* Hotel Status */}
      <div className="mclaren-card text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
          <span className="text-2xl">🏨</span>
        </div>
        <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm font-medium">
          ⚠️ Hotel Booking Pending
        </div>
        <p className="text-gray-300">
          We haven&apos;t booked our hotel yet. Once confirmed, we&apos;ll add the hotel details, 
          address, check-in/out times, and any relevant information here.
        </p>
      </div>
      
      {/* What We'll Include */}
      <div className="mclaren-card space-y-4">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
            <span className="text-2xl">📋</span>
          </div>
          <h2 className="text-xl font-bold text-white">What we&apos;ll add once booked:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-gray-300">
            <li>• Hotel name and booking confirmation</li>
            <li>• Address and directions</li>
            <li>• Check-in/check-out times</li>
          </ul>
          <ul className="space-y-2 text-gray-300">
            <li>• Wi-Fi information</li>
            <li>• Parking details</li>
            <li>• Hotel amenities and policies</li>
          </ul>
        </div>
      </div>
      
      {/* Montreal Skyline */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skylinespace.nyc3.cdn.digitaloceanspaces.com/media/images/cat_banners/cat_topbanner_montreal.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Beautiful Montreal</h3>
            <p className="text-gray-200">Your F1 weekend destination</p>
          </div>
        </div>
      </div>
    </div>
  );
}