export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  historicalLow: number;
  historicalHigh: number;
  projectedPrice: number;
  priceDirection: 'down' | 'up' | 'stable';
  priceTrend: { week: string; price: number }[];
  ownershipCost: number;
  expectedLifespan: string;
  maintenanceEstimate: string;
  communityTrust: number;
  warrantyScore: number;
  resaleValue: number;
  environmentalScore: number;
  compatibility: string;
  aiReason: string;
  alternatives: { name: string; price: number; note: string }[];
  confidence: number;
  risks: string[];
};

export const products: Product[] = [
  {
    id: 'avocado-mattress',
    name: 'Green Mattress (Queen)',
    brand: 'Avocado',
    category: 'Bedroom',
    image:
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1799,
    historicalLow: 1499,
    historicalHigh: 1999,
    projectedPrice: 1699,
    priceDirection: 'down',
    priceTrend: [
      { week: 'W1', price: 1999 },
      { week: 'W2', price: 1899 },
      { week: 'W3', price: 1899 },
      { week: 'W4', price: 1799 },
      { week: 'W5', price: 1799 },
      { week: 'W6', price: 1799 },
    ],
    ownershipCost: 150,
    expectedLifespan: '12 years',
    maintenanceEstimate: 'Rotate quarterly, $0/yr',
    communityTrust: 94,
    warrantyScore: 96,
    resaleValue: 42,
    environmentalScore: 98,
    compatibility: 'Fits standard queen frame',
    aiReason:
      'You sleep hot and prioritize longevity. Latex sleeps cooler than memory foam, and the 12-year lifespan means a $150/yr ownership cost — 40% lower than the Casper alternative.',
    alternatives: [
      { name: 'Casper Wave Hybrid', price: 1495, note: 'Cheaper upfront, 6yr lifespan' },
      { name: 'Purple Hybrid', price: 2499, note: 'Best cooling, higher cost' },
    ],
    confidence: 88,
    risks: ['Heavier than foam — needs 2 people to move', 'Off-gassing period of 48hrs'],
  },
  {
    id: 'sony-a7iv',
    name: 'Alpha 7 IV Body',
    brand: 'Sony',
    category: 'Photography',
    image:
      'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2099,
    historicalLow: 1899,
    historicalHigh: 2499,
    projectedPrice: 1899,
    priceDirection: 'down',
    priceTrend: [
      { week: 'W1', price: 2499 },
      { week: 'W2', price: 2299 },
      { week: 'W3', price: 2199 },
      { week: 'W4', price: 2099 },
      { week: 'W5', price: 2099 },
      { week: 'W6', price: 2099 },
    ],
    ownershipCost: 210,
    expectedLifespan: '5 years',
    maintenanceEstimate: 'Sensor cleaning $80/yr',
    communityTrust: 91,
    warrantyScore: 82,
    resaleValue: 68,
    environmentalScore: 55,
    compatibility: 'Sony E-mount lenses only',
    aiReason:
      'You are starting a photography business and need hybrid photo/video. The A7 IV is the sweet spot — better autofocus than the A7 III, $800 cheaper than the A7 V. Prime Day in 11 days has a 73% chance of hitting $1,899.',
    alternatives: [
      { name: 'Canon R6 Mark II', price: 2499, note: 'Better RF roadmap, pricier' },
      { name: 'Sony A7 III', price: 1499, note: 'Older autofocus, $600 less' },
    ],
    confidence: 73,
    risks: ['E-mount limits future lens options', 'Prime Day price not guaranteed'],
  },
  {
    id: 'caraway-set',
    name: 'Ceramic Cookware Set',
    brand: 'Caraway',
    category: 'Kitchen',
    image:
      'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 545,
    historicalLow: 395,
    historicalHigh: 545,
    projectedPrice: 395,
    priceDirection: 'down',
    priceTrend: [
      { week: 'W1', price: 545 },
      { week: 'W2', price: 545 },
      { week: 'W3', price: 495 },
      { week: 'W4', price: 495 },
      { week: 'W5', price: 445 },
      { week: 'W6', price: 545 },
    ],
    ownershipCost: 55,
    expectedLifespan: '8 years',
    maintenanceEstimate: 'Hand wash recommended, $0/yr',
    communityTrust: 89,
    warrantyScore: 78,
    resaleValue: 35,
    environmentalScore: 91,
    compatibility: 'Induction, gas, electric compatible',
    aiReason:
      'You cook 5+ times a week and care about non-toxic materials. Caraway outperforms Our Place on durability reviews after 8 months of use. The set drops to $395 during seasonal sales — wait 2 weeks.',
    alternatives: [
      { name: 'Our Place Always Pan', price: 145, note: 'Aesthetic but durability concerns' },
      { name: 'GreenPan Valencia', price: 399, note: 'Similar ceramic, cheaper' },
    ],
    confidence: 95,
    risks: ['Ceramic coating degrades faster than stainless', 'Not dishwasher safe'],
  },
  {
    id: 'le-creuset-dutch',
    name: 'Dutch Oven 5.5qt',
    brand: 'Le Creuset',
    category: 'Kitchen',
    image:
      'https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 380,
    historicalLow: 330,
    historicalHigh: 410,
    projectedPrice: 340,
    priceDirection: 'down',
    priceTrend: [
      { week: 'W1', price: 410 },
      { week: 'W2', price: 390 },
      { week: 'W3', price: 380 },
      { week: 'W4', price: 380 },
      { week: 'W5', price: 360 },
      { week: 'W6', price: 380 },
    ],
    ownershipCost: 19,
    expectedLifespan: '20+ years',
    maintenanceEstimate: 'Enamel care, $0/yr',
    communityTrust: 97,
    warrantyScore: 99,
    resaleValue: 75,
    environmentalScore: 88,
    compatibility: 'All cooktops including induction',
    aiReason:
      'A lifetime piece. At $19/yr ownership cost over 20 years, this is the cheapest-per-use item in your kitchen. Resale value stays at 75% — you can pass it down. The Cerise color matches your sister\'s Pinterest.',
    alternatives: [
      { name: 'Staub Cocotte', price: 389, note: 'Better browning, darker interior' },
      { name: 'Lodge Enameled', price: 89, note: 'Budget pick, 10yr lifespan' },
    ],
    confidence: 97,
    risks: ['Heavy — 12lbs when full', 'Enamel can chip if dropped'],
  },
  {
    id: 'dyson-v15',
    name: 'V15 Detect Cordless',
    brand: 'Dyson',
    category: 'Home',
    image:
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 749,
    historicalLow: 599,
    historicalHigh: 749,
    projectedPrice: 649,
    priceDirection: 'down',
    priceTrend: [
      { week: 'W1', price: 749 },
      { week: 'W2', price: 749 },
      { week: 'W3', price: 699 },
      { week: 'W4', price: 699 },
      { week: 'W5', price: 649 },
      { week: 'W6', price: 749 },
    ],
    ownershipCost: 75,
    expectedLifespan: '10 years',
    maintenanceEstimate: 'Filter replacement $30/yr',
    communityTrust: 86,
    warrantyScore: 80,
    resaleValue: 45,
    environmentalScore: 62,
    compatibility: 'All floor types',
    aiReason:
      'You have pets and hardwood floors. The V15\'s laser dust detection is specifically effective on hard surfaces. You already own a vacuum — but it\'s a 2019 model with 40% suction loss. Upgrade justified.',
    alternatives: [
      { name: 'Shark IQ Robot', price: 549, note: 'Automated but less powerful' },
      { name: 'Tineco Pure One', price: 499, note: 'Similar features, cheaper' },
    ],
    confidence: 84,
    risks: ['Battery degrades after 3-4 years', 'Replacement battery $99'],
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 14" M3 Pro',
    brand: 'Apple',
    category: 'Electronics',
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    price: 1999,
    historicalLow: 1799,
    historicalHigh: 1999,
    projectedPrice: 1899,
    priceDirection: 'stable',
    priceTrend: [
      { week: 'W1', price: 1999 },
      { week: 'W2', price: 1999 },
      { week: 'W3', price: 1999 },
      { week: 'W4', price: 1999 },
      { week: 'W5', price: 1999 },
      { week: 'W6', price: 1999 },
    ],
    ownershipCost: 200,
    expectedLifespan: '7 years',
    maintenanceEstimate: 'None — sealed unit',
    communityTrust: 95,
    warrantyScore: 88,
    resaleValue: 58,
    environmentalScore: 70,
    compatibility: 'Apple ecosystem',
    aiReason:
      'You are starting a YouTube channel and need video editing. The M3 Pro handles 4K ProRes in real-time. Your current MacBook Air (M1) will struggle with multicam. Resale value stays high for 4 years.',
    alternatives: [
      { name: 'MacBook Air M3', price: 1299, note: 'Lighter, less GPU power' },
      { name: 'Dell XPS 15', price: 1799, note: 'Windows, worse battery' },
    ],
    confidence: 91,
    risks: ['Non-upgradable RAM — buy 18GB minimum', 'No price drops expected soon'],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
