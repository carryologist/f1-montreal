export default function ThingsToDo() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mclaren-gradient-text mb-4">Things to Do</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Montreal offers incredible experiences, from F1 race activities to exploring 
          this vibrant city&apos;s culture, cuisine, and attractions.
        </p>
      </div>

      {/* F1 Race Weekend */}
      <div className="mclaren-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              🏁
            </div>
            <div>
              <h2 className="text-3xl font-bold mclaren-gradient-text">F1 Race Weekend</h2>
              <p className="text-gray-400">The main event at Circuit Gilles Villeneuve</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  🏁
                </div>
                <span className="text-gray-300">Practice sessions (Friday & Saturday)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  ⚡
                </div>
                <span className="text-gray-300">Qualifying session (Saturday)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  🏆
                </div>
                <span className="text-gray-300">Canadian Grand Prix race (Sunday)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  🚶
                </div>
                <span className="text-gray-300">Paddock tours and pit lane walks (if available)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  🎉
                </div>
                <span className="text-gray-300">F1 Fan Zone activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  ✍️
                </div>
                <span className="text-gray-300">Driver meet &amp; greets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Montreal Attractions */}
      <div className="mclaren-card">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            🏙️
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Montreal Attractions</h2>
            <p className="text-gray-400">Explore the beautiful city of Montreal</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🏰 Old Montreal (Vieux-Montréal)</h3>
              <p className="text-gray-400 text-sm">Cobblestone streets and historic architecture</p>
            </div>
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">⛪ Notre-Dame Basilica</h3>
              <p className="text-gray-400 text-sm">Stunning Gothic Revival architecture</p>
            </div>
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🏔️ Mount Royal Park</h3>
              <p className="text-gray-400 text-sm">Panoramic city views from the mountain</p>
            </div>
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🎨 Montreal Museum of Fine Arts</h3>
              <p className="text-gray-400 text-sm">World-class art collections and exhibitions</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🏟️ Biodome and Olympic Stadium</h3>
              <p className="text-gray-400 text-sm">Unique ecosystems and 1976 Olympics venue</p>
            </div>
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🍅 Jean-Talon Market</h3>
              <p className="text-gray-400 text-sm">Local foods, produce, and Quebec specialties</p>
            </div>
            <div className="mclaren-section">
              <h3 className="text-lg font-semibold text-white mb-2">🚇 Underground City (RESO)</h3>
              <p className="text-gray-400 text-sm">Extensive underground network of shops and tunnels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Food & Drink */}
      <div className="mclaren-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              🍽️
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Food & Drink</h2>
              <p className="text-gray-400">Montreal&apos;s incredible culinary scene</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🍟 Poutine</h3>
                <p className="text-gray-400 text-sm">La Banquise or Chez Claudette for authentic poutine</p>
              </div>
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🥯 Montreal-style Bagels</h3>
                <p className="text-gray-400 text-sm">St-Viateur or Fairmount for the best bagels</p>
              </div>
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🥩 Smoked Meat</h3>
                <p className="text-gray-400 text-sm">Schwartz&apos;s Deli for legendary smoked meat sandwiches</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🍺 Craft Breweries</h3>
                <p className="text-gray-400 text-sm">Mile End and Plateau neighborhoods</p>
              </div>
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🍷 French Cuisine</h3>
                <p className="text-gray-400 text-sm">Fine dining restaurants in Old Montreal</p>
              </div>
              <div className="mclaren-section">
                <h3 className="text-lg font-semibold text-white mb-2">🍁 Sugar Shacks</h3>
                <p className="text-gray-400 text-sm">Cabanes à sucre for maple syrup treats</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Trips */}
      <div className="mclaren-card">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
            🚗
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Day Trips</h2>
            <p className="text-gray-400">Explore beyond Montreal</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mclaren-section">
            <h3 className="text-lg font-semibold text-white mb-2">🏰 Quebec City</h3>
            <p className="text-gray-400 text-sm mb-2">3-hour drive • European charm and history</p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-400 text-xs">
                Historic
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs">
                UNESCO Site
              </span>
            </div>
          </div>
          <div className="mclaren-section">
            <h3 className="text-lg font-semibold text-white mb-2">🏤 Ottawa</h3>
            <p className="text-gray-400 text-sm mb-2">2-hour drive • Canada&apos;s capital city</p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-xs">
                Parliament
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs">
                Museums
              </span>
            </div>
          </div>
          <div className="mclaren-section">
            <h3 className="text-lg font-semibold text-white mb-2">🏔️ Laurentian Mountains</h3>
            <p className="text-gray-400 text-sm mb-2">Scenic drives and outdoor activities</p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs">
                Nature
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs">
                Hiking
              </span>
            </div>
          </div>
          <div className="mclaren-section">
            <h3 className="text-lg font-semibold text-white mb-2">🍇 Eastern Townships</h3>
            <p className="text-gray-400 text-sm mb-2">Wine country and charming villages</p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-400 text-xs">
                Wineries
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-orange-400 text-xs">
                Scenic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}