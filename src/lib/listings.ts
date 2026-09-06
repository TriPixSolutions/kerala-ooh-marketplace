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

export const listings: Listing[] = [
  {
    slug: "mg-road-kochi-premium-billboard",
    title: "MG Road Premium Billboard",
    city: "Kochi",
    district: "Ernakulam",
    type: "Billboard",
    dimensions: "40 × 20 ft",
    views: "85K–110K / day",
    price: "From ₹1,20,000 / month",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    description: "A high-visibility roadside billboard positioned along one of Kochi's busiest commercial corridors, designed for large-format brand campaigns.",
  },
  {
    slug: "calicut-bypass-led-network",
    title: "Calicut Bypass LED Screen",
    city: "Kozhikode",
    district: "Kozhikode",
    type: "LED Screen",
    dimensions: "24 × 12 ft",
    views: "65K–90K / day",
    price: "From ₹85,000 / month",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    description: "A digital roadside display built for high-frequency campaigns with strong commuter exposure across the Calicut bypass corridor.",
  },
  {
    slug: "malappuram-town-hoarding",
    title: "Malappuram Town Hoarding",
    city: "Malappuram",
    district: "Malappuram",
    type: "Hoarding",
    dimensions: "30 × 15 ft",
    views: "40K–60K / day",
    price: "From ₹52,000 / month",
    availability: "Available soon",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    description: "A large-format hoarding with strong town-centre visibility, suitable for local launches, retail campaigns and regional awareness.",
  },
  {
    slug: "thrissur-market-restaurant-screen",
    title: "Thrissur Market Restaurant Network",
    city: "Thrissur",
    district: "Thrissur",
    type: "Restaurant Screen",
    dimensions: "55-inch display network",
    views: "18K–25K / day",
    price: "From ₹24,000 / month",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
    description: "A multi-location screen network inside busy dining spaces, useful for repeated brand exposure close to purchase decisions.",
  },
  {
    slug: "trivandrum-technopark-led",
    title: "Technopark LED Display",
    city: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    type: "LED Screen",
    dimensions: "20 × 10 ft",
    views: "52K–75K / day",
    price: "From ₹72,000 / month",
    availability: "Available now",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    description: "A digital placement serving the technology and business audience around Technopark with flexible campaign scheduling.",
  },
  {
    slug: "kannur-highway-billboard",
    title: "Kannur Highway Billboard",
    city: "Kannur",
    district: "Kannur",
    type: "Billboard",
    dimensions: "35 × 18 ft",
    views: "32K–50K / day",
    price: "From ₹48,000 / month",
    availability: "Available soon",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=85",
    description: "A roadside billboard serving highway traffic through Kannur, offering broad regional reach for consumer and service brands.",
  },
];

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}
