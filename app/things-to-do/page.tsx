export default function ThingsToDo() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Things to Do</h1>
      <p>Montreal offers amazing experiences, from F1 race activities to exploring this vibrant city.</p>
      
      <div className="grid gap-6">
        <section>
          <h2 className="text-lg font-medium mb-3 text-red-600 dark:text-red-400">F1 Race Weekend</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Practice sessions (Friday & Saturday)</li>
            <li>Qualifying session (Saturday)</li>
            <li>Canadian Grand Prix race (Sunday)</li>
            <li>Paddock tours and pit lane walks (if available)</li>
            <li>F1 Fan Zone activities</li>
            <li>Driver meet &amp; greets</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Montreal Attractions</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Old Montreal (Vieux-Montréal) - cobblestone streets and historic architecture</li>
            <li>Notre-Dame Basilica - stunning Gothic Revival architecture</li>
            <li>Mount Royal Park - panoramic city views</li>
            <li>Montreal Museum of Fine Arts</li>
            <li>Biodome and Olympic Stadium</li>
            <li>Jean-Talon Market - local foods and produce</li>
            <li>Underground City (RESO) - extensive underground network</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Food & Drink</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Poutine at La Banquise or Chez Claudette</li>
            <li>Montreal-style bagels at St-Viateur or Fairmount</li>
            <li>Smoked meat at Schwartz&apos;s Deli</li>
            <li>Craft breweries in Mile End and Plateau neighborhoods</li>
            <li>French cuisine in Old Montreal</li>
            <li>Sugar shacks (cabanes à sucre) for maple syrup treats</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Day Trips</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Quebec City (3-hour drive) - European charm and history</li>
            <li>Ottawa (2-hour drive) - Canada&apos;s capital city</li>
            <li>Laurentian Mountains - scenic drives and outdoor activities</li>
            <li>Eastern Townships - wine country and charming villages</li>
          </ul>
        </section>
      </div>
    </div>
  );
}