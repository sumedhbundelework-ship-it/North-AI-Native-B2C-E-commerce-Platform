import type { AgentId } from './agents';

export type MissionStatus = 'planning' | 'active' | 'paused' | 'completed';
export type MissionPriority = 'low' | 'medium' | 'high' | 'critical';

export type MissionItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: 'pending' | 'approved' | 'ordered' | 'delivered' | 'rejected';
  productId?: string;
  timing: string;
  reasoning: string;
  confidence: number;
};

export type MissionEvent = {
  id: string;
  time: string;
  agentId: AgentId;
  type: 'thinking' | 'action' | 'alert' | 'approval' | 'purchase';
  message: string;
};

export type Mission = {
  id: string;
  title: string;
  emoji: string;
  status: MissionStatus;
  priority: MissionPriority;
  goal: string;
  timeline: string;
  budget: number;
  spent: number;
  progress: number;
  confidence: number;
  startDate: string;
  endDate: string;
  summary: string;
  pricePrediction: string;
  agentIds: AgentId[];
  items: MissionItem[];
  events: MissionEvent[];
  notes: string[];
};

export const missions: Mission[] = [
  {
    id: 'dubai-relocation',
    title: 'Relocating to Dubai',
    emoji: '🏙️',
    status: 'active',
    priority: 'critical',
    goal: 'Move into a 1-bedroom apartment in Dubai Marina by August 1st with everything needed for a fresh start.',
    timeline: '6 weeks',
    budget: 8500,
    spent: 2340,
    progress: 38,
    confidence: 89,
    startDate: 'Jun 18',
    endDate: 'Aug 1',
    summary:
      'You are relocating from London to Dubai for a new role. North has built a 6-week plan covering visa logistics, apartment essentials, climate-appropriate clothing, and a shipping strategy that saves $1,200.',
    pricePrediction:
      'Prices on furniture are projected to drop 8-12% during the Dubai Summer Surprises sale (July 1-15). Sea freight is 4.2x cheaper than air.',
    agentIds: ['budget', 'deal', 'delivery', 'sustainability', 'inventory', 'fraud'],
    items: [
      {
        id: 'm1-i1',
        name: 'Avocado Green Mattress (Queen)',
        category: 'Bedroom',
        price: 1799,
        status: 'approved',
        productId: 'avocado-mattress',
        timing: 'Week 2 — arrives before you',
        reasoning: 'You sleep hot. Dubai climate makes cooling critical. Latex outperforms foam.',
        confidence: 88,
      },
      {
        id: 'm1-i2',
        name: 'Caraway Ceramic Cookware Set',
        category: 'Kitchen',
        price: 545,
        status: 'pending',
        productId: 'caraway-set',
        timing: 'Week 3 — wait for seasonal sale',
        reasoning: 'Non-toxic, induction compatible, lasts 8 years. Price drops to $395 in 2 weeks.',
        confidence: 95,
      },
      {
        id: 'm1-i3',
        name: 'Dyson V15 Detect',
        category: 'Home',
        price: 749,
        status: 'pending',
        productId: 'dyson-v15',
        timing: 'Week 4 — after move-in',
        reasoning: 'Dubai apartments have dust. Laser detection effective on tile floors.',
        confidence: 84,
      },
      {
        id: 'm1-i4',
        name: 'Climate-Appropriate Wardrobe (12 items)',
        category: 'Clothing',
        price: 890,
        status: 'ordered',
        timing: 'Week 1 — ship with essentials',
        reasoning: 'Linen and breathable fabrics. Sourced from brands you already wear.',
        confidence: 82,
      },
      {
        id: 'm1-i5',
        name: 'Persian Rug (Living Room)',
        category: 'Decor',
        price: 540,
        status: 'pending',
        timing: 'Week 4 — deferred per Budget Agent',
        reasoning: 'Prices projected to drop 8% in 3 weeks. Not needed for move-in day.',
        confidence: 76,
      },
    ],
    events: [
      {
        id: 'e1',
        time: '2m ago',
        agentId: 'budget',
        type: 'thinking',
        message: 'Reallocating $340 from rug budget to cover unexpected visa fees.',
      },
      {
        id: 'e2',
        time: '14m ago',
        agentId: 'inventory',
        type: 'action',
        message: 'Removed vacuum, microwave, and towels from your list — you already own them. Saved $612.',
      },
      {
        id: 'e3',
        time: '1h ago',
        agentId: 'deal',
        type: 'alert',
        message: 'Sony A7 IV hit a 90-day low. But I project it drops further on Prime Day. Holding.',
      },
      {
        id: 'e4',
        time: '3h ago',
        agentId: 'sustainability',
        type: 'action',
        message: 'Switched non-urgent items to sea freight. Saves $1,200 and 1.8 tonnes CO2.',
      },
      {
        id: 'e5',
        time: 'Yesterday',
        agentId: 'fraud',
        type: 'approval',
        message: 'Verified all 14 retailers. No counterfeit risk detected.',
      },
    ],
    notes: [
      'Visa appointment confirmed for July 12th.',
      'Apartment keys handover on July 28th.',
      'Prefer morning deliveries — building has strict hours.',
    ],
  },
  {
    id: 'first-apartment',
    title: 'First Apartment',
    emoji: '🏠',
    status: 'active',
    priority: 'high',
    goal: 'Furnish a first apartment in Manchester with durable, sustainable essentials that last 10+ years.',
    timeline: '4 weeks',
    budget: 4200,
    spent: 1180,
    progress: 28,
    confidence: 91,
    startDate: 'Jun 20',
    endDate: 'Jul 18',
    summary:
      'Your first place. North is prioritizing longevity over cheap — every item is chosen for a sub-$200/yr ownership cost. You already own a vacuum and microwave, so those are excluded.',
    pricePrediction: 'IKEA summer sale starts July 1. Furniture prices drop 15-25% across the catalog.',
    agentIds: ['budget', 'quality', 'deal', 'review', 'inventory', 'delivery'],
    items: [
      {
        id: 'm2-i1',
        name: 'Le Creuset Dutch Oven 5.5qt',
        category: 'Kitchen',
        price: 380,
        status: 'approved',
        productId: 'le-creuset-dutch',
        timing: 'Week 1 — lifetime piece',
        reasoning: 'At $19/yr over 20 years, this is the cheapest-per-use item you will own.',
        confidence: 97,
      },
      {
        id: 'm2-i2',
        name: 'Caraway Ceramic Cookware Set',
        category: 'Kitchen',
        price: 545,
        status: 'pending',
        productId: 'caraway-set',
        timing: 'Week 2 — wait for sale',
        reasoning: 'Non-toxic, induction compatible. Review Analyst flagged Our Place durability concerns.',
        confidence: 95,
      },
      {
        id: 'm2-i3',
        name: 'Bed Frame + Mattress Bundle',
        category: 'Bedroom',
        price: 1200,
        status: 'pending',
        timing: 'Week 3 — after measuring room',
        reasoning: 'Waiting for your room measurements. Avocado mattress recommended for longevity.',
        confidence: 88,
      },
    ],
    events: [
      {
        id: 'e1',
        time: '8m ago',
        agentId: 'review',
        type: 'thinking',
        message: 'Synthesized 2,847 reviews for the kitchen bundle. Filtered 412 suspected fakes.',
      },
      {
        id: 'e2',
        time: '45m ago',
        agentId: 'quality',
        type: 'action',
        message: 'Flagged Our Place Always Pan — durability concerns after 8 months in real reviews.',
      },
      {
        id: 'e3',
        time: '2h ago',
        agentId: 'inventory',
        type: 'action',
        message: 'You already own a vacuum and microwave. Removed from list. Saved $612.',
      },
    ],
    notes: [
      'Room measurements needed before ordering bed frame.',
      'Landlord allows wall mounting.',
      'Prefer warm-toned decor.',
    ],
  },
  {
    id: 'youtube-channel',
    title: 'Starting a YouTube Channel',
    emoji: '🎬',
    status: 'planning',
    priority: 'medium',
    goal: 'Build a video production kit for a tech review YouTube channel — 4K capable, upgradeable, under $5k.',
    timeline: '3 weeks',
    budget: 5000,
    spent: 0,
    progress: 12,
    confidence: 78,
    startDate: 'Jun 28',
    endDate: 'Jul 19',
    summary:
      'You are starting a tech review channel. North recommends a hybrid photo/video camera, a fast editing machine, and audio that scales. The Compatibility Agent flagged an ecosystem decision you need to make first.',
    pricePrediction: 'Prime Day (July 16-17) will likely drop the Sony A7 IV to $1,899 — 73% confidence.',
    agentIds: ['budget', 'quality', 'deal', 'compatibility', 'review'],
    items: [
      {
        id: 'm3-i1',
        name: 'Sony Alpha 7 IV Body',
        category: 'Photography',
        price: 2099,
        status: 'pending',
        productId: 'sony-a7iv',
        timing: 'Week 2 — wait for Prime Day',
        reasoning: 'Hybrid photo/video, real-time autofocus. Deal Agent projects $1,899 on Prime Day.',
        confidence: 73,
      },
      {
        id: 'm3-i2',
        name: 'MacBook Pro 14" M3 Pro',
        category: 'Electronics',
        price: 1999,
        status: 'pending',
        productId: 'macbook-pro-m3',
        timing: 'Week 1 — needed immediately',
        reasoning: 'Your M1 Air will struggle with multicam 4K. M3 Pro handles ProRes in real-time.',
        confidence: 91,
      },
      {
        id: 'm3-i3',
        name: 'Audio Kit (Mic + Boom + Interface)',
        category: 'Audio',
        price: 480,
        status: 'pending',
        timing: 'Week 2',
        reasoning: 'Rode NTG5 + Zoom F3. Scales from solo to multi-person interviews.',
        confidence: 85,
      },
    ],
    events: [
      {
        id: 'e1',
        time: '5m ago',
        agentId: 'compatibility',
        type: 'alert',
        message: 'Flag: Sony E-mount locks you into one ecosystem. Consider Canon RF if upgrading within 3 years.',
      },
      {
        id: 'e2',
        time: '20m ago',
        agentId: 'deal',
        type: 'thinking',
        message: 'Tracking Sony A7 IV. At 90-day low but I see a Prime Day pattern. Holding for 11 days.',
      },
    ],
    notes: [
      'Need to decide: Sony vs Canon ecosystem before buying lenses.',
      'Filming location: home office — need lighting that fits the space.',
    ],
  },
  {
    id: 'marathon-training',
    title: 'Marathon Training',
    emoji: '🏃',
    status: 'active',
    priority: 'medium',
    goal: 'Train for your first marathon in October with gear that prevents injury and tracks progress.',
    timeline: '16 weeks',
    budget: 900,
    spent: 340,
    progress: 22,
    confidence: 86,
    startDate: 'Jun 10',
    endDate: 'Oct 12',
    summary:
      'Your first marathon. North is prioritizing injury prevention over speed gear. The Quality Agent flagged that your current running shoes are 400km past their replacement window — high injury risk.',
    pricePrediction: 'Running shoe prices are stable. Garmin watches drop 10% during Amazon Prime Day.',
    agentIds: ['budget', 'quality', 'deal', 'review', 'sustainability'],
    items: [
      {
        id: 'm4-i1',
        name: 'Hoka Clifton 9 (2 pairs)',
        category: 'Running',
        price: 290,
        status: 'delivered',
        timing: 'Week 1 — urgent',
        reasoning: 'Your current shoes are 400km past replacement. High injury risk. Hoka suits your gait.',
        confidence: 92,
      },
      {
        id: 'm4-i2',
        name: 'Garmin Forerunner 265',
        category: 'Running',
        price: 449,
        status: 'pending',
        timing: 'Week 3 — wait for Prime Day',
        reasoning: 'Best training metrics for the price. Projected $404 on Prime Day.',
        confidence: 81,
      },
    ],
    events: [
      {
        id: 'e1',
        time: '1h ago',
        agentId: 'quality',
        type: 'alert',
        message: 'Your current running shoes are 400km past replacement. Injury risk elevated.',
      },
      {
        id: 'e2',
        time: 'Yesterday',
        agentId: 'deal',
        type: 'action',
        message: 'Hoka Clifton 9 ordered. Delivered. Garmin watch held for Prime Day.',
      },
    ],
    notes: [
      'Training plan: 4 runs/week, one long run Sunday.',
      'Race date: October 12th.',
    ],
  },
  {
    id: 'pet-adoption',
    title: 'Pet Adoption',
    emoji: '🐕',
    status: 'planning',
    priority: 'low',
    goal: 'Prepare for adopting a medium-energy rescue dog — home setup, supplies, and ongoing care.',
    timeline: '2 weeks',
    budget: 1200,
    spent: 0,
    progress: 8,
    confidence: 74,
    startDate: 'Jul 1',
    endDate: 'Jul 15',
    summary:
      'You are adopting a rescue. North is building a setup that accounts for a medium-energy dog in an apartment. The Relationship Agent notes your partner is mildly allergic — recommending hypoallergenic gear.',
    pricePrediction: 'Pet supply prices are stable year-round. No major sales expected.',
    agentIds: ['budget', 'quality', 'review', 'relationship', 'sustainability'],
    items: [
      {
        id: 'm5-i1',
        name: 'Crate + Bed Bundle (Medium)',
        category: 'Pet',
        price: 180,
        status: 'pending',
        timing: 'Week 1 — before arrival',
        reasoning: 'Apartment-appropriate crate size. Hypoallergenic bed for partner\'s mild allergy.',
        confidence: 79,
      },
      {
        id: 'm5-i2',
        name: 'Starter Food + Supplies Kit',
        category: 'Pet',
        price: 240,
        status: 'pending',
        timing: 'Week 1',
        reasoning: 'Matches the rescue\'s current diet to avoid stomach upset during transition.',
        confidence: 83,
      },
    ],
    events: [
      {
        id: 'e1',
        time: '30m ago',
        agentId: 'relationship',
        type: 'thinking',
        message: 'Your partner is mildly allergic. Recommending hypoallergenic bedding and a HEPA filter.',
      },
    ],
    notes: [
      'Adoption appointment: July 8th.',
      'Dog is a 2-year-old medium-energy mix.',
    ],
  },
];

export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}

export const missionTemplates = [
  { id: 'move-house', label: 'Move House', emoji: '🏠', desc: 'Relocate with a complete plan' },
  { id: 'wedding', label: 'Wedding', emoji: '💍', desc: 'Plan every detail over months' },
  { id: 'baby', label: 'Baby Arrival', emoji: '👶', desc: 'Prepare for a new family member' },
  { id: 'gaming', label: 'Gaming Setup', emoji: '🎮', desc: 'Build your dream battle station' },
  { id: 'photography', label: 'Photography', emoji: '📷', desc: 'Start a creative business' },
  { id: 'travel', label: 'Travel', emoji: '✈️', desc: 'Pack smart for any trip' },
  { id: 'new-job', label: 'New Job', emoji: '💼', desc: 'Gear up for a new role' },
  { id: 'remote-work', label: 'Remote Work', emoji: '🖥️', desc: 'Create your ideal workspace' },
  { id: 'home-gym', label: 'Home Gym', emoji: '🏋️', desc: 'Build a space that lasts' },
  { id: 'pet-adoption', label: 'Pet Adoption', emoji: '🐕', desc: 'Welcome a new companion' },
  { id: 'business', label: 'Business Setup', emoji: '🏢', desc: 'Launch with the right tools' },
  { id: 'marathon', label: 'Marathon Training', emoji: '🏃', desc: 'Train injury-free' },
];
