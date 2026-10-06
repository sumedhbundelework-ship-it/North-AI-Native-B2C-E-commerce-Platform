# North

**An AI-native, autonomous B2C e-commerce platform.**

North is a 0 to 1 take on online shopping. Instead of browsing and comparing, you tell North what you need (a "mission") and a team of AI agents plans, compares and recommends the purchase for you, using reasoning and what they remember about you.

**Live demo:** https://north.bolt.host/

**Impact goal:** reduce time to purchase by 40%.

## The problem

Shopping online still means dozens of tabs, reviews and price checks for every decision. The work of deciding sits entirely with the customer.

## How it works

1. **Onboarding**: North learns your preferences, budget and constraints.
2. **Missions**: you describe a goal, for example setting up a new home. North breaks it into items with timing and reasoning.
3. **Agents**: 12 specialist agents work the mission together.
4. **Memory**: North remembers preferences and past decisions to personalize the next mission.
5. **Ownership**: tracks what you own, warranties and what needs replacing.

### The 12 agents

Budget · Quality · Deal Hunter · Review Analyst · Compatibility · Delivery Optimizer · Warranty · Sustainability · Fraud Detector · Gift Specialist · Relationship Memory · Inventory

## How I built it

I defined the product vision, AI strategy and multi-agent architecture, then built it with Bolt AI and LLMs.

**Stack:** Next.js 13 · TypeScript · Tailwind CSS · shadcn/ui · Supabase · Netlify

**Status:** working prototype. Agent reasoning and product data are simulated to demo the full journey.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---
Built by [Sumedh Bundele](https://github.com/sumedhbundelework-ship-it), Senior Product Manager.
