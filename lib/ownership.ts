export type OwnedItem = {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  purchaseDate: string;
  purchasePrice: number;
  currentValue: number;
  warrantyStatus: 'active' | 'expiring' | 'expired';
  warrantyDaysLeft?: number;
  lastMaintenance?: string;
  nextMaintenance?: string;
  upgradeSuggestion?: string;
  tradeInValue?: number;
  resaleOpportunity?: string;
  insurance?: string;
  replacementPrediction: string;
  accessories?: string[];
};

export const ownedItems: OwnedItem[] = [
  {
    id: 'own-iphone14',
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    category: 'Electronics',
    image:
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Sep 2023',
    purchasePrice: 999,
    currentValue: 620,
    warrantyStatus: 'expiring',
    warrantyDaysLeft: 23,
    lastMaintenance: 'None — sealed unit',
    upgradeSuggestion: 'iPhone 16 Pro expected Sep. Trade-in value peaks in August.',
    tradeInValue: 580,
    resaleOpportunity: 'Sell before September launch to maximize trade-in value.',
    insurance: 'AppleCare+ expires in 23 days',
    replacementPrediction: 'Battery at 87% health. Replace in 8-10 months.',
    accessories: ['MagSafe Charger', 'Clear Case', 'Screen Protector'],
  },
  {
    id: 'own-macbook-air',
    name: 'MacBook Air M1',
    brand: 'Apple',
    category: 'Electronics',
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Jan 2022',
    purchasePrice: 999,
    currentValue: 480,
    warrantyStatus: 'expired',
    lastMaintenance: 'Battery cycle count: 287',
    upgradeSuggestion: 'Will struggle with 4K multicam editing. Consider M3 Pro for YouTube channel.',
    tradeInValue: 440,
    resaleOpportunity: 'Sell now — M1 value dropping as M3 models dominate used market.',
    insurance: 'None',
    replacementPrediction: 'SSD at 60% capacity. Usable for 2 more years for light tasks.',
    accessories: ['USB-C Hub', 'Sleeve Case'],
  },
  {
    id: 'own-airpods-pro',
    name: 'AirPods Pro (1st gen)',
    brand: 'Apple',
    category: 'Electronics',
    image:
      'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Nov 2022',
    purchasePrice: 249,
    currentValue: 90,
    warrantyStatus: 'expired',
    lastMaintenance: 'Replaced ear tips (free from Apple)',
    upgradeSuggestion: 'Partner mentioned wanting noise-cancelling for flights. AirPods Pro 2 has 2x ANC.',
    tradeInValue: 70,
    resaleOpportunity: 'Gift to partner or trade in toward Pro 2.',
    insurance: 'None',
    replacementPrediction: 'Battery at 71%. ANC still effective. 12-18 months left.',
    accessories: ['Replacement Tips (3 sizes)'],
  },
  {
    id: 'own-vacuum',
    name: 'Shark Navigator (2019)',
    brand: 'Shark',
    category: 'Home',
    image:
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Mar 2019',
    purchasePrice: 199,
    currentValue: 30,
    warrantyStatus: 'expired',
    lastMaintenance: 'Filter cleaned 4 months ago',
    upgradeSuggestion: '40% suction loss detected. Dyson V15 recommended for pet hair + hardwood.',
    tradeInValue: 0,
    resaleOpportunity: 'Donate — minimal resale value.',
    insurance: 'None',
    replacementPrediction: 'Motor degrading. Replace within 6 months.',
    accessories: ['Crevice Tool', 'Upholstery Brush'],
  },
  {
    id: 'own-microwave',
    name: 'Countertop Microwave',
    brand: 'Panasonic',
    category: 'Kitchen',
    image:
      'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Aug 2021',
    purchasePrice: 129,
    currentValue: 45,
    warrantyStatus: 'expired',
    lastMaintenance: 'None needed',
    upgradeSuggestion: 'Still functional. No upgrade needed for first apartment.',
    tradeInValue: 0,
    resaleOpportunity: 'Keep for first apartment — already owned, saves $129.',
    insurance: 'None',
    replacementPrediction: '3-4 more years of use.',
    accessories: ['Cover'],
  },
  {
    id: 'own-towels',
    name: 'Bath Towels (4 sets)',
    brand: 'Brooklinen',
    category: 'Home',
    image:
      'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=400',
    purchaseDate: 'Dec 2022',
    purchasePrice: 160,
    currentValue: 40,
    warrantyStatus: 'active',
    lastMaintenance: 'Washed weekly',
    upgradeSuggestion: 'No upgrade needed. Sufficient for first apartment.',
    tradeInValue: 0,
    resaleOpportunity: 'Keep — already owned, saves $160.',
    insurance: 'None',
    replacementPrediction: '2-3 more years before fabric thins.',
    accessories: [],
  },
];
