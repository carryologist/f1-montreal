export default function StayInfo() {
  return (
    <div className="container space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="badge badge-primary mb-4">🏨 Stay Information</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Our <span className="text-gradient">Stay Info</span>
        </h1>
        <p className="text-lg opacity-75">We&apos;re staying May 21–24, 2026 for the Montreal F1 Grand Prix.</p>
      </div>
      
      {/* Circuit Hero Image */}
      <div className="relative h-64 rounded-xl overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2 text-shadow">Circuit Gilles Villeneuve</h2>
            <p className="text-gray-200 text-shadow">Our F1 destination on Île Notre-Dame</p>
          </div>
        </div>
      </div>
      
      {/* Hotel Status */}
      <div className="card text-center space-y-4">
        <div className="card-icon card-icon-f1">
          🏨
        </div>
        <div className="badge badge-primary">
          ⚠️ Hotel Booking Pending
        </div>
        <p className="opacity-75">
          We haven&apos;t booked our hotel yet. Once confirmed, we&apos;ll add the hotel details, 
          address, check-in/out times, and any relevant information here.
        </p>
      </div>
      
      {/* What We'll Include */}
      <div className="card space-y-6">
        <div className="text-center space-y-3">
          <div className="card-icon card-icon-f1 mx-auto">
            📋
          </div>
          <h2 className="font-display text-xl font-semibold">What we&apos;ll add once booked:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2 opacity-75">
            <li>• Hotel name and booking confirmation</li>
            <li>• Address and directions</li>
            <li>• Check-in/check-out times</li>
          </ul>
          <ul className="space-y-2 opacity-75">
            <li>• Wi-Fi information</li>
            <li>• Parking details</li>
            <li>• Hotel amenities and policies</li>
          </ul>
        </div>
      </div>
      
      {/* Montreal Skyline */}
      <div className="relative h-64 rounded-xl overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skylinespace.nyc3.cdn.digitaloceanspaces.com/media/images/cat_banners/cat_topbanner_montreal.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2 text-shadow">Beautiful Montreal</h3>
            <p className="text-gray-200 text-shadow">Your F1 weekend destination</p>
          </div>
        </div>
      </div>
    </div>
  );
}