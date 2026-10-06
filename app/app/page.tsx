'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingDown,
  ShieldAlert,
  Sparkles,
  Bot,
  Activity,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { missions } from '@/lib/missions';
import { agents } from '@/lib/agents';
import { products } from '@/lib/products';
import { learnedPreferences } from '@/lib/memory';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const activeMissions = missions.filter((m) => m.status === 'active' || m.status === 'planning');
  const activeAgents = agents.filter((a) => a.status === 'working' || a.status === 'thinking');
  const featuredProduct = products[0];

  return (
    <div className="space-y-10">
      {/* Greeting */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <p className="text-sm text-north-muted">Sunday, June 30</p>
        <h1 className="mt-1 font-display text-4xl tracking-tightest">
          Good morning, Sumedh.
        </h1>
        <p className="mt-2 text-north-muted">
          North has been monitoring 14 items across 5 missions. 3 things need your attention.
        </p>
      </motion.div>

      {/* Alerts / monitoring */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="grid gap-3 sm:grid-cols-3"
      >
        <AlertCard
          icon={TrendingDown}
          tone="accent"
          title="Price drop predicted"
          desc="Sony A7 IV likely to hit $1,899 on Prime Day (11 days). Deal Agent is holding."
        />
        <AlertCard
          icon={ShieldAlert}
          tone="warm"
          title="Warranty expiring"
          desc="Your iPhone 14 Pro warranty ends in 23 days. Trade-in window is opening."
        />
        <AlertCard
          icon={CheckCircle2}
          tone="accent"
          title="Regret prevented"
          desc="Inventory Agent removed 3 items you already own from your apartment mission. Saved $612."
        />
      </motion.div>

      {/* Active missions */}
      <section>
        <SectionHeader title="Active missions" href="/app/missions" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {activeMissions.slice(0, 4).map((m, i) => (
            <motion.div
              key={m.id}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={`/app/missions/${m.id}`}
                className="group block rounded-2xl border border-north-border bg-north-surface/40 p-5 transition-all hover:border-north-accent/30 hover:bg-north-surface/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{m.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-north-text">{m.title}</h3>
                      <p className="text-xs text-north-muted">
                        {m.timeline} · ${m.budget.toLocaleString()} · {m.confidence}% confidence
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={m.status} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-north-border">
                    <div
                      className="h-full rounded-full bg-north-accent transition-all"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-north-muted">{m.progress}%</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI recommendation + recently learned */}
      <section className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <SectionHeader title="AI recommendation" />
          <div className="mt-4 rounded-2xl border border-north-border bg-north-surface/40 p-5">
            <div className="flex gap-5">
              <div className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:block">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-north-muted">{featuredProduct.brand}</p>
                    <h3 className="font-semibold text-north-text">{featuredProduct.name}</h3>
                  </div>
                  <span className="text-lg font-semibold">${featuredProduct.price}</span>
                </div>
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-north-accent/5 px-3 py-2.5">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-north-accent" />
                  <p className="text-xs leading-relaxed text-north-text">{featuredProduct.aiReason}</p>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-north-muted">
                  <span className="flex items-center gap-1">
                    <TrendingDown className="h-3 w-3 text-north-accent" />
                    Price dropping
                  </span>
                  <span>{featuredProduct.confidence}% confidence</span>
                  <span>{featuredProduct.expectedLifespan} lifespan</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <SectionHeader title="Recently learned" href="/app/memory" />
          <div className="mt-4 space-y-2.5">
            {learnedPreferences.slice(0, 3).map((lp) => (
              <div
                key={lp.id}
                className="rounded-xl border border-north-border bg-north-surface/40 p-3.5"
              >
                <p className="text-xs leading-relaxed text-north-text">{lp.text}</p>
                <p className="mt-1.5 text-[10px] text-north-muted">{lp.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Agent activity */}
      <section>
        <SectionHeader title="Agent activity" href="/app/agents" />
        <div className="mt-4 rounded-2xl border border-north-border bg-north-surface/40 p-5">
          <div className="space-y-1">
            {activeAgents.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-north-surface-2/50"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `hsl(${agent.accent} / 0.12)` }}
                >
                  <span className="text-xs font-bold" style={{ color: `hsl(${agent.accent})` }}>
                    {agent.name[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-north-text">{agent.name}</p>
                    <span className="text-xs text-north-muted">{agent.role}</span>
                  </div>
                  <p className="truncate text-xs text-north-muted">{agent.currentTask}</p>
                </div>
                <div className="flex items-center gap-2">
                  {agent.status === 'working' && (
                    <div className="h-3 w-3 animate-pulse-slow rounded-full bg-north-accent" />
                  )}
                  {agent.status === 'thinking' && (
                    <div className="h-3 w-3 animate-pulse rounded-full bg-north-warm" />
                  )}
                  <span className="text-xs font-medium text-north-muted">{agent.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things AI is monitoring */}
      <section>
        <SectionHeader title="Things North is monitoring" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <MonitorCard icon={Activity} label="Price drops" value="14 items" sub="across 6 retailers" />
          <MonitorCard icon={Clock} label="Delivery windows" value="3 pending" sub="next: Jul 3" />
          <MonitorCard icon={ShieldAlert} label="Warranty deadlines" value="1 soon" sub="iPhone in 23 days" />
          <MonitorCard icon={AlertTriangle} label="Potential regrets" value="2 flagged" sub="ecosystem + coating" />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-north-text">{title}</h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-xs font-medium text-north-muted transition-colors hover:text-north-accent"
        >
          View all
          <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

function AlertCard({
  icon: Icon,
  tone,
  title,
  desc,
}: {
  icon: any;
  tone: 'accent' | 'warm';
  title: string;
  desc: string;
}) {
  const color = tone === 'accent' ? 'text-north-accent' : 'text-north-warm';
  const bg = tone === 'accent' ? 'bg-north-accent/10' : 'bg-north-warm/10';
  return (
    <div className="rounded-2xl border border-north-border bg-north-surface/40 p-4">
      <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}>
        <Icon className={`h-4 w-4 ${color}`} strokeWidth={1.75} />
      </div>
      <p className="text-sm font-semibold text-north-text">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-north-muted">{desc}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: 'bg-north-accent/15 text-north-accent',
    planning: 'bg-north-warm/15 text-north-warm',
    paused: 'bg-north-muted/15 text-north-muted',
    completed: 'bg-north-accent-2/15 text-north-accent-2',
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[status] || styles.active}`}>
      {status}
    </span>
  );
}

function MonitorCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: any;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-north-border bg-north-surface/40 p-4">
      <div className="flex items-center gap-2 text-north-muted">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 text-xl font-semibold text-north-text">{value}</p>
      <p className="text-xs text-north-muted">{sub}</p>
    </div>
  );
}
