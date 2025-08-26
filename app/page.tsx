import Link from "next/link";
import Countdown from "../components/countdown";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="mclaren-hero relative">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="mclaren-gradient-text">MONTREAL</span>
            <br />
            <span className="text-white">F1 2026</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Join us for the ultimate F1 experience at Circuit Gilles Villeneuve
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 text-sm font-medium">
              📅 May 21–24, 2026
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium">
              🏁 Canadian Grand Prix
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-gray-500/20 border border-gray-500/30 rounded-lg text-gray-400 text-sm font-medium">
              🌍 Montréal, QC
            </span>
          </div>
        </div>
      </div>
      
      {/* Countdown Timer */}
      <Countdown />
      
      {/* Welcome Message */}
      <div className="mclaren-card text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to Our F1 Adventure</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          This site has everything you need for our Montreal F1 trip: accommodation details, 
          Montreal attractions, F1 race information, and a place to coordinate travel plans 
          with the family. Let&apos;s make this an unforgettable Grand Prix weekend!
        </p>
      </div>
      
      {/* Quick Actions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/stay" className="group">
          <div className="mclaren-card h-full text-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              🏨
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stay Info</h3>
            <p className="text-gray-400 text-sm">Hotel details, check-in times, and accommodation info</p>
          </div>
        </Link>
        
        <Link href="/things-to-do" className="group">
          <div className="mclaren-card h-full text-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              🎆
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Things to Do</h3>
            <p className="text-gray-400 text-sm">Montreal attractions, F1 activities, and local experiences</p>
          </div>
        </Link>
        
        <Link href="/travel-notes" className="group">
          <div className="mclaren-card h-full text-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              ✈️
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Travel Notes</h3>
            <p className="text-gray-400 text-sm">Share your travel plans and coordinate with family</p>
          </div>
        </Link>
        
        <a href="https://www.formula1.com/en/racing/2026/canada" target="_blank" rel="noreferrer" className="group">
          <div className="mclaren-card h-full text-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              🏁
            </div>
            <h3 className="text-xl font-bold text-white mb-2">F1 Race Info</h3>
            <p className="text-gray-400 text-sm">Official race schedule, tickets, and circuit information</p>
          </div>
        </a>
      </div>
      
      {/* Race Weekend Schedule Preview */}
      <div className="mclaren-card">
        <h2 className="text-2xl font-bold mclaren-gradient-text mb-6">Race Weekend Schedule</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-500 font-bold">FRI</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Practice Sessions</h3>
            <p className="text-gray-400 text-sm">Free Practice 1 & 2<br />Get familiar with the circuit</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-500 font-bold">SAT</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Qualifying Day</h3>
            <p className="text-gray-400 text-sm">Practice 3 & Qualifying<br />Determine grid positions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-red-500 font-bold">SUN</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Race Day</h3>
            <p className="text-gray-400 text-sm">Canadian Grand Prix<br />The main event!</p>
          </div>
        </div>
      </div>
    </div>
  );
}