import Link from "next/link";
import Countdown from "../components/countdown";
import F1TeamVoting from "../components/f1-team-voting";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full-Screen Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Smokey Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp"
            alt="Circuit Gilles Villeneuve Montreal"
            className="w-full h-full object-cover"
          />
          {/* Smokey Gray Mask for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/60 to-black/80" />
        </div>
        
        {/* Hero Content - Better Centered */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          {/* Date Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/90 text-white rounded-full text-sm font-medium mb-6">
            🏁 May 21–24, 2026 • Canadian Grand Prix • Montréal, QC
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Montreal F1 <span className="text-orange-500">2026</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Join us for the ultimate F1 experience at Circuit Gilles Villeneuve
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            This site has everything you need for our Montreal F1 trip: accommodation details, 
            Montreal attractions, F1 race information, and a place to coordinate travel plans 
            with the family.
          </p>
          
          {/* Countdown */}
          <div className="mb-12">
            <Countdown />
          </div>
          
          {/* Primary & Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/travel-notes" 
              className="primary-cta-button"
            >
              ✈️ Share Your Travel Plan
            </Link>
            <Link 
              href="/stay" 
              className="secondary-cta-button"
            >
              🏨 View Stay Info
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Plan Your Perfect <span className="text-orange-500">F1 Weekend</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to make the most of our Montreal Grand Prix adventure
            </p>
          </div>
          
          {/* Horizontal Tile Layout - Fixed Animation */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Stay Info Tile */}
            <div className="feature-tile">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stay Info</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Hotel details, check-in times, and accommodation information for our F1 weekend.
              </p>
              <Link href="/stay" className="primary-cta-button-small">
                View Details
              </Link>
            </div>
            
            {/* Things to Do Tile */}
            <div className="feature-tile">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Things to Do</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Montreal attractions, F1 activities, restaurants, and local experiences to explore.
              </p>
              <Link href="/things-to-do" className="primary-cta-button-small">
                Explore Montreal
              </Link>
            </div>
            
            {/* F1 Race Info Tile */}
            <div className="feature-tile">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏁</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">F1 Race Info</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Official race schedule, tickets, and circuit information for the Canadian Grand Prix.
              </p>
              <a href="https://www.formula1.com/en/racing/2026/canada" target="_blank" rel="noreferrer" className="primary-cta-button-small">
                Official F1 Info
              </a>
            </div>
          </div>
          
          {/* Interactive F1 Team Voting Widget */}
          <F1TeamVoting />
        </div>
      </div>
    </div>
  );
}