export type Listing = {
  slug: string;
  title: string;
  city: string;
  district: string;
  type: "Billboard" | "Hoarding" | "LED Screen" | "Restaurant Screen";
  dimensions: string;
  views: string;
  price: string;
  availability: "Available now" | "Available soon";
  image: string;
  description: string;
};

const demoImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export const listings: Listing[] = [
  { slug: "mg-road-kochi-premium-billboard", title: "MG Road Premium Billboard", city: "Kochi", district: "Ernakulam", type: "Billboard", dimensions: "40 × 20 ft", views: "85K–110K / day", price: "From ₹1,20,000 / month", availability: "Available now", image: demoImage("photo-1519501025264-65ba15a82390"), description: "High-visibility roadside billboard on a busy Kochi commercial corridor, suited to large-format campaigns." },
  { slug: "calicut-bypass-led-network", title: "Calicut Bypass LED Screen", city: "Kozhikode", district: "Kozhikode", type: "LED Screen", dimensions: "24 × 12 ft", views: "65K–90K / day", price: "From ₹85,000 / month", availability: "Available now", image: demoImage("photo-1556761175-b413da4baf72"), description: "Digital roadside display built for repeated commuter exposure across the Calicut bypass corridor." },
  { slug: "malappuram-town-hoarding", title: "Malappuram Town Hoarding", city: "Malappuram", district: "Malappuram", type: "Hoarding", dimensions: "30 × 15 ft", views: "40K–60K / day", price: "From ₹52,000 / month", availability: "Available soon", image: demoImage("photo-1486406146926-c627a92ad1ab"), description: "Large-format town-centre hoarding suited to local launches, retail campaigns and regional awareness." },
  { slug: "thrissur-market-restaurant-screen", title: "Thrissur Market Restaurant Network", city: "Thrissur", district: "Thrissur", type: "Restaurant Screen", dimensions: "55-inch display network", views: "18K–25K / day", price: "From ₹24,000 / month", availability: "Available now", image: demoImage("photo-1515003197210-e0cd71810b5f"), description: "Multi-location screen network inside busy dining spaces, placing brands close to purchase decisions." },
  { slug: "trivandrum-technopark-led", title: "Technopark LED Display", city: "Thiruvananthapuram", district: "Thiruvananthapuram", type: "LED Screen", dimensions: "20 × 10 ft", views: "52K–75K / day", price: "From ₹72,000 / month", availability: "Available now", image: demoImage("photo-1497366754035-f200968a6e72"), description: "Digital placement serving the technology and business audience around Technopark with flexible scheduling." },
  { slug: "kannur-highway-billboard", title: "Kannur Highway Billboard", city: "Kannur", district: "Kannur", type: "Billboard", dimensions: "35 × 18 ft", views: "32K–50K / day", price: "From ₹48,000 / month", availability: "Available soon", image: demoImage("photo-1449824913935-59a10b8d2000"), description: "Roadside billboard serving highway traffic through Kannur for regional consumer and service brands." },
  { slug: "palarivattom-junction-billboard", title: "Palarivattom Junction Billboard", city: "Kochi", district: "Ernakulam", type: "Billboard", dimensions: "35 × 16 ft", views: "70K–95K / day", price: "From ₹98,000 / month", availability: "Available now", image: demoImage("photo-1494526585095-c41746248156"), description: "Junction-facing billboard with strong vehicle and pedestrian visibility in central Kochi." },
  { slug: "vytilla-mobility-led", title: "Vyttila Mobility Hub LED", city: "Kochi", district: "Ernakulam", type: "LED Screen", dimensions: "18 × 10 ft", views: "90K–125K / day", price: "From ₹1,05,000 / month", availability: "Available now", image: demoImage("photo-1517245386807-bb43f82c33c4"), description: "High-frequency digital placement serving a major transit area in Kochi." },
  { slug: "feroke-town-hoarding", title: "Feroke Town Hoarding", city: "Feroke", district: "Kozhikode", type: "Hoarding", dimensions: "30 × 12 ft", views: "28K–45K / day", price: "From ₹39,000 / month", availability: "Available now", image: demoImage("photo-1497366811353-6870744d04b2"), description: "Regional hoarding placement with strong visibility for retail, education and local service brands." },
  { slug: "tirur-bypass-billboard", title: "Tirur Bypass Billboard", city: "Tirur", district: "Malappuram", type: "Billboard", dimensions: "32 × 14 ft", views: "25K–40K / day", price: "From ₹34,000 / month", availability: "Available now", image: demoImage("photo-1444723121867-7a241cacace9"), description: "Roadside advertising space positioned for local and regional commuter traffic around Tirur." },
  { slug: "kunnamkulam-main-road-hoarding", title: "Kunnamkulam Main Road Hoarding", city: "Kunnamkulam", district: "Thrissur", type: "Hoarding", dimensions: "28 × 14 ft", views: "22K–35K / day", price: "From ₹32,000 / month", availability: "Available soon", image: demoImage("photo-1487958449943-2429e8be8625"), description: "Main-road hoarding with strong local reach for retail, property and service campaigns." },
  { slug: "kazhakkoottam-led-display", title: "Kazhakkoottam LED Display", city: "Thiruvananthapuram", district: "Thiruvananthapuram", type: "LED Screen", dimensions: "24 × 10 ft", views: "60K–85K / day", price: "From ₹68,000 / month", availability: "Available now", image: demoImage("photo-1556742049-0cfed4f6a45d"), description: "Digital display serving technology, residential and commuter audiences along the northern Trivandrum corridor." },
];

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}
