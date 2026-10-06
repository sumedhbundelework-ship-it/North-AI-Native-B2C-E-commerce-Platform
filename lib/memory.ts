export type MemoryTrait = {
  label: string;
  value: string;
  score: number; // 0-100
  description: string;
};

export type LearnedPreference = {
  id: string;
  text: string;
  source: string;
  date: string;
};

export type LifeEvent = {
  id: string;
  date: string;
  event: string;
  impact: string;
};

export const shoppingDNA: MemoryTrait[] = [
  {
    label: 'Price Sensitivity',
    value: 'Moderate',
    score: 58,
    description: 'You will pay for quality but wait for the right moment. North tracks price drops for you.',
  },
  {
    label: 'Luxury vs Value',
    value: 'Quality-First',
    score: 72,
    description: 'You prefer fewer, better things. Ownership cost matters more than sticker price.',
  },
  {
    label: 'Impulse Score',
    value: 'Low',
    score: 22,
    description: 'You rarely impulse buy. 94% of your purchases are researched.',
  },
  {
    label: 'Sustainability',
    value: 'High Priority',
    score: 81,
    description: 'You factor environmental impact into 8 of 10 purchase decisions.',
  },
  {
    label: 'Brand Loyalty',
    value: 'Ecosystem Loyal',
    score: 67,
    description: 'You stay in ecosystems (Apple, Sony) once invested.',
  },
  {
    label: 'Return History',
    value: 'Low Returns',
    score: 12,
    description: 'Only 3 returns in 2 years. You buy with conviction.',
  },
];

export const favoriteBrands = [
  { name: 'Apple', category: 'Electronics', affinity: 94 },
  { name: 'Sony', category: 'Photography', affinity: 78 },
  { name: 'Le Creuset', category: 'Kitchen', affinity: 85 },
  { name: 'Brooklinen', category: 'Home', affinity: 71 },
  { name: 'Hoka', category: 'Running', affinity: 88 },
  { name: 'Patagonia', category: 'Clothing', affinity: 76 },
];

export const learnedPreferences: LearnedPreference[] = [
  {
    id: 'lp1',
    text: 'You sleep hot — prioritize cooling materials in bedding and mattresses.',
    source: 'Inferred from 3 mattress reviews + bedroom temperature data',
    date: '2 days ago',
  },
  {
    id: 'lp2',
    text: 'You prefer warm-toned decor over cool greys.',
    source: 'Learned from your Pinterest saves and apartment mission notes',
    date: '5 days ago',
  },
  {
    id: 'lp3',
    text: 'You cook 5+ times a week — durability matters more than convenience.',
    source: 'Inferred from cookware research patterns',
    date: '1 week ago',
  },
  {
    id: 'lp4',
    text: 'Your partner is mildly allergic to pet dander — recommend HEPA filtration.',
    source: 'Onboarding interview + pet adoption mission',
    date: '1 week ago',
  },
  {
    id: 'lp5',
    text: 'You keep devices 4+ years — prioritize longevity and resale value.',
    source: 'Ownership history: iPhone 14, MacBook Air M1, AirPods Pro',
    date: '2 weeks ago',
  },
  {
    id: 'lp6',
    text: 'You prefer morning deliveries and avoid weekend shipping.',
    source: 'Learned from delivery preferences in Dubai mission',
    date: '2 weeks ago',
  },
];

export const lifeTimeline: LifeEvent[] = [
  {
    id: 'le1',
    date: 'Aug 2024',
    event: 'Relocating to Dubai',
    impact: 'Triggered 5-item mission. Budget: $8,500.',
  },
  {
    id: 'le2',
    date: 'Jul 2024',
    event: 'Starting a YouTube Channel',
    impact: 'Triggered 3-item mission. Ecosystem decision pending.',
  },
  {
    id: 'le3',
    date: 'Jun 2024',
    event: 'First Apartment',
    impact: 'Triggered 3-item mission. Prioritizing longevity.',
  },
  {
    id: 'le4',
    date: 'Jun 2024',
    event: 'Marathon Training',
    impact: 'Triggered 2-item mission. Injury prevention focus.',
  },
  {
    id: 'le5',
    date: 'Sep 2023',
    event: 'Purchased iPhone 14 Pro',
    impact: 'Warranty expiring in 23 days. Trade-in window opening.',
  },
  {
    id: 'le6',
    date: 'Jan 2022',
    event: 'Purchased MacBook Air M1',
    impact: 'Now insufficient for video editing. Upgrade suggested.',
  },
];

export const changingPreferences = [
  {
    metric: 'Sustainability Priority',
    from: 54,
    to: 81,
    trend: 'up',
    note: 'Increased 27 points over 18 months',
  },
  {
    metric: 'Impulse Purchases',
    from: 38,
    to: 22,
    trend: 'down',
    note: 'Decreased 16 points — more deliberate',
  },
  {
    metric: 'Average Ownership Cost Awareness',
    from: 20,
    to: 74,
    trend: 'up',
    note: 'You now evaluate total cost, not just price',
  },
];
