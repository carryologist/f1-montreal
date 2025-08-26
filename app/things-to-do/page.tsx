export default function ThingsToDo() {
  return (
    <div className="container space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="badge badge-primary mb-4">🎆 Things to Do</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Montreal <span className="text-gradient">Adventures</span>
        </h1>
        <p className="text-lg opacity-75 max-w-2xl mx-auto">
          Discover the best of Montreal during your F1 weekend - from iconic attractions to local favorites.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* F1 & Racing */}
        <div className="card">
          <div className="card-icon card-icon-f1">
            🏁
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">
            F1 & Racing
          </h3>
          <ul className="space-y-2 opacity-75">
            <li>• Circuit Gilles Villeneuve tours</li>
            <li>• F1 Fan Zone activities</li>
            <li>• Racing simulators downtown</li>
            <li>• F1 merchandise shopping</li>
          </ul>
        </div>
        
        {/* Montreal Attractions */}
        <div className="card">
          <div className="card-icon card-icon-f1">
            🍁
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Montreal Attractions
          </h3>
          <ul className="space-y-2 opacity-75">
            <li>• Old Montreal (Vieux-Montréal)</li>
            <li>• Notre-Dame Basilica</li>
            <li>• Mount Royal Park</li>
            <li>• Montreal Museum of Fine Arts</li>
          </ul>
        </div>
        
        {/* Food & Drink */}
        <div className="card">
          <div className="card-icon card-icon-f1">
            🍽️
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Food & Drink
          </h3>
          <ul className="space-y-2 opacity-75">
            <li>• Poutine at La Banquise</li>
            <li>• Smoked meat at Schwartz&apos;s</li>
            <li>• Bagels at St-Viateur or Fairmount</li>
            <li>• Craft breweries in Mile End</li>
          </ul>
        </div>
        
        {/* Entertainment */}
        <div className="card">
          <div className="card-icon card-icon-f1">
            🎭
          </div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Entertainment
          </h3>
          <ul className="space-y-2 opacity-75">
            <li>• F1 weekend parties and events</li>
            <li>• Crescent Street nightlife</li>
            <li>• Casino de Montréal</li>
            <li>• Live music venues</li>
          </ul>
        </div>
      </div>
      
      {/* Featured Recommendation */}
      <div className="card bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
        <div className="text-center space-y-4">
          <div className="card-icon mx-auto" style={{background: 'linear-gradient(135deg, rgba(255, 128, 0, 0.2) 0%, rgba(255, 153, 51, 0.3) 100%)', color: 'var(--brand-primary)'}}>
            ⭐
          </div>
          <h3 className="font-display text-xl font-semibold">
            Don&apos;t Miss: Old Montreal
          </h3>
          <p className="opacity-75 max-w-2xl mx-auto">
            Take a stroll through the cobblestone streets of Old Montreal, where European charm meets North American energy. 
            Perfect for a pre-race dinner or post-race celebration!
          </p>
        </div>
      </div>
    </div>
  );
}