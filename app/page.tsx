import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Countdown from "../components/countdown";
import F1TeamVoting from "../components/f1-team-voting";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden image-hero animate-fade-in">
        <Image
          src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp"
          alt="Circuit Gilles Villeneuve Montreal - Canadian Grand Prix"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center hero-content">
          <div className="text-center text-white px-6 max-w-4xl animate-slide-up">
            <div className="badge badge-white mb-4 text-shadow">
              🏁 May 21–24, 2026 • Canadian Grand Prix • Montréal, QC
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow">
              Montreal F1 <span className="text-gradient-hero">2026</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-95 mb-2 text-shadow max-w-3xl mx-auto">
              The ultimate F1 experience at Circuit Gilles Villeneuve.
            </p>
            <p className="text-sm sm:text-base opacity-80 text-shadow mb-8">
              Join us for an unforgettable racing weekend celebrating the pinnacle of motorsport in beautiful Montreal.
            </p>
            <Suspense>
              <Countdown />
            </Suspense>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/travel-notes" className="btn btn-hero-primary animate-float min-w-[240px]">
                ✈️ Share Your Travel Plan
              </Link>
              <Link href="/stay" className="btn btn-hero-secondary min-w-[240px]">
                🏨 View Stay Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Cards */}
      <section className="container animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Plan Your <span className="text-gradient">Perfect F1 Weekend</span>
          </h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Everything you need to make the most of your Montreal Grand Prix adventure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Stay Info Card */}
          <div className="card group">
            <div className="card-icon card-icon-f1">
              🏨
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Stay Information
            </h3>
            <p className="text-sm opacity-75 mb-6 leading-relaxed">
              Hotel details, check-in times, and accommodation information for our F1 weekend getaway.
            </p>
            <Link href="/stay" className="btn btn-primary w-full">
              View Details
            </Link>
          </div>
          
          {/* Things to Do Card */}
          <div className="card group">
            <div className="card-icon card-icon-f1">
              🎆
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Things to Do
            </h3>
            <p className="text-sm opacity-75 mb-6 leading-relaxed">
              Montreal attractions, F1 activities, restaurants, and local experiences to explore during race weekend.
            </p>
            <Link href="/things-to-do" className="btn btn-primary w-full">
              Explore Montreal
            </Link>
          </div>
          
          {/* Interactive Schedule Card */}
          <div className="card group">
            <div className="card-icon card-icon-f1">
              📅
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Interactive Schedule
            </h3>
            <p className="text-sm opacity-75 mb-6 leading-relaxed">
              Plan our F1 weekend together with our interactive schedule builder and event coordination.
            </p>
            <Link href="/itinerary" className="btn btn-primary w-full">
              Plan Schedule
            </Link>
          </div>
          
          {/* F1 Race Info Card */}
          <div className="card group">
            <div className="card-icon card-icon-f1">
              🏁
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              F1 Race Information
            </h3>
            <p className="text-sm opacity-75 mb-6 leading-relaxed">
              Official race schedule, tickets, circuit information, and everything about the Canadian Grand Prix.
            </p>
            <a href="https://www.formula1.com/en/racing/2026/canada" target="_blank" rel="noreferrer" className="btn btn-primary w-full">
              Official F1 Info
            </a>
          </div>
        </div>
      </section>

      {/* F1 Team Voting Section */}
      <section className="bg-[var(--surface-secondary)] py-16">
        <div className="container">
          <F1TeamVoting />
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            About the <span className="text-gradient">Canadian Grand Prix</span>
          </h2>
          <p className="text-lg opacity-75 max-w-3xl mx-auto leading-relaxed">
            The Canadian Grand Prix at Circuit Gilles Villeneuve is one of Formula 1&apos;s most beloved races. 
            Set on the scenic Île Notre-Dame in Montreal, this track offers incredible racing action with 
            its unique layout featuring the famous Wall of Champions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="card-icon card-icon-f1">
              🏎️
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Circuit Gilles Villeneuve
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Named after the legendary Canadian F1 driver, this 4.361 km circuit is known for its 
              high-speed straights, challenging chicanes, and the infamous Wall of Champions where 
              many championship hopes have ended.
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon card-icon-f1">
              🍁
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Montreal Experience
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Beyond the racing, Montreal offers incredible cuisine, vibrant nightlife, historic 
              Old Montreal, and beautiful parks. The city comes alive during Grand Prix weekend 
              with festivals and celebrations throughout.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}