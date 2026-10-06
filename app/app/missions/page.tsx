'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { missions } from '@/lib/missions';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function MissionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-tightest">Missions</h1>
          <p className="mt-1 text-sm text-north-muted">
            {missions.length} missions · {missions.filter((m) => m.status === 'active').length} active
          </p>
        </div>
        <Link
          href="/app/missions/new"
          className="flex items-center gap-2 rounded-lg bg-north-accent px-4 py-2.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
        >
          <Plus className="h-4 w-4" />
          New Mission
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {missions.map((m, i) => (
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
                  <span className="text-3xl">{m.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-north-text">{m.title}</h3>
                    <p className="text-xs text-north-muted">
                      {m.timeline} · ${m.budget.toLocaleString()} budget
                    </p>
                  </div>
                </div>
                <StatusBadge status={m.status} />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-north-muted line-clamp-2">
                {m.summary}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-north-border">
                  <div
                    className="h-full rounded-full bg-north-accent transition-all"
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-north-muted">{m.progress}%</span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-north-border/50 pt-3">
                <div className="flex items-center gap-4 text-xs text-north-muted">
                  <span>${m.spent.toLocaleString()} spent</span>
                  <span>{m.items.length} items</span>
                  <span>{m.confidence}% confidence</span>
                </div>
                <ArrowRight className="h-4 w-4 text-north-muted transition-all group-hover:translate-x-0.5 group-hover:text-north-accent" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
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
