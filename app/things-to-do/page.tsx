export default function ThingsToDo() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold mclaren-gradient-text">Things to Do</h1>
        <p className="text-lg text-gray-300">
          We&apos;ll curate activities, restaurants, and day trips in Montreal for our F1 weekend.
        </p>
      </div>

      {/* Montreal Hero Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://oranatravel.com/wp-content/uploads/2018/10/montreal-title-page.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white text-center">Discover Beautiful Montreal</h2>
        </div>
      </div>

      {/* F1 Race Weekend */}
      <div className="mclaren-card space-y-4">
        <h2 className="text-xl font-bold mclaren-gradient-text text-center">F1 Race Weekend</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2 text-gray-300">
            <li>• Practice sessions (Friday & Saturday)</li>
            <li>• Qualifying session (Saturday)</li>
            <li>• Canadian Grand Prix race (Sunday)</li>
          </ul>
          <ul className="space-y-2 text-gray-300">
            <li>• Paddock tours and pit lane walks (if available)</li>
            <li>• F1 Fan Zone activities</li>
            <li>• Driver meet & greets</li>
          </ul>
        </div>
      </div>

      {/* Montreal Attractions */}
      <div className="mclaren-card space-y-6">
        <h2 className="text-xl font-bold text-white text-center">Montreal Attractions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltfdd6c97efcd586d1/67d1e85da4b93f29fd09bcd0/montreal-4113307-Header_Desktop.jpg')`
                }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg">Old Montreal</h3>
                  <p className="text-gray-200 text-sm">Historic cobblestone streets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2 text-gray-300">
              <li>• Old Montreal (Vieux-Montréal) - cobblestone streets and historic architecture</li>
              <li>• Notre-Dame Basilica - stunning Gothic Revival architecture</li>
              <li>• Mount Royal Park - panoramic city views</li>
              <li>• Montreal Museum of Fine Arts</li>
              <li>• Biodome and Olympic Stadium</li>
              <li>• Jean-Talon Market - local foods and produce</li>
              <li>• Underground City (RESO) - extensive underground network</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Food & Drink */}
      <div className="mclaren-card space-y-4">
        <h2 className="text-xl font-bold text-white text-center">Food & Drink</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🍟</span>
            </div>
            <h3 className="text-center font-semibold text-white">Must-Try Montreal Foods</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Poutine at La Banquise or Chez Claudette</li>
            <li>• Montreal-style bagels at St-Viateur or Fairmount</li>
            <li>• Smoked meat at Schwartz&apos;s Deli</li>
            <li>• Craft breweries in Mile End and Plateau neighborhoods</li>
            <li>• French cuisine in Old Montreal</li>
            <li>• Sugar shacks (cabanes à sucre) for maple syrup treats</li>
          </ul>
        </div>
      </div>

      {/* Day Trips */}
      <div className="mclaren-card space-y-4">
        <h2 className="text-xl font-bold text-white text-center">Day Trips</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Quebec City (3-hour drive) - European charm and history</li>
          <li>• Ottawa (2-hour drive) - Canada&apos;s capital city</li>
          <li>• Laurentian Mountains - scenic drives and outdoor activities</li>
          <li>• Eastern Townships - wine country and charming villages</li>
        </ul>
      </div>
    </div>
  );
}