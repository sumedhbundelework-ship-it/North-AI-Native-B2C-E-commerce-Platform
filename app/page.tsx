'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Filter,
  ShoppingCart,
  Brain,
  Target,
  Bot,
  Package,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Leaf,
  Quote,
} from 'lucide-react';
import { IntentDemo } from '@/components/landing/intent-demo';
import { agents } from '@/lib/agents';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-north-bg text-north-text">
      <Nav />
      <Hero />
      <BrokenEcommerce />
      <HowItWorks />
      <IntentEngine />
      <ShoppingMissions />
      <CommerceAgents />
      <OwnershipIntelligence />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-north-border/50 bg-north-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <NorthLogo />
          <span className="font-display text-xl tracking-tightest">North</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#how" className="text-sm text-north-muted hover:text-north-text transition-colors">
            How it works
          </Link>
          <Link href="#agents" className="text-sm text-north-muted hover:text-north-text transition-colors">
            AI Agents
          </Link>
          <Link href="#pricing" className="text-sm text-north-muted hover:text-north-text transition-colors">
            Pricing
          </Link>
        </nav>
        <Link
          href="/app"
          className="flex items-center gap-1.5 rounded-lg bg-north-text px-4 py-2 text-sm font-semibold text-north-bg transition-all hover:bg-north-text/90"
        >
          Open North
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-north-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 top-40 h-[300px] w-[300px] rounded-full bg-north-accent-2/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-north-border bg-north-surface/50 px-3 py-1.5 text-xs text-north-muted">
              <span className="flex h-1.5 w-1.5 rounded-full bg-north-accent animate-pulse-slow" />
              The Intent Engine
            </div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tightest text-balance sm:text-6xl lg:text-7xl">
              Shopping starts with intent.
              <br />
              <span className="text-north-accent">Not search.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-north-muted text-balance">
              North is not a marketplace. It is an AI that understands your life
              events, predicts what you will need, and coordinates purchases over
              time — so you never search again.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/onboarding"
                className="group flex items-center justify-center gap-2 rounded-xl bg-north-accent px-6 py-3.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
              >
                Start with a life event
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/app"
                className="flex items-center justify-center gap-2 rounded-xl border border-north-border bg-north-surface/50 px-6 py-3.5 text-sm font-semibold text-north-text transition-all hover:border-north-accent/30"
              >
                See it in action
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <IntentDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrokenEcommerce() {
  const oldWay = [
    { icon: Search, label: 'Search' },
    { icon: Filter, label: 'Filter' },
    { icon: ShoppingCart, label: 'Compare' },
    { icon: ShoppingCart, label: 'Reviews' },
    { icon: ShoppingCart, label: 'Cart' },
    { icon: ShoppingCart, label: 'Checkout' },
  ];
  return (
    <section className="border-y border-north-border/50 bg-north-surface/20 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-north-accent">
            Why ecommerce is broken
          </p>
          <h2 className="font-display text-3xl tracking-tightest text-balance sm:text-4xl">
            You were taught to search.
            <br />
            <span className="text-north-muted">But you don&apos;t need products. You need life to work.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {oldWay.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-lg border border-north-border bg-north-bg/40 px-3 py-2 text-sm text-north-muted line-through decoration-north-danger/60">
                    <Icon className="h-3.5 w-3.5" />
                    {step.label}
                  </div>
                  {i < oldWay.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-north-border" />
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-lg text-north-muted">
            Six steps. Dozens of tabs. Hours of research. And you still wonder if
            you made the right choice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Brain, title: 'Life Event', desc: 'You describe what is happening in your life. Not what you want to buy.' },
    { icon: Sparkles, title: 'Intent Understanding', desc: 'North parses the real need behind the event — context, constraints, timeline.' },
    { icon: Target, title: 'Need Prediction', desc: 'AI predicts what you will need, when, and in what order.' },
    { icon: Target, title: 'Mission Planning', desc: 'A coordinated plan with budget, timeline, and priorities.' },
    { icon: Bot, title: 'AI Agents', desc: 'Specialized agents research, compare, and negotiate on your behalf.' },
    { icon: ShieldCheck, title: 'Approvals', desc: 'You approve, reject, or modify. North never buys without you.' },
    { icon: ShoppingCart, title: 'Purchases', desc: 'Coordinated purchases at the right time, at the right price.' },
    { icon: Package, title: 'Ownership Intelligence', desc: 'The relationship continues — warranties, maintenance, upgrades, resale.' },
  ];
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How North works"
          title="From life event to ownership — without a single search"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-north-border bg-north-surface/40 p-5 transition-all hover:border-north-accent/30 hover:bg-north-surface/60"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-north-accent/10 text-north-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold text-north-text">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-north-muted">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IntentEngine() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="AI Intent Engine"
              title="It understands the why before the what"
              align="left"
            />
            <p className="mt-6 text-lg leading-relaxed text-north-muted">
              When you say &ldquo;I&apos;m moving to Dubai,&rdquo; North does not
              show you products. It understands: a relocation, a timeline, a
              climate change, a budget, a new life. It predicts 14 needs across 6
              categories before you think of a single one.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Parses context, constraints, and timeline from natural language',
                'Predicts needs you have not articulated yet',
                'Learns your preferences and gets smarter after every purchase',
                'Proactive — it surfaces what you need before you ask',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-north-accent/15">
                    <Sparkles className="h-3 w-3 text-north-accent" />
                  </div>
                  <span className="text-sm text-north-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-north-accent/15 to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-north-border bg-north-surface/60 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-north-accent/10">
                  <Brain className="h-4 w-4 text-north-accent" />
                </div>
                <span className="text-sm font-semibold">Intent parsed</span>
              </div>
              <div className="space-y-3">
                {[
                  { k: 'Event', v: 'Relocation' },
                  { k: 'Destination', v: 'Dubai, UAE' },
                  { k: 'Timeline', v: '6 weeks' },
                  { k: 'Climate shift', v: 'Temperate → Arid' },
                  { k: 'Predicted needs', v: '14 items, 6 categories' },
                  { k: 'Budget range', v: '$7k–$9k' },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between border-b border-north-border/50 pb-2.5">
                    <span className="text-xs text-north-muted">{row.k}</span>
                    <span className="text-sm font-medium text-north-text">{row.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-north-accent/5 px-3 py-2.5">
                <p className="text-xs text-north-accent">
                  North predicted 3 needs you had not mentioned: climate-appropriate bedding, HEPA filtration, and a 220V-compatible kettle.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShoppingMissions() {
  const missions = [
    { emoji: '🏙️', title: 'Relocating to Dubai', items: '14 items', budget: '$8,500', progress: 38 },
    { emoji: '🏠', title: 'First Apartment', items: '8 items', budget: '$4,200', progress: 28 },
    { emoji: '🎬', title: 'YouTube Channel', items: '6 items', budget: '$5,000', progress: 12 },
    { emoji: '🏃', title: 'Marathon Training', items: '4 items', budget: '$900', progress: 22 },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="AI Shopping Missions"
          title="Not a cart. A coordinated plan."
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-north-muted">
          Each mission has a goal, a timeline, a budget, and a team of AI agents
          working in parallel. You see the reasoning. You stay in control.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {missions.map((m, i) => (
            <motion.div
              key={m.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-north-border bg-north-surface/40 p-5 transition-all hover:border-north-accent/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-north-text">{m.title}</h3>
                    <p className="text-xs text-north-muted">{m.items} · {m.budget}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-north-accent">{m.progress}%</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-north-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full bg-north-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommerceAgents() {
  const featured = agents.slice(0, 6);
  return (
    <section id="agents" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="AI Commerce Agents"
          title="A team of specialists, not a single chatbot"
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-north-muted">
          Each agent has a personality, a specialty, and a point of view. They
          debate, they disagree, and they reach a recommendation you can trust.
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-north-border bg-north-surface/40 p-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `hsl(${agent.accent} / 0.12)` }}
                >
                  <span className="text-sm font-bold" style={{ color: `hsl(${agent.accent})` }}>
                    {agent.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-north-text">{agent.name}</p>
                  <p className="text-xs text-north-muted">{agent.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-north-muted">{agent.personality}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnershipIntelligence() {
  const features = [
    { icon: ShieldCheck, title: 'Warranty tracking', desc: 'Never miss a coverage window or a claim.' },
    { icon: TrendingDown, title: 'Trade-in timing', desc: 'Sell at peak value before the next release.' },
    { icon: Package, title: 'Maintenance reminders', desc: 'Know when to service, replace, or upgrade.' },
    { icon: Leaf, title: 'Resale & sustainability', desc: 'Pass it on, trade it up, or recycle responsibly.' },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-north-accent-2/15 to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-north-border bg-north-surface/60 p-6 backdrop-blur-xl">
              <p className="mb-4 text-sm font-semibold">Your inventory</p>
              <div className="space-y-3">
                {[
                  { name: 'iPhone 14 Pro', status: 'Warranty expiring in 23 days', value: '$620', alert: true },
                  { name: 'MacBook Air M1', status: 'Upgrade suggested for video editing', value: '$480', alert: false },
                  { name: 'AirPods Pro', status: 'Battery at 71%', value: '$90', alert: false },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-lg border border-north-border/60 bg-north-bg/40 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-north-text">{item.name}</p>
                      <p className={`text-xs ${item.alert ? 'text-north-warm' : 'text-north-muted'}`}>{item.status}</p>
                    </div>
                    <span className="text-sm font-medium text-north-muted">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <SectionHeader
              eyebrow="Ownership Intelligence"
              title="The relationship does not end at checkout"
              align="left"
            />
            <p className="mt-6 text-lg leading-relaxed text-north-muted">
              North remembers everything you own. It tracks warranties, predicts
              replacements, times your trade-ins, and reminds you to maintain what
              you have. Ownership becomes intelligent.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-north-accent/10 text-north-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-north-text">{f.title}</p>
                      <p className="text-xs text-north-muted">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { quote: 'North planned my entire Dubai move in 6 minutes. It caught three things I would have forgotten.', author: 'Priya M.', role: 'Product Manager, relocated to Dubai' },
    { quote: 'I never thought about ownership cost before. Now I buy fewer things and keep them longer.', author: 'James K.', role: 'First-time apartment owner' },
    { quote: 'The agents debate like a team of obsessive friends. I trust the reasoning, not just the result.', author: 'Sara L.', role: 'Photographer, started a business' },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader eyebrow="Testimonials" title="People who stopped searching" />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-north-border bg-north-surface/40 p-6"
            >
              <Quote className="h-6 w-6 text-north-accent/40" />
              <p className="mt-4 text-sm leading-relaxed text-north-text">{q.quote}</p>
              <div className="mt-5 border-t border-north-border/50 pt-4">
                <p className="text-sm font-semibold text-north-text">{q.author}</p>
                <p className="text-xs text-north-muted">{q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      desc: 'For getting started',
      features: ['1 active mission', '3 AI agents', 'Basic ownership tracking', 'Community trust scores'],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'North+',
      price: '$12',
      period: '/mo',
      desc: 'For your whole life',
      features: ['Unlimited missions', 'All 12 AI agents', 'Full ownership intelligence', 'Price predictions & alerts', 'Commerce Memory', 'Priority agent activity'],
      cta: 'Start 14-day trial',
      highlight: true,
    },
    {
      name: 'Family',
      price: '$24',
      period: '/mo',
      desc: 'For households',
      features: ['Everything in North+', 'Up to 4 members', 'Shared ownership', 'Gift & relationship memory', 'Household budget coordination'],
      cta: 'Start trial',
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader eyebrow="Pricing" title="Less than one impulse buy a month" />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 ${
                tier.highlight
                  ? 'border-north-accent/40 bg-north-surface/60'
                  : 'border-north-border bg-north-surface/30'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-north-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-north-bg">
                  Most popular
                </div>
              )}
              <p className="text-sm font-semibold text-north-text">{tier.name}</p>
              <p className="mt-1 text-xs text-north-muted">{tier.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl tracking-tightest">{tier.price}</span>
                {tier.period && <span className="text-sm text-north-muted">{tier.period}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-north-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-north-accent" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/onboarding"
                className={`mt-6 flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                  tier.highlight
                    ? 'bg-north-accent text-north-bg hover:bg-north-accent/90'
                    : 'border border-north-border text-north-text hover:border-north-accent/30'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-north-border bg-north-surface/40 p-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-north-accent/10 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="font-display text-4xl tracking-tightest text-balance sm:text-5xl">
              Stop searching.
              <br />
              Start living.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-north-muted">
              Tell North what is happening in your life. It handles the rest.
            </p>
            <Link
              href="/onboarding"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-north-accent px-6 py-3.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
            >
              Start with a life event
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-north-border/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <NorthLogo />
          <span className="font-display text-lg tracking-tightest">North</span>
          <span className="text-xs text-north-muted">— The Intent Engine</span>
        </div>
        <p className="text-xs text-north-muted">
          Shopping starts with intent. Not search.
        </p>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  align?: 'center' | 'left';
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-north-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl tracking-tightest text-balance sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}

function NorthLogo() {
  return (
    <div className="relative flex h-7 w-7 items-center justify-center">
      <svg viewBox="0 0 32 32" className="h-7 w-7">
        <circle cx="16" cy="16" r="14" fill="none" stroke="hsl(142 70% 50%)" strokeWidth="1.5" opacity="0.3" />
        <path d="M16 4 L16 28 M16 16 L24 8 M16 16 L8 8" stroke="hsl(142 70% 50%)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="16" r="2.5" fill="hsl(142 70% 50%)" />
      </svg>
    </div>
  );
}
