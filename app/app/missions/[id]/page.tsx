'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  X,
  Clock,
  DollarSign,
  Target,
  TrendingDown,
  Pause,
  Play,
  Sparkles,
  Bot,
  StickyNote,
} from 'lucide-react';
import { getMission, type MissionItem } from '@/lib/missions';
import { getAgent } from '@/lib/agents';
import { getProduct } from '@/lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function MissionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const mission = getMission(params.id as string);

  if (!mission) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-north-muted">Mission not found.</p>
        <Link href="/app/missions" className="mt-4 text-sm text-north-accent">
          Back to missions
        </Link>
      </div>
    );
  }

  const remaining = mission.budget - mission.spent;
  const eventIcon = {
    thinking: Sparkles,
    action: Target,
    alert: TrendingDown,
    approval: Check,
    purchase: DollarSign,
  };

  return (
    <div className="space-y-8">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-sm text-north-muted transition-colors hover:text-north-text"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{mission.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-3xl tracking-tightest">{mission.title}</h1>
                <StatusBadge status={mission.status} />
              </div>
              <p className="mt-1 text-sm text-north-muted">
                {mission.startDate} → {mission.endDate} · {mission.timeline}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-north-border px-3 py-2 text-xs font-medium text-north-muted transition-colors hover:text-north-text">
            <Pause className="h-3.5 w-3.5" />
            Pause
          </button>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-north-muted">
          {mission.summary}
        </p>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        <StatCard icon={Target} label="Progress" value={`${mission.progress}%`} sub={`${mission.items.length} items`} />
        <StatCard icon={DollarSign} label="Budget" value={`$${mission.spent.toLocaleString()}`} sub={`of $${mission.budget.toLocaleString()}`} />
        <StatCard icon={Clock} label="Remaining" value={`$${remaining.toLocaleString()}`} sub="left to spend" />
        <StatCard icon={Sparkles} label="Confidence" value={`${mission.confidence}%`} sub="AI certainty" />
      </motion.div>

      {/* Progress bar */}
      <div className="rounded-2xl border border-north-border bg-north-surface/40 p-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-north-text">Overall progress</span>
          <span className="text-north-muted">{mission.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-north-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${mission.progress}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-north-accent to-north-accent-2"
          />
        </div>
      </div>

      {/* Price prediction */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-north-accent/20 bg-north-accent/5 p-5"
      >
        <div className="flex items-start gap-3">
          <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-north-accent" />
          <div>
            <p className="text-sm font-semibold text-north-accent">Price prediction</p>
            <p className="mt-1 text-sm leading-relaxed text-north-text">{mission.pricePrediction}</p>
          </div>
        </div>
      </motion.div>

      {/* Recommended purchases */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-north-text">Recommended purchases</h2>
        <div className="space-y-3">
          {mission.items.map((item, i) => (
            <MissionItemCard key={item.id} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* Agent activity feed */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-north-text">Agent activity</h2>
        <div className="rounded-2xl border border-north-border bg-north-surface/40 p-5">
          <div className="space-y-1">
            {mission.events.map((event, i) => {
              const agent = getAgent(event.agentId);
              const Icon = eventIcon[event.type];
              return (
                <motion.div
                  key={event.id}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-north-surface-2/50"
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
                      <span className="text-xs text-north-muted">· {event.time}</span>
                    </div>
                    <p className="mt-0.5 text-sm leading-relaxed text-north-muted">{event.message}</p>
                  </div>
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-north-muted" strokeWidth={1.75} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active agents on this mission */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-north-text">Agents on this mission</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mission.agentIds.map((agentId) => {
            const agent = getAgent(agentId);
            return (
              <Link
                key={agentId}
                href="/app/agents"
                className="group rounded-2xl border border-north-border bg-north-surface/40 p-4 transition-all hover:border-north-accent/30"
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
                {agent.recommendation && (
                  <p className="mt-3 text-xs leading-relaxed text-north-muted line-clamp-3">
                    {agent.recommendation}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Notes */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-north-text">
          <StickyNote className="h-4 w-4 text-north-muted" />
          Mission notes
        </h2>
        <div className="rounded-2xl border border-north-border bg-north-surface/40 p-5">
          <ul className="space-y-2.5">
            {mission.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-north-text">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-north-accent" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function StatCard({
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
      <p className="mt-2 text-2xl font-semibold text-north-text">{value}</p>
      <p className="text-xs text-north-muted">{sub}</p>
    </div>
  );
}

function MissionItemCard({ item, delay }: { item: MissionItem; delay: number }) {
  const product = item.productId ? getProduct(item.productId) : undefined;
  const statusStyles: Record<string, string> = {
    pending: 'bg-north-warm/15 text-north-warm',
    approved: 'bg-north-accent/15 text-north-accent',
    ordered: 'bg-north-accent-2/15 text-north-accent-2',
    delivered: 'bg-north-accent/15 text-north-accent',
    rejected: 'bg-north-danger/15 text-north-danger',
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.3, delay }}
      className="rounded-2xl border border-north-border bg-north-surface/40 p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {product && (
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
            <img src={product.image} alt={item.name} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-north-text">{item.name}</h3>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-north-muted">{item.category} · {item.timing}</p>
            </div>
            <span className="text-lg font-semibold text-north-text">${item.price.toLocaleString()}</span>
          </div>

          {/* AI reasoning */}
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-north-accent/5 px-3 py-2.5">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-north-accent" />
            <div>
              <p className="text-xs leading-relaxed text-north-text">{item.reasoning}</p>
              <p className="mt-1.5 text-[10px] text-north-muted">{item.confidence}% confidence</p>
            </div>
          </div>

          {/* Actions */}
          {item.status === 'pending' && (
            <div className="mt-3 flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-north-accent px-3 py-1.5 text-xs font-semibold text-north-bg transition-all hover:bg-north-accent/90">
                <Check className="h-3.5 w-3.5" />
                Approve
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-north-border px-3 py-1.5 text-xs font-medium text-north-muted transition-colors hover:text-north-text">
                <X className="h-3.5 w-3.5" />
                Reject
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-north-border px-3 py-1.5 text-xs font-medium text-north-muted transition-colors hover:text-north-text">
                Modify
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
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
