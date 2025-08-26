export default function StayInfo() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Stay Info</h1>
      <p>We&apos;re staying May 21–24, 2026 for the Montreal F1 Grand Prix.</p>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h2 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Hotel Booking Pending</h2>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          We haven&apos;t booked our hotel yet. Once confirmed, we&apos;ll add the hotel details, address, check-in/out times, and any relevant information here.
        </p>
      </div>
      <div className="text-sm text-black/70 dark:text-white/70">
        <h3 className="font-medium mb-2">What we&apos;ll include once booked:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Hotel name and booking confirmation</li>
          <li>Address and directions</li>
          <li>Check-in/check-out times</li>
          <li>Wi-Fi information</li>
          <li>Parking details</li>
          <li>Hotel amenities and policies</li>
        </ul>
      </div>
    </div>
  );
}