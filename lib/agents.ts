export type AgentId =
  | 'budget'
  | 'quality'
  | 'deal'
  | 'review'
  | 'compatibility'
  | 'delivery'
  | 'warranty'
  | 'sustainability'
  | 'fraud'
  | 'gift'
  | 'relationship'
  | 'inventory';

export type Agent = {
  id: AgentId;
  name: string;
  role: string;
  personality: string;
  icon: string;
  accent: string;
  status: 'idle' | 'thinking' | 'working' | 'done';
  currentTask?: string;
  thinking?: string;
  confidence?: number;
  progress?: number;
  recommendation?: string;
};

export const agents: Agent[] = [
  {
    id: 'budget',
    name: 'Atlas',
    role: 'Budget Agent',
    personality: 'Disciplined, protective, speaks in trade-offs.',
    icon: 'Wallet',
    accent: '142 70% 50%',
    status: 'working',
    currentTask: 'Reallocating $340 from the Dubai move budget to cover visa fees.',
    thinking:
      'The visa fee was unexpected. I can offset it by deferring the rug purchase by 3 weeks — prices are projected to drop 8%.',
    confidence: 92,
    progress: 64,
    recommendation:
      'Defer the Persian rug purchase to week 4. Reallocate $340 to visa fees. No impact on move-in readiness.',
  },
  {
    id: 'quality',
    name: 'Vera',
    role: 'Quality Agent',
    personality: 'Meticulous, skeptical of marketing, obsessed with longevity.',
    icon: 'Gem',
    accent: '200 85% 55%',
    status: 'thinking',
    currentTask: 'Evaluating mattress durability across 3 candidates.',
    thinking:
      'The Casper scores well on comfort but the foam density suggests a 6-year lifespan. The Avocado latex has a 12-year projection and better resale.',
    confidence: 88,
    progress: 41,
    recommendation:
      'Recommend Avocado Green Mattress. Higher upfront cost but 2x lifespan and 40% better resale value.',
  },
  {
    id: 'deal',
    name: 'Pip',
    role: 'Deal Hunter',
    personality: 'Energetic, patient, never settles for retail price.',
    icon: 'Tag',
    accent: '35 90% 60%',
    status: 'working',
    currentTask: 'Tracking price history on 14 items across 6 retailers.',
    thinking:
      'The Sony A7 IV is at a 90-day low but I see a pattern — it drops further during Prime Day. 73% confidence it hits $1,899.',
    confidence: 73,
    progress: 58,
    recommendation:
      'Wait 11 days for Prime Day. Projected additional savings: $180. Risk: low — stock is healthy.',
  },
  {
    id: 'review',
    name: 'Sage',
    role: 'Review Analyst',
    personality: 'Calm, analytical, reads between the lines of fake reviews.',
    icon: 'MessageSquareQuote',
    accent: '173 80% 45%',
    status: 'done',
    currentTask: 'Synthesized 2,847 reviews for the apartment kitchen bundle.',
    thinking:
      'Filtered 412 suspected fake reviews. Real sentiment skews positive on durability, mixed on the non-stick coating after 8 months.',
    confidence: 95,
    progress: 100,
    recommendation:
      'The Our Place Always Pan has strong aesthetic reviews but durability concerns. Recommend Caraway for longevity.',
  },
  {
    id: 'compatibility',
    name: 'Link',
    role: 'Compatibility Agent',
    personality: 'Systems thinker, prevents regret before it happens.',
    icon: 'Network',
    accent: '280 65% 60%',
    status: 'thinking',
    currentTask: 'Checking ecosystem fit for the photography kit.',
    thinking:
      'The Sony lens mount limits future body upgrades. Canon RF has a narrower used market but better long-term roadmap. Flagging for user.',
    confidence: 81,
    progress: 33,
    recommendation:
      'Flag: Sony E-mount locks you into one ecosystem. Consider Canon RF if you plan to upgrade within 3 years.',
  },
  {
    id: 'delivery',
    name: 'Route',
    role: 'Delivery Optimizer',
    personality: 'Logistical, considerate of your time and space.',
    icon: 'Truck',
    accent: '200 85% 55%',
    status: 'idle',
    currentTask: undefined,
    thinking: undefined,
    confidence: 90,
    progress: 0,
    recommendation:
      'Batch the kitchen items to arrive 2 days before move-in. Stagger furniture across week 1-2 to avoid hallway congestion.',
  },
  {
    id: 'warranty',
    name: 'Shield',
    role: 'Warranty Agent',
    personality: 'Cautious, forward-looking, remembers the fine print.',
    icon: 'ShieldCheck',
    accent: '142 70% 50%',
    status: 'idle',
    confidence: 86,
    progress: 0,
    recommendation:
      'Your iPhone 14 warranty expires in 23 days. Consider AppleCare+ if you keep devices beyond 2 years.',
  },
  {
    id: 'sustainability',
    name: 'Leaf',
    role: 'Sustainability Agent',
    personality: 'Pragmatic, not preachy, optimizes for total impact.',
    icon: 'Leaf',
    accent: '142 70% 50%',
    status: 'done',
    currentTask: 'Calculated carbon footprint for the Dubai relocation.',
    thinking:
      'Shipping everything by air is 4.2x more carbon than sea freight. Sea freight adds 18 days but saves 1.8 tonnes CO2.',
    confidence: 84,
    progress: 100,
    recommendation:
      'Use sea freight for non-urgent items. Saves $1,200 and 1.8 tonnes CO2. Air freight only for essentials.',
  },
  {
    id: 'fraud',
    name: 'Sentinel',
    role: 'Fraud Detector',
    personality: 'Vigilant, quiet, only speaks when something is off.',
    icon: 'ScanFace',
    accent: '0 72% 58%',
    status: 'idle',
    confidence: 99,
    progress: 0,
    recommendation:
      'All 14 retailers in the Dubai mission are verified. No counterfeit risk detected on current items.',
  },
  {
    id: 'gift',
    name: 'Ember',
    role: 'Gift Specialist',
    personality: 'Thoughtful, remembers what people love, not what costs most.',
    icon: 'Gift',
    accent: '35 90% 60%',
    status: 'idle',
    confidence: 79,
    progress: 0,
    recommendation:
      'Your sister\'s birthday is in 47 days. Based on her Pinterest and your past gifts, she\'d love the Le Creuset Dutch oven in Cerise.',
  },
  {
    id: 'relationship',
    name: 'Echo',
    role: 'Relationship Memory Agent',
    personality: 'Observant, warm, connects purchases to people and moments.',
    icon: 'HeartHandshake',
    accent: '280 65% 60%',
    status: 'idle',
    confidence: 87,
    progress: 0,
    recommendation:
      'You bought your partner AirPods Pro last year. They mentioned wanting noise-cancelling for flights — consider the AirPods Pro 2 as an upgrade gift.',
  },
  {
    id: 'inventory',
    name: 'Stock',
    role: 'Inventory Agent',
    personality: 'Precise, tracks everything you own and what you need.',
    icon: 'Boxes',
    accent: '173 80% 45%',
    status: 'working',
    currentTask: 'Cross-referencing your current inventory against the apartment checklist.',
    thinking:
      'You already own a vacuum, a microwave, and 4 sets of towels. Removing those from the shopping list saves $612.',
    confidence: 93,
    progress: 72,
    recommendation:
      'Removed 3 duplicate items from your apartment mission. You already own them. Saved $612.',
  },
];

export function getAgent(id: AgentId): Agent {
  return agents.find((a) => a.id === id)!;
}
