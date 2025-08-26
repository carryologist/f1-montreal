import ThingsToDoClient from "../../components/ThingsToDoClient";

interface ActivitySuggestion {
  id: string;
  name: string;
  activity_name: string;
  description: string;
  location: string;
  website: string;
  category: string;
  notes: string;
  created_at: string;
}

interface Activity {
  id?: string;
  name: string;
  description: string;
  location: string;
  website?: string;
  image?: string;
  highlights?: string[];
  isUserSubmitted?: boolean;
  submittedBy?: string;
  notes?: string;
  category?: string;
}

interface CategoryGroup {
  category: string;
  icon: string;
  activities: Activity[];
}

const baseFeaturedActivities: CategoryGroup[] = [
  {
    category: "F1 & Racing",
    icon: "🏁",
    activities: [
      {
        name: "Circuit Gilles Villeneuve",
        description: "The legendary F1 circuit on Île Notre-Dame. Take a walk or bike ride around the track when it's not race weekend. The circuit offers stunning views of Montreal's skyline and the St. Lawrence River.",
        location: "Montreal, QC",
        website: "https://www.formula1.com/en/racing/2026/canada",
        image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp",
        highlights: ["F1 Circuit", "Skyline Views", "Historic Track", "Photo Opportunities"]
      },
      {
        name: "F1 Fan Zone & Merchandise",
        description: "Official F1 merchandise stores and fan zones throughout Montreal during race weekend. Get your team gear, collectibles, and exclusive F1 memorabilia.",
        location: "Various locations, Montreal",
        website: "https://www.formula1.com/en/racing/2026/canada",
        image: "https://cdn-1.motorsport.com/images/mgl/0rGVWWa0/s8/f1-canadian-gp-2019-fans-in-th.jpg",
        highlights: ["Official Merchandise", "Team Gear", "Collectibles", "Race Weekend Only"]
      },
      {
        name: "Parc Jean-Drapeau",
        description: "The island park that hosts the F1 circuit. Beyond race weekend, it's perfect for cycling, walking, and enjoying outdoor activities with great city views.",
        location: "Île Notre-Dame, Montreal",
        website: "https://www.parcjeandrapeau.com/en/",
        image: "https://www.parcjeandrapeau.com/wp-content/uploads/2019/05/parc-jean-drapeau-ile-notre-dame-montreal-1.jpg",
        highlights: ["Island Park", "Cycling Paths", "City Views", "Year-Round Access"]
      }
    ]
  },
  {
    category: "Montreal Attractions",
    icon: "🍁",
    activities: [
      {
        name: "Old Montreal (Vieux-Montréal)",
        description: "Historic cobblestone streets, beautiful architecture, and charming boutiques. Perfect for a leisurely stroll and experiencing Montreal's European charm.",
        location: "Old Montreal, QC",
        website: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/old-montreal",
        image: "https://www.mtl.org/sites/default/files/styles/hero_image_desktop/public/2019-06/vieux-montreal-rue-saint-paul-cobblestone.jpg",
        highlights: ["Cobblestone Streets", "Historic Architecture", "Boutique Shopping", "European Atmosphere"]
      },
      {
        name: "Mount Royal Park",
        description: "Montreal's iconic mountain park designed by Frederick Law Olmsted. Climb to the summit for panoramic views of the city and the St. Lawrence River.",
        location: "Montreal, QC",
        website: "https://www.lemontroyal.qc.ca/en",
        image: "https://www.lemontroyal.qc.ca/sites/default/files/styles/hero_image/public/2019-06/mont-royal-belvedere-kondiaronk-vue-montreal.jpg",
        highlights: ["Panoramic Views", "Hiking Trails", "Iconic Landmark", "Photo Opportunities"]
      },
      {
        name: "Notre-Dame Basilica",
        description: "Stunning Gothic Revival architecture with breathtaking interior featuring intricate woodwork and beautiful stained glass windows.",
        location: "Old Montreal, QC",
        website: "https://www.basiliquenotredame.ca/en",
        image: "https://www.basiliquenotredame.ca/sites/default/files/styles/hero_image/public/2019-06/basilique-notre-dame-montreal-interieur.jpg",
        highlights: ["Gothic Architecture", "Stained Glass", "Historic Landmark", "Guided Tours"]
      },
      {
        name: "Montreal Botanical Garden",
        description: "One of the world's largest botanical gardens featuring themed gardens, greenhouses, and seasonal exhibitions. Perfect for a peaceful afternoon.",
        location: "Montreal, QC",
        website: "https://espacepourlavie.ca/en/botanical-garden",
        image: "https://espacepourlavie.ca/sites/default/files/styles/hero_image/public/2019-06/jardin-botanique-montreal-jardin-japonais.jpg",
        highlights: ["Themed Gardens", "Greenhouses", "Seasonal Exhibitions", "Peaceful Setting"]
      }
    ]
  },
  {
    category: "Food & Drink",
    icon: "🍽️",
    activities: [
      {
        name: "Schwartz's Deli",
        description: "Montreal's most famous smoked meat institution since 1928. A must-visit for authentic Montreal smoked meat sandwiches.",
        location: "3895 Saint-Laurent Blvd, Montreal",
        website: "https://schwartzsdeli.com/",
        image: "https://schwartzsdeli.com/wp-content/uploads/2019/06/schwartzs-deli-montreal-smoked-meat-sandwich.jpg",
        highlights: ["Famous Smoked Meat", "Since 1928", "Montreal Institution", "Cash Only"]
      },
      {
        name: "St-Viateur Bagel",
        description: "Authentic Montreal-style bagels baked in wood-fired ovens since 1957. Try them fresh and warm - they're smaller and denser than New York bagels.",
        location: "263 Saint-Viateur St W, Montreal",
        website: "https://stviateurbagel.com/",
        image: "https://stviateurbagel.com/wp-content/uploads/2019/06/st-viateur-bagel-montreal-wood-fired-oven.jpg",
        highlights: ["Wood-Fired Ovens", "Montreal-Style", "Since 1957", "24/7 Location"]
      },
      {
        name: "Jean-Talon Market",
        description: "One of North America's largest public markets. Sample local Quebec products, fresh produce, and artisanal foods from local vendors.",
        location: "7070 Henri-Julien Ave, Montreal",
        website: "https://www.marche-jean-talon.com/en/",
        image: "https://www.marche-jean-talon.com/wp-content/uploads/2019/06/marche-jean-talon-montreal-vendors.jpg",
        highlights: ["Public Market", "Local Products", "Fresh Produce", "Artisanal Foods"]
      },
      {
        name: "Poutineville",
        description: "Gourmet poutine with creative toppings and high-quality ingredients. Experience Quebec's most famous dish elevated to new heights.",
        location: "Multiple locations, Montreal",
        website: "https://poutineville.com/en/",
        image: "https://poutineville.com/wp-content/uploads/2019/06/poutineville-montreal-gourmet-poutine.jpg",
        highlights: ["Gourmet Poutine", "Creative Toppings", "Quebec Specialty", "Multiple Locations"]
      }
    ]
  },
  {
    category: "Entertainment",
    icon: "🎭",
    activities: [
      {
        name: "Cirque du Soleil (if performing)",
        description: "Montreal is the birthplace of Cirque du Soleil. Check if any shows are running during your visit for a world-class entertainment experience.",
        location: "Various venues, Montreal",
        website: "https://www.cirquedusoleil.com/",
        image: "https://www.cirquedusoleil.com/wp-content/uploads/2019/06/cirque-du-soleil-montreal-performance.jpg",
        highlights: ["World-Class Entertainment", "Montreal Born", "Acrobatic Performances", "Check Schedule"]
      },
      {
        name: "Casino de Montréal",
        description: "Located on Île Notre-Dame (same island as the F1 circuit), this casino offers gaming, dining, and entertainment with great views.",
        location: "Île Notre-Dame, Montreal",
        website: "https://www.casinodemontreal.ca/en/",
        image: "https://www.casinodemontreal.ca/wp-content/uploads/2019/06/casino-montreal-exterior-night.jpg",
        highlights: ["Gaming", "Fine Dining", "Entertainment", "Same Island as F1"]
      },
      {
        name: "Montreal Jazz Festival (if during season)",
        description: "One of the world's largest jazz festivals. If your visit coincides with the festival season, enjoy free outdoor concerts and world-class performances.",
        location: "Downtown Montreal",
        website: "https://www.montrealjazzfest.com/en-CA",
        image: "https://www.montrealjazzfest.com/wp-content/uploads/2019/06/montreal-jazz-festival-outdoor-concert.jpg",
        highlights: ["World's Largest Jazz Festival", "Free Outdoor Concerts", "International Artists", "Seasonal Event"]
      }
    ]
  },
  {
    category: "Day Trips",
    icon: "🚗",
    activities: [
      {
        name: "Quebec City",
        description: "A 3-hour drive to one of North America's most beautiful cities. Explore the walled Old City, a UNESCO World Heritage site with European charm.",
        location: "Quebec City, QC (3 hours from Montreal)",
        website: "https://www.quebec-cite.com/en",
        image: "https://www.quebec-cite.com/wp-content/uploads/2019/06/quebec-city-old-town-chateau-frontenac.jpg",
        highlights: ["UNESCO World Heritage", "Walled City", "European Architecture", "3-Hour Drive"]
      },
      {
        name: "Ottawa",
        description: "Canada's capital city, just 2 hours away. Visit Parliament Hill, world-class museums, and enjoy the scenic Rideau Canal.",
        location: "Ottawa, ON (2 hours from Montreal)",
        website: "https://www.ottawatourism.ca/en",
        image: "https://www.ottawatourism.ca/wp-content/uploads/2019/06/ottawa-parliament-hill-rideau-canal.jpg",
        highlights: ["Canada's Capital", "Parliament Hill", "Museums", "2-Hour Drive"]
      },
      {
        name: "Mont-Tremblant",
        description: "Beautiful resort town in the Laurentian Mountains. Perfect for outdoor activities, scenic gondola rides, and mountain village charm.",
        location: "Mont-Tremblant, QC (1.5 hours from Montreal)",
        website: "https://www.tremblant.ca/",
        image: "https://www.tremblant.ca/wp-content/uploads/2019/06/mont-tremblant-village-gondola-mountains.jpg",
        highlights: ["Mountain Resort", "Gondola Rides", "Outdoor Activities", "1.5-Hour Drive"]
      }
    ]
  }
];

export default async function ThingsToDoPage() {
  // In a real app with a database, you'd fetch user suggestions here
  // For now, we'll let the client component handle localStorage
  const userSuggestions: ActivitySuggestion[] = [];
  
  return (
    <ThingsToDoClient 
      initialActivities={baseFeaturedActivities}
      initialUserSuggestions={userSuggestions}
    />
  );
}