// Website copy and contact information are based on the Milano Trips LLP brochure.
// Destination names/images are illustrative ideas, not published itineraries or live prices.
export const BUSINESS = {
  name: 'Milano Trips LLP',
  phone: '+91 9746073527',
  phoneDigits: '919746073527',
  email: 'info@milanotrips.com',
  website: 'https://www.milanotrips.com',
  tagline: 'Discover the World with Us',
};

export const CATEGORIES = ['All', 'Exotic Escapes', 'European Extravaganza', 'African Adventures', 'Incredible India'];

export const SCOPES = [
  { id: 'all', label: 'All Destinations' },
  { id: 'international', label: 'International', icon: 'globe' },
  { id: 'domestic', label: 'Domestic (India)', icon: 'map' },
];

export const DESTINATIONS = [
  // International Destinations
  { id: 'dubai', name: 'Dubai, UAE', category: 'Exotic Escapes', description: 'Futuristic skylines, luxury desert safaris and Arabian Gulf glamour.', image: '/images/dubai.webp', label: 'Middle East', days: '5 - 7 Days', scope: 'international' },
  { id: 'singapore', name: 'Singapore', category: 'Exotic Escapes', description: 'Gardens by the Bay, Marina Bay Sands and world-class dining.', image: '/images/singapore.webp', label: 'Southeast Asia', days: '4 - 6 Days', scope: 'international' },
  { id: 'philippines', name: 'Palawan & Cebu, Philippines', category: 'Exotic Escapes', description: 'Crystal-clear lagoons, limestone cliffs and island-hopping adventures.', image: '/images/philippines.webp', label: 'Tropical islands', days: '6 - 9 Days', scope: 'international' },
  { id: 'malaysia', name: 'Malaysia', category: 'Exotic Escapes', description: 'Batu Caves, lush rainforests, Langkawi beaches and street food culture.', image: '/images/malaysia.webp', label: 'Southeast Asia', days: '5 - 7 Days', scope: 'international' },
  { id: 'bali', name: 'Bali, Indonesia', category: 'Exotic Escapes', description: 'Temples, beaches, wellness sanctuaries and tropical island stays.', image: '/images/bali.webp', label: 'Southeast Asia', days: '6 - 8 Days', scope: 'international' },
  { id: 'maldives', name: 'Maldives', category: 'Exotic Escapes', description: 'Overwater luxury villas, turquoise lagoons and world-class coral reefs.', image: '/images/gallery-11.webp', label: 'Tropical escapes', days: '4 - 6 Days', scope: 'international' },
  { id: 'europe', name: 'Grand Tour of Europe', category: 'European Extravaganza', description: 'Paris, Rome and timeless romantic capitals across Western Europe.', image: '/images/europe.webp', label: 'Europe', days: '10 - 14 Days', scope: 'international' },
  { id: 'amsterdam', name: 'Amsterdam, Netherlands', category: 'European Extravaganza', description: 'Picturesque canal rings, historic merchant mansions and vibrant culture.', image: '/images/amsterdam.webp', label: 'Europe', days: '4 - 6 Days', scope: 'international' },
  { id: 'switzerland', name: 'Swiss Alps, Switzerland', category: 'European Extravaganza', description: 'Alpine vistas, scenic mountain railways and crystalline glacial lakes.', image: '/images/gallery-09.webp', label: 'Europe', days: '7 - 10 Days', scope: 'international' },
  { id: 'london', name: 'London, England', category: 'European Extravaganza', description: 'Royal landmarks, West End theatre and vibrant British culture.', image: '/images/london.webp', label: 'Europe', days: '5 - 7 Days', scope: 'international' },
  { id: 'jordan', name: 'Jordan & Petra', category: 'Exotic Escapes', description: 'The rose-red city of Petra, Wadi Rum desert dunes and the Dead Sea.', image: '/images/jordan.webp', label: 'Middle East', days: '6 - 8 Days', scope: 'international' },
  { id: 'oman', name: 'Sultanate of Oman', category: 'Exotic Escapes', description: 'Grand mosques, turquoise desert wadis, ancient forts and Arabian fjords.', image: '/images/oman.webp', label: 'Middle East', days: '5 - 7 Days', scope: 'international' },
  { id: 'japan', name: 'Japan', category: 'Exotic Escapes', description: 'Tokyo neon skylines, serene Kyoto shrines, Mount Fuji and bullet trains.', image: '/images/japan.webp', label: 'East Asia', days: '8 - 12 Days', scope: 'international' },
  { id: 'machu-picchu', name: 'Machu Picchu, Peru', category: 'Exotic Escapes', description: 'The mysterious Incan citadel high in the Andes mountains and Sacred Valley.', image: '/images/machu-picchu.webp', label: 'South America', days: '8 - 10 Days', scope: 'international' },
  { id: 'kenya', name: 'African Safari, Kenya', category: 'African Adventures', description: 'The great wildlife migration and game drives across the Serengeti plains.', image: '/images/elephants.webp', label: 'Africa', days: '7 - 10 Days', scope: 'international' },
  { id: 'africa', name: 'South Africa & Savannah', category: 'African Adventures', description: 'Cape Town, Kruger National Park wildlife and dramatic coastal vistas.', image: '/images/safari.webp', label: 'Africa', days: '8 - 12 Days', scope: 'international' },

  // Domestic Destinations (India)
  { id: 'rajasthan', name: 'Royal Rajasthan', category: 'Incredible India', description: 'Regal palaces of Jaipur, romantic lakes of Udaipur and Thar desert safaris.', image: '/images/rajasthan.webp', label: 'North India', days: '6 - 9 Days', scope: 'domestic' },
  { id: 'goa', name: 'Goa Coastal Getaway', category: 'Incredible India', description: 'Sun-drenched beaches, Portuguese colonial heritage, watersports and coastal nightlife.', image: '/images/goa.webp', label: 'West Coast', days: '4 - 6 Days', scope: 'domestic' },
  { id: 'mumbai', name: 'Mumbai City Experience', category: 'Incredible India', description: 'Gateway of India, Marine Drive promenade, colonial history and Bollywood glamour.', image: '/images/mumbai.webp', label: 'West India', days: '3 - 5 Days', scope: 'domestic' },
  { id: 'kerala', name: 'Kerala Backwaters & Hills', category: 'Incredible India', description: 'Alleppey backwater houseboats, Munnar emerald tea hills and tranquil Ayurvedic stays.', image: '/images/kerala.webp', label: 'South India', days: '5 - 8 Days', scope: 'domestic' },
  { id: 'darjeeling', name: 'Darjeeling Tea Estates', category: 'Incredible India', description: 'Lush tea plantations, the legendary Himalayan Toy Train and Kanchenjunga sunrises.', image: '/images/darjeeling.webp', label: 'East Himalayas', days: '4 - 6 Days', scope: 'domestic' },
  { id: 'manali', name: 'Manali & Solang Valley', category: 'Incredible India', description: 'Snow-clad Himalayan peaks, adventure sports, pine forests and alpine streams.', image: '/images/manali.webp', label: 'North Himalayas', days: '5 - 7 Days', scope: 'domestic' },
];

export const SERVICES = [
  { id: 'dmc', name: 'Destination Management Services', text: 'On-ground destination planning, coordination and management for individuals and groups.', icon: 'globe', image: '/images/kuala-lumpur.webp' },
  { id: 'corporate', name: 'Corporate & Wedding Programs', text: 'Thoughtful travel coordination for corporate events and wedding celebrations.', icon: 'users', image: '/images/gallery-02.webp' },
  { id: 'coach', name: 'Car and Coach Services', text: 'Vehicle arrangements for personal travel, groups and corporate requirements.', icon: 'car', image: '/images/transfer-car.webp' },
  { id: 'interest', name: 'Special Interest Tours', text: 'Interest-led travel, from culture and exploration to memorable adventures.', icon: 'camera', image: '/images/gallery-09.webp' },
  { id: 'hotels', name: 'Hotel Bookings', text: 'Accommodation assistance that works with your travel plans and preferences.', icon: 'hotel', image: '/images/gallery-11.webp' },
  { id: 'transfers', name: 'Tours & Transfers', text: 'Tour arrangements, airport transfers and convenient point-to-point journeys.', icon: 'plane', image: '/images/transfer-car.webp' },
];

export const GALLERY = [
  { src: '/images/gallery-06.webp', title: 'The feeling of an island escape', category: 'Beaches' },
  { src: '/images/gallery-09.webp', title: 'Coastal wonders', category: 'Nature' },
  { src: '/images/gallery-02.webp', title: 'Sunset by the sea', category: 'Beaches' },
  { src: '/images/elephants.webp', title: 'Wildlife inspiration', category: 'Wildlife' },
  { src: '/images/bali.webp', title: 'Southeast Asian temples', category: 'Culture' },
  { src: '/images/gallery-10.webp', title: 'Adventures on the water', category: 'Adventure' },
  { src: '/images/gallery-11.webp', title: 'Peaceful resort escapes', category: 'Beaches' },
  { src: '/images/gallery-01.webp', title: 'Moments under the sun', category: 'Beaches' },
  { src: '/images/london.webp', title: 'Europe after dark', category: 'Cities' },
  { src: '/images/gallery-05.webp', title: 'Beachside adventures', category: 'Adventure' },
  { src: '/images/safari.webp', title: 'The African savannah', category: 'Wildlife' },
  { src: '/images/kuala-lumpur.webp', title: 'City lights', category: 'Cities' },
];
